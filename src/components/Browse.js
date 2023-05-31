import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { AiOutlineLock } from "react-icons/ai";
import './Browse.css'


function Browse() {
    const [isOpen, setIsOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('');

    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login successful');
        setErrorPasswordMessage('');
        if (password === '1234') {
            // Successful login
            console.log('Login successful');
            // Reset form fields
            alert("Logged In");
            navigate('/customer/movie-details');
        } else if (password === '5678') {

            navigate('/manager/movie-details');

        } else if (password === '') {

            setErrorPasswordMessage('* Please enter a valid password.');

        } else {
            setErrorPasswordMessage('* Invalid password.');
        }
    }
    const headingStyles = {
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(7,64,133,1) 1%, rgba(8,4,83,1) 31%, rgba(208,23,23,1) 100%)',
    };

    return (
        <div className='profiles-container d-flex flex-row justify-content-center align-items-center text-center'>
            <div className='container'>
                <div className='row'>
                    <h1 className='pb-4'>Who's watching?</h1>
                    <div className='col-6 col-md-4'>
                        <div className='card d-flex flex-column align-items-center' onClick={() => setIsOpen(true)}>
                            <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg' className='profile-logo' alt='profile1' />
                            <h2>Customer</h2>
                            <AiOutlineLock className="lock-logo" />
                        </div>
                        {isOpen && (
                            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
                                <form onSubmit={handleSubmit} style={headingStyles}>
                                    <h1>Enter your PIN to access this profile.</h1>
                                    <input type="password" placeholder="Enter password" className="input-field-profile" value={password} onChange={handlePasswordChange} />
                                    <button type="submit" className="submit-profile-btn">Submit</button>
                                    {errorPasswordMessage && <p className='error-msg'>{errorPasswordMessage}</p>}
                                </form>
                            </Modal>
                        )}
                    </div>
                    <div className='col-6 col-md-4'>
                        <div className='card d-flex flex-column align-items-center' onClick={() => setIsOpen(true)}>
                            <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg' className='profile-logo' alt='profile2' />
                            <h2>Manager</h2>
                            <AiOutlineLock className="lock-logo" />
                        </div>
                        {isOpen && (
                            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} ariaHideApp={false}>
                                <form onSubmit={handleSubmit} style={headingStyles}>
                                    <h1>Enter your PIN to access this profile.</h1>
                                    <input type="password" placeholder="Enter password" className="input-field-profile" value={password} onChange={handlePasswordChange} />
                                    <button type="submit" className="submit-profile-btn">Submit</button>
                                    {errorPasswordMessage && <p className='error-msg'>{errorPasswordMessage}</p>}
                                </form>
                            </Modal>
                        )}
                    </div>
                    <div className='col-6 col-md-4'>
                        <div className='card d-flex flex-column align-items-center'>
                            <img src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' className='profile-logo' alt='profile3' />
                            <h2>Admin</h2>
                            <AiOutlineLock className="lock-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse