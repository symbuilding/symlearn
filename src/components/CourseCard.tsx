import "./CourseCard.css";

export default function CourseCard({ name, instructor, batch }) {
    return <>
        <div className="course-container">
            <div className="course-top">{name}</div>
            <div className="course-bottom">{instructor}</div>
        </div>
    </>
}
