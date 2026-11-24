import React, { useState } from 'react';
import CompanyCard from '../components/CompanyCard';

function Companies({ companies, myProfile, onToggleApply }) {
  const [filter, setFilter] = useState('All');

  const filteredList = companies.filter((company) => {
    const isEligible =
      myProfile.cgpa >= company.minCGPA &&
      company.eligibleBranches.includes(myProfile.branch);

    if (filter === 'Eligible') return isEligible;
    if (filter === 'Not Eligible') return !isEligible;
    return true;
  });

  return (
    <div className="container">
      <h2>Companies List</h2>

      <div className="filter-wrapper">
        <label>Filter: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Eligible">Eligible</option>
          <option value="Not Eligible">Not Eligible</option>
        </select>
      </div>

      <div className="companies-list">
        {filteredList.map((comp) => (
          <CompanyCard
            key={comp.id}
            company={comp}
            myProfile={myProfile}
            onToggleApply={onToggleApply}
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
