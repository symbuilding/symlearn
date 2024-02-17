import './Task.css'


function getDate(dateStr: string): string {
    const date = new Date(dateStr.replace(/-/g, "/"));

    const weekday = new Intl.DateTimeFormat("en", { weekday: "short" }).format(
        date
    );
    const month = new Intl.DateTimeFormat("en", { month: "long" }).format(date);
    const day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${weekday}, ${day} ${month}`;
}

export default function Tasks({data}){
    console.log(data)
    return <>
        <div className='task-container'>
            <div className={'circle '+ (Math.random() > 0.5 ? "hara" : "")}></div>
            <div className='task-right'>
                <div className='task-title'>
                <span className='task-name'>{data.courseName}</span><span className='task-date'>{getDate(data.date)}</span>
                </div>
               <span className='task-subtitle'>{data.quiz.length} Quesiton</span>
            </div>
        </div>
    </>
}
