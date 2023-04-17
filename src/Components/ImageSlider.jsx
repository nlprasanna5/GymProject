import React from 'react'
import Products from './Products'
import './ImageSlider.css'

function ImageSlider() {
    let box = document.querySelector('.Products-container')
    const prvsbtn = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
    }

    const nextbtn = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
    }

  return (
    <div className='Scroller'>
        <button className='pre-btn' onClick = {prvsbtn}> <p> &lt; </p></button>
        <button className = 'next-btn' onClick = {nextbtn}> <p> &gt; </p></button>



        <div className='Products-container'>
            <Products Productno = '1'/>
            <Products Productno = '2'/>
            <Products Productno = '3'/>
            <Products Productno = '4'/>
            <Products Productno = '5'/>
            <Products Productno = '6'/>
            <Products Productno = '7'/>
        </div>

    </div>
  )
}

export default ImageSlider