import Navpane from "./components/Navpane";
import "./components/globals.css";
import Routing from "./Routing";
import Form from "./components/Form";
import RightPaneTop from "./components/RightpaneTop";
import AdminBar from "./components/AdminBar";

export default function App() {
    return (
        <>
            <div id="app-container">
                <Navpane />
                {/* <Routing /> */}
                <Form></Form>
                
            </div>
        </>
    );
}
