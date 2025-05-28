// src/components/RecommendationCard.jsx
import React from 'react';

const Section = ({ title, items }) => (
  <div className="bg-white rounded-2xl shadow p-4 mb-6 w-full">
    <h2 className="text-xl font-bold mb-3 text-green-700">{title}</h2>
    {items.map((item, idx) => (
      <div key={idx} className="flex justify-between items-center border-b last:border-b-0 py-2">
        <p className="text-gray-800 w-3/4">{item.text}</p>
        <img
          src={`/images/${item.tag}.png`}
          alt={item.tag}
          className="w-16 h-16 object-contain"
        />
      </div>
    ))}
  </div>
);

const RecommendationCard = ({ recommendations }) => {
  if (!recommendations) return null;

  const { bmi, bmiCategory, foodTiming, workouts, dietTips } = recommendations;

  return (
    <div className="bg-green-50 min-h-screen p-6 flex justify-center items-start">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold text-green-800 mb-2">Your Health Summary</h1>
          <p className="text-lg text-gray-700">
            BMI: <strong>{bmi}</strong> – <span className="text-green-600">{bmiCategory}</span>
          </p>
        </div>

        <Section title="Meal Timing" items={foodTiming} />
        <Section title="Workout Recommendations" items={workouts} />
        <Section title="Diet Tips" items={dietTips} />
      </div>
    </div>
  );
};

export default RecommendationCard;
