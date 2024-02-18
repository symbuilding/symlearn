import "./NavPane.css";
import tasksvg from "./svgs/task.svg";
import homesvg from "./svgs/home.svg";
import { NavLink } from "react-router-dom";

export default function Navpane() {
    return (
        <div className="lay-out">
            <div className="symlearn-box">
                <span className="symlearn">Symlearn</span>
            </div>
            <div className="top-box">
                <div className="top-box-css1">
                    <img src={homesvg}></img>
                    <span className="top-box-text"><NavLink to={"/"}>Home</NavLink></span>
                </div>
                <div className="top-box-css1">
                    <img src={tasksvg}></img>
                    <span className="top-box-text"><NavLink to={"/mindmap"}>Mindmap</NavLink></span>
                </div>
            </div>

            <div className="huh"></div>

            {/* <div className="middle-box"> */}
            {/*     <div className="top-box-css1"> */}
            {/*         <img src={tasksvg}></img> */}
            {/*         <span className="top-box-text">demo1</span> */}
            {/*     </div> */}
            {/*     <div className="top-box-css1"> */}
            {/*         <img src={tasksvg}></img> */}
            {/*         <span className="top-box-text">demo2</span> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="top-box-css1"> */}
            {/*         <img src={tasksvg}></img> */}
            {/*         <span className="top-box-text">demo3</span> */}
            {/*     </div> */}
            {/**/}
            {/*     <div className="top-box-css1"> */}
            {/*         <img src={tasksvg}></img> */}
            {/*         <span className="top-box-text">demo4</span> */}
            {/*     </div> */}
            {/* </div> */}

            <div className="bottom-box">
                <div className="bottom-box-individual">
                    <img src={tasksvg}></img>
                    <span className="bottom-box-text">info</span>
                </div>
                <div className="bottom-box-individual">
                    <img src={tasksvg}></img>
                    <span className="bottom-box-text">support</span>
                </div>
            </div>
        </div>
    );
}
