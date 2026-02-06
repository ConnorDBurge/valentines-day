import { useState } from 'react'
import Confetti from 'react-confetti'
import mindBlownGif from './assets/the-universe-tim-and-eric-mind-blown.gif'
import hulkHoganGif from './assets/hulk_hogen.gif'
import './App.css'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [answered, setAnswered] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const handleYes = () => {
    setAnswered(true)
    setShowConfirm(false)
  }

  const handleNo = () => {
    setShowConfirm(true)
  }

  const handleConfirmNo = () => {
    setShowConfirm(false)
  }

  const handleContinue = () => {
    setQuestionNumber(2)
    setAnswered(false)
    setShowConfirm(false)
  }

  const handleRestart = () => {
    setQuestionNumber(1)
    setAnswered(false)
    setShowConfirm(false)
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
        <p className="celebration-message">Let's gooooo! 😏</p>
        <button onClick={handleRestart} className="btn btn-restart">
          Start Over
        </button>
      </div>
    )
  }

  // Question 2 confirm
  if (questionNumber === 2 && showConfirm) {
    return (
      <div className="container">
        <h1 className="question">Are you sure about that? 🤔</h1>
        <div className="button-container">
          <button onClick={handleYes} className="btn btn-yes">
            Actually, YES! 😈
          </button>
          <button onClick={handleConfirmNo} className="btn btn-no">
            Still No
          </button>
        </div>
        <button onClick={handleRestart} className="btn btn-restart">
          Start Over
        </button>
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
        <button onClick={handleRestart} className="btn btn-restart">
          Start Over
        </button>
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
  if (showConfirm) {
    return (
      <div className="container">
        <h1 className="question">Are you sure about that? 🤔</h1>
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
