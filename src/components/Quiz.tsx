import { useLocation } from "react-router-dom";
import { useState } from "react";
import CalenderEvents from "./CalenderEvents";
import QuizCard from "./QuizCard";
import "./Quiz.css";

export default function Quiz() {
    const [questionNo, setQuestionNo] = useState<number>(0);

    const location = useLocation();

    const quizData = location.state?.quiz;
    const currentQuestion = quizData?.quiz[questionNo];

    return (
        <>
            <div className="quiz-container">
                <div className="title-container">
                    <span className="quizzz">Quiz</span>
                </div>
                <div className="big-container">
                    <span className="course-name">{quizData.courseName}</span>
                    <QuizCard {...currentQuestion} />
                    <span
                        onClick={() => {
                            setQuestionNo((oldQuestionNo) =>
                                oldQuestionNo - 1 < 0 ? 0 : oldQuestionNo - 1
                            );
                        }}
                    >
                        svghereprev
                    </span>
                    {`${questionNo} / ${quizData?.quiz?.length}`}
                    <span
                        onClick={() => {
                            setQuestionNo(
                                (oldQuestionNo) =>
                                    (oldQuestionNo + 1) % quizData?.quiz?.length
                            );
                        }}
                    >
                        svgherenext
                    </span>
                </div>
            </div>
            <CalenderEvents />
        </>
    );
}
