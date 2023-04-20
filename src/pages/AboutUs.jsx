


import React from 'react'
import style from "./AboutUS.module.css"
import Button from 'react-bootstrap/Button';
const AboutUs = () => {
  function showAlert(){
    alert("clicked from about us section")
  }
  return (
    // <div className={style.aboutContainer}>
    <div className={style.container}>
    <div className={style.container1}>
      <div>
        <iframe
          width="300"
          height="315"
          src="https://www.youtube.com/embed/-a4vyrtxr_U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className={style.containerRight}>
        <div className={style.aboutTitle}>
          <h3 className={style.heading}>About us</h3>
        </div>
        <div className={style.textConent}>
          <p className={style.text}>
            Our state-of-the-art facility is equipped with top-of-the-line
            equipment and staffed by experienced trainers who are dedicated to
            helping you succeed.
          </p>
        </div>
        <div>
        <Button variant="danger" onClick={showAlert}>Learn more</Button>
        </div>
      </div>
    </div>
    {/* end of first container */}
    <div className={style.container2}>
     
        <div className={style.containerRight}>
          <div>
            <h3 className={style.heading}>Why choose us ?</h3>
          </div>
          <div className={style.text}>
            <h3>Cunsultation with Experts</h3>
            <p>From weightlifting and cardio to yoga and Pilates, we offer a wide range of classes and activities to keep your workouts fresh and exciting.</p>
            <h3>Best workout facilities</h3>
            <p>
            Our state-of-the-art facility is equipped with top-of-the-line equipment and staffed by experienced trainers who are dedicated to helping you succeed.
            </p>
          </div>
        </div>
        <iframe width="300" height="315" src="https://www.youtube.com/embed/HnoPHqrdXQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     
    </div>
  </div>
  // </div>
  )
}

export default AboutUs