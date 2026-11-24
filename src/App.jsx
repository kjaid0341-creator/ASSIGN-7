import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { companiesData, myProfile } from './data/companies';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Companies from './pages/Companies';
import CompanyDetails from './pages/CompanyDetails';
import Applications from './pages/Applications';
import './App.css';

function App() {
  const [companies, setCompanies] = useState(companiesData);

  function handleToggleApply(id) {
    const updated = companies.map((comp) => {
      if (comp.id === id) {
        return { ...comp, isApplied: !comp.isApplied };
      }
      return comp;
    });
    setCompanies(updated);
  }

  const appliedCount = companies.filter((c) => c.isApplied).length;

  return (
    <BrowserRouter>
      <div>
        <Navbar appliedCount={appliedCount} />
        <Routes>
          <Route
            path="/"
            element={<Home companies={companies} myProfile={myProfile} />}
          />
          <Route
            path="/companies"
            element={
              <Companies
                companies={companies}
                myProfile={myProfile}
                onToggleApply={handleToggleApply}
              />
            }
          />
          <Route
            path="/companies/:id"
            element={
              <CompanyDetails
                companies={companies}
                myProfile={myProfile}
                onToggleApply={handleToggleApply}
              />
            }
          />
          <Route
            path="/applications"
            element={
              <Applications
                companies={companies}
                onToggleApply={handleToggleApply}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
