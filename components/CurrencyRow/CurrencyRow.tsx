import React from 'react'
import styles from './CurrencyRow.module.css'


export default function CurrencyRow(props: any) {
    const {
        currencyOptions,
        selectedCurr,
        onChangeCurr,
        onChangeAmount,
        amount
    } = props
    console.log(currencyOptions)
    console.log(selectedCurr)


    return (
        <div>
            <input type="number" className={styles.input} value={amount} onChange={onChangeAmount} />
            {
                currencyOptions.map((option: any) => {
                    <select className={styles.select} value={selectedCurr} onChange={onChangeCurr}>

                        <option value={option[0]} > {option[0]}</option>
                    </select>
                })
            }
            <select className={styles.select} value={selectedCurr} onChange={onChangeCurr}>

                <option value="bitcoin" >BTC</option>
                <option value="dogecoin">DOGE</option>
                <option value="ethereum">ETH</option>
                <option value="tether">USDT</option>
                <option value="defichain">DFI</option>

            </select>
        </div >
    )
}

