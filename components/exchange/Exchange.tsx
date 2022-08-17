import { useState, useEffect } from 'react'
import styles from './Exchange.module.css'

interface CryptoInfo {

}
const Exchange = () => {
    const [currToUsd, setCurrToUsd] = useState({})

    useEffect(() =>{
        fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cdefichain%2Cdogecoin&vs_currencies=usd")
        .then(res => res.json())
        .then((data) =>{
            setCurrToUsd(data)
            console.log(currToUsd)
        })
        .catch(ex => {
            const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        })
    }, [])

    console.log(currToUsd)
    return(
        <>
            <h5>Choose the currency and the amount to get the exchange rate.</h5>
            <div className="currency-form">
                <label htmlFor="input1">You Have:</label>
                <input name='input1'></input>
                <select>
                    <option value="bitcoin">BTC</option>
                    <option value="ethereum">ETH</option>
                    <option value="bitcoin">USDT</option>
                    <option value="ethereum">DFI</option>
                    <option value="ethereum">DOGE</option>
                </select>
                <label htmlFor="input2">You Get:</label>
                <input name='input2'></input>
                <select>
                    <option value="bitcoin">BTC</option>
                    <option value="ethereum">ETH</option>
                    <option value="bitcoin">USDT</option>
                    <option value="ethereum">DFI</option>
                    <option value="ethereum">DOGE</option>
                </select>
            </div>
            
        </>
    )
}

export default Exchange;