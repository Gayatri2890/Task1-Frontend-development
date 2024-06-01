import React from 'react';

function Step4({ prevStep, formData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission or any final actions here
  };

  return (
    <div>
      <h2>Step 4</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for Step 4 */}
        {/* Display form data for review */}
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        {/* Add more form fields and review data as needed */}
        {/* Navigation buttons */}
        <button type="button" onClick={prevStep}>Back</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Step4;
