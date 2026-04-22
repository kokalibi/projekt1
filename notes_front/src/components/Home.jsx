import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center mt-5">
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="img-fluid mb-4" 
        style={{ maxWidth: '200px' }} 
      />
      <h1>Üdvözöljük a Jegyzetkezelőben!</h1>
      <div className="mt-4">
        <Link to="/notes" className="btn btn-primary btn-lg me-3">
          Jegyzetek
        </Link>
        <Link to="/about" className="btn btn-secondary btn-lg">
          Rólunk
        </Link>
      </div>
    </div>
  );
};

export default Home;