/**
 * Collection of Recharts components for visualizing Sagkeeng First Nation financial data.
 * Includes Revenue vs Debt trends, Budget Variances, and Council Compensation.
 */
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

// Data for Line Chart: Revenue vs Net Debt
const trendData = [
  { year: '2016', revenue: 48.3, debt: 15.8 },
  { year: '2017', revenue: 48.3, debt: 18.7 },
  { year: '2018', revenue: 52.2, debt: 16.2 },
  { year: '2021', revenue: 67.4, debt: 18.3 },
  { year: '2023', revenue: 70.0, debt: 39.7 },
  { year: '2025', revenue: 77.5, debt: 42.0 }, // Estimated 2025 debt based on trend
];

// Data for Bar Chart: 2023 Budget vs Actuals
const budgetData = [
  { name: 'Admin', budget: 1.5, actual: 15.4 },
  { name: 'Economic Dev', budget: 7.7, actual: 13.0 },
  { name: 'Public Works', budget: 1.1, actual: 5.3 },
  { name: 'Education', budget: 30.9, actual: 18.9 },
];

// Data for Pie Chart: 2025 Construction breakdown
const constructionData = [
  { name: 'Disability Housing', value: 3.57 },
  { name: 'CMHC Housing', value: 0.71 },
  { name: 'Education Admin', value: 0.33 },
  { name: 'Shelter', value: 0.01 },
];

const COLORS = ['#0A3D33', '#D97706', '#E2E8CE', '#0F172A'];

// Data for Compensation (Vertical Bar Chart)
const compensationData = [
  { name: 'Chief Fontaine', total: 224858 },
  { name: 'Cllr M. Courchene', total: 159268 },
  { name: 'Cllr H. Swampy', total: 132551 },
  { name: 'Cllr D. Courchene', total: 126313 },
  { name: 'Cllr T. Twoheart', total: 118576 },
];

export const RevenueDebtTrend = () => (
  <div className="h-[400px] w-full bg-white p-4 rounded-xl shadow-inner">
    <h4 className="text-center font-bold text-forest-green mb-4">Total Revenue vs. Net Debt (Millions)</h4>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={trendData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#0A3D33" strokeWidth={3} name="Total Revenue" />
        <Line type="monotone" dataKey="debt" stroke="#D97706" strokeWidth={3} name="Net Debt" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export const BudgetVariance = () => (
  <div className="h-[400px] w-full bg-white p-4 rounded-xl shadow-inner">
    <h4 className="text-center font-bold text-forest-green mb-4">2023 Budget vs. Actuals (Millions)</h4>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={budgetData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="budget" fill="#0F172A" name="Budgeted" />
        <Bar dataKey="actual" fill="#D97706" name="Actual Expenditure" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export const ConstructionBreakdown = () => (
  <div className="h-[400px] w-full bg-white p-4 rounded-xl shadow-inner flex flex-col items-center">
    <h4 className="text-center font-bold text-forest-green mb-4">2025 Construction-in-Progress (Millions)</h4>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={constructionData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }: any) => `${name} ${(Number(percent || 0) * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {constructionData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export const CouncilRemuneration = () => (
  <div className="h-[400px] w-full bg-white p-4 rounded-xl shadow-inner">
    <h4 className="text-center font-bold text-forest-green mb-4">Top Council Compensation (2024/2025)</h4>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={compensationData} layout="vertical" margin={{ left: 40, right: 40 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" hide />
        <YAxis dataKey="name" type="category" width={120} />
        <Tooltip formatter={(value: any) => `$${Number(value).toLocaleString()}`} />
        <Bar dataKey="total" fill="#0A3D33" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
