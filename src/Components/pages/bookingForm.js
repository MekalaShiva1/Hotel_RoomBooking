import React, { useState } from 'react';

function BookingForm() {
    const [formData, setFormData] = useState({
        username: '',
        mobileNumber: '',
        checkInDate: '',
        checkOutDate: '',
    });

    const [errors, setErrors] = useState({});


    const validate = () => {
        const errors = {};
        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }
        if (!formData.mobileNumber) {
            errors.mobileNumber = 'Mobile number is required';
        } else if (!phoneRegex.test(formData.mobileNumber)) {
            errors.mobileNumber = 'Enter a valid 10-digit mobile number';
        }
        if (!formData.checkInDate) {
            errors.checkInDate = 'Check-in date is required';
        }
        if (!formData.checkOutDate) {
            errors.checkOutDate = 'Check-out date is required';
        } else if (formData.checkOutDate <= formData.checkInDate) {
            errors.checkOutDate = 'Check-out date must be after check-in date';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully');
        }
    };

  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={headingStyle}>Room Booking Form</h2>
            <form onSubmit={handleSubmit}>
                <div style={fieldStyle}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.username && <p style={errorStyle}>{errors.username}</p>}
                </div>
                <div style={fieldStyle}>
                    <label>Mobile Number:</label>
                    <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.mobileNumber && <p style={errorStyle}>{errors.mobileNumber}</p>}
                </div>
                <div style={fieldStyle}>
                    <label>Check-In Date:</label>
                    <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.checkInDate && <p style={errorStyle}>{errors.checkInDate}</p>}
                </div>
                <div style={fieldStyle}>
                    <label>Check-Out Date:</label>
                    <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    {errors.checkOutDate && <p style={errorStyle}>{errors.checkOutDate}</p>}
                </div>
                <button type="submit" style={submitStyle}>Submit</button>
            </form>
        </div>
    );
}


const formContainerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headingStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
};

const fieldStyle = {
    marginBottom: '15px',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginTop: '5px',
};

const errorStyle = {
    color: 'red',
    fontSize: '0.9em',
};

const submitStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '16px',
    cursor: 'pointer',
};
export default BookingForm;