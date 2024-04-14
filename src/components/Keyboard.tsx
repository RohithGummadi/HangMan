import React from 'react';
import styles from "../styles/Keyboard.module.css";

const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

type KeyboardProps ={
  disabled: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter:string)=>void
}

export default function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled=false}:KeyboardProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: ".5rem" }}>
        {
            KEYS.map((key)=>{
              const isActive = activeLetters.includes(key);
              const isInactive = inactiveLetters.includes(key);

              const btnClass = `${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`;

                return (
                    <button 
                      onClick={()=>addGuessedLetter(key)} 
                      key={key} 
                      className={btnClass} disabled={isInactive || isActive || disabled}>
                      {key}
                    </button>
                )
            })
        }
    </div>
  )
}
