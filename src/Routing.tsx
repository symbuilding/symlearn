import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import MindMap from "./components/MindMap";
import Quiz from "./components/Quiz";

export default function Routing() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Courses />} path="/courses" />
            <Route element={<MindMap />} path="/mindmap" />
            <Route element={<Quiz />} path="/quiz/:quiz_id" />
        </Routes>
    );
}
