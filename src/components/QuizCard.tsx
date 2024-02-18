export default function QuizCard({ question, options, answers }) {
    return (
        <>
            <h4>{question}</h4>
            {options?.map((option) => {
                return (
                    <div>
                        <input type="radio" name="option-button" />
                        {option}
                    </div>
                );
            })}
        </>
    );
}
