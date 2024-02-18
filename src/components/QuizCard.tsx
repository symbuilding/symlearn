import "./QuizCard.css";

export default function QuizCard({ question, options, answers }) {
    return (
        <>
            <h4>{question}</h4>
            {options?.map((option) => {
                return (
                    <div className="opt">
                        <input type="radio" name="option-button" />
                        <span>{option}</span>
                    </div>
                );
            })}
        </>
    );
}
