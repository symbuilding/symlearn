import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import ls from "./timepass.svg";
import './Home.css'


const fetchQuizes = async (date: string) => {
    const res = await fetch(
        "http://localhost:4000/quiz/get/" + date
    );

    return res.json();
};

const fetchCourses = async () => {
    const res = await fetch("http://localhost:4000/timetable/courses");

    return res.json();
}

export default function Home() {
    const [currentDate, setCurrentDate] = useState<string>(
        new Date().toISOString().slice(0, 10)
    );

    const quizData = useQuery({
        queryFn: () => fetchQuizes(currentDate),
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60,
        queryKey: ["Quizes" + currentDate],
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
                            <div className="assignment-test-list-container">
                                {quizData.isSuccess && JSON.stringify(quizData.data)}
                            </div>
                        </div>
                        <div className="courses-container">
                            <h1>Courses</h1>
                            {coursesData.isSuccess && JSON.stringify(coursesData.data)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
