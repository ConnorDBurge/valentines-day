import { useState } from 'react'
import Confetti from 'react-confetti'
import mindBlownGif from './assets/the-universe-tim-and-eric-mind-blown.gif'
import hulkHoganGif from './assets/hulk_hogen.gif'
import './App.css'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [answered, setAnswered] = useState(false)
  const [noCount, setNoCount] = useState(0)

  const noMessages = [
    "Are you sure about that? 🤔",
    "Really? Are you absolutely sure? 😢",
    "Think about it... Please? 🥺",
    "Come on... You know you want to say yes! 💕",
    "I don't believe you... Try again! 😏",
    "Seriously? You're breaking my heart! 💔",
    "One more chance... Pretty please? 🙏",
    "You're not serious, right? 😭",
    "I know you don't mean that! ❤️",
    "Last chance... Are you REALLY sure? 🤨"
  ]

  const handleYes = () => {
    setAnswered(true)
    setNoCount(0)
  }

  const handleNo = () => {
    setNoCount(prev => prev + 1)
  }

  const handleConfirmNo = () => {
    if (noCount < noMessages.length - 1) {
      setNoCount(prev => prev + 1)
    } else {
      setNoCount(0)
    }
  }

  const handleContinue = () => {
    setQuestionNumber(2)
    setAnswered(false)
    setNoCount(0)
  }

  const handleRestart = () => {
    setQuestionNumber(1)
    setAnswered(false)
    setNoCount(0)
  }

  // Question 2 answered
  if (questionNumber === 2 && answered) {
    return (
      <div className="container celebration">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={300}
          gravity={0.3}
        />
        <h1 className="celebration-title">🔥 OH YEAH! 🔥</h1>
        <div className="gif-container">
          <img
            src={hulkHoganGif}
            alt="Hulk Hogan"
            className="celebration-gif"
          />
        </div>
        <button onClick={handleRestart} className="btn btn-restart">
          Start Over
        </button>
      </div>
    )
  }

  // Question 2 confirm
  if (questionNumber === 2 && noCount > 0) {
    return (
      <div className="container">
        <h1 className="question">{noMessages[Math.min(noCount, noMessages.length - 1)]}</h1>
        <div className="button-container">
          <button onClick={handleYes} className="btn btn-yes">
            Actually, YES! 😈
          </button>
          <button onClick={handleConfirmNo} className="btn btn-no">
            Still No
          </button>
        </div>
      </div>
    )
  }

  // Question 2
  if (questionNumber === 2) {
    return (
      <div className="container">
        <h1 className="question">Are we going to shaboink today? 😏</h1>
        <div className="button-container">
          <button onClick={handleYes} className="btn btn-yes">
            Yes! 🔥
          </button>
          <button onClick={handleNo} className="btn btn-no">
            No
          </button>
        </div>
      </div>
    )
  }

  // Question 1 answered
  if (answered) {
    return (
      <div className="container celebration">
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={300}
          gravity={0.3}
        />
        <h1 className="celebration-title">🎉 YAY! 🎉</h1>
        <div className="gif-container">
          <img
            src={mindBlownGif}
            alt="Mind Blown"
            className="celebration-gif"
          />
        </div>
        <button onClick={handleContinue} className="btn btn-continue">
          Continue ➡️
        </button>
      </div>
    )
  }

  // Question 1 confirm
  if (noCount > 0) {
    return (
      <div className="container">
        <h1 className="question">{noMessages[Math.min(noCount, noMessages.length - 1)]}</h1>
        <div className="button-container">
          <button onClick={handleYes} className="btn btn-yes">
            Actually, YES! 💕
          </button>
          <button onClick={handleConfirmNo} className="btn btn-no">
            Still No
          </button>
        </div>
      </div>
    )
  }

  // Question 1
  return (
    <div className="container">
      <h1 className="question">Kyndall, will you be my valentine? 💝</h1>
      <div className="button-container">
        <button onClick={handleYes} className="btn btn-yes">
          Yes! 😍
        </button>
        <button onClick={handleNo} className="btn btn-no">
          No
        </button>
      </div>
    </div>
  )
}

export default App
