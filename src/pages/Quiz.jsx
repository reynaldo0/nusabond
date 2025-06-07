import { useState, useRef, useEffect } from "react";
import questions from "../docs/questionData";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [animationClass, setAnimationClass] = useState("slide-in-left");

  // Refs untuk audio
  const correctSound = useRef(null);
  const wrongSound = useRef(null);
  const resultSound = useRef(null);

  // Putar suara saat showResult berubah jadi true
  useEffect(() => {
    if (showResult && resultSound.current) {
      resultSound.current.currentTime = 0;
      resultSound.current.play();
    }
  }, [showResult]);

  const handleAnswer = (index) => {
    if (selected !== null) return;

    setSelected(index);
    const correct = questions[current].answer;
    const isCorrect = index === correct;

    setAnswers([...answers, index]);

    // Play sound
    if (isCorrect) {
      correctSound.current.currentTime = 0;
      correctSound.current.play();
      setScore((prevScore) => prevScore + 10);
    } else {
      wrongSound.current.currentTime = 0;
      wrongSound.current.play();
    }
    setAnimationClass("slide-out-left");

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
        setAnimationClass("slide-in-left");
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setScore(0);
    setShowResult(false);
    setAnimationClass("slide-in-left");
  };

  const progressPercent = ((current + 1) / questions.length) * 100;

  const getEvaluation = () => {
    if (score < 40) return "Kamu harus belajar Belajar Budaya Nusantara lagi!";
    if (score < 70) return "Lumayan, tapi masih bisa ditingkatkan!";
    if (score < 90) return "Bagus! Kamu hampir sempurna.";
    return "Luar biasa! Kamu sangat menguasai budaya di Indonesia!";
  };

  return (
    <>
      {/* Audio elements */}
      <audio ref={correctSound} src="/sound/benar.mp3" />
      <audio ref={wrongSound} src="/sound/salah.mp3" />
      <audio ref={resultSound} src="/sound/score.mp3" />

      <section className="min-h-screen justify-center bg-[url('/illustrator/quiz.png')] bg-cover bg-center">
        <div className="max-w-5xl pt-28 md:pt-32 mx-auto p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary-200 mb-6">
            Kuis Budaya Nusantara
          </h1>

          {/* Progress bar */}
          <div className="w-full h-3 mb-4 rounded-full border-2 border-black bg-white overflow-hidden">
            <div
              className="h-full bg-secondary-200 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Soal */}
          <div
            className={`bg-primary-200 text-white p-8 rounded-3xl shadow-md ${animationClass}`}
          >
            <p className="text-sm mb-2">
              Pertanyaan {current + 1}/{questions.length}
            </p>
            <h2 className="text-2xl font-semibold mb-4">
              {questions[current].question}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {questions[current].options.map((option, index) => {
                const isCorrect = index === questions[current].answer;
                const isSelected = selected === index;

                let buttonClass =
                  "w-full py-3 px-4 rounded-xl font-medium text-left transition flex justify-between items-center";

                if (selected !== null) {
                  if (isCorrect) {
                    buttonClass +=
                      " bg-green-100 outline outline-blue-500 text-black";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += " bg-red-200 text-black";
                  } else {
                    buttonClass += " bg-secondary-200 text-black";
                  }
                } else {
                  buttonClass +=
                    " bg-secondary-200 hover:bg-secondary-200/90 text-black";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={selected !== null}
                    className={buttonClass}
                  >
                    <span>
                      {String.fromCharCode(65 + index)}. {option}
                    </span>
                    {isCorrect && selected !== null && (
                      <img
                        src="/illustrator/ceklis.svg"
                        alt="Benar"
                        width={20}
                      />
                    )}
                    {selected !== null && isSelected && !isCorrect && (
                      <img
                        src="/illustrator/salah.svg"
                        alt="Salah"
                        width={20}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Modal hasil */}
          {showResult && (
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-3xl p-10 max-w-xl w-full text-center shadow-lg fade-in-up">
                <h2 className="text-3xl font-bold text-primary-200 mb-4">
                  Kuis Selesai!
                </h2>
                <p className="text-xl text-gray-800 mb-6">
                  Skor kamu: <span className="font-bold">{score}</span> dari{" "}
                  {questions.length * 10}
                </p>
                <p className="text-md text-gray-600 italic mb-6">
                  {getEvaluation()}
                </p>
                <button
                  onClick={resetQuiz}
                  className="text-lg px-6 py-3 bg-primary-200 text-white rounded-xl hover:bg-[#2e4631] transition"
                >
                  Ulangi Kuis
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Quiz;
