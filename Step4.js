import React, { useState } from 'eact';

const Step4 = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('startDate', startDate);
    localStorage.setItem('endDate', endDate);
    // Navigate to next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Start Date:</
