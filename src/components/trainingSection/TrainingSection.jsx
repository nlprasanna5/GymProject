

import React from 'react';
import style from "./TrainingSection.module.css";
import { useNavigate } from 'react-router-dom';

const TrainingSection = () => {
  const navigate = useNavigate();
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Fitness Trainer',
      bio: 'With years of experience in the fitness industry and a passion for leading an active lifestyle, I specialize in creating customized workout plans and nutrition programs tailored to the unique needs of each individual.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    {
     
      name: 'Samantha Lee',
      role: 'Personal trainer',
      bio: 'Samantha is a certified personal trainer with over 10 years of experience in the fitness industry. She specializes in high-intensity interval training (HIIT) and can create personalized workout plans to help you reach your fitness goals.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    {
      name: 'Tyler',
      role: 'Athlete',
      bio: 'Tyler is a former professional athlete who has now turned his passion for fitness into a career as a personal trainer. He has expertise in strength training, mobility, and injury prevention',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    {
      name: 'Michael Doe',
      role: 'Nutritionist',
      bio: ' Michael is a fitness coach who believes in a holistic approach to health and wellness. He can help you not only with your physical fitness but also with stress management, sleep optimization, and nutrition.',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/12/02/08/30/fitness-1877209_960_720.jpg',
    },
    // add more team members here
  ];

  return (
    <section id='trainer' className={style.teamSection}>
      <h2 className={style.teamSectionTitle}>Meet Our Trainers</h2>
      <div className={style.teamMemberList}>
        {teamMembers.map((member, index) => (
          <div className={style.teamMember} key={index}>
            <img
              src={member.imageUrl}
              alt={member.name}
              className={style.teamMemberImage}
            />
            <h3 className={style.teamMemberName}>{member.name}</h3>
            <p className={style.teamMemberRole}>{member.role}</p>
            <p className={style.teamMemberBio}>{member.bio}</p>
          </div>
        ))}
      </div>
      <div className={style.teamButtonDiv}>
        <button className={style.meetTeamButton} onClick={()=>navigate('/trainers')}>Meet our whole team</button>
      </div>
    </section>
  );
}

export default TrainingSection;