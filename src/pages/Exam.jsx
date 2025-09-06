// File: src/pages/Exam.jsx
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ExamHeader from "../components/ExamHeader";
import QuestionArea from "../components/QuestionArea";
import ExamFooter from "../components/ExamFooter";
import QuestionNavigator from "../components/QuestionNavigator";
import Info from "../components/Info";
import Violation from "../components/Violation";
import "../assets/css/NewExam.css";
import openIcon from "../assets/images/Open.png";
import closeIcon from "../assets/images/Close.png";
import { evaluateEssay } from "../utils/helpers";

const MAX_TAB_SWITCHES = 5;
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// --- Helpers ---
const isObject = (v) => typeof v === "object" && v !== null;
const deepEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (!isObject(a) || !isObject(b)) return false;
  const ak = Object.keys(a).sort();
  const bk = Object.keys(b).sort();
  if (ak.length !== bk.length) return false;
  for (let i = 0; i < ak.length; i++) {
    const k = ak[i];
    if (k !== bk[i]) return false;
    if (!deepEqual(a[k], b[k])) return false;
  }
  return true;
};

const normalizeTest = (loadedTest) => {
  const t = JSON.parse(JSON.stringify(loadedTest));
  if (!t.sections) t.sections = [];

  t.sections.forEach((section) => {
    section.questions = section.questions || [];
    section.questions.forEach((q) => {
      q.section = section.name;
      const originalOptions = q.options || [];
      const normalizedOptions = originalOptions.map((opt, i) => {
        if (typeof opt === "string") {
          return { id: letters[i] || String(i), text: opt, image: null };
        }
        if (isObject(opt)) {
          const type = opt.type || null;
          const text = opt.text ?? opt.value ?? opt.label ?? null;
          const image = opt.image ?? opt.src ?? null;
          return { id: letters[i] || String(i), text, image, type };
        }
        return { id: letters[i] || String(i), text: String(opt), image: null };
      });

      let correctIndex =
        typeof q.correctAnswerIndex === "number" ? q.correctAnswerIndex : null;

      if (correctIndex == null && q.correctAnswer !== undefined) {
        if (typeof q.correctAnswer === "string") {
          const findIdx = normalizedOptions.findIndex(
            (o) => o.text === q.correctAnswer
          );
          if (findIdx !== -1) correctIndex = findIdx;
        } else if (isObject(q.correctAnswer)) {
          const matchIdx = originalOptions.findIndex((opt) =>
            deepEqual(opt, q.correctAnswer)
          );
          if (matchIdx !== -1) correctIndex = matchIdx;
          else {
            const img =
              q.correctAnswer.image ??
              q.correctAnswer.value ??
              q.correctAnswer.src ??
              null;
            if (img) {
              const idxByImg = normalizedOptions.findIndex(
                (o) => o.image === img
              );
              if (idxByImg !== -1) correctIndex = idxByImg;
            }
            const txt = q.correctAnswer.text ?? q.correctAnswer.value ?? null;
            if (correctIndex == null && txt) {
              const idxByTxt = normalizedOptions.findIndex(
                (o) => o.text === txt
              );
              if (idxByTxt !== -1) correctIndex = idxByTxt;
            }
          }
        }
      }

      if (correctIndex == null && q.correctAnswer !== undefined) {
        const matchIdx = originalOptions.findIndex(
          (opt) => opt === q.correctAnswer
        );
        if (matchIdx !== -1) correctIndex = matchIdx;
      }

      if (correctIndex == null) correctIndex = -1;

      q.options = normalizedOptions;
      q.correctAnswerIndex = correctIndex;
      q.userAnswer = q.userAnswer ?? null;
      q.markedForReview = q.markedForReview ?? false;
    });
  });

  return t;
};

const sectionKey = (fileName, sectionIndex) =>
  `exam_state_${fileName}_section_${sectionIndex}`;

const Exam = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, testName: urlTestName } = useParams();

  const [test, setTest] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [showViolationPopup, setShowViolationPopup] = useState(false);
  const [autoSubmitTriggered, setAutoSubmitTriggered] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isConfirmingFinalSubmit, setIsConfirmingFinalSubmit] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const tabSwitchCountRef = useRef(0);
  const hasTimerSubmitRef = useRef(false);

  useEffect(() => {
    // ✅ Read from localStorage
    let testDetails = JSON.parse(localStorage.getItem('current_test_details'));

    if (!testDetails && location.state) {
        testDetails = location.state?.updatedTest || location.state;
        // ✅ Write to localStorage
        localStorage.setItem('current_test_details', JSON.stringify(testDetails));
    }

    if (!testDetails || !testDetails.fileName) {
        alert("Test data is lost or corrupted. Returning to homepage.");
        navigate("/");
        return;
    }

    // ✅ Write to localStorage
    localStorage.setItem("current_exam_fileName", testDetails.fileName);

    import(`../data/${testDetails.fileName}.js`)
        .then((module) => {
            const questionsData = module.default;
            const mergedTest = { ...testDetails };

            if (!mergedTest.sections || !questionsData.sections) {
                throw new Error("Section data is missing in test details or question file.");
            }

            mergedTest.sections.forEach(section => {
                const matchingSection = questionsData.sections.find(s => s.name === section.name);
                section.questions = matchingSection ? matchingSection.questions : [];
            });

            const normalized = normalizeTest(mergedTest);
            
            // ✅ Read from localStorage
            const completedSections = JSON.parse(localStorage.getItem("completed_sections") || "{}");
            normalized.sections.forEach((s) => {
                if (completedSections[s.name]) {
                    s.status = "Completed";
                } else if (!s.status) {
                    s.status = "Not Yet Started";
                }
            });
            
            let initialSectionIndex = normalized.sections.findIndex(
                (sec) => sec.status !== "Completed"
            );

            if (initialSectionIndex === -1) {
                initialSectionIndex = 0;
            }

            // ✅ Read from localStorage
            const savedStateRaw = localStorage.getItem(sectionKey(normalized.fileName, initialSectionIndex));
            let savedState = null;
            if (savedStateRaw) {
                try {
                    savedState = JSON.parse(savedStateRaw);
                } catch { savedState = null; }
            }

            const section = normalized.sections[initialSectionIndex];
            const initialQuestions = section?.questions || [];
            const defaultTime = parseInt(section?.time) * 60 || 0;

            setTest(normalized);
            setCurrentSectionIndex(initialSectionIndex);
            setTimeLeft(savedState?.timeLeft ?? defaultTime);
            setAnswers(
                Array.isArray(savedState?.answers)
                    ? savedState.answers
                    : Array(initialQuestions.length).fill(null)
            );
            setCurrentIndex(savedState?.currentIndex ?? 0);
        })
        .catch((err) => {
            console.error("Failed to load test data:", err);
            alert("Failed to load test data. Check console for details.");
            navigate("/");
        });
  }, [location.state, navigate]);

  useEffect(() => {
    if (!test) return;
    // ✅ Read from localStorage
    const fileName = localStorage.getItem("current_exam_fileName");
    if (!fileName) return;

    // ✅ Write to localStorage
    localStorage.setItem(
      sectionKey(fileName, currentSectionIndex),
      JSON.stringify({ timeLeft, answers, currentIndex })
    );
    localStorage.setItem(
      `exam_last_section_index_${fileName}`,
      String(currentSectionIndex)
    );
  }, [timeLeft, answers, currentIndex, currentSectionIndex, test]);
  
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const handleConfirmSubmit = useCallback(() => {
    if (!test) return;

    let totalTimeSpent = 0;
    // ✅ Read from localStorage
    const sectionMetrics = JSON.parse(
      localStorage.getItem("section_metrics") || "{}"
    );
    Object.values(sectionMetrics).forEach(
      (metric) => (totalTimeSpent += metric.timeSpent || 0)
    );

    const currentSection = test.sections[currentSectionIndex];
    const currentSectionTotalTime = (parseInt(currentSection.time) * 60) || 0;
    const currentSectionTimeSpent = currentSectionTotalTime - timeLeft;
    totalTimeSpent += currentSectionTimeSpent;

    // ✅ Read from localStorage
    const fileName = localStorage.getItem("current_exam_fileName");
    const allAnswers = JSON.parse(
      localStorage.getItem("exam_all_answers") || "{}"
    );
    const currentSectionName = test.sections[currentSectionIndex].name;
    allAnswers[currentSectionName] = answers;

    let totalMarks = 0;
    let obtainedMarks = 0;

    test.sections.forEach((section) => {
      const sectionAnswers = allAnswers[section.name] || [];
      totalMarks += section.marks || 0;

      section.questions?.forEach((q, i) => {
        const userAns = sectionAnswers[i];
        if (q.type === "essay") {
          if (typeof userAns === "string" && userAns.trim() !== "") {
            obtainedMarks += evaluateEssay(userAns);
          }
        } else {
          if (typeof userAns === "number" && userAns === q.correctAnswerIndex) {
            obtainedMarks += section.PositiveMark || 1;
          }
        }
      });
    });

    const percentage =
      totalMarks === 0 ? 0 : (obtainedMarks / totalMarks) * 100;
    const qualifying = parseFloat(test.qualifyingPercentage) || 60;

    const resultData = {
      test,
      answers: allAnswers,
      obtainedMarks,
      totalMarks,
      percentage,
      isQualified: percentage >= qualifying,
      isAutoSubmitted: autoSubmitTriggered,
      violations: tabSwitchCountRef.current,
      timeSpentSec: totalTimeSpent,
    };
    
    // ✅ REMOVE all data from localStorage on final submission
    if (fileName) {
      test.sections.forEach((_, idx) =>
        localStorage.removeItem(sectionKey(fileName, idx))
      );
    }
    localStorage.removeItem('current_test_details');
    localStorage.removeItem("exam_all_answers");
    localStorage.removeItem("completed_sections");
    localStorage.removeItem("section_metrics");
    localStorage.removeItem(`exam_last_section_index_${fileName}`);
    localStorage.removeItem("current_exam_fileName");
    localStorage.removeItem("hasEnteredFullscreen");

    navigate(`/assessments/${category}/${urlTestName}/result`, {
      state: resultData,
      replace: true,
    });
  }, [
    test,
    currentSectionIndex,
    timeLeft,
    answers,
    navigate,
    category,
    urlTestName,
    autoSubmitTriggered,
  ]);
  
  const handleSectionSubmit = useCallback(() => {
    if (!test) return;
    // ✅ Read from localStorage
    const fileName = localStorage.getItem("current_exam_fileName");
    const section = test.sections[currentSectionIndex];
    if (!section) return;

    const sectionTotalTime = parseInt(section.time) * 60 || 0;
    const timeSpent = sectionTotalTime - timeLeft;
    const currentSectionName = section.name;
    const attempted = answers.filter((a) => a !== null && a !== "").length;

    let marksObtained = 0;
    let correctCount = 0;

    section.questions.forEach((q, i) => {
      const userAns = answers[i];
      if (q.type === "essay") {
        if (typeof userAns === "string" && userAns.trim() !== "") {
          marksObtained += evaluateEssay(userAns);
          correctCount += 1;
        }
      } else {
        if (userAns != null && userAns === q.correctAnswerIndex) {
          correctCount += 1;
          marksObtained += section.PositiveMark || 1;
        }
      }
    });

    const wrongCount = attempted - correctCount;

    // ✅ Read/Write to localStorage
    const sectionMetrics = JSON.parse(
      localStorage.getItem("section_metrics") || "{}"
    );
    sectionMetrics[currentSectionName] = {
      correct: correctCount,
      marks: marksObtained,
      attempted,
      wrong: wrongCount,
      total: section.marks || 0,
      timeSpent,
    };
    localStorage.setItem("section_metrics", JSON.stringify(sectionMetrics));

    // ✅ Read/Write to localStorage
    const allAnswers = JSON.parse(
      localStorage.getItem("exam_all_answers") || "{}"
    );
    allAnswers[currentSectionName] = answers;
    localStorage.setItem("exam_all_answers", JSON.stringify(allAnswers));

    // ✅ Read/Write to localStorage
    const completedSections = JSON.parse(
      localStorage.getItem("completed_sections") || "{}"
    );
    completedSections[currentSectionName] = true;
    localStorage.setItem("completed_sections", JSON.stringify(completedSections));

    // ✅ Remove from localStorage
    if (fileName)
      localStorage.removeItem(sectionKey(fileName, currentSectionIndex));

    const updatedTest = { ...test };
    updatedTest.sections = test.sections.map((s, idx) =>
      idx === currentSectionIndex ? { ...s, status: "Completed" } : s
    );

    navigate(`/assessments/${category}/${urlTestName}/sections`, {
      state: { updatedTest },
      replace: true,
    });
  }, [test, currentSectionIndex, timeLeft, answers, navigate, category, urlTestName]);

  useEffect(() => {
    if (timeLeft === 0 && test && !hasTimerSubmitRef.current) {
      hasTimerSubmitRef.current = true;
      if (test.sections.length > 1 && currentSectionIndex < test.sections.length - 1) {
        handleSectionSubmit();
      } else {
        setAutoSubmitTriggered(true);
      }
    }
  }, [timeLeft, test, currentSectionIndex, handleSectionSubmit]);

  useEffect(() => {
    if (autoSubmitTriggered) {
      handleConfirmSubmit();
    }
  }, [autoSubmitTriggered, handleConfirmSubmit]);

  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        tabSwitchCountRef.current += 1;
        if (tabSwitchCountRef.current >= MAX_TAB_SWITCHES) {
          if (!showSubmitConfirm) {
            setShowViolationPopup(false);
            setAutoSubmitTriggered(true);
          }
        } else {
          setTabSwitchCount(tabSwitchCountRef.current);
          setShowViolationPopup(true);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [showSubmitConfirm]);
  
  // ✅ REMOVED the automatic cleanup useEffect block.

  // This effect prevents the user from navigating back during the exam.
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);

    const handleBackButton = (event) => {
      window.history.pushState(null, "", window.location.href);
      alert("You cannot go back during an active exam. Please submit the exam to proceed.");
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const handleOptionChange = (index, optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleTextChange = (index, text) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = text;
    setAnswers(updatedAnswers);
  };

  const handleClearResponse = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = null;
    setAnswers(updatedAnswers);
  };

  const handleCancelSubmit = () => setShowSubmitConfirm(false);
  const goToQuestion = (index) => setCurrentIndex(index);
  const handleViolationAcknowledge = () => setShowViolationPopup(false);
  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleMainSubmitClick = () => {
    setIsConfirmingFinalSubmit(true);
    setShowSubmitConfirm(true);
  };

  const handleSectionConfirmClick = () => {
    setIsConfirmingFinalSubmit(false);
    setShowSubmitConfirm(true);
  };

  const handleConfirmAction = () => {
    setShowSubmitConfirm(false);
    if (isConfirmingFinalSubmit || currentSectionIndex === test.sections.length - 1) {
      handleConfirmSubmit();
    } else {
      handleSectionSubmit();
    }
  };

  if (!test) return <div>Loading test...</div>;

  const validSectionIndex =
    currentSectionIndex >= 0 && currentSectionIndex < test.sections.length ? currentSectionIndex : 0;
  const currentSectionQuestions = test.sections[validSectionIndex].questions || [];
  const attemptedQuestions = answers.filter((a) => a !== null && a !== "").length;

  return (
    <div className={`exam-layout ${navOpen ? "nav-open" : ""}`}>
      {navOpen && <div className="nav-backdrop" onClick={() => setNavOpen(false)}></div>}
      <div className="exam-main">
        <ExamHeader
          liveTime={formatTime(timeLeft)}
          fullscreenBtnText={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          onToggleFullScreen={handleToggleFullScreen}
          onSubmit={handleMainSubmitClick}
          sectionName={test.sections[validSectionIndex].name}
          totalSections={test.sections.length}
        />
        <div className="exam-content-container">
          <QuestionArea
            test={test}
            questionsList={currentSectionQuestions}
            currentIndex={currentIndex}
            answers={answers}
            handleOptionChange={handleOptionChange}
            handleTextChange={handleTextChange}
          />
        </div>
        <ExamFooter
          currentIndex={currentIndex}
          totalQuestions={currentSectionQuestions.length}
          onClear={handleClearResponse}
          onNext={() => setCurrentIndex((prev) => (prev < currentSectionQuestions.length - 1 ? prev + 1 : prev))}
          onSubmit={handleSectionConfirmClick}
          isLast={currentIndex === currentSectionQuestions.length - 1}
          isNavigatorOpen={navOpen}
        />
      </div>
      {navOpen && (
        <div className="exam-nav">
          <QuestionNavigator
            testName={test.testName}
            sectionName={test.sections[validSectionIndex].name}
            totalQuestions={currentSectionQuestions.length}
            currentIndex={currentIndex}
            goToQuestion={goToQuestion}
            answers={answers}
            onSubmitSection={handleSectionConfirmClick}
          />
        </div>
      )}
      <span className="open-navigator-btn" onClick={() => setNavOpen(!navOpen)}>
        <img src={navOpen ? closeIcon : openIcon} alt={navOpen ? "Close" : "Open"} className="nav-toggle-icon" />
      </span>
      {showSubmitConfirm && (
        <Info
          moduleName={test.sections[validSectionIndex].name}
          totalQuestions={currentSectionQuestions.length}
          attemptedQuestions={attemptedQuestions}
          onSubmit={handleConfirmAction}
          onCancel={handleCancelSubmit}
          isLastSection={validSectionIndex === test.sections.length - 1}
          isFinalSubmit={isConfirmingFinalSubmit}
        />
      )}
      {showViolationPopup && tabSwitchCount < MAX_TAB_SWITCHES && (
        <Violation
          countLeft={MAX_TAB_SWITCHES - tabSwitchCount}
          onAcknowledge={handleViolationAcknowledge}
        />
      )}
    </div>
  );
};

export default Exam;