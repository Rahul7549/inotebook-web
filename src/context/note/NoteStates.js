import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const [notes, setNotes] = useState([]);
    const [nodeToEdit, setNodeToEdit]=useState({description:'',title:'',_id:'',user:''});
    const host = 'http://localhost:5000/api';
    const state = {
        name: 'rahul',
        class: '10th'
    }

    const fetchNotes = async () => {
        let url = `${host}/note/getnote`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDAzOWRiYmVhOWQzNDU0M2EwZDM5In0sImlhdCI6MTY5NjQ3MzM3N30.J_Ic3b3WlgtNhMd2T70PEHs6X5qKE2YVpRGQ1iZg-H8"
            },
        })
        let data= await response.json();
        console.log("data ",data);
        setNotes(data);
        console.log(notes);
    }

    const addNote = async (note) => {
        let url = `${host}/note/createnote`;
        let payloadData={description:note.description,title:note.title};
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDAzOWRiYmVhOWQzNDU0M2EwZDM5In0sImlhdCI6MTY5NjQ3MzM3N30.J_Ic3b3WlgtNhMd2T70PEHs6X5qKE2YVpRGQ1iZg-H8"
            },
            body:JSON.stringify(payloadData)
        })
        let data= await response.json();
        console.log("data ",data);
        console.log(notes);
        fetchNotes();
    }

    const getNodeTeBoEdit =async(note)=>{
        console.log('getNodeTeBoEdit ',note);
        let noteData={description:note.description,title:note.title,_id:note._id,user:note.user};
        await setNodeToEdit(noteData);
        setTimeout(()=>{
        console.log(nodeToEdit);

        },1500)
    }

    const fetchNoteById = async(id) => {
        let url = `${host}/note/getNote/${id}`;
        return await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDAzOWRiYmVhOWQzNDU0M2EwZDM5In0sImlhdCI6MTY5NjQ3MzM3N30.J_Ic3b3WlgtNhMd2T70PEHs6X5qKE2YVpRGQ1iZg-H8"
            },
        })
        // .then(data => data.json())
        
    }

    const editNote = async(note) => {
        let url = `${host}/note/updatenote/${note._id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDAzOWRiYmVhOWQzNDU0M2EwZDM5In0sImlhdCI6MTY5NjQ3MzM3N30.J_Ic3b3WlgtNhMd2T70PEHs6X5qKE2YVpRGQ1iZg-H8"
            },
            body:JSON.stringify({tag:note.tag,description:note.description,title:note.title})
        })
        let data= await response.json();
        console.log("data ",data);
        console.log(notes);
        fetchNotes();
        
    }

    const deleteNote =async (note) => {
        console.log("delete note",note);
        let url = `${host}/note/deletenote/${note._id}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUxZDAzOWRiYmVhOWQzNDU0M2EwZDM5In0sImlhdCI6MTY5NjQ3MzM3N30.J_Ic3b3WlgtNhMd2T70PEHs6X5qKE2YVpRGQ1iZg-H8"
            },
        })
        let data= await response.json();
        console.log("data ",data);
        console.log(notes);
        fetchNotes();

    }
    return (
        <NoteContext.Provider value={{ state, notes,nodeToEdit,fetchNoteById,
            getNodeTeBoEdit, fetchNotes, addNote, editNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;