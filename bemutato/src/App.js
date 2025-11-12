import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom'
import CounrtyQuiz from "./components/ContryQuiz";

function App() {
  return (
    <>
    <CounrtyQuiz/>
    </>
  )
}

export default App;
