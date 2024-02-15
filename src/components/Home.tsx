import { useState } from "react";
import CalenderEvents from "./CalenderEvents";
import { useQuery } from "@tanstack/react-query";
import Lecture from "./Lecture";

const fetchQuizes = async (date: string) => {
    const res = await fetch(
        "http://localhost:4000/quiz/get/" + date
    );

    return res.json();
};

const fetchLectures = async (date: string) => {
    const res = await fetch(
        "http://localhost:4000/timetable/date-wise/" + date
    );

    return res.json();
};

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

    const lecturesData = useQuery({
        queryFn: () => fetchLectures(currentDate),
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60,
        queryKey: ["Lectures" + currentDate],
    });

    return (
        <div className="home-container">
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
                <div className="classes-container">
                    <h1>Classes</h1>
                    {lecturesData.isSuccess &&
                        lecturesData?.data?.lectures?.map(
                            (lecture: {
                                _id: string;
                                courseName: string;
                                room: string;
                                time: string;
                                date: string;
                            }) => {
                                return (
                                    <Lecture key={lecture._id} {...lecture} />
                                );
                            }
                        )}
                </div>
            </div>
            <CalenderEvents /*setCurrentDate={setCurrentDate}*/ />
        </div>
    );
}
