import {Link, useNavigate} from "react-router-dom";
import "../Styles/AddNote.css"
export const AddNote = () => {
   const navigate= useNavigate()
    return (
        <>

            <Link to={"/NoteForm"} onClick={()=>{
                navigate( "NoteForm" );
            }}>Add Note</Link>

        </>
    )
}