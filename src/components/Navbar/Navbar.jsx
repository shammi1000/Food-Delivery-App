import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; 
import { MdOutlineRestaurantMenu } from 'react-icons/md'; 
import { FaUserCircle } from 'react-icons/fa'; // User icon
import Modal from '../LogIn/Modal';
import images from '../../constants/images';
import LoginForm from '../LogIn/logIn';
import BookingForm from '../Booking/BookingForm';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [showLogin, setShowLogin] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false); // State to show booking form
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleLoginClick = () => setShowLogin(true);
  const closeModal = () => {
    setShowLogin(false);
    setShowBookingForm(false); // Close booking form if open
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate login
    closeModal(); // Close the modal after logging in
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Simulate logout
  };

  const handleBookingClick = () => setShowBookingForm(true);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Table is booked!');
    closeModal();
    window.location.hash = '#home'; // Navigate back to home
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        {isLoggedIn ? (
          <>
            <FaUserCircle color="#fff" size={27} />
            <a href="/" className='p__opensans' onClick={handleLogout}>Log Out</a>
            <div />
            <a href="#book" className='p__opensans' onClick={handleBookingClick}>Book Table</a>
          </>
        ) : (
          <a href="#login" className='p__opensans' onClick={handleLoginClick}>Log In / Register</a>
        )}
      </div>
      {showLogin && (
        <Modal onClose={closeModal}>
          <LoginForm onClose={handleLogin} />
        </Modal>
      )}
      {showBookingForm && (
        <Modal onClose={closeModal}>
          <BookingForm onSubmit={handleBookingSubmit} />
        </Modal>
      )}
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu 
          color='#fff' 
          className='app__hamburger' 
          fontSize={27} 
          onClick={() => setToggleMenu(true)} 
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu 
              fontSize={27} 
              className='overlay__close' 
              onClick={() => setToggleMenu(false)} 
            />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
