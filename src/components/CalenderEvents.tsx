function getDate(): string {
    const date = new Date();
    const weekday = new Intl.DateTimeFormat("en", { weekday: "short" }).format(
        date
    );
    const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${day} ${month}, ${weekday}`;
}

export default function CalenderEvents(/*{setCurrentDate}*/) {
    return (
        <div className="calender-container">
            <div className="current-date-container">
                {/*TODO::- add calendar icon here*/}
                {getDate()}
            </div>
        </div>
    );
}
