import React, { useState } from 'eact';

const Step2 = () => {
  const [client, setClient] = useState('');

  const handleInputChange = (e) => {
    setClient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('client', client);
    // Navigate to next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Client:</label>
      <select value={client} onChange={handleInputChange}>
        <option value="">Select a client</option>
        <option value="New Client">New Client</option>
        {/* Add more options as needed */}
      </select>
      <button type="submit">Next</button>
    </form>
  );
};

export default Step2;
