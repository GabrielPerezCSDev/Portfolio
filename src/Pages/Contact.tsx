// Contact.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    emailjs.send(
      'service_pwuhqwp',
      'template_i8rkqjm',
      formData,
      'W7HmuEJcskWJYVpxq'
    )
    .then((result) => {
      console.log(result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, (error) => {
      console.log(error.text);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-subtitle">Let's discuss opportunities and collaborations</p>

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
              placeholder="Enter your name"
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
              placeholder="Enter your email"
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
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className={`submit-button ${status !== 'idle' ? 'submitting' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>Sending...</>
            ) : (
              <>
                Send Message
                <Send className="button-icon" size={18} />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="status-message success">
              Message sent successfully!
            </div>
          )}
          
          {status === 'error' && (
            <div className="status-message error">
              <AlertCircle size={18} />
              Failed to send message. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;