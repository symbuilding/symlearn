import Navpane from "./components/Navpane";
import "./components/globals.css";
import Routing from "./Routing";

export default function App() {
    return (
        <>
            <div id="app-container">
                <Navpane />
                <Routing />
            </div>
        </>
    );
}
