import {AddNote} from "../Components/AddNote.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Note} from "../Components/Note.jsx";
import "../Styles/Notes.css"
export const Notes = () => {

    const [localNotes, setLocalNotes] = useState([])

    useEffect(() => {
        const keys=Object.keys(localStorage);
        const notes = keys.map(key => JSON.parse(localStorage.getItem(key)));
        setLocalNotes(notes);
    }, []);
   // const {Notes,setNotes} = useContext(NotesContext)
    const navigate= useNavigate()
    const RemoveNote = (id) => {
        //setNotes(Notes.filter((note) => note.id !== id))
        localStorage.removeItem(`${id}`);
        setLocalNotes(localNotes.filter(note => note.id !== id))
    }
    return (
        <div className="container">
            <div className={"link"} onClick={()=>{
                navigate( "/" );
            }}>

        <Link to={"/"} >Home</Link>
            </div>
            <div className={`link`}> <AddNote/></div>
            <div className={`note-container`}>
            {
                localNotes.map(note => {
                   if (note!=null)
                    return <Note className={`note`} key={note.id} note={note} Remove={RemoveNote}/>
                })
            }</div>
        </div>
    )
}