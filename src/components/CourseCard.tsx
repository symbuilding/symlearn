import "./CourseCard.css";

export default function CourseCard({ name, instructor, batch }) {
    return (
        <>
            <div className="course-container">
                <div className="course-top">
                    <span className="batch">{batch}</span>
                    <span className="course-name">{name}</span>
                </div>
                <div className="course-bottom">{instructor}</div>
            </div>
        </>
    );
}
