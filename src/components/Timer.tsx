import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    main: {
        position: 'absolute',
        top: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 130,
        height: 130,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 35,
        borderRadius: '50%',
        backgroundColor: 'white'
    }
}))

export function Timer(props: {
    timeLeft: number
}) {
    const classes = useStyles()
    return (
        <div className={classes.main}>{props.timeLeft}</div>
    )
}