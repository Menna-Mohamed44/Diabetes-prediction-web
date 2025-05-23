import React from 'react';
import styles from './ResultDisplay.module.css';

const ResultDisplay = ({ result, probability }) => {
  const isDiabetic = result === 1;
  
  return (
    <div className={`${styles.resultContainer} ${isDiabetic ? styles.diabetic : styles.nonDiabetic}`}>
      <h2 className={styles.resultTitle}>Prediction Result</h2>
      
      <div className={styles.resultCard}>
        <div className={styles.resultIcon}>
          {isDiabetic ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          )}
        </div>
        
        <div className={styles.resultText}>
          <h3>{isDiabetic ? 'Positive' : 'Negative'}</h3>
          <p>
            {isDiabetic 
              ? 'The model predicts that you may have a risk of diabetes.' 
              : 'The model predicts that you may not have a risk of diabetes.'}
          </p>
          <div className={styles.probability}>
            <span>Confidence: {(probability * 100).toFixed(1)}%</span>
            <div className={styles.progressBar}>
              <div 
                className={styles.progress} 
                style={{ width: `${probability * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.disclaimer}>
        <p>
          <strong>Disclaimer:</strong> This prediction is based on a machine learning model and should not be considered as medical advice. 
          Please consult with a healthcare professional for proper diagnosis and treatment.
        </p>
      </div>
    </div>
  );
};

export default ResultDisplay;