import { makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

const useStyles = makeStyles(theme => ({
    main: {
        width: 375,
        height: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        borderRadius: 5,
        backgroundColor: 'white'
    }
}))

export function CalculationGenerator(props: {
    mustGenerateNewCalculation: boolean,
    setNewCalculation: (newCalculation: string) => void
}) {
    const classes = useStyles()
    const [currentCalculation, setCurrentCalculation] = useState('')
    const { mustGenerateNewCalculation } = props
    useEffect(() => {
        let calculationType = Math.floor(Math.random() * 3) + 1 // 0 < calculationType < 4
        let generatedCalculation = ''

        if (calculationType === 1) {
            let firstNumber = Math.floor(Math.random() * (100 - 10)) + 10 // 9 < firstNumber < 100
            let secondNumber = Math.floor(Math.random() * (100 - 10)) + 10
            let sign
            if ((Math.floor(Math.random() * 2) + 1) === 1) {
                sign = '+'
            } else {
                sign = '-'
            }
            generatedCalculation = `${firstNumber} ${sign} ${secondNumber}`
        } else if (calculationType === 2) {
            let firstNumber = Math.floor(Math.random() * 9) + 1
            let secondNumber = Math.floor(Math.random() * 9) + 1
            let thirdNumber = Math.floor(Math.random() * 9) + 1
            if (secondNumber % 2 !== 0) {
                if (secondNumber === 9) {
                    secondNumber--
                } else {
                    secondNumber++
                }
            }
            let firstSign
            if ((Math.floor(Math.random() * 2) + 1) === 1) {
                firstSign = '*'
            } else {
                firstSign = '/'
            }
            let secondSign
            if ((Math.floor(Math.random() * 2) + 1) === 1) {
                secondSign = '+'
            } else {
                secondSign = '-'
            }
            if (firstNumber < secondNumber && firstSign === '/') {
                const newSecondNumber = firstNumber
                firstNumber = secondNumber
                secondNumber = newSecondNumber
            }
            if (firstNumber % secondNumber !== 0 && firstSign === '/') {
                firstSign = '+'
            }
            generatedCalculation = `${firstNumber} ${firstSign} ${secondNumber} ${secondSign} ${thirdNumber}`
        } else if (calculationType === 3) {
            let firstNumber = Math.floor(Math.random() * (100 - 10)) + 10
            let secondNumber = Math.floor(Math.random() * 9) + 1
            generatedCalculation = `${firstNumber} * ${secondNumber}`
        }
        props.setNewCalculation(generatedCalculation)
        setCurrentCalculation(generatedCalculation)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mustGenerateNewCalculation])

    return (
        <p className={classes.main}>
            {currentCalculation}
        </p>
    )
}