import React, {useContext, useEffect } from 'react'
import '../notes/NotesStyles.css'
import noteContext from '../../context/note/noteContext'
import NoteItem from '../noteItems/NoteItem';
export default function Notes(){

  const noteState=useContext(noteContext);
  const {notes, fetchNotes}=noteState;

  useEffect(()=>{
    fetchNotes()
    console.log("note",notes);
  },[])

    return (
      <div className='note-container'>
      <div className='container justify-content-center'>
        <div className='row '>

          { notes.length>=0 ?
            notes.map((note)=>{
              return (
                <div className='col-md-4'>
                  <NoteItem Key={note._id} note={note}/>
                </div>
              )
            }):''
          }
        </div>
      </div>
      </div>
    )
}
