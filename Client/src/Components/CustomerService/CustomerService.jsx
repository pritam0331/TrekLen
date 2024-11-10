// // import React from 'react';
// // import './CustomerService.css';

// // function CustomerService() {

// //   return (
// //     <section className="section">
// //     <div className="container1">
// //       <div className="contact-container">
// //         <div className="contact-left">
// //           <h1>We'd love to help</h1>
// //           <h2>Reach out and we will get in touch within 24 hours</h2>
// //           <p>Or reach us via: <a href="mailto:TrekLen@gmail.com">TrekLen@gmail.com</a></p>
// //           <form className="contact-form">
// //             <div className="input-group">
// //               <input type="text" placeholder="First name" required />
// //               <input type="text" placeholder="Last name" required />
// //             </div>
// //             <input type="email" placeholder="Email" required />
// //             <input type="text" placeholder='Phone-no' required/>
// //             <textarea placeholder="Message" required></textarea>
// //             <div className="action-group">
// //               <button type="submit" className="send-btn">Send message</button>
// //             </div>
// //           </form>
// //         </div>
// //         <div className="contact-right">
// //         </div>
// //       </div>
// //     </div>
// //     </section>
// //   );
// // }

// // export default CustomerService;

// import React, { useState } from 'react';
// import './CustomerService.css';

// const CustomerService = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   // Error state
//   const [errors, setErrors] = useState({});

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   // Validate form
//   const validateForm = () => {
//     const newErrors = {};

//     // First name validation
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     } else if (formData.firstName.length < 2) {
//       newErrors.firstName = 'First name must be at least 2 characters';
//     }

//     // Last name validation
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     } else if (formData.lastName.length < 2) {
//       newErrors.lastName = 'Last name must be at least 2 characters';
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }

//     // Phone validation
//     const phoneRegex = /^\d{10}$/;
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
//       newErrors.phone = 'Please enter a valid 10-digit phone number';
//     }

//     // Message validation
//     if (!formData.message.trim()) {
//       newErrors.message = 'Message is required';
//     } else if (formData.message.length < 10) {
//       newErrors.message = 'Message must be at least 10 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     if (validateForm()) {
//       // Form is valid - you can send the data to your backend here
//       console.log('Form submitted:', formData);
//       // Reset form after successful submission
//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         message: ''
//       });
//     }
//   };

//   return (
//     <section className="section">
//       <div className="container1">
//         <div className="contact-container">
//           <div className="contact-left">
//             <h1>We'd love to help</h1>
//             <h2>Reach out and we will get in touch within 24 hours</h2>
//             <p>Or reach us via: <a href="mailto:TrekLen@gmail.com">TrekLen@gmail.com</a></p>
            
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="input-group">
//                 <div className="input-wrapper">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First name"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className={errors.firstName ? 'error' : ''}
//                   />
//                   {errors.firstName && <span className="error-message">{errors.firstName}</span>}
//                 </div>
                
//                 <div className="input-wrapper">
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last name"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className={errors.lastName ? 'error' : ''}
//                   />
//                   {errors.lastName && <span className="error-message">{errors.lastName}</span>}
//                 </div>
//               </div>

//               <div className="input-wrapper">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className={errors.email ? 'error' : ''}
//                 />
//                 {errors.email && <span className="error-message">{errors.email}</span>}
//               </div>

//               <div className="input-wrapper">
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone-no"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className={errors.phone ? 'error' : ''}
//                 />
//                 {errors.phone && <span className="error-message">{errors.phone}</span>}
//               </div>

//               <div className="input-wrapper">
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className={errors.message ? 'error' : ''}
//                 ></textarea>
//                 {errors.message && <span className="error-message">{errors.message}</span>}
//               </div>

//               <div className="action-group">
//                 <button type="submit" className="send-btn">Send message</button>
//               </div>
//             </form>
//           </div>
//           <div className="contact-right">
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerService;

import React, { useState } from 'react';
import './CustomerService.css';

const CustomerService = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  // Error and loading states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: '', message: '' });

      try {
        const response = await fetch('http://localhost:3004/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullname: {
              firstname: formData.firstName,
              lastname: formData.lastName
            },
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          })
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: data.alert || 'Message sent successfully!'
          });
          // Reset form after successful submission
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          setSubmitStatus({
            type: 'error',
            message: data.alert || 'Failed to send message. Please try again.'
          });
        }
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'An error occurred. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="section">
      <div className="container1">
        <div className="contact-container">
          <div className="contact-left">
            <h1>We'd love to help</h1>
            <h2>Reach out and we will get in touch within 24 hours</h2>
            <p>Or reach us via: <a href="mailto:TrekLen@gmail.com">TrekLen@gmail.com</a></p>
            
            {submitStatus.message && (
              <div className={`alert ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                    disabled={isSubmitting}
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="input-wrapper">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone-no"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  disabled={isSubmitting}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="input-wrapper">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="action-group">
                <button 
                  type="submit" 
                  className="send-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send message'}
                </button>
              </div>
            </form>
          </div>
          <div className="contact-right">
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;