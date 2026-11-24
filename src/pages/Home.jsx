import React from 'react';

function Home({ companies, myProfile }) {
  const total = companies.length;
  const eligible = companies.filter(
    (c) => myProfile.cgpa >= c.minCGPA && c.eligibleBranches.includes(myProfile.branch)
  ).length;
  const applied = companies.filter((c) => c.isApplied).length;

  return (
    <div className="container">
      <h1>Campus Placement Drive</h1>
      <p className="welcome-text">Student Placement Portal - 2026</p>

      <div className="profile-section">
        <h3>Student Profile</h3>
        <p>Branch: <b>{myProfile.branch}</b></p>
        <p>CGPA: <b>{myProfile.cgpa}</b></p>
      </div>

      <h3>Dashboard</h3>
      <div className="stats-container">
        <div className="stat-box">
          <p>Total Companies</p>
          <h2>{total}</h2>
        </div>
        <div className="stat-box">
          <p>Eligible Companies</p>
          <h2>{eligible}</h2>
        </div>
        <div className="stat-box">
          <p>Applied Companies</p>
          <h2>{applied}</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
