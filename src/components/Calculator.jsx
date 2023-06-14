import React, { useState, useEffect } from 'react'

const Calculator = () => {

    const [res, setRes] = useState(0)

    const [heigth, setHeight] = useState(0)
    const [weigth, setWeight] = useState(0)

    const [minWeight, setMinWeight] = useState(0)
    const [maxWeight, setMaxWeight] = useState(0)


    const [text, setText] = useState("")

    const [imperial, setImperial] = useState(false)


    useEffect(() => {

        let heightM = heigth / 100

        let temp = weigth / heightM / heightM
        setRes(temp)

        if (temp > 40) {
            setText("III. fokú (súlyos) elhízás")
        }
        else if (temp > 35) {
            setText("II. fokú elhízás")
        }
        else if (temp > 30) {
            setText("I. fokú elhízás")
        }
        else if (temp > 25) {
            setText("túlsúlyos")
        }
        else if (temp > 18.5) {
            setText("normális testsúly")
        }
        else if (temp > 17) {
            setText("enyhe soványság")
        }
        else if (temp > 16) {
            setText("mérsékelt soványság")
        } else {
            setText("súlyos soványság")
        }


        let minBMI = 18.5
        let maxBMI = 24.9


        setMinWeight(Math.round(minBMI * heightM * heightM*100 )/100)
        setMaxWeight(Math.round(maxBMI * heightM * heightM*100 )/100)



    }, [heigth, weigth])

    return (
        <div className='calculator'>
            <h2>Enter your details below</h2>
            <div className='measure-holder'>
                <div className='measure'>
                    <input type="radio" name='measure' id="metric" onChange={() => { setImperial(false) }} />
                    <label htmlFor="metric">Metric</label>
                </div>

                <div className='measure'>
                    <input type="radio" name='measure' id="imperial" onChange={() => { setImperial(true) }} />
                    <label htmlFor="imperial">Imperial</label>
                </div>
            </div>

            <div className="input">
                <label htmlFor="">Height</label>
                <input type="text" value={heigth} onChange={(e) => {
                    let value = e.target.value
                    if (!Number.isNaN(value * 1))
                        setHeight(value * 1)
                }} />
                <span>{imperial ? "feet" : "cm"}</span>
            </div>

            <div className="input">
                <label htmlFor="">Weight</label>
                <input type="text" value={weigth} onChange={(e) => {
                    let value = e.target.value
                    if (!Number.isNaN(value * 1))
                        setWeight(value * 1)
                }} />
                <span>{imperial ? "pounds" : "kg"}</span>
            </div>

            <div className='result-holder'>
                <b>Your BMI is...</b>
                <h1>{res}</h1>
                <h2>{text}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <b>{minWeight} kgs - {maxWeight} kgs</b></p>
            </div>

        </div>
    )
}

export default Calculator
