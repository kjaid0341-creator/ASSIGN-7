import React from 'react';
import { Link } from 'react-router';

function CompanyCard({ company, myProfile, onToggleApply }) {
  const isEligible =
    myProfile.cgpa >= company.minCGPA &&
    company.eligibleBranches.includes(myProfile.branch);

  const isDream = company.packageLPA >= 10;

  return (
    <div className="company-card">
      <div className="card-top">
        <h3>{company.name}</h3>
        {isDream && <span className="dream-tag">Dream Company</span>}
      </div>

      <p><b>Role:</b> {company.role}</p>
      <p><b>Package:</b> {company.packageLPA} LPA</p>
      <p><b>Location:</b> {company.location}</p>
      <p><b>Drive Date:</b> {company.driveDate}</p>

      <p>
        <b>Status:</b>{' '}
        {isEligible ? (
          <span className="eligible">Eligible</span>
        ) : (
          <span className="not-eligible">Not Eligible</span>
        )}
      </p>

      <div className="card-bottom">
        <Link to={`/companies/${company.id}`} className="view-link">
          View Details
        </Link>

        {isEligible ? (
          <button
            className={company.isApplied ? 'btn-withdraw' : 'btn-apply'}
            onClick={() => onToggleApply(company.id)}
          >
            {company.isApplied ? 'Withdraw' : 'Apply'}
          </button>
        ) : (
          <span className="not-eligible-text">Not Eligible</span>
        )}
      </div>
    </div>
  );
}

export default CompanyCard;
