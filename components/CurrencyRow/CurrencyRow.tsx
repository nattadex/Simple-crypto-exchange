import React, { useEffect, useRef } from 'react'
import styles from './CurrencyRow.module.css'


export default function CurrencyRow(props: any) {
    const {
        currencyOptions,
        selectedCurr,
        onChangeCurr,
        onChangeAmount,
        amount
    } = props


    return (
        <div>

            <input type="number" className={styles.input} value={amount} onChange={onChangeAmount} />
            <select className={styles.select} value={selectedCurr} onChange={onChangeCurr}>
                {
                    currencyOptions.map((option: (string | number)[]) => {
                        return <option value={option[0]}>{option[0]}</option>

                    })
                }
            </select>
        </div >
    )
}

