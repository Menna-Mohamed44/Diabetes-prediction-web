import React, { useState } from 'react';
import PredictionForm from '../../components/PredictionForm/PredictionForm';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';
import styles from './Prediction.module.css';

const Prediction = () => {
  const [predictionResult, setPredictionResult] = useState(null);

  const handlePredictionResult = (result) => {
    setPredictionResult(result);
    
    // Scroll to the result section
    setTimeout(() => {
      const resultElement = document.getElementById('result-section');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={styles.prediction}>
      <div className="container">
        <div className={styles.header}>
          <h1>Diabetes Risk Prediction</h1>
          <p>
            Enter your health metrics below to get an assessment of your diabetes risk. 
            This tool uses a machine learning model trained on the Pima Indians Diabetes Database.
          </p>
        </div>
        
        <PredictionForm onPredictionResult={handlePredictionResult} />
        
        {predictionResult && (
          <div id="result-section" className={styles.resultSection}>
            <ResultDisplay 
              result={predictionResult.result} 
              probability={predictionResult.probability} 
            />
          </div>
        )}
        
        <div className={styles.infoSection}>
          <h2>Understanding Your Input Data</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>Pregnancies</h3>
              <p>Number of times pregnant. This is a risk factor as gestational diabetes can increase the risk of type 2 diabetes later in life.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Glucose</h3>
              <p>Plasma glucose concentration after a 2-hour oral glucose tolerance test. Higher levels may indicate prediabetes or diabetes.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Blood Pressure</h3>
              <p>Diastolic blood pressure (mm Hg). High blood pressure is often associated with diabetes and can increase complications.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Skin Thickness</h3>
              <p>Triceps skin fold thickness (mm). This is a measure of body fat and can be an indicator of insulin resistance.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Insulin</h3>
              <p>2-Hour serum insulin (μU/ml). Abnormal insulin levels can indicate insulin resistance or insufficient insulin production.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>BMI</h3>
              <p>Body mass index (weight in kg/(height in m)²). Higher BMI is associated with increased risk of type 2 diabetes.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Diabetes Pedigree Function</h3>
              <p>A function that scores likelihood of diabetes based on family history. Higher values indicate stronger family history.</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>Age</h3>
              <p>Age in years. Risk of type 2 diabetes increases with age, particularly after 45 years.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prediction;