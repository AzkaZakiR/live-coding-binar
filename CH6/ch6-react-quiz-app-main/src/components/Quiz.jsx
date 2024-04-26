import { useCallback, useState } from "react"
import question from "../question"
import quizCompleteImg from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
    // const [activeQuestionIndex, setActiveQUestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);

    const activeQuestionIndex = userAnswer.length;
    const quizIsComplete = activeQuestionIndex === question.length;

    const handleSelectedAnswer = useCallback((selectedAnswer) => {
        setUserAnswer((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
        console.log(selectedAnswer);
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSelectedAnswer(null);
    }, [handleSelectedAnswer]);

    if (quizIsComplete) {
        return (
            <>
                <div id="summary">
                    <img src={quizCompleteImg} />

                    <h2> KUiz done!!!</h2>
                </div>
            </>
        )
    }
    const shuffledAnswers = [...question[activeQuestionIndex].answers];

    shuffledAnswers.sort(() => Math.random() - 0.5)

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer timeout={10000} onTimeout={() => handleSkipAnswer(null)} />
                <p>{question[activeQuestionIndex].text}</p>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectedAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}