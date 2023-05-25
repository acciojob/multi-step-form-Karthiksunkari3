import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Step 2: Car Information</h2>
          <input
            type="text"
            name="make"
            placeholder="Brand"
            value={formData.make}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            required
          />
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Step 3: Payment Information</h2>
          {/* Payment fields here */}
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default MultiStepForm;
