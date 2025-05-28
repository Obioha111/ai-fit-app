// src/App.jsx
import React, { useState } from 'react';
import UserForm from './pages/UserForm';
import RecommendationCard from './components/RecommendationCard';
import { getRecommendations } from './utils/recommend'; // make sure this returns an object with keys
import { Clock, Dumbbell, Lightbulb, HeartPulse } from 'lucide-react';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [recommendations, setRecommendations] = useState(null);

  const handleFormSubmit = (formData) => {
    const result = getRecommendations(formData); // result should be object with multiple keys
    setRecommendations(result);
    setSubmitted(true);
  };

  const iconMap = {
    bmi: <HeartPulse color="#dc2626" />,
    meal: <Clock color="#f59e0b" />,
    workout: <Dumbbell color="#8b5cf6" />,
    tips: <Lightbulb color="#facc15" />,
  };

  const imageMap = {
    bmi: "/images/bmi.png",
    meal: "/images/meal-timing.png",
    workout: "/images/workout-plan.png",
    tips: "/images/diet-tips.png",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-green-300 py-10 px-4 flex flex-col items-center">
      {!submitted ? (
        <UserForm onSubmit={handleFormSubmit} />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-green-900 mb-6">Your Recommendations</h1>

          <div className="space-y-4 max-w-2xl w-full">
            {Object.entries(recommendations).map(([key, value]) => (
              <RecommendationCard
                key={key}
                icon={iconMap[key]}
                title={value.title}
                subtitle={value.subtitle}
                image={imageMap[key]}
              />
            ))}
          </div>

          <button
            onClick={() => window.print()}
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
          >
            Print or Save as PDF
          </button>
        </>
      )}
    </div>
  );
}

export default App;
