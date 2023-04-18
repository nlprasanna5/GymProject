import React from 'react'
import './ImageSlider.css'

let Products = [
    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 

    {
        url : "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 

    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 

    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    },
    
    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 

    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 

    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 

    {
        url : "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        caption : 'Cardio workout'
    }, 
    ]


function ImageSlider() {
    let box = document.querySelector('.Product-container')
    const prvsbtn = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft - width
    }

    const nextbtn = () => {
        let width = box.clientWidth
        box.scrollLeft = box.scrollLeft + width
    }

  return (
    <>
    <div className='Scroller'>
        <button className='pre-btn' onClick = {prvsbtn}> <p> &lt; </p></button>
        <button className = 'next-btn' onClick = {nextbtn}> <p> &gt; </p></button>
      
        <div className = "Product-container">
            {
                Products.map((data) => (
                    <div key = {data.id} className = "product-cards">
                        <div className = "product-images">
                            <img src = {data.url} alt = {data.caption} className = "products"/>
                            
                        </div>
                        <div>
                        <h3 className='caption'>{data.caption}</h3>
                        </div>
                    </div>
                )
                )
            }
        </div>
    </div> 
    </>
  )
}

export default ImageSlider