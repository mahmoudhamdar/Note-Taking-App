import {Header} from "../Components/Header.jsx";
import {AddNote} from "../Components/AddNote.jsx";
import {Link} from "react-router-dom";
import "../Styles/Home.css"
import {Fragment} from "react";
export const Home = () => {
    return (
        <Fragment className={"container"}>
            <Fragment className={"link"}>
                <Header />
                <AddNote />
                <Link to={"Notes"}> Notes</Link>
            </Fragment>
        </Fragment>
    )
}