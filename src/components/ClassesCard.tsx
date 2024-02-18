import './ClassesCard.css'

export default function ClassesCard({courseName, room, time, date}) {
    return (
        <>
            <div className='main-card'>
                <div className='room-number'>
                    <span>{room}</span>
                    <span>{time}</span>
                </div>
                <span className='class-name'>{courseName}</span>

            </div>
        </>
    )
}
