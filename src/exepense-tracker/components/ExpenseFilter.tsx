import React from 'react';
import categories from '../categories';

interface TrackerProps {
  onSelectCategory: (catergory: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: TrackerProps) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  );
};

export default ExpenseFilter;
