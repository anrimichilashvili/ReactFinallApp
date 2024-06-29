import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '../styles/FeedbackForm.css';  // Make sure the path to your CSS file is correct

function FeedbackForm() {
    const schema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Must be a valid email').required('Email is required'),
        feedback: Yup.string().required('Feedback is required')
    });

    const [feedbackList, setFeedbackList] = useState([]);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showForm, setShowForm] = useState(true);
    const [theme, setTheme] = useState('light');

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setFeedbackList([...feedbackList, data]);
        reset();
    };

    const toggleFeedbackDisplay = () => {
        setShowFeedback(!showFeedback);
        setShowForm(!showForm);
    };

    const toggleTheme = () => {
        const isDarkMode = theme === 'light';
        setTheme(isDarkMode ? 'dark' : 'light');
        document.body.classList.toggle('dark-mode', isDarkMode);
    };

    return (
        <div>
            <button onClick={toggleTheme} className="toggle-theme">
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </button>
            {showForm && (
                <form onSubmit={handleSubmit(onSubmit)} className="feedback-form">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" {...register('name')} />
                        <p className="error">{errors.name?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" {...register('email')} />
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="feedback">Feedback:</label>
                        <textarea {...register('feedback')}></textarea>
                        <p className="error">{errors.feedback?.message}</p>
                    </div>
                    <button type="submit">Submit Feedback</button>
                    <button type="button" onClick={toggleFeedbackDisplay} className="see-feedback-button">
                        {showFeedback ? 'Hide Feedback' : 'See Feedback'}
                    </button>
                </form>
            )}
            {showFeedback && (
                <div>
                    <div className="feedback-display">
                        <h2 id='feedbackEntries'>Feedback Entries</h2>
                        {feedbackList.map((feedback, index) => (
                            <div key={index} className="feedback-entry">
                                <p><strong>Name:</strong> {feedback.name}</p>
                                <p><strong>Email:</strong> {feedback.email}</p>
                                <p><strong>Feedback:</strong> {feedback.feedback}</p>
                            </div>
                        ))}
                    </div>
                    <button id='hideFeedBackButton' type="button" onClick={toggleFeedbackDisplay} className="see-feedback-button">
                        Hide Feedback
                    </button>
                </div>
            )}
        </div>
    );
}

export default FeedbackForm;
