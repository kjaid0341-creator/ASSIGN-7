import React from 'react';
import { Link } from 'react-router';

function Applications({ companies, onToggleApply }) {
  const myApplications = companies.filter((c) => c.isApplied);

  return (
    <div className="container">
      <h2>My Applications</h2>

      {myApplications.length === 0 ? (
        <div className="empty-box">
          <p>No applications yet</p>
          <Link to="/companies" className="browse-link">View Companies</Link>
        </div>
      ) : (
        <div className="apps-list">
          {myApplications.map((comp) => (
            <div key={comp.id} className="app-card">
              <div>
                <h3>{comp.name}</h3>
                <p>Role: {comp.role}</p>
                <p>Package: {comp.packageLPA} LPA</p>
              </div>
              <button
                className="btn-withdraw"
                onClick={() => onToggleApply(comp.id)}
              >
                Withdraw
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Applications;
