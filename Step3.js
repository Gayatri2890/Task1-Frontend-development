import React, { useState } from 'eact';

const Step3 = () => {
  const [projectType, setProjectType] = useState('');

  const handleInputChange = (e) => {
    setProjectType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('projectType', projectType);
    // Navigate to next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Project Type:</label>
      <select value={projectType} onChange={handleInputChange}>
        <option value="">Select a project type</option>
        <option value="Time & Materials">Time & Materials</option>
        <option value="Fixed Fee">Fixed Fee</option>
        {/* Add more options as needed */}
      </select>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step3;
