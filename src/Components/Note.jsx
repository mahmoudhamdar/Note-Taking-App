
import "../Styles/Note.css"

export const Note = ({note,Remove}) => {



    return (
        <>
        <div className=" note">
            <div className="date"> Date:{note.Date}</div>
            <div className="title">Title:{note.Title}</div>
            <div className="content">{note.Content}</div>
            <div >
                <button className={`remove`} onClick={()=>{
                    Remove(note.id);
                }}>Remove</button>
            </div>
        </div>

        </>
    )
}