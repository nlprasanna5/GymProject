

import React, { useState } from 'react'
import style from "./Blogs.module.css"
import Button from 'react-bootstrap/Button';
const Blogs = () => {
  const[show,setShow]=useState(false)
  function handleTogle(){
    if(show===false){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }
  return (
    <div id='blogs' className={style.container}>
        <div className={style.upperContainer}>
            <div className={style.blogImage}>
              <img className={style.img} src="https://cdn.pixabay.com/photo/2020/06/12/00/11/boxing-5288635_960_720.jpg" alt=''/>
            </div>
            <div className={style.textGym}>
              <h1>Top 5 Benefits of Joining a Gym</h1>
              <h4 className={style.hedh4}>Are you struggling to stay motivated to exercise? Do you find it difficult to push yourself to work out at home? Joining a gym might be the solution you need. Not only can a gym provide you with the equipment you need to work out effectively, but it can also offer many other benefits. In this post, we'll explore the top 5 benefits of joining a gym.</h4>
              <div>
              <Button onClick={handleTogle} variant="danger">{show ? "Read less": "Read more"}</Button>
              </div>
            </div>
        </div>  
     
        <div className={style.lowerContainer}>
        {
          show ? 
          <h5>
          (1)Access to professional equipment
One of the biggest advantages of joining a gym is access to professional equipment. Whether you're looking to build muscle, lose weight, or improve your cardio fitness, a gym will have the tools you need to reach your goals. This means you won't have to spend money on expensive equipment or worry about storing it at home.
<br/>
<br/>
(2) Variety of classes and programs
Most gyms offer a variety of classes and programs to suit different fitness levels and interests. From yoga and Pilates to high-intensity interval training (HIIT) and spinning, there's something for everyone. These classes are led by qualified instructors who can help you improve your technique and achieve your goals.
<br/>
<br/>
(3)Social support
Joining a gym can also provide you with social support. You'll be surrounded by like-minded people who share your passion for fitness, which can help you stay motivated and accountable. You might even make new friends and workout buddies who can support you on your fitness journey.
<br/>
<br/>
(4)Improved mental health
Exercise has been shown to have a positive impact on mental health, and joining a gym can amplify these benefits. Regular exercise can reduce stress, improve mood, and boost self-esteem. Additionally, the social aspect of going to the gym can provide a sense of community and belonging.
<br/>
<br/>
(4)Professional guidance
Finally, joining a gym can provide you with access to professional guidance. Many gyms offer personal training services, which can help you achieve your goals more quickly and safely. A personal trainer can provide you with personalized workout plans, nutritional advice, and motivation to help you stay on track.
<br/>
<br/>
Closing paragraph:
If you're looking to improve your fitness,overall health, joining a gym can be a great step in the right direction. With access to professional equipment, a variety of classes and programs, social support, improved mental health, you'll have everything you need to achieve your goals. So what are you waiting for? Join a gym today and start reaping the benefits!
          </h5>
          
          :""
        }

        </div>
    </div>
  )
}

export default Blogs;