import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);

        // หมายเหตุ: คุณต้องสมัคร EmailJS และนำ Key มาใส่ที่นี่เพื่อใช้งานจริง
        // 1. Service ID
        // 2. Template ID
        // 3. Public Key
        emailjs.sendForm(
            'service_m4h194p',
            'template_drpp32e',
            form.current,
            'vGisM7Ka1N7t7rK-M'
        )
            .then((result) => {
                console.log(result.text);
                setIsSent(true);
                setIsSending(false);
                form.current.reset();
                setTimeout(() => setIsSent(false), 5000); // หายไปหลังจาก 5 วินาที
            }, (error) => {
                console.log(error.text);
                alert('เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง');
                setIsSending(false);
            });
    };

    return (
        <div className="contact-section">
            <h2>Contact Me</h2>

            <div className="contact-container">
                {/* Info Column */}
                <div className="contact-info">
                    <div className="info-item">
                        <div className="info-icon">
                            <Icon icon="mdi:email" width="24" />
                        </div>
                        <div className="info-content">
                            <h3>Email</h3>
                            <p>bankok44man@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <Icon icon="mdi:phone" width="24" />
                        </div>
                        <div className="info-content">
                            <h3>Phone</h3>
                            <p>099 170 5151</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <div className="info-icon">
                            <Icon icon="mdi:map-marker" width="24" />
                        </div>
                        <div className="info-content">
                            <h3>Location</h3>
                            <p>Chonburi, Thailand</p>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/bankox1437" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:github" width="22" />
                        </a>
                        <a href="https://www.instagram.com/banknk_14/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:instagram" width="22" />
                        </a>
                        <a href="https://www.facebook.com/narongrat.kaenmuaug/" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <Icon icon="mdi:facebook" width="22" />
                        </a>
                    </div>
                </div>

                {/* Form Column */}
                <div className="contact-form-container">
                    {isSent ? (
                        <div className="success-message">
                            <Icon icon="mdi:check-circle" width="60" color="#00abf0" />
                            <h3>Message Sent!</h3>
                            <p>Thank you for reaching out. I will get back to you soon.</p>
                            <button className="submit-btn" onClick={() => setIsSent(false)}>Send another message</button>
                        </div>
                    ) : (
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="user_name">Name</label>
                                <input type="text" id="user_name" name="user_name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_email">Email</label>
                                <input type="email" id="user_email" name="user_email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                                <Icon icon={isSending ? "mdi:loading" : "mdi:send"} className={isSending ? "spin" : ""} width="18" />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Contact;
