import React from "react";
import styles from './Header.module.css'; // Import the CSS module
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {



    return (
        <>
            <div className={styles.header_container}>
                <div className={styles.header_content}>
                    <div className={styles.logo}>
                        <p>Text Analyser</p>
                    </div>
                    <div className={styles.socialmedia}>
                        <div><FaFacebook /></div>
                        <div><FaLinkedin /></div>
                        <div><BsTwitterX /></div>
                    </div>
                </div>
            </div>
        </>
    )



}


export default Header