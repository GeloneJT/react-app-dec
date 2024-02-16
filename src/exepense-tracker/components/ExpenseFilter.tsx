import React from 'react';

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
      <option value="Groceries">Groceries</option>
      <option value="Utilities">Utlitlies</option>
      <option value="Entertainment">Entertainment</option>
    </select>
  );
};

export default ExpenseFilter;
