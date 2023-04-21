import React, { useState } from "react";
import programStyle from "../../styles/trainingProgram.module.css";

const images = [
    "https://images.unsplash.com/photo-1561214095-fea147325936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://thumbs.dreamstime.com/b/gym-24699087.jpg",
    "https://media.istockphoto.com/id/1132086660/photo/side-view-of-beautiful-muscular-woman-running-on-treadmill.jpg?s=612x612&w=0&k=20&c=5Vq_BJjG7sbIyKIP-Adu0pChReDXm0dC7BVPvto2M0I=",
    "https://res.cloudinary.com/dvjfemxbz/image/upload/Woman-exercising-pilates-machine-dumbells-e1663928692217.jpg",
    "https://prod-ne-cdn-media.puregym.com/media/819394/gym-workout-plan-for-gaining-muscle_header.jpg?quality=80",
    "https://images.unsplash.com/photo-1561214095-fea147325936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    "https://thumbs.dreamstime.com/b/gym-24699087.jpg",

];

const training = ['Body Building', 'Yoga', 'Aerobic', 'Flexibility', 'Personal Training', 'Plyometric Boxes', 'Open 24hrs', 'Body Building', 'Yoga', 'Aerobic'];

// Duplicate the first and last image and place them at the end and the beginning of the array
images.unshift(images[images.length - 1]);
images.push(images[1]);

const TrainingProgram = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 2 ? 1 : prevIndex + 1
        );
       

    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 1 ? images.length - 2 : prevIndex - 1
        );
       

    };

    return (
        <div id="training" className={programStyle.program}>
            <div className={programStyle.slider}>
                <div className={programStyle.trainContainer}>
                    <h2 className={programStyle.train}>Training Programs</h2>
                </div>

                <div className={programStyle.sliderWrapper} 
                    style={{ transform: `translateX(-${currentIndex * (100 / images.length)}%)`, }}
                >
                    {images.map((image, index) => (
                        <div className={programStyle.slide} key={index}>
                            <img src={image} alt={`Slide ${index + 1}`} className={programStyle.image} />
                            <div className={programStyle.textContent}>
                                <h5 className={programStyle.text}>{training[index]}</h5>
                            </div>
                        </div>

                    ))}
                </div>
                <div className={programStyle.change}>
                    <div className={programStyle.modify}>
                        <button className={programStyle.prev} onClick={goToPrevSlide}>
                            &#10094;
                        </button>
                        <h2 className={programStyle.train}>View all</h2>
                        <button className={programStyle.next} onClick={goToNextSlide}>
                            &#10095;
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrainingProgram;
