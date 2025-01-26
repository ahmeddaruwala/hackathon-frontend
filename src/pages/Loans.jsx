import React, { useState } from 'react';
import Signup from './Signup.jsx';

export default function DropdownWithSubcategories() {
  // Define categories and subcategories
  const categories = {
    WeddingLoans: ['Valima', 'Furniture', 'Valima Food', 'Whole Jahez'],
    HomeConstructionLoans: ['Structure', 'Finishing', 'House Payment Loan'],
    BusinessStartupLoans: ['Buy Stall', 'Advance for Shop', 'Shop Assets', 'Shop Machinery'],
    EducationLoans: ['Admission Fees', 'University Fees', 'College Fess', 'School Fees', 'Course Payment']
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [selectedLoan, setSelectedLoan] = useState('')

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubCategory(''); // Reset subcategory when category changes
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleLoanChange = (event) => {

  }

  return (
    <div className='container-x p-10 flex font-medium text-lg flex-col border-4 border-solid border-blue-400 mt-10 rounded-xl h-150'>
      <h1 className='text-2xl mb-5'>Loan Form</h1>
      <label htmlFor="category">Choose a category: </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Please select your Loan</option>
        {Object.keys(categories).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
        <div className='flex flex-col mt-15'>
          <label htmlFor="subcategory">Choose a sub-category: </label>
          <select
            id="subcategory"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="">Select specific type of Loan</option>
            {categories[selectedCategory].map((subCategory) => (
              <option key={subCategory} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
          </div>
        </>

        
      )}

      <p className='mt-15 flex flex-col'>
        Selected Category: {selectedCategory} <br />
        Selected Sub-Category: {selectedSubCategory}
      </p>      
      <p className='mt-10'>please verify amount of loan: <input className='p-1 pt-0 pb-0' type="number" /></p>
      <button onClick={Signup} className='bg-green-500 rounded-lg text-white w-25 cursor-pointer ml-103 mt-15'>Proceed</button>
      
    </div>
  );
}
