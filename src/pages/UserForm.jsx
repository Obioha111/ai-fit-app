// src/pages/UserForm.jsx
import React, { useState } from 'react';
import FormInput from '../components/form/FormInput';
import FormSelect from '../components/form/FormSelect';

const UserForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activity: '',
    goal: '',
    condition: '',
  });

  const bmi = () => {
    const h = form.height / 100;
    return form.weight && form.height ? (form.weight / (h * h)).toFixed(1) : '';
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(form); // lift form data to App.jsx
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-700">Enter Your Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" />
          <FormSelect name="gender" value={form.gender} onChange={handleChange} options={['male', 'female']} placeholder="Gender" />
          <FormInput type="number" name="weight" value={form.weight} onChange={handleChange} placeholder="Weight (kg)" />
          <FormInput type="number" name="height" value={form.height} onChange={handleChange} placeholder="Height (cm)" />
          <FormSelect name="activity" value={form.activity} onChange={handleChange} placeholder="Activity Level" options={['bedridden', 'light', 'active', 'very-active']} />
          <FormSelect name="goal" value={form.goal} onChange={handleChange} placeholder="Goal" options={['lose', 'maintain', 'gain']} />
          <FormSelect name="condition" value={form.condition} onChange={handleChange} placeholder="Medical Condition" options={['none', 'diabetes', 'hypertension']} />
        </div>

        <p className="text-center text-sm text-gray-500">
          Your BMI: <span className="font-semibold">{bmi()}</span>
        </p>

        <div className="flex justify-center">
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
            Get Recommendations
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
