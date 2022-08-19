import React, { useState, useEffect, useRef } from 'react'
import styles from './Exchange.module.css'

import CurrencyRow from '../CurrencyRow/CurrencyRow'

const API_URL = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cdefichain%2Cdogecoin&vs_currencies=usd"

interface Rate {
    id?: string;
    usdAmt?: number;
}

export default function Exchange() {
    const [currToUsd, setCurrToUsd] = useState<(string|number)[][]>([])
    const [fromCurr, setFromCurr] = useState<string>()
    const [toCurr, setToCurr] = useState<string>()
    const [exchangeRate, setExchangeRate] = useState<number>(1)
    const [amount, setAmount] = useState(1)
    const [amountInFromCurr, setAmountInFromCurr] = useState(true)


    let toAmount, fromAmount: number

    if (amountInFromCurr) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then((data) => {
                let rates: (string | number)[][] = []
                Object.entries(data).forEach(([key]) => {
                    rates.push([key, data[key]["usd"]])

                });
                setCurrToUsd(rates)
                setFromCurr(rates[0][0])
                setToCurr(rates[1][0])
                setExchangeRate(rates[0][1] / rates[1][1])
            })
            .catch(ex => {
                const error =
                    ex.response.status === 404
                        ? "Resource Not found"
                        : "An unexpected error has occurred";
            })
    }, [])

    
    useEffect(() => {
        if (fromCurr != null && toCurr != null) {
            let from: (string | number)[] | undefined = currToUsd.find(o => o[0] === fromCurr)
            let to: (string | number)[] | undefined = currToUsd.find(o => o[0] === toCurr)
            if (from != undefined && to != undefined) {
                setExchangeRate(from[1] / to[1])
            }

        }
    }, [fromCurr, toCurr])

    function handleFromAmtChange(e: { target: { value: React.SetStateAction<number>; }; }) {
        setAmount(e.target.value)
        setAmountInFromCurr(true)
    }

    function handleToAmtChange(e: { target: { value: React.SetStateAction<number>; }; }) {
        setAmount(e.target.value)
        setAmountInFromCurr(false)
    }

    return (
        <>
            <h5>Choose the currency and the amount to get the exchange rate.</h5>
            <div className="currency-form">
                <CurrencyRow
                    currencyOptions={currToUsd}
                    selectedCurr={fromCurr}
                    onChangeCurr={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
                        if(toCurr != e.target.value){
                            setFromCurr(e.target.value)
                        }
                        
                    }}
                    onChangeAmount={handleFromAmtChange}
                    amount={fromAmount}
                />
                <div className={styles.equal}>=</div>
                <CurrencyRow
                    currencyOptions={currToUsd}
                    selectedCurr={toCurr}
                    onChangeCurr={(e: { target: { value: React.SetStateAction<string | undefined>; }; }) => {
                        if(fromCurr != e.target.value){
                            setToCurr(e.target.value)
                        }
                    }}
                    onChangeAmount={handleToAmtChange}
                    amount={toAmount}
                />
            </div>

        </>
    )
}
