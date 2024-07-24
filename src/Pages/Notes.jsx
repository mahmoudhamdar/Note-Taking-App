import {AddNote} from "../Components/AddNote.jsx";
import {Link, useNavigate} from "react-router-dom";
import {Fragment, useContext, useState} from "react";
import {NotesContext} from "../NotesProvider.jsx";
import {Note} from "../Components/Note.jsx";
import "../Styles/Notes.css"
export const Notes = () => {


    const {Notes,setNotes} = useContext(NotesContext)
    const navigate= useNavigate()
    const RemoveNote = (id) => {

        setNotes(Notes.filter((note) => note.id !== id))

    }
    return (
        <Fragment className="container">
            <Fragment className={"link"}>
        <AddNote/>
        <Link to={"/"} onClick={()=>{
            navigate( "/" );
        }}>Home</Link>
            </Fragment>
            {
                Notes.map(note => (
                    <Note className={"note"} key={note.id} note={note} Remove={RemoveNote} />
                ))
            }
        </Fragment>
    )
}