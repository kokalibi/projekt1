import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="status" style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Az oldal nem található</h1>
      <p>Sajnáljuk, de a keresett oldal nem létezik.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Vissza a főoldalra
      </Link>
    </div>
  );
};

export default NotFound;