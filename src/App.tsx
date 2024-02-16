import { useState } from 'react';
import { ExpenseList } from './exepense-tracker/components/ExpenseList';
import ExpenseFilter from './exepense-tracker/components/ExpenseFilter';
import ExpenseForm from './exepense-tracker/components/ExpenseForm';
import categories from './exepense-tracker/categories';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(' ');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Utilities' },
    { id: 4, description: 'ddd', amount: 10, category: 'Utilities' },
  ]);

  if (expenses.length === 0) {
    return null;
  }

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
