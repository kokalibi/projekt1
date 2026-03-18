import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    try {
      const res = await axios.get('/api/todos'); // [cite: 21]
      setTodos(res.data);
    } catch (err) {
      console.error("Hiba a betöltéskor", err);
    }
  };

  useEffect(() => { fetchTodos(); }, []);

  const toggleStatus = async (todo) => {
    const updatedStatus = todo.completed === 1 ? 0 : 1; // MySQL-ben gyakran 0/1 [cite: 44]
    await axios.put(`/api/todos/${todo.id}`, { ...todo, completed: updatedStatus }); // [cite: 21]
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    if (window.confirm("Biztosan törlöd?")) {
      await axios.delete(`/api/todos/${id}`); // [cite: 21]
      fetchTodos();
    }
  };

  return (
    <div>
      <h1>Todo Lista</h1>
      <button onClick={() => navigate('/new')}>Új feladat</button> {/* [cite: 18] */}
      <hr />
      {todos.map(todo => (
        <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <input 
            type="checkbox" 
            checked={todo.completed === 1} 
            onChange={() => toggleStatus(todo)} 
          /> {/* [cite: 16] */}
          <span 
            onClick={() => navigate(`/todos/${todo.id}`)} 
            style={{ cursor: 'pointer', flexGrow: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </span> {/* [cite: 19] */}
          <button onClick={() => deleteTodo(todo.id)}>Törlés</button> {/* [cite: 17] */}
        </div>
      ))}
    </div>
  );
};

export default TodoList;