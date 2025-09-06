import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../assets/css/Sections.css';

const Sections = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, testName } = useParams();
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    if (location.state && location.state.updatedTest) {
      setTestData(location.state.updatedTest);
    } else {
      // Fallback for refresh: Try to get data from sessionStorage if it was stored
      const fileName = sessionStorage.getItem('current_exam_fileName');
      if (fileName) {
        import(`../data/${fileName}.js`)
          .then(module => {
            const loadedTest = module.default;
            // Restore completed section statuses from session
            const completedSections = JSON.parse(sessionStorage.getItem("completed_sections") || "{}");
            loadedTest.sections.forEach((s) => {
              if (completedSections[s.name]) s.status = "Completed";
              else s.status = "Not Yet Started";
            });
            setTestData(loadedTest);
          })
          .catch(err => {
            console.error("Could not load test data on fallback:", err);
            navigate('/');
          });
      } else {
        console.error("No test data found in navigation state or session.");
      }
    }
  }, [location.state, navigate]);

  if (!testData || !testData.sections) {
    return <p>Loading test data...</p>;
  }

  const nextSectionIndex = testData.sections.findIndex(
    (s) => s.status === 'Not Yet Started'
  );

  const handleContinueClick = () => {
    if (nextSectionIndex !== -1) {
      const fileName = testData.fileName || sessionStorage.getItem('current_exam_fileName');
      navigate(`/assessments/${category}/${testName}/exam`, {
        state: {
          fileName,
          currentSectionIndex: nextSectionIndex
        },
      });
    }
  };

  const { testName: currentTestName, sections } = testData;

  return (
    <div className="sections-page">
      <div className="sections-header-badge">
        <h1 className="sections-title">{currentTestName}</h1>
      </div>

      <div className="sections-container">
        <div className="sections-table-container">
          <table className="sections-table">
            <thead>
              <tr>
                <th>#</th>
                <th>MODULE</th>
                <th>QUESTIONS</th>
                <th>DURATION</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section, index) => (
                <tr
                  key={index}
                  className={nextSectionIndex !== -1 && index === nextSectionIndex ? 'next-section' : ''}
                >
                  <td>{index + 1}</td>
                  <td>{section.name}</td>
                  <td>{section.questions.length}</td>
                  <td>{section.time} Min</td>
                  <td
                    className={`status-${section.status.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    {section.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="sections-footer">
          <button
            className="continue-btn"
            onClick={handleContinueClick}
            disabled={nextSectionIndex === -1}
          >
            {nextSectionIndex === -1 ? "Test Completed" : "Continue to Next Section"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sections;
