/* 
  File Name: contact.jsk
  Student's Name: Qihang Yang
  Student ID: 301277541
  Date: 2024-09-29
*/
import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Message Sent!');
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName}
                       onChange={handleChange} required/>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName}
                       onChange={handleChange} required/>
                <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber}
                       onChange={handleChange}/>
                <input type="email" name="email" placeholder="Email Address" value={formData.email}
                       onChange={handleChange} required/>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}
                          required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}
