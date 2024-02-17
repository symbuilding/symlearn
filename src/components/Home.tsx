import { useState } from "react";
import CalenderEvents from "./CalenderEvents";
import Task from "./Task.tsx";
import CourseCard from "./CourseCard.tsx";
import { useQuery } from "@tanstack/react-query";
import "./Home.css";
import ClassesCard from "./ClassesCard";

const fetchQuizes = async () => {
    const res = await fetch("http://localhost:4000/quiz/get");
    return res.json();
};

const fetchCourses = async () => {
    const res = await fetch("http://localhost:4000/timetable/courses");

    return res.json();
};

export default function Home() {
    const [currentDate, setCurrentDate] = useState<string>(
        new Date().toISOString().slice(0, 10)
    );

    const quizData = useQuery({
        queryFn: () => fetchQuizes(),
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60,
        queryKey: ["Quizes"],
    });

    const coursesData = useQuery({
        queryFn: () => fetchCourses(),
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60,
        queryKey: ["all-courses"],
    });

    return (
        <>
            <div className="middle-box">
                <div className="home-container">
                    {/* <img src={ls} /> */}
                    <div className="heading-container">
                        <h1>Good morning Sohammaro...</h1>
                        <div className="search-noti-container">
                            <input type="search"></input>
                            {/* <img src="https://www.svgrepo.com/show/31480/notification-bell.svg"/> */}
                        </div>
                    </div>
                    <h1>Dashboard</h1>
                    <div className="event-container">
                        <div className="assignment-test-container">
                            <h1>Assignment and Test</h1>
                            {quizData.isSuccess &&
                                quizData?.data.quizes.map((quiz) => {
                                    return <Task key={quiz._id} data={quiz}></Task>;
                                })}
                        </div>
                        {coursesData.isSuccess &&
                            coursesData?.data.courses.map((course) => {
                                return <CourseCard key={course._id} data={course}></CourseCard>;
                            })}
                    </div>
                    <CalenderEvents
                        currentDate={currentDate}
                        setCurrentDate={setCurrentDate}
                    />
                </div>
            </div>
            <ClassesCard></ClassesCard>
        </>
    );
}
