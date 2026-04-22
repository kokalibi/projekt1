import React, { useEffect, useState } from 'react';
import * as service from '../services/service';

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({ title: '', content: '', category: 'egyéb' });

    useEffect(() => { loadNotes(); }, []);

    const loadNotes = async () => {
        try {
            const data = await service.getAll();
            setNotes(data);
        } catch (err) { alert("Hiba történt az adatok betöltésekor!"); }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        if (newNote.title.length > 255) return alert("A cím túl hosszú!"); 
        try {
            await service.createNote(newNote);
            setNewNote({ title: '', content: '', category: 'egyéb' });
            loadNotes();
        } catch (err) { alert("Hiba történt a mentés során!"); }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Biztos törlöd?")) { 
            await service.deleteNote(id);
            loadNotes();
        }
    };

    const getBadgeColor = (cat) => {
        if (cat === 'személyes') return 'bg-success'; 
        if (cat === 'munka') return 'bg-primary';    
        return 'bg-secondary';                       
    };

    return (
        <div>
            <h2>Új jegyzet</h2>
            <form onSubmit={handleCreate} className="mb-4">
                <input className="form-control mb-2" placeholder="Cím" required 
                    value={newNote.title} onChange={e => setNewNote({...newNote, title: e.target.value})} />
                <textarea className="form-control mb-2" placeholder="Tartalom" 
                    value={newNote.content} onChange={e => setNewNote({...newNote, content: e.target.value})} />
                <select className="form-control mb-2" value={newNote.category} 
                    onChange={e => setNewNote({...newNote, category: e.target.value})}>
                    <option value="személyes">Személyes</option>
                    <option value="munka">Munka</option>
                    <option value="egyéb">Egyéb</option>
                </select>
                <button className="btn btn-success">Mentés</button>
            </form>

            <div className="row">
                {notes.map(note => (
                    <div key={note.id} className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{note.title}</h5>
                                <span className={`badge ${getBadgeColor(note.category)} mb-2`}>{note.category}</span>
                                <p className="card-text">{note.content}</p>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(note.id)}>Törlés</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesList;