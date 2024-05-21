import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to HealthCare, your go-to platform for seamless doctor appointments. 
          Our website makes scheduling medical consultations easy and hassle-free. 
          Whether you need a general check-up, a specialist visit, or a telemedicine consultation, 
          HealthCare connects you with trusted healthcare professionals in just a few clicks.
          Browse through our extensive list of doctors and book your appointment at a convenient time. 
          Experience a new level of healthcare convenience with HealthCare, where your well-being is our priority.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          Welcome to HealthCare, a MERN stack project designed to test and enhance our development skills.
          This platform simplifies the process of scheduling doctor appointments,
          connecting patients with healthcare professionals effortlessly. Explore our features, 
          including doctor listings and easy appointment booking, 
          all built with MongoDB, Express, React, and Node.js. Experience the future of healthcare management with HealthCare.
          </p>
          <p>Happy Coding!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
