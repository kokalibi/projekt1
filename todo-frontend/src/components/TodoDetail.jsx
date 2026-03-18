import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const TodoDetail = () => {
  const { id } = useParams(); // 
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`/api/todos/${id}`) // [cite: 38]
      .then(res => setTodo(res.data))
      .catch(() => setError(true)); // [cite: 39]
  }, [id]);

  if (error) return <div><h3>404 - A feladat nem létezik!</h3><button onClick={() => navigate('/')}>Vissza</button></div>;
  if (!todo) return <div>Betöltés...</div>;

  return (
    <div>
      <h2>Feladat részletei</h2>
      <p><strong>Cím:</strong> {todo.title}</p> {/* [cite: 33] */}
      <p><strong>Állapot:</strong> {todo.completed ? 'Kész' : 'Folyamatban'}</p> {/* [cite: 34] */}
      <p><strong>Létrehozva:</strong> {todo.created_at || 'Nincs adat'}</p> {/* [cite: 35] */}
      <button onClick={() => navigate('/')}>Vissza</button> {/* [cite: 36] */}
    </div>
  );
};

export default TodoDetail;