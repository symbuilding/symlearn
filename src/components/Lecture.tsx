export default function Lecture({
    courseName,
    date,
    time,
    room,
}: {
    courseName: string;
    room: string;
    time: string;
    date: string;
}) {
    return (
        <>
            <ul>
                <li>Course name: {courseName}</li>
                <li>Date: {date}</li>
                <li>Time: {time}</li>
                <li>Room: {room}</li>
            </ul>
        </>
    );
}
