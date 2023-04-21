import React from "react";
import style from "./Trainers.module.css";

export default function Trainers() {
    const trainersData = [
        {
            src: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Jeff Seid",
            speciality: "Personal Trainers"
        },
        {
            src: "https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Tom",
            speciality: "Strength Coaches"
        },
        {
            src: "https://images.pexels.com/photos/2902620/pexels-photo-2902620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Harry",
            speciality: "Strength Coaches"
        },
        {
            src: "https://images.pexels.com/photos/944637/pexels-photo-944637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Kai Greene",
            speciality: "Nutritionists"
        },
        {
            src: "https://images.pexels.com/photos/3757943/pexels-photo-3757943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Steve Cook",
            speciality: "Nutritionists"
        },
        {
            src: "https://images.pexels.com/photos/14623714/pexels-photo-14623714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Mike Chang",
            speciality: "Sports Psychologists"
        },
        {
            src: "https://images.pexels.com/photos/11385975/pexels-photo-11385975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Lazar Angelov",
            speciality: "Strength Coaches"
        },
        {
            src: "https://images.pexels.com/photos/6550861/pexels-photo-6550861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Calum Von Moger",
            speciality: "Physiotherapists"
        },
        {
            src: "https://images.pexels.com/photos/6550847/pexels-photo-6550847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Christian Guzman",
            speciality: "Physiotherapists"
        },
        {
            src: "https://images.pexels.com/photos/6389075/pexels-photo-6389075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: " Mike Rashid",
            speciality: "Physiotherapists"
        },
        {
            src: "https://images.pexels.com/photos/2922455/pexels-photo-2922455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Mike O’Hearn",
            speciality: "Nutritionists"
        },


    ]
    return (
        <div className={style.mainContainer}>
            <div className={style.headingContainers}>
                <div>
                    <h1>Meet Our Team </h1>
                </div>
                <div>
                    <h3> We are a team of Industry experts.</h3>
                </div>
            </div>
            <div className={style.container}>
                {
                    trainersData.map((person, index) => {
                        return (
                            <div className={style.card} key={index}>
                                <div className={style.cardContainer}>
                                    <div>
                                        <img className={style.img} src={person.src} alt='trainers-images'/>
                                    </div>


                                    <div className={style.nameContainer}>

                                        <div>
                                            <p>{person.name}</p>
                                        </div>

                                        <div>
                                            <p>{person.speciality}</p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
