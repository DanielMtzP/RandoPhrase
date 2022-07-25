import React from 'react'

const QuoteBox = ({randomAutor, randomColors, changeAll}) => {

    const objectStyle = {
        color:randomColors
    }
    const objectBgStyle = {
        backgroundColor: randomColors
    }


  return (
    <article className='card' style={objectStyle}>
        <div className='card_container'>
            <p className='quote_container'>
                <i className='fa-solid fa-quote-left'></i>
                <h2 className='card_quote'>{`${randomAutor.quote}`}</h2>
            </p>
            <p className='card_item'>-{`${randomAutor.author}`}</p>
            <button onClick={changeAll} className='card_btn' style={objectBgStyle}>&#62;</button> 
        </div>
    </article>
  )
}

export default QuoteBox
