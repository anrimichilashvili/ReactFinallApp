import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Content.css'; // Ensure the path to your CSS file is correct

function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    console.log(data);  // You can replace this with any other logic to handle form data
    alert("Form submitted! Check console for data.");
  };

  const toggleTheme = () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
  };

  return (
    <div className="content">
      <button onClick={toggleTheme} className="toggle-theme">
        Toggle Theme
      </button>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form-style">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" className="form-input" {...register('name', { required: "Name is required" })} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" className="form-input" {...register('email', { required: "Email is required" })} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" className="form-textarea" {...register('message', { required: "Message is required" })} />
          {errors.message && <span className="error">{errors.message.message}</span>}
        </div>
        <button type="submit" className="form-button">Send</button>
      </form>
    </div>
  );
}

export default FormPage;
