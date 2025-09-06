import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

// Pages
import Instructions from './pages/Instructions.jsx'; 
import Home from './pages/Home.jsx';
import Assessments from './pages/Assessment.jsx';
import Courses from './pages/Courses.jsx';
import Practice from './pages/Practice.jsx';
import Blogs from './pages/Blogs.jsx';
import Registration from './pages/Registration.jsx';
import Login from './pages/Login.jsx';
import LogicalReasoning from './pages/LogicalReasoning.jsx';
import AssessmentDetails from './pages/AssessmentDetails.jsx';
import Exam from './pages/Exam.jsx';
import Result from './pages/Result.jsx';
import QuantitativeAptitude from './pages/QuantitativeAptitude.jsx';
import Python from './pages/Python.jsx';
import JavaProgramming from './pages/Java.jsx';
import OperatingSystem from './pages/OperatingSystem.jsx';
import DBMSAssessments from './pages/DBMS.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
import TermsAndConditions from './pages/TermsAndconditions.jsx';
import AboutUs from './pages/Aboutus.jsx';

// New assessments
import InfosysAssessment from './pages/Infosys.jsx'; 
import TCSAssessment from './pages/TCS.jsx';
import Sections from './components/Sections.jsx';

// New practice pages
import BoatsAndStreams from './pages/Practice/Boats-and-streams.jsx';
import PracticeExam from './pages/PracticeExam.jsx';
import PracticeResult from './pages/PracticeResult.jsx';

// New practice pages for different topics
import TimeAndWork from './pages/Practice/Time-and-work.jsx';
import DataInterpretation from './pages/Practice/Data-interpretation.jsx';
import Percentages from './pages/Practice/Percentages.jsx';
import LogicalPuzzles from './pages/Practice/Logical-puzzles.jsx';
import SeriesCompletion from './pages/Practice/Series-completion.jsx';
import BloodRelations from './pages/Practice/Blood-Relations.jsx';
import ProfitLoss from './pages/Practice/Profit-loss.jsx';
import SimpleCompoundInterest from './pages/Practice/Interest.jsx';
import Permutations from './pages/Practice/Permutations.jsx';
import Probability from './pages/Practice/Probability.jsx';
import PassageComprehension from './pages/Practice/Passage-comprehension.jsx';
import SentenceCorrection from './pages/Practice/Sentence-correction.jsx';
import SynonymsAntonyms from './pages/Practice/Synonyms-antonyms.jsx';
import FillBlanks from './pages/Practice/Fill-blanks.jsx';
import IdiomsAndPhrases from './pages/Practice/Idioms-phrases.jsx';
import ErrorSpotting from './pages/Practice/Error-spotting.jsx';
import ParaJumbles from './pages/Practice/Para-jumbles.jsx';
import VocabularyTest from './pages/Practice/Vocabulary.jsx';
import VoiceChange from './pages/Practice/Voice-change.jsx';
import SpeechChange from './pages/Practice/Speech-change.jsx';
import CProgramming from './pages/Practice/C-programming.jsx';
import DataStructures from './pages/Practice/Data-structures.jsx';
import PythonPractice from './pages/Practice/Python.jsx';
import JavaPractice from './pages/Practice/Java.jsx';
import JavascriptPractice from './pages/Practice/Javascript.jsx';
import AlgorithmComplexity from './pages/Practice/Complexity.jsx';
import SortingAlgorithms from './pages/Practice/Sorting.jsx';
import SearchingAlgorithms from './pages/Practice/Searching.jsx';
import ReactJsMCQs from './pages/Practice/Reactjs.jsx';
import NodeJsConcepts from './pages/Practice/Nodejs.jsx';
import SQLQueries from './pages/Practice/SQL-queries.jsx';
import GitVersionControl from './pages/Practice/Git.jsx';
import DBMSConcepts from './pages/Practice/DBMS.jsx';
import OSDecided from './pages/Practice/OS.jsx';
import ComputerNetworks from './pages/Practice/Computer-networks.jsx';
import SoftwareEngineering from './pages/Practice/Se-models.jsx';
import CyberSecurity from './pages/Practice/Cybersecurity.jsx';
import CloudComputing from './pages/Practice/Cloud.jsx';
import CompilerDesign from './pages/Practice/Compiler-design.jsx';
import DigitalLogic from './pages/Practice/Digital-logic.jsx';
import ComputerOrganization from './pages/Practice/Computer-org.jsx';

export default function App() {
  return (
    <Routes>
      {/* Routes with Navbar/Footer via MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Assessments */}
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/assessments/logical-reasoning" element={<LogicalReasoning />} />
        <Route path="/assessments/logical-reasoning/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/quantitative-aptitude" element={<QuantitativeAptitude />} />
        <Route path="/assessments/quantitative-aptitude/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/python" element={<Python />} />
        <Route path="/assessments/python/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/java" element={<JavaProgramming />} />
        <Route path="/assessments/java/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/os-concepts" element={<OperatingSystem />} />
        <Route path="/assessments/os-concepts/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/dbms" element={<DBMSAssessments />} />
        <Route path="/assessments/dbms/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/infosys-assessment" element={<InfosysAssessment />} />
        <Route path="/assessments/infosys-assessment/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/tcs-nqt" element={<TCSAssessment />} />
        <Route path="/assessments/tcs-nqt/:testName" element={<AssessmentDetails />} />
        <Route path="/assessments/:category/:testName/result" element={<Result />} />

        {/* Practice */}
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/boats-and-streams" element={<BoatsAndStreams />} />

        {/* ✅ ADDED ROUTES for all new practice pages here */}
        <Route path="/practice/time-and-work" element={<TimeAndWork />} />
        <Route path="/practice/data-interpretation" element={<DataInterpretation />} />
        <Route path="/practice/percentages" element={<Percentages />} />
        <Route path="/practice/logical-puzzles" element={<LogicalPuzzles />} />
        <Route path="/practice/series-completion" element={<SeriesCompletion />} />
        <Route path="/practice/blood-relations" element={<BloodRelations />} />
        <Route path="/practice/profit-loss" element={<ProfitLoss />} />
        <Route path="/practice/interest" element={<SimpleCompoundInterest />} />
        <Route path="/practice/permutations" element={<Permutations />} />
        <Route path="/practice/probability" element={<Probability />} />
        <Route path="/practice/passage-comprehension" element={<PassageComprehension />} />
        <Route path="/practice/sentence-correction" element={<SentenceCorrection />} />
        <Route path="/practice/synonyms-antonyms" element={<SynonymsAntonyms />} />
        <Route path="/practice/fill-blanks" element={<FillBlanks />} />
        <Route path="/practice/idioms-phrases" element={<IdiomsAndPhrases />} />
        <Route path="/practice/error-spotting" element={<ErrorSpotting />} />
        <Route path="/practice/para-jumbles" element={<ParaJumbles />} />
        <Route path="/practice/vocabulary" element={<VocabularyTest />} />
        <Route path="/practice/voice-change" element={<VoiceChange />} />
        <Route path="/practice/speech-change" element={<SpeechChange />} />
        <Route path="/practice/c-programming" element={<CProgramming />} />
        <Route path="/practice/data-structures" element={<DataStructures />} />
        <Route path="/practice/python" element={<PythonPractice />} />
        <Route path="/practice/java" element={<JavaPractice />} />
        <Route path="/practice/javascript" element={<JavascriptPractice />} />
        <Route path="/practice/complexity" element={<AlgorithmComplexity />} />
        <Route path="/practice/sorting" element={<SortingAlgorithms />} />
        <Route path="/practice/searching" element={<SearchingAlgorithms />} />
        <Route path="/practice/reactjs" element={<ReactJsMCQs />} />
        <Route path="/practice/nodejs" element={<NodeJsConcepts />} />
        <Route path="/practice/sql-queries" element={<SQLQueries />} />
        <Route path="/practice/git" element={<GitVersionControl />} />
        <Route path="/practice/dbms" element={<DBMSConcepts />} />
        <Route path="/practice/os" element={<OSDecided />} />
        <Route path="/practice/computer-networks" element={<ComputerNetworks />} />
        <Route path="/practice/se-models" element={<SoftwareEngineering />} />
        <Route path="/practice/cybersecurity" element={<CyberSecurity />} />
        <Route path="/practice/cloud" element={<CloudComputing />} />
        <Route path="/practice/compiler-design" element={<CompilerDesign />} />
        <Route path="/practice/digital-logic" element={<DigitalLogic />} />
        <Route path="/practice/computer-org" element={<ComputerOrganization />} />
        
       {/* ✅ Practice Results (AuthLayout) */}
<Route path="/practice/boats-and-streams/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/time-and-work/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/data-interpretation/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/percentages/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/logical-puzzles/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/series-completion/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/blood-relations/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/profit-loss/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/interest/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/permutations/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/probability/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/passage-comprehension/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/sentence-correction/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/synonyms-antonyms/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/fill-blanks/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/idioms-phrases/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/error-spotting/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/para-jumbles/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/vocabulary/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/voice-change/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/speech-change/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/c-programming/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/data-structures/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/python/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/java/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/javascript/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/complexity/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/sorting/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/searching/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/reactjs/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/nodejs/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/sql-queries/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/git/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/dbms/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/os/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/computer-networks/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/se-models/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/cybersecurity/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/cloud/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/compiler-design/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/digital-logic/practice-exam/results" element={<PracticeResult />} />
<Route path="/practice/computer-org/practice-exam/results" element={<PracticeResult />} />


        {/* Other Pages */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Route>

      {/* Auth-related routes (no navbar/footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        <Route path="/assessments/:category/:testName/instructions" element={<Instructions />} />
        <Route path="/assessments/:category/:testName/exam" element={<Exam />} />
        <Route path="/assessments/:category/:testName/sections" element={<Sections />} />
        <Route path="/practice/boats-and-streams/practice-exam" element={<PracticeExam />} />
<Route path="/practice/time-and-work/practice-exam" element={<PracticeExam />} />
<Route path="/practice/data-interpretation/practice-exam" element={<PracticeExam />} />
<Route path="/practice/percentages/practice-exam" element={<PracticeExam />} />
<Route path="/practice/logical-puzzles/practice-exam" element={<PracticeExam />} />
<Route path="/practice/series-completion/practice-exam" element={<PracticeExam />} />
<Route path="/practice/blood-relations/practice-exam" element={<PracticeExam />} />
<Route path="/practice/profit-loss/practice-exam" element={<PracticeExam />} />
<Route path="/practice/interest/practice-exam" element={<PracticeExam />} />
<Route path="/practice/permutations/practice-exam" element={<PracticeExam />} />
<Route path="/practice/probability/practice-exam" element={<PracticeExam />} />
<Route path="/practice/passage-comprehension/practice-exam" element={<PracticeExam />} />
<Route path="/practice/sentence-correction/practice-exam" element={<PracticeExam />} />
<Route path="/practice/synonyms-antonyms/practice-exam" element={<PracticeExam />} />
<Route path="/practice/fill-blanks/practice-exam" element={<PracticeExam />} />
<Route path="/practice/idioms-phrases/practice-exam" element={<PracticeExam />} />
<Route path="/practice/error-spotting/practice-exam" element={<PracticeExam />} />
<Route path="/practice/para-jumbles/practice-exam" element={<PracticeExam />} />
<Route path="/practice/vocabulary/practice-exam" element={<PracticeExam />} />
<Route path="/practice/voice-change/practice-exam" element={<PracticeExam />} />
<Route path="/practice/speech-change/practice-exam" element={<PracticeExam />} />
<Route path="/practice/c-programming/practice-exam" element={<PracticeExam />} />
<Route path="/practice/data-structures/practice-exam" element={<PracticeExam />} />
<Route path="/practice/python/practice-exam" element={<PracticeExam />} />
<Route path="/practice/java/practice-exam" element={<PracticeExam />} />
<Route path="/practice/javascript/practice-exam" element={<PracticeExam />} />
<Route path="/practice/complexity/practice-exam" element={<PracticeExam />} />
<Route path="/practice/sorting/practice-exam" element={<PracticeExam />} />
<Route path="/practice/searching/practice-exam" element={<PracticeExam />} />
<Route path="/practice/reactjs/practice-exam" element={<PracticeExam />} />
<Route path="/practice/nodejs/practice-exam" element={<PracticeExam />} />
<Route path="/practice/sql-queries/practice-exam" element={<PracticeExam />} />
<Route path="/practice/git/practice-exam" element={<PracticeExam />} />
<Route path="/practice/dbms/practice-exam" element={<PracticeExam />} />
<Route path="/practice/os/practice-exam" element={<PracticeExam />} />
<Route path="/practice/computer-networks/practice-exam" element={<PracticeExam />} />
<Route path="/practice/se-models/practice-exam" element={<PracticeExam />} />
<Route path="/practice/cybersecurity/practice-exam" element={<PracticeExam />} />
<Route path="/practice/cloud/practice-exam" element={<PracticeExam />} />
<Route path="/practice/compiler-design/practice-exam" element={<PracticeExam />} />
<Route path="/practice/digital-logic/practice-exam" element={<PracticeExam />} />
<Route path="/practice/computer-org/practice-exam" element={<PracticeExam />} />






      </Route>
    </Routes>
  );
}