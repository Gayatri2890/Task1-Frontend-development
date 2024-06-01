import React from 'react';

function Step1({ nextStep, handleChange, formData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here if needed
    nextStep();
  };

  return (
    <div>
      <h2>Step 1</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for Step 1 */}
        <input type="text" placeholder="Name" value={formData.name} onChange={handleChange('name')} />
        <input type="email" placeholder="Email" value={formData.email} onChange={handleChange('email')} />
        {/* Add more form fields as needed */}
        {/* Navigation buttons */}
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step1;
