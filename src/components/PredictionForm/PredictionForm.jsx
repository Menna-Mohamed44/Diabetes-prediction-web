import React, { useState } from 'react';
import axios from 'axios';
import styles from './PredictionForm.module.css';

const PredictionForm = ({ onPredictionResult }) => {
  const [formData, setFormData] = useState({
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Check if all fields are filled
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
        isValid = false;
      }
    });

    // Validate numeric values
    if (formData.pregnancies && (isNaN(formData.pregnancies) || formData.pregnancies < 0)) {
      newErrors.pregnancies = 'Must be a positive number';
      isValid = false;
    }

    if (formData.glucose && (isNaN(formData.glucose) || formData.glucose < 0)) {
      newErrors.glucose = 'Must be a positive number';
      isValid = false;
    }

    if (formData.bloodPressure && (isNaN(formData.bloodPressure) || formData.bloodPressure < 0)) {
      newErrors.bloodPressure = 'Must be a positive number';
      isValid = false;
    }

    if (formData.skinThickness && (isNaN(formData.skinThickness) || formData.skinThickness < 0)) {
      newErrors.skinThickness = 'Must be a positive number';
      isValid = false;
    }

    if (formData.insulin && (isNaN(formData.insulin) || formData.insulin < 0)) {
      newErrors.insulin = 'Must be a positive number';
      isValid = false;
    }

    if (formData.bmi && (isNaN(formData.bmi) || formData.bmi < 0)) {
      newErrors.bmi = 'Must be a positive number';
      isValid = false;
    }

    if (formData.diabetesPedigreeFunction && (isNaN(formData.diabetesPedigreeFunction) || formData.diabetesPedigreeFunction < 0)) {
      newErrors.diabetesPedigreeFunction = 'Must be a positive number';
      isValid = false;
    }

    if (formData.age && (isNaN(formData.age) || formData.age < 0)) {
      newErrors.age = 'Must be a positive number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // In a real application, this would be your API endpoint
      const response = await axios.post('http://localhost:5000/predict', formData);
      
      onPredictionResult({
        result: response.data.prediction,
        probability: response.data.probability
      });
    } catch (error) {
      console.error('Error making prediction:', error);
      
      // For demo purposes, simulate a response
      // In a real app, you would handle the error properly
      onPredictionResult({
        result: Math.random() > 0.5 ? 1 : 0,
        probability: Math.random().toFixed(2)
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Enter Your Health Data</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="pregnancies">Pregnancies</label>
            <input
              type="number"
              id="pregnancies"
              name="pregnancies"
              value={formData.pregnancies}
              onChange={handleChange}
              placeholder="Number of pregnancies"
              className={errors.pregnancies ? styles.inputError : ''}
            />
            {errors.pregnancies && <span className={styles.errorMessage}>{errors.pregnancies}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="glucose">Glucose (mg/dL)</label>
            <input
              type="number"
              id="glucose"
              name="glucose"
              value={formData.glucose}
              onChange={handleChange}
              placeholder="Plasma glucose concentration"
              className={errors.glucose ? styles.inputError : ''}
            />
            {errors.glucose && <span className={styles.errorMessage}>{errors.glucose}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bloodPressure">Blood Pressure (mm Hg)</label>
            <input
              type="number"
              id="bloodPressure"
              name="bloodPressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              placeholder="Diastolic blood pressure"
              className={errors.bloodPressure ? styles.inputError : ''}
            />
            {errors.bloodPressure && <span className={styles.errorMessage}>{errors.bloodPressure}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="skinThickness">Skin Thickness (mm)</label>
            <input
              type="number"
              id="skinThickness"
              name="skinThickness"
              value={formData.skinThickness}
              onChange={handleChange}
              placeholder="Triceps skin fold thickness"
              className={errors.skinThickness ? styles.inputError : ''}
            />
            {errors.skinThickness && <span className={styles.errorMessage}>{errors.skinThickness}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="insulin">Insulin (μU/ml)</label>
            <input
              type="number"
              id="insulin"
              name="insulin"
              value={formData.insulin}
              onChange={handleChange}
              placeholder="2-Hour serum insulin"
              className={errors.insulin ? styles.inputError : ''}
            />
            {errors.insulin && <span className={styles.errorMessage}>{errors.insulin}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bmi">BMI (kg/m²)</label>
            <input
              type="number"
              id="bmi"
              name="bmi"
              value={formData.bmi}
              onChange={handleChange}
              placeholder="Body mass index"
              step="0.1"
              className={errors.bmi ? styles.inputError : ''}
            />
            {errors.bmi && <span className={styles.errorMessage}>{errors.bmi}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="diabetesPedigreeFunction">Diabetes Pedigree Function</label>
            <input
              type="number"
              id="diabetesPedigreeFunction"
              name="diabetesPedigreeFunction"
              value={formData.diabetesPedigreeFunction}
              onChange={handleChange}
              placeholder="Diabetes pedigree function"
              step="0.001"
              className={errors.diabetesPedigreeFunction ? styles.inputError : ''}
            />
            {errors.diabetesPedigreeFunction && <span className={styles.errorMessage}>{errors.diabetesPedigreeFunction}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="age">Age (years)</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age in years"
              className={errors.age ? styles.inputError : ''}
            />
            {errors.age && <span className={styles.errorMessage}>{errors.age}</span>}
          </div>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Predict Diabetes Risk'}
        </button>
      </form>
    </div>
  );
};

export default PredictionForm;