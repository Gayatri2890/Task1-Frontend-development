import React from 'react';

function Step3({ nextStep, prevStep, handleChange, formData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here if needed
    nextStep();
  };

  return (
    <div>
      <h2>Step 3</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for Step 3 */}
        {/* Navigation buttons */}
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Step3;
