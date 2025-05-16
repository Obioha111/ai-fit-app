// src/utils/recommend.js

function calculateBMI(weight, height) {
    return weight && height ? (weight / ((height / 100) ** 2)).toFixed(1) : null;
  }
  
  function getBMICategory(bmi) {
    const val = parseFloat(bmi);
    if (val < 18.5) return 'Underweight';
    if (val < 25) return 'Normal';
    if (val < 30) return 'Overweight';
    return 'Obese';
  }
  
  function getFoodTiming(goal, age) {
    const meals = {
      lose: ['7:00 AM (light breakfast)', '12:30 PM (high protein lunch)', '6:00 PM (low carb dinner)'],
      maintain: ['8:00 AM', '1:00 PM', '7:00 PM'],
      gainYoung: ['9:00 AM (calorie-rich breakfast)', '2:00 PM (carb-heavy lunch)', '8:30 PM (protein dinner)'],
      gainAdult: ['8:30 AM', '1:30 PM', '7:30 PM']
    };
  
    if (goal === 'lose') return meals.lose;
    if (goal === 'maintain') return meals.maintain;
    return age < 25 ? meals.gainYoung : meals.gainAdult;
  }
  
  function getWorkouts(activity, age, gender) {
    const base = {
      bedridden: ['Gentle stretching', 'Chair yoga', 'Breathing exercises'],
      light: ['Walking 30 mins/day', 'Light yoga', 'Beginner bodyweight workouts'],
      active: ['Jogging', 'Strength training (3x/week)', 'HIIT (2x/week)'],
      'very-active': ['Gym training 5x/week', 'Heavy lifting', 'Advanced HIIT']
    };
  
    const workouts = [...(base[activity] || base.light)];
  
    if (age > 50) {
      workouts.push('Low-impact cardio', 'Mobility exercises');
    }
  
    if (gender === 'female') {
      workouts.push('Pilates', 'Tone-focused strength sets');
    } else if (gender === 'male') {
      workouts.push('Muscle mass-focused hypertrophy routines');
    }
  
    return workouts;
  }
  
  function getDietTips(goal, condition, bmiCategory, age) {
    const tips = [];
  
    // Goal-based
    if (goal === 'lose') tips.push('Reduce sugar intake', 'Control portions', 'Avoid late-night snacks');
    if (goal === 'gain') tips.push('Increase protein intake', 'Eat 5-6 times/day', 'Add healthy carbs');
    if (goal === 'maintain') tips.push('Balance protein and carbs', 'Stay hydrated');
  
    // Medical
    if (condition === 'diabetes') tips.push('Eat low-glycemic foods', 'Avoid sugary drinks', 'Space meals evenly');
    if (condition === 'hypertension') tips.push('Limit salt', 'Increase potassium intake', 'Avoid red meat');
  
    // BMI
    if (bmiCategory === 'Underweight') tips.push('Add nutrient-dense snacks');
    if (bmiCategory === 'Overweight' || bmiCategory === 'Obese') tips.push('Track daily calorie intake');
  
    // Age
    if (age > 50) tips.push('Take calcium & vitamin D', 'Avoid high-fat red meat');
  
    return tips;
  }
  
  export function getRecommendations(user) {
    const { age, gender, weight, height, activity, goal, condition } = user;
  
    const bmi = calculateBMI(weight, height);
    const bmiCategory = getBMICategory(bmi);
  
    const foodTiming = getFoodTiming(goal, age);
    const workouts = getWorkouts(activity, age, gender);
    const dietTips = getDietTips(goal, condition, bmiCategory, age);
  
    return {
      bmi,
      bmiCategory,
      foodTiming,
      workouts,
      dietTips
    };
  }
  