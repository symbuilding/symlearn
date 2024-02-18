import { useState } from "react";
import axios from "axios";
import './Form.css';
import AdminBar from "./AdminBar";
export default function Form() {
    function handleSubmit(e) {
        e.preventDefault()

        const courseData = {
            name,
            instructor,
            batch

        };



        axios.post("http://localhost:4000/timetable/addCourse", courseData).then((response) => {
            console.log(response.status);
        });
        console.log(course);
    }


    function handleSubmit2(e) {
        e.preventDefault()

        const lectureData = {
            lectures: [
                {
                    date,
                    room,
                    courseName: course,
                    time
                }

            ]
        };



        axios.post("http://localhost:4000/timetable/addLectures", lectureData).then((response) => {
            console.log(response.status);
        });
        console.log(course);
    }
    const [course, setCourse] = useState('');
    const [name, setName] = useState('')
    const [instructor, setInstructor] = useState('')
    const [batch, setBatch] = useState('')
    const [date, setDate] = useState('')
    const [room, setRoom] = useState('')
    const [time, setTime] = useState('')

    return (
        <>
            <div className="main">
                <div className="middle-layout">
                    <div className="top-part-layout">
                        <div className="admin-panel">
                            <span>Admin panel</span>
                        </div>
                    </div>
                    <div className="cont">

                    <AdminBar></AdminBar>

                    <div>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <h2>Enter The Coursedata</h2>


                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)}></input>

                                <label htmlFor="instructor">instructor</label>
                                <input id="instructor" name="instructor" required onChange={(e) => setInstructor(e.target.value)}></input>

                                <label htmlFor="batch">batch</label>
                                <input id="batch" name="batch" required onChange={(e) => setBatch(e.target.value)}></input>





                                <button type="submit" >Submit</button>
                            </form>
                        </div>
                        <div className="form-container-2">
                            <form onSubmit={handleSubmit2}>
                                <h2>Enter The Lecturedata</h2>
                                <label htmlFor="course">course</label>
                                <input type="text" id="course" name="course" required onChange={(e) => setCourse(e.target.value)}></input>





                                <label htmlFor="date">date</label>
                                <input id="date" name="date" required onChange={(e) => setDate(e.target.value)}></input>

                                <label htmlFor="room">room</label>
                                <input id="room" name="room" required onChange={(e) => setRoom(e.target.value)}></input>

                                <label htmlFor="room">time</label>
                                <input id="time" name="time" required onChange={(e) => setTime(e.target.value)}></input>



                                <button type="submit" >Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}