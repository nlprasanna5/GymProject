import React from 'react';
import footerStyle from '../../styles/footer.module.css';

import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
} from 'react-icons/ti';



function Footer() {
    return (
        <>
            <footer>
                <div className={footerStyle.footerContainer}>
                    <div className={footerStyle.content}>
                        <div className={footerStyle.media}>
                            <h1 className={footerStyle.gym}>GYM</h1>
                            <p>
                            Train hard, stay focused, and never give up on your fitness goals
                            </p>
                            <div className={footerStyle.icons}>
                                <div className={footerStyle.icon}> <TiSocialFacebook /></div>
                                <div className={footerStyle.icon}><TiSocialInstagram /></div>
                                <div className={footerStyle.icon}><TiSocialTwitter /></div>



                            </div>
                        </div>
                        <div className={footerStyle.health}>
                            <h4 className={footerStyle.living}>Health living</h4>
                            <div className={footerStyle.footText}>
                                <p>Home</p>
                                <p>About Us</p>
                                <p>Classes</p>
                                <p>Blogs</p>
                            </div>

                        </div>
                        <div className={footerStyle.health}>
                            <h4 className={footerStyle.living}>Services</h4>
                            <div className={footerStyle.footText}>
                                <p>Dancing</p>
                                <p>Nutrition counseling</p>
                                <p>Sports facilities</p>
                                <p>Cardio machines </p>
                            </div>
                        </div>
                        <div>
                            <div className={footerStyle.health}>
                                <h4 className={footerStyle.living}>Programs</h4>
                                <div  className={footerStyle.footText}>
                                    <p>Three months</p>
                                    <p>Six months</p>
                                    <p>One year</p>
                                    <p>Five years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={footerStyle.copy}>
                        <small>&copy;2023 All rights copy reserved</small>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
