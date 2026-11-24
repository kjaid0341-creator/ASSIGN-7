# Campus Placement Drive - React Web Application

**Course:** WEB 301 — Advance Frontend Engineering  
**Assignment:** Assignment 7 (Homework)  
**Assigned Problem Statement:** P9 — Campus Placement Drive  

---

## Student Information

- **Student Name:** Safak Ali
- **Roll Number / UID:** [Enter your UID / Roll Number here]
- **Problem Statement:** P9 — Campus Placement Drive
- **Live Vercel Link:** [Enter your Vercel URL here]
- **Public GitHub Repository:** https://github.com/safakali/safakali-midsem-phase2

---

## Project Overview

This project is a multi-page React application built for the **Campus Placement Drive (P9)** problem statement. It provides a simple and user-friendly portal where college students can explore campus placement opportunities, check their branch and CGPA eligibility, view detailed company information, apply for drives, and manage their applications in real-time.

The application has been written strictly following beginner-level React concepts taught in college, without using advanced patterns or unneeded libraries.

---

## Problem Statement 9 (PS9) Requirements & Implementation

| Requirement | Implementation Details |
|---|---|
| **1. Dataset & Student Profile** | Imported `myProfile` (Branch: **CSE**, CGPA: **7.5**) and `companiesData` from `src/data/companies.js`. Displayed on the Home page. |
| **2. Eligibility Criteria** | A company is **Eligible** only if `myProfile.cgpa >= company.minCGPA` AND `company.eligibleBranches.includes(myProfile.branch)`. Otherwise displays **Not Eligible**. |
| **3. Dream Company Badge** | Shows a **Dream Company** badge for companies offering a package of **10 LPA or higher**. |
| **4. Apply & Withdraw Functionality** | Eligible companies have a toggle button (**Apply** ↔ **Withdraw**). Ineligible companies show `"Not Eligible"` text instead of a button. |
| **5. Dropdown Filter** | Dropdown on `/companies` page to filter companies by **All**, **Eligible**, or **Not Eligible**. |
| **6. Dynamic Company Details Route** | Route `/companies/:id` uses `useParams()` to fetch the ID and `.find()` to locate the company. Displays minimum CGPA and maps eligible branches using `.map()`. |
| **7. Dashboard Statistics** | Home page dynamically calculates and displays: Total Companies (8), Eligible Companies (6), and Applied Companies. |
| **8. My Applications Page** | `/applications` displays all applied companies with a Withdraw option, or shows `"No applications yet"` when none are applied. |
| **9. Navigation & Live Count** | `Navbar.jsx` includes links to Home, Companies, and Applications with a live count: `Applications (${appliedCount})`. |
| **10. State Persistence** | All state is held in `App.jsx` using `useState()`, so application status is preserved when navigating across routes using React Router's `<Link>`. |

---

## Pages and Routing

| Route | Page Component | Purpose |
|---|---|---|
| `/` | `Home.jsx` | Welcome banner, student profile details, and dynamic dashboard summary cards. |
| `/companies` | `Companies.jsx` | Grid of company cards with eligibility filter dropdown. |
| `/companies/:id` | `CompanyDetails.jsx` | Complete details of the selected company, eligible branch list, and Apply/Withdraw button. |
| `/applications` | `Applications.jsx` | List of jobs the student has applied to, with one-click withdrawal. |

---

## Project Folder Structure

```
ASSIGN-7/
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and npm scripts
├── vercel.json                 # Vercel rewrite configuration to avoid 404 on refresh
├── vite.config.js              # Vite configuration
├── README.md                   # Assignment documentation
├── .gitignore                  # Prevents committing node_modules
└── src/
    ├── main.jsx                # React root render
    ├── App.jsx                 # Central application state, toggle function & routing
    ├── App.css                 # Simple, clean styling with navy blue accents
    ├── index.css               # Basic CSS reset and typography
    ├── data/
    │   └── companies.js        # Faculty-provided company and profile dataset
    ├── components/
    │   ├── Navbar.jsx          # Top navigation bar with live applied count
    │   └── CompanyCard.jsx     # Reusable card component for company listing
    └── pages/
        ├── Home.jsx            # Home dashboard
        ├── Companies.jsx       # Filterable company listing
        ├── CompanyDetails.jsx  # Detailed dynamic view with useParams()
        └── Applications.jsx    # Applied companies view
```

---

## React Concepts Demonstrated

1. **Functional Components:** All components are written as clean, standard functions.
2. **Props:** Used to pass data (`company`, `myProfile`, `appliedCount`) and event callbacks (`onToggleApply`) from `App.jsx` down to child components.
3. **useState:** Used in `App.jsx` to store the companies array and in `Companies.jsx` to store the active dropdown filter.
4. **Array Methods:**
   - `.map()`: To render lists of company cards and eligible branches.
   - `.filter()`: To calculate eligible companies, applied companies, and apply dropdown filters.
   - `.find()`: To find a specific company by its ID in the details page.
5. **Conditional Rendering:** Used for badges ("Dream Company"), status tags ("Eligible" / "Not Eligible"), and conditional buttons ("Apply" vs "Withdraw").
6. **React Router (`react-router`):**
   - `<BrowserRouter>`, `<Routes>`, `<Route>` for multi-page navigation.
   - `<Link>` for fast client-side transitions without full browser reloads.
   - `useParams()` for dynamic parameter reading (`:id`).

---

## How to Install and Run Locally

### Prerequisites
Make sure you have Node.js and npm installed on your computer.

### Step 1: Open Terminal in Project Directory
```bash
cd /Users/safakali/Desktop/ASSIGN-7
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run the Development Server
```bash
npm run dev
```

### Step 4: Open in Browser
Open your browser and navigate to:
```
http://localhost:5173
```

---

## Production Build & Vercel Deployment

### 1. Build the Project
```bash
npm run build
```
This produces an optimized production build in the `dist/` directory.

### 2. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - WEB 301 Assignment 7 PS9"
git branch -M main
git remote add origin https://github.com/<your-username>/safakali-midsem-phase2.git
git push -u origin main
```
*(Ensure the repository is set to **Public**).*

### 3. Deploy to Vercel
1. Go to [https://vercel.com/](https://vercel.com/) and sign in with GitHub.
2. Click **Add New** > **Project**.
3. Select your repository `safakali-midsem-phase2`.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**.
6. The included `vercel.json` ensures direct URL visits (like `/companies/2`) reload without 404 errors.
