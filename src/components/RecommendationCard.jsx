const RecommendationCard = ({ result, onReset }) => (
    <div className="mt-6 p-6 bg-gray-100 shadow-inner rounded-2xl">
      <h3 className="text-xl font-bold text-blue-800 mb-4">Your Personalized Plan</h3>
  
      <p className="mb-2"><strong>BMI:</strong> {result.bmi}</p>
  
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700">Meal Timing:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {result.foodTiming.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
  
      <div className="mb-4">
        <h4 className="font-semibold text-gray-700">Workouts:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {result.workouts.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
  
      {result.dietTips.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-700">Diet Tips:</h4>
          <ul className="list-disc list-inside text-gray-600">
            {result.dietTips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
       <button
    onClick={() => window.print()}
    className="bg-green-500 text-white px-4 py-1 rounded text-sm hover:bg-green-600"
  >
    Print / Save as PDF
  </button>
      
      <button
        onClick={onReset}
        className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded text-sm"
      >
        Reset
      </button>
    </div>
  );
  
  export default RecommendationCard;
  