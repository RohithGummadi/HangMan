import React, { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import HangManDrawing from "./components/HangManDrawing.jsx";
import HangManWord from "./components/HangManWord.jsx";
import Keyboard from "./components/Keyboard.js"

function App() {
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter=> !wordToGuess.includes(letter));
  const isLoser = incorrectLetters.length>=7
  const isWinner = wordToGuess.split("").every(letter=>guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter:string) => {
    if(guessedLetters.includes(letter) || isLoser || isWinner) return;
    setGuessedLetters((currentLetters) => [...currentLetters, letter]);
}, [guessedLetters, isWinner, isLoser]);

  useEffect(()=>{
    const handler = (e:KeyboardEvent)=>{
      const key = e.key
      if(!key.match(/^[a-z]$/)) return;
      e.preventDefault()
      addGuessedLetter(key)

    }
    document.addEventListener("keypress", handler)
    return ()=>{
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
    <div 
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection:"column",
        gap:"2rem",
        margin:"0 auto",
        alignItems:"center"
      }}>
        <div style={{fontSize:"2rem", textAlign:"center"}}>{isWinner && "Winner - Refresh to try again"}  {isLoser && "Nice Try - Refresh to try again"}  </div>
        <HangManDrawing numberofGuesses={incorrectLetters.length}/>
        <HangManWord reveal ={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
        <div style={{alignSelf:"stretch"}}>
          <Keyboard disabled={isLoser || isWinner} activeLetters = {guessedLetters.filter(letter=>wordToGuess.includes(letter))} inactiveLetters={incorrectLetters} 
          addGuessedLetter={addGuessedLetter}
        
        />
        </div>
    </div>
  )
}

export default App;
