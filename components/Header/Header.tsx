import { useState } from 'react'
import styles from './Header.module.css'


const Header = () => {
    
    return (
        <>
            <h1 className={styles.title}>
                La Coco Crypto Exchange
            </h1>
            
            {new Date().toLocaleString() + ""}
        </>

    )
}

export default Header