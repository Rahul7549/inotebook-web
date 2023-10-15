import React, { useEffect, useState } from 'react'
import noteContext from '../../context/note/noteContext'
import { useContext } from 'react';

export default function ManageNote() {
  const noteState = useContext(noteContext);
  const { fetchNoteById, editNote, addNote } = noteState;
  const [note, setNotes] = useState({ user: '', tag: '', description: '', id: '' })

  const idParams = new URLSearchParams(window.location.search).get("id")
  const [id, setId] = useState(idParams);

  const setNode = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value })
    // console.log(note);
  }

  const createNote = async (e) => {
    e.preventDefault();
    addNote(note)
  }

  const updateNote = async (e) => {
    e.preventDefault();
    editNote(note)
  }

  useEffect((e) => {
    if(id!=null&&id!=undefined){
    fetchNoteById(id)
      .then((response) => response.json())
      .then((data) => setNotes(data));
    }
    console.log(note);
  }, [note.state])

  return (
    <div>
      <div className='container'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Email address</label>
          <input type="text" value={note.title} className="form-control" id="title" name='title' onChange={setNode} placeholder="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Email address</label>
          <input type="text" value={note.tag} className="form-control" id="tag" name='tag' onChange={setNode} placeholder="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" value={note.description} id="description" name='description' rows="4" onChange={setNode}></textarea>
        </div>
        {
          id != null ?
            <button type="button" className="btn btn-primary btn-sm" onClick={updateNote}>Submitt</button>
            :
            <button type="button" className="btn btn-primary btn-sm" onClick={createNote}>Submitt</button>

        }
      </div>
    </div>
  )
}
