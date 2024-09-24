// Contact.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Add custom styling

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.send(
      'service_pwuhqwp',
      'template_i8rkqjm',
      formData,
      'W7HmuEJcskWJYVpxq'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message, please try again later.');
    });
  };

  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            id="message" 
            value={formData.message} 
            onChange={handleInputChange} 
            required 
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;