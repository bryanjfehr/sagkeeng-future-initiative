# Sagkeeng Future Initiative SPA

## Transparency • Accountability • Prosperity

A high-performance, responsive single-page application (SPA) designed to empower Sagkeeng First Nation band members with transparent financial data, interactive visualizations, and actionable accountability tools based on forensic audit reviews from 2016-2026.

## 🚀 Architecture Overview

- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v3)
- **Routing:** Single-page scroll-based navigation via `react-scroll`
- **Visualizations:** `Recharts` for interactive financial trends
- **Icons:** `Lucide React`
- **Deployment:** Optimized for GitHub Pages

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bryanjfehr/sagkeeng-future-initiative.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```
The optimized assets will be generated in the `dist/` directory.

### Deploy to GitHub Pages
```bash
npm run deploy
```
This command runs `gh-pages -d dist`, pushing the build to the `gh-pages` branch.

## 📄 Data Management

The core audit text and financial figures are managed in `src/data/reportData.ts`. This file contains the structured text, tables, and citation mapping to ensure 100% data fidelity.

### Updating the PDF Summary
The "Action Center" includes a placeholder for a PDF Audit Summary. To update:
1. Generate the PDF summary.
2. Place the file in `public/docs/sagkeeng-audit-summary.pdf`.
3. Update the link in `src/components/ActionCenter.tsx`.

## ⚖️ License

This project is dual-licensed under the MIT License and a Proprietary Community License for Sagkeeng First Nation band members. See `LICENSE.md` (coming soon) for details.

---
**Disclaimer:** This tool is for informational purposes. Data is derived from publicly available audited financial statements.
