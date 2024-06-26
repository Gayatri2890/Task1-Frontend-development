import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import './Form.css';

function Form() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Initialize form data state
    name: '',
    email: '',
    // Add more form fields as needed
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 4:
      return <Step4 prevStep={prevStep} formData={formData} />;
    default:
      return null;
  }
}

export default Form;
