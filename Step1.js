import React, { useState } from 'eact';

const Step1 = () => {
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('projectName', projectName);
    // Navigate to next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Project Name:</label>
      <input type="text" value={projectName} onChange={handleInputChange} />
      <button type="submit">Next</button>
    </form>
  );
};

export default Step1;
