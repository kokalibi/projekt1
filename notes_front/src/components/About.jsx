import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const aboutText = "Cégünk elkötelezett a professzionális jegyzetkezelési megoldások iránt. " +
                    "A Mokás Jegyzetek csapata segít Önnek rendszerezni mindennapjait.";

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4 text-center">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="mx-auto d-block mb-3" 
          style={{ maxWidth: '100px' }} 
        />
        
        <h2>Rólunk</h2>
        <hr />
    
        <p className="lead text-muted">
          {aboutText}
        </p>

        <div className="mt-4">
          <button 
            className="btn btn-outline-dark" 
            onClick={() => navigate('/')}
          >
            Vissza a főoldalra
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;