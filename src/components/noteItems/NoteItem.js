import React from 'react'
import { useContext } from 'react';
import noteContext from '../../context/note/noteContext'
import { Link } from 'react-router-dom';


export default function NoteItem(props){

    const noteState=useContext(noteContext);
    const {title,tag,description}=props.note;
    const {deleteNote,getNodeTeBoEdit}=noteState;
    
    
    return (
      <div>
         <div className=" card text-dark bg-light mb-1 my-4" style={{ maxWidth: '18rem', paddingLeft: '0px', paddingRight: '0px'}}>
              <h5 className="card-header">{title}</h5>
              <div className="card-body">
                <h5 className="card-title">{tag}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className='card-footer'>
              <div className="row align-items-center ">
                  <div className="col">
                    <i className="fa-solid fa-trash" onClick={()=>{deleteNote(props.note)}}></i>
                    <Link to={`/manage-note?id=${props.note._id}`} className="fa-solid fa-file-pen mx-3" onClick={()=>{getNodeTeBoEdit(props.note)}}></Link>
                  </div>
                  <div className="col nav justify-content-end">
                    <button className="btn btn-primary btn-sm" style={{lineHeight:'1.1'}}>View</button>
                  </div>
                </div>
            </div>
            </div>
      </div>
    )
}
