import { makeStyles } from '@material-ui/core'
import React from 'react'
import GameModeCard from '../components/GameModeCard'

const useStyles = makeStyles(theme => ({
    main: {
        width: '80%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
}))

export default function Home() {
    const gameModes = [
        {
            title: 'Standard',
            description: ['The goal is to succeed as many operation in one minute.', 'There is no penality for wrong answers.']
        },
        {
            title: 'Survival',
            description: ['The goal is to succeed as many operation before you lose your three lives.', 'Every wrong answer will make you lose one live.', 'Five good answer streak will give you an additional live. You cannot have more than 5 lives.'],
        }
    ]
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <GameModeCard title={gameModes[0].title} description={gameModes[0].description} />
            <GameModeCard title={gameModes[1].title} description={gameModes[1].description} />
        </div>
    )
}
