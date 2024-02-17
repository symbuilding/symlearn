import Pfp from "./Pfp";
import Date from "./Date";
import './Rightpane-Top.css'

export default function RightPaneTop(){
    return(
        <>
        <div className="layout">
            <Date></Date>
            <Pfp></Pfp>
        </div>
        </>
    )
}