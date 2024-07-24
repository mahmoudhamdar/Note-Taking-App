
import "../Styles/Note.css"

export const Note = ({note,Remove}) => {



    return (
        <>
        <div className="note">
            <div className="date">{note.Date}</div>
            <div className="title">{note.Title}</div>
            <div className="content">{note.Content}</div>
            <div>
                <button onClick={Remove}>Remove</button>
            </div>
        </div>

        </>
    )
}