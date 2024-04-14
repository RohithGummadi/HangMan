import React from 'react'
const HEAD=(
    <div style={{
        width:"50px",
        height:"50px",
        borderRadius:"100%",
        border:"10px solid black",
        position:"absolute",
        top:"90px",
        right:"-40px",

    }}/>
)

const BODY=(
    <div style={{
        width:"10px",
        height:"100px",
        background:"black",
        position:"absolute",
        top:"150px",
        right:-10

    }}/>


)


const RIGHT_ARM=(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"180px",
        right:"-110px",
        rotate:"-30deg",
        transformOrigin:"left bottom"

    }}/>
)

const LEFT_ARM=(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"180px",
        right:"0px",
        rotate:"30deg",
        transformOrigin:"right bottom"

    }}/>
)

const RIGHT_LEG=(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"320px",
        right:"-50px",
        rotate:"60deg",
        transformOrigin:"right bottom"

    }}/>
)

const LEFT_LEG=(
    <div style={{
        width:"100px",
        height:"10px",
        background:"black",
        position:"absolute",
        top:"230px",
        right:"-10px",
        rotate:"-60deg",
        transformOrigin:"right bottom"

    }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberofGuesses: number
}

export default function HangManDrawing({numberofGuesses}: HangmanDrawingProps) {
  return (
    <div style={{position:"relative"}} >
        {BODY_PARTS.slice(0, numberofGuesses)}
        <div style={{height:"100px", width:"10px", background:"black", marginLeft:"320px", position:"absolute"}}/>
        <div style={{height:"10px", width:"200px", background:"black", marginLeft:"120px"}}/>
        <div style={{height:"400px", width:"10px", background:"black", marginLeft:"120px"}}/>
        <div style={{height:"10px", width:"250px", background:"black"}}/>

    </div>
  )}


