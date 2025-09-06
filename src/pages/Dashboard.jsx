import React, { useState, useEffect } from "react";
import "../assets/css/Dashboard.css";

// Skeleton Block Component
const Skeleton = ({ width = "100%", height = "20px", borderRadius = "4px" }) => (
  <div className="Dashboard-skeleton" style={{ width, height, borderRadius }}></div>
);

// ProgressBar Component
const ProgressBar = ({ percentage }) => {
  let colorClass = "";
  if (percentage >= 60) colorClass = "green";
  else if (percentage >= 40) colorClass = "yellow";
  else colorClass = "red";

  return (
    <div className="Dashboard-progress-bar-container">
      <div
        className={`Dashboard-progress-bar-filler ${colorClass}`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [error, setError] = useState(null);
  const [mcqPage, setMcqPage] = useState(0);

  useEffect(() => {
    let timer;

    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("jwtToken");
        if (!token) throw new Error("Authentication token not found. Please log in.");

        timer = setTimeout(() => setShowSkeleton(true), 800);

       const response = await fetch(`${import.meta.env.VITE_API_URL}/api/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok)
          throw new Error(`Failed to fetch dashboard data (Status: ${response.status})`);

        const data = await response.json();
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        clearTimeout(timer);
        setIsLoading(false);
        setShowSkeleton(false);
      }
    };

    fetchDashboardData();

    return () => clearTimeout(timer);
  }, []);

  if (error) return <div className="Dashboard-error-message">Error: {error}</div>;

  // ---------- SKELETON SCREEN ----------
  if (isLoading) {
    return (
      <div className="Dashboard-container">
        <div className="Dashboard-grid">
          {showSkeleton ? (
            <>
              {/* Welcome Card Skeleton */}
              <div className="Dashboard-card Dashboard-welcome-card">
                <Skeleton width="60%" height="24px" />
                <Skeleton width="80%" />
                <Skeleton width="50%" />
                <Skeleton width="40%" />
                <div className="Dashboard-button-group">
                  <Skeleton width="120px" height="35px" borderRadius="8px" />
                  <Skeleton width="150px" height="35px" borderRadius="8px" />
                </div>
              </div>

              {/* Overall Percentage Skeleton */}
              <div className="Dashboard-card Dashboard-overall-accuracy-card">
                <Skeleton width="70%" height="20px" />
                <Skeleton width="50px" height="50px" borderRadius="50%" />
                <Skeleton width="100%" height="12px" />
              </div>

              {/* Assessment Activity Skeleton */}
              <div className="Dashboard-card Dashboard-activity-card">
                <Skeleton width="80%" />
                <Skeleton width="60%" />
                <Skeleton width="40%" />
              </div>

              {/* Placeholder Cards */}
              <div className="Dashboard-card Dashboard-activity-card">
                <Skeleton width="70%" />
                <Skeleton width="50%" />
              </div>
              <div className="Dashboard-card Dashboard-activity-card">
                <Skeleton width="70%" />
                <Skeleton width="50%" />
              </div>

              {/* MCQ Accuracy Skeleton */}
              <div className="Dashboard-card Dashboard-subject-accuracy-card">
                <Skeleton width="60%" />
                <Skeleton width="90%" height="15px" />
                <Skeleton width="85%" height="15px" />
                <Skeleton width="95%" height="15px" />
              </div>
            </>
          ) : (
            <>
              <div className="Dashboard-card Dashboard-welcome-card"></div>
              <div className="Dashboard-card Dashboard-overall-accuracy-card"></div>
              <div className="Dashboard-card Dashboard-activity-card"></div>
              <div className="Dashboard-card Dashboard-activity-card"></div>
              <div className="Dashboard-card Dashboard-activity-card"></div>
              <div className="Dashboard-card Dashboard-subject-accuracy-card"></div>
            </>
          )}
        </div>
      </div>
    );
  }
  // ---------- END SKELETON ----------

  if (!dashboardData) return <div>No data available.</div>;

  const { userInfo, overallPercentage, assessmentActivity, subjectAccuracy } = dashboardData;

  const itemsPerPage = 4;
  const totalPages = Math.ceil(subjectAccuracy.length / itemsPerPage);
  const startIndex = mcqPage * itemsPerPage;
  const visibleSubjects = subjectAccuracy.slice(startIndex, startIndex + itemsPerPage);

  const TOTAL_ASSESSMENTS = 32;
  const TOTAL_COURSES = 3;
  const TOTAL_PRACTICE = 84;
  const COMPLETED_PRACTICE = 0;

  return (
    <div className="Dashboard-container">
      <div className="Dashboard-grid">
        {/* Welcome Card */}
        <div className="Dashboard-card Dashboard-welcome-card">
          <h2 className="Dashboard-h2">Welcome &nbsp;{userInfo.username}</h2>
          <p className="Dashboard-user-detail">
            <strong>Email:&nbsp;</strong> <span>{userInfo.email}</span>
          </p>
          <div className="Dashboard-user-info">
            <p>
              <strong>Organization:&nbsp;</strong> {userInfo.organisation}
            </p>
            <p>
              <strong>Passout Batch:&nbsp;</strong> {userInfo.batch}
            </p>
          </div>
          <div className="Dashboard-button-group">
            <button className="Dashboard-btn Dashboard-btn-report">Reported Issues</button>
            <button className="Dashboard-btn Dashboard-btn-change-password">Change Password</button>
          </div>
        </div>

        {/* Overall Percentage Card */}
        <div className="Dashboard-card Dashboard-overall-accuracy-card">
          <h3>Your Overall Percentage</h3>
          <div className="Dashboard-accuracy-display">
            <span>{overallPercentage.toFixed(0)}%</span>
          </div>
          <ProgressBar percentage={overallPercentage} />
        </div>

        {/* Assessment Activity */}
        <div className="Dashboard-card Dashboard-activity-card">
          <h3>Assessment Activity</h3>
          <p>
            Completed: {assessmentActivity.completed}/{TOTAL_ASSESSMENTS}
          </p>
          <p>
            Yet to Start: {TOTAL_ASSESSMENTS - assessmentActivity.completed}/{TOTAL_ASSESSMENTS}
          </p>
          <a href="" className="Dashboard-card-link">
            View Recent Assessments
          </a>
        </div>

        {/* Course Activity */}
        <div className="Dashboard-card Dashboard-activity-card">
          <h3>Course Activity</h3>
          <p>InProgress: 0/{TOTAL_COURSES}</p>
          <p>Yet to Start: {TOTAL_COURSES}/{TOTAL_COURSES}</p>
          <a href="" className="Dashboard-card-link">View Recent Courses</a>
        </div>

        {/* Practice Activity */}
        <div className="Dashboard-card Dashboard-activity-card">
          <h3>Practice Activity</h3>
          <p>Completed: {COMPLETED_PRACTICE}/{TOTAL_PRACTICE}</p>
          <p>Yet to Start: {TOTAL_PRACTICE - COMPLETED_PRACTICE}/{TOTAL_PRACTICE}</p>
          <a href="" className="Dashboard-card-link">View Recent Practice</a>
        </div>

        {/* MCQ Accuracy */}
        <div className="Dashboard-card Dashboard-subject-accuracy-card">
          <div className="Dashboard-card-header-flex">
            <h3>MCQ: Subject Level Accuracy</h3>
            {totalPages > 1 && (
              <div className="Dashboard-pagination-controls">
                <button onClick={() => setMcqPage((p) => p - 1)} disabled={mcqPage === 0}>‹</button>
                <span>{mcqPage + 1} / {totalPages}</span>
                <button onClick={() => setMcqPage((p) => p + 1)} disabled={mcqPage >= totalPages - 1}>›</button>
              </div>
            )}
          </div>
          <div className="Dashboard-scrollable-content">
            {visibleSubjects.length > 0 ? (
              visibleSubjects.map((subject, index) => (
                <div className="Dashboard-subject-row" key={index}>
                  <span className="Dashboard-subject-name">{subject.subjectName} &raquo;</span>
                  <div className="Dashboard-subject-progress">
                    <ProgressBar percentage={subject.percentage} />
                  </div>
                  <span className="Dashboard-subject-percentage">{subject.percentage.toFixed(0)}%</span>
                </div>
              ))
            ) : (
              <p>No subject data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;