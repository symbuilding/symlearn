import Routing from "./Routing";
import Navpane from "./components/Navpane";

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
