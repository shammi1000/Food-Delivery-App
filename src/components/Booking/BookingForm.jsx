// src/components/BookingForm/BookingForm.js
import React from 'react';
import './BookingForm.css';

const BookingForm = ({ onSubmit }) => {
  return (
    <div className='booking__form-container'>
    <form className="booking__form" onSubmit={onSubmit}>
      <h2 className='headtext__cormorant'>Book a Table</h2>
      <label className='p__opensans'>
        No.of Persons:
        <input type="number" name="persons" min="1" required />
      </label>
      <label className='p__opensans'>
        Date:
        <input type="date" name="date" required />
      </label>
      <label className='p__opensans'>
        Time:
        <input type="time" name="time" required />
      </label>
      <button type="submit">Book Now</button>
    </form>
    </div>
  );
};

export default BookingForm;
