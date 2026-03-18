import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import TodoDetail from './components/TodoDetail';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '20px auto', fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/new" element={<NewTodo />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;