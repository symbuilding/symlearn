import Routing from "./Routing";
import Navpane from "./components/Navpane";
import "./components/globals.css";
// import Home from "./components/Home";
// import ClassesCard from "./components/ClassesCard";
// import RightPane from "./components/RightPane";
// import Date from "./components/Date";
// import RightPaneTop from "./components/RightpaneTop";
import CalenderEvents from "./components/CalenderEvents";
import Form from "./components/Form";
import Home from "./components/Home";
import ClassesCard from "./components/ClassesCard";
import Routing from "./Routing";

export default function App() {
    return (
        <>
            <div id="app-container">
                <Navpane />
                {/* <Home></Home> */}
                <Routing />
                <ClassesCard></ClassesCard>
            </div>
        </>
    );
}
