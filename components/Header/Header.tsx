import React, { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <h1 className={styles.title}>
        La Coco Crypto Exchange
      </h1>
      <div className={styles.currDateTime}>
        <b>Data last refreshed:</b> {new Date().toLocaleString() + ""}
      </div>

    </>
  )
}