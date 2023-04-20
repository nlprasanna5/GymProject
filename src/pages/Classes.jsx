

import React from 'react';
import style from './Classes.module.css';

const Classes = () => {
  return (
    <div className={style.classes}>
    <div className={style.classContainer}>
      <div className={style.textContainer}>
        <h2 className={style.classTitle}>Our Classes</h2>
        <p className={style.classQuote}>Fitness is not about being better than someone else, it's about being better than you used to be</p>
      </div>
      <div className={style.imgContainer}>
        <div className={style.classImage}>
          <img src='https://dailyburn.com/life/wp-content/uploads/2015/03/Fitness-Class-Tweaks_2.jpg' alt='classes' className={style.classImg} />
        </div>
        <div className={style.classImage}>
          <img src='https://thumbs.dreamstime.com/b/sport-fitness-lifestyle-people-concept-smiling-men-women-stretching-gym-sport-fitness-lifestyle-people-concept-147152548.jpg' alt='classes' className={style.classImg} />
        </div>
        <div className={style.classImage}>
          <img src='https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2ZpdG5lc3MtdHJlbmRzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6ODI4fX19' alt='classes' className={style.classImg} />
        </div>

      </div>


    </div>
    </div>
  )
}

export default Classes;