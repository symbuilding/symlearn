/*
const fetchLectures = async (date: string) => {
    const res = await fetch(
        "http://localhost:4000/timetable/date-wise/" + date
    );

    return res.json();
};
*/

function getDate(): string {
    const date = new Date();
    const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(date);
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
    return (`${day} ${month}, ${weekday}`);
}

export default function CalenderEvents() {
    /*
    const [dateSelected, setDateSelected] = useState<string>(
        new Date().toISOString().slice(0, 10)
    );

    const lecturesData = useQuery({
        queryFn: () => fetchLectures(dateSelected),
        //cached and fresh for 60 minutes
        staleTime: 1000 * 60 * 60,
        gcTime: 1000 * 60 * 60,
        queryKey: [dateSelected],
    });
    */

    return <div className="calender-container">
        <div className="current-date-container">
        {/*TODO::- add calendar icon here*/}
            {getDate()}
        </div>
    </div>;
}
