import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import data from './data';
function App() {
  const [inputNumber, setInputNumber] = useState(0)
  const [paragraphsToShow, setParagraphsToShow] = useState([])

  function handleInput(e) {
    setInputNumber(e.target.value)
  }
  
  function displayParagraphs(e, number) {
    e.preventDefault()
    setParagraphsToShow(
      number <= 1 
        ? [data[0]]
        : data.slice(0, number)
    )
  }

  const allParagraphs = paragraphsToShow.map(paragraph => 
    <p key={nanoid()}>{paragraph}</p>
  )
  
  return (
    <section className="section-center">

      <h3>tired of boring lorem ipsum?</h3>

      <form 
        onSubmit={ (e) => displayParagraphs(e, inputNumber) } 
        className="lorem-form"
      >
        <label>
          paragraphs:

          <input 
            type="number" 
            value={ inputNumber }
            onChange={ (e) => handleInput(e) } 
          />

          <button className="btn">generate</button>
        </label>
      </form>

      <div className="result">
        {allParagraphs}
      </div>
    </section>
  )
}

export default App;
