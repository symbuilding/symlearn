import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import MindMap from "./components/MindMap";

export default function Routing() {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Courses />} path="/courses" />
            <Route element={<MindMap />} path="/mindmap" />
        </Routes>
    );
}
