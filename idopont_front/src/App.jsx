import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppointmentList from './components/AppointmentList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentDetails from './components/AppointmentDetails';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<AppointmentList />} />
          <Route path="/new" element={<AppointmentForm />} />
          <Route path="/idopontok/:id" element={<AppointmentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;