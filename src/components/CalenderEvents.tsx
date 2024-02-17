import { useQuery } from "@tanstack/react-query";
import Lecture from "./Lecture";
import './CalenderEvents.css'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import RightPaneTop from "./RightpaneTop";
import ClassesCard from "./ClassesCard";

import  dayjs, {Dayjs } from "dayjs";

 export function getDate(): string {
    const date = new Date();
    const weekday = new Intl.DateTimeFormat("en", { weekday: "short" }).format(
        date
    );
    const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${day} ${month}, ${weekday}`;
}

const fetchLectures = async (date: string) => {
    const res = await fetch(
        "http://localhost:4000/timetable/date-wise/" + date
    );

    return res.json();
};

export default function CalenderEvents({ currentDate, setCurrentDate }) {
    const lecturesData = useQuery({
        queryFn: () => fetchLectures(currentDate),
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60,
        queryKey: ["Lectures" + currentDate],
    });

    return (
        <>
        <div className="calender-container">
            <RightPaneTop></RightPaneTop>

            {/*TODO: Add calendar thing here*/}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    value={dayjs(currentDate)}
                    onChange={(newValue: Dayjs) => {
                        setCurrentDate(newValue.format("YYYY-MM-DD"));
                    }}
                />
            </LocalizationProvider>
            <div className="classes-display-box">
               
            <div className="upcoming-text">
                <span>Upcoming classes</span>
            </div>
            <div className="upcoming-classes-container">
                <div className="inner-container">
            <ClassesCard></ClassesCard>
            <ClassesCard></ClassesCard>
            <ClassesCard></ClassesCard>
            <ClassesCard></ClassesCard>
                </div>
                {lecturesData.isSuccess &&
                    lecturesData?.data?.lectures?.map(
                        (lecture: {
                            _id: string;
                            courseName: string;
                            room: string;
                            time: string;
                            date: string;
                        }) => {
                            return <Lecture key={lecture._id} {...lecture} />;
                        }
                    )}
            </div>
        </div>
        </div>
        </>
    );
}
