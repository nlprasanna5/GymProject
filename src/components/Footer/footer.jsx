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
                                lorem ipsum bejvgbeinwoofnibgnwiknkn nfekgnerinvselnv
                                nvkrnvkesnvornvoprs
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
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                            </div>

                        </div>
                        <div className={footerStyle.health}>
                            <h4 className={footerStyle.living}>Services</h4>
                            <div className={footerStyle.footText}>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                                <p>Lorem</p>
                            </div>
                        </div>
                        <div>
                            <div className={footerStyle.health}>
                                <h4 className={footerStyle.living}>Programs</h4>
                                <div  className={footerStyle.footText}>
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <p>Lorem</p>
                                    <p>Lorem</p>
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
