from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
try:
    model = pickle.load(open('trained_model.sav', 'rb'))
    print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
        # Extract features from the request
        features = np.array([
            float(data['pregnancies']),
            float(data['glucose']),
            float(data['bloodPressure']),
            float(data['skinThickness']),
            float(data['insulin']),
            float(data['bmi']),
            float(data['diabetesPedigreeFunction']),
            float(data['age'])
        ]).reshape(1, -1)
        
        # Make prediction
        prediction = model.predict(features)[0]
        
        # Get probability (distance from hyperplane can be used as a confidence measure)
        # For SVM, we can use decision_function to get distance from hyperplane
        confidence = abs(model.decision_function(features)[0])
        probability = min(1.0, confidence / 5.0)  # Normalize to [0,1]
        
        return jsonify({
            'prediction': int(prediction),
            'probability': float(probability)
        })
    
    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    app.run(debug=True)