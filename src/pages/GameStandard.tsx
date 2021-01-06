/* eslint-disable eqeqeq */
/* eslint-disable no-eval */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import InGameMenuModal from '../components/InGameMenuModal'
import { Timer } from '../components/Timer'
import { CalculationGenerator } from '../components/CalculationGenerator'
import { ResultInput } from '../components/ResultInput'
import { Score } from '../components/Score'
import PauseButton from '../components/PauseButton'
import useLocalStorage from '../customHooks/useLocalStorage'

const useStyles = makeStyles(theme => ({
    main: {
        width: '100%',
        height: 'calc(100% - 40px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0 40px',
        paddingTop: 40,
    },
    middleContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}))

export default function GameStandard() {
    const modalInfo = [
        'The game is paused, click on "resume" to continue.',
        'The game is over, you got a score of',
        'You have a new hightest score of'
    ]
    const classes = useStyles()
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useLocalStorage('standardBestScore', 0)
    const [isHighScore, setIsHighScore] = useState(false)
    const [timeLeft, setTimeLeft] = useState(60)
    const [isGameStarted, setIsGameStarted] = useState(true)
    const [currentCalculation, setCurrentCalculation] = useState('')
    const [mustGenerateNewCalculation, setMustGenerateNewCalculation] = useState(false)
    const [isGameInPause, setIsGameInPause] = useState(false)

    useEffect(() => {
        if (isGameStarted && (timeLeft !== 0) && !isGameInPause) {
            const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000)
            return () => clearInterval(timer)
        }
        if (timeLeft === 0) {
            endGame()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGameInPause, isGameStarted, timeLeft])

    const startNewGame = () => {
        setScore(0)
        setTimeLeft(60)
        setIsHighScore(false)
        setIsGameStarted(true)
        setMustGenerateNewCalculation(true)
    }

    const endGame = () => {
        if (score > bestScore) {
            setBestScore(score)
            setIsHighScore(true)
        }
        setIsGameStarted(false)
        setMustGenerateNewCalculation(false)
    }
    const setNewCalculation = (newCalculation: string) => {
        setMustGenerateNewCalculation(false)
        setCurrentCalculation(newCalculation)
    }
    const evaluateUserInput = (userInput: number) => {
        if (eval(currentCalculation) == userInput) {
            setScore(score + 1)
        }

        setMustGenerateNewCalculation(true)
    }

    return (
        <div className={classes.main}>
            <PauseButton handlePauseClick={() => setIsGameInPause(true)} />
            <Timer timeLeft={timeLeft} />
            <div className={classes.middleContainer}>
                <CalculationGenerator
                    mustGenerateNewCalculation={mustGenerateNewCalculation}
                    setNewCalculation={setNewCalculation} />
                <ResultInput evaluateUserInput={evaluateUserInput} />
            </div>
            <Score score={score} />
            <InGameMenuModal
                isOpen={isGameInPause || !isGameStarted}
                handleClosingModal={() => setIsGameInPause(false)}
                startNewGame={startNewGame}
                info={isGameInPause ? modalInfo[0] : isHighScore ? modalInfo[2] : modalInfo[1]}
                isPauseModal={isGameInPause}
                score={score}
                isHighScore={isHighScore}
            />
        </div>
    )
}
