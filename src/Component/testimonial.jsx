import React from 'react'
import {useState} from 'react';
import '../style.css'
const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const handleprev=()=>{
        setIndex((index + word.length-1)% word.length)
    }
    const handlenext=()=>{
        setIndex((index+1)%word.length);
    }
const word = [
  {
    author: "Emily R.",
    quote: "This code has been a game-changer for our team. We've increased productivity by 30%!"
  },
  {
    author: "David L.",
    quote: "I was blown away by the ease of use and flexibility of this code. Highly recommend!"
  },
  {
    author: "Sophia K.",
    quote: "We've tried other solutions, but this code is by far the most reliable and efficient. Thanks for creating it!"
  },
  {
    author: "Michael T.",
    quote: "I was skeptical at first, but this code has really delivered. Our customers love it!"
  },
  {
    author: "Rachel G.",
    quote: "This code has saved us so much time and resources. We can't thank you enough!"
  }
];
  return (
    <div className="testimonial-wrapper">
  <div className="quote-container">{word[index].quote}</div>
  <div className="auth-container">{word[index].author}</div>
  <div className="button-group">
    <button onClick={handleprev}>Prev</button>
    <button onClick={handlenext}>Next</button>
  </div>
</div>
  )
}

export default Testimonial
