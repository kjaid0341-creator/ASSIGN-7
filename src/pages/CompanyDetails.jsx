import React from 'react';
import { useParams, Link } from 'react-router';

function CompanyDetails({ companies, myProfile, onToggleApply }) {
  const { id } = useParams();
  const company = companies.find((c) => c.id === parseInt(id));

  if (!company) {
    return (
      <div className="container">
        <h2>Company not found</h2>
        <Link to="/companies">Back to Companies</Link>
      </div>
    );
  }

  const isEligible =
    myProfile.cgpa >= company.minCGPA &&
    company.eligibleBranches.includes(myProfile.branch);

  const isDream = company.packageLPA >= 10;

  return (
    <div className="container">
      <Link to="/companies" className="back-link">&larr; Back to Companies</Link>

      <div className="details-box">
        <div className="details-header">
          <h2>{company.name}</h2>
          {isDream && <span className="dream-tag">Dream Company</span>}
        </div>

        <p><b>Role:</b> {company.role}</p>
        <p><b>Package:</b> {company.packageLPA} LPA</p>
        <p><b>Location:</b> {company.location}</p>
        <p><b>Drive Date:</b> {company.driveDate}</p>
        <p><b>Minimum CGPA:</b> {company.minCGPA}</p>

        <p><b>Eligible Branches:</b></p>
        <ul className="branches">
          {company.eligibleBranches.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <p>
          <b>Eligibility:</b>{' '}
          {isEligible ? (
            <span className="eligible">Eligible</span>
          ) : (
            <span className="not-eligible">Not Eligible</span>
          )}
        </p>

        <div className="details-actions">
          {isEligible ? (
            <button
              className={company.isApplied ? 'btn-withdraw' : 'btn-apply'}
              onClick={() => onToggleApply(company.id)}
            >
              {company.isApplied ? 'Withdraw Application' : 'Apply for Drive'}
            </button>
          ) : (
            <p className="not-eligible-text">Not Eligible to Apply</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
