import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    main: {
        height: 'auto',
        border: 'solid 3px white',
        padding: 15,
        fontSize: 35,
        fontWeight: 600,
        color: 'white',

    },
}))

export function Score(props: {
    score: number
}) {
    const classes = useStyles()
    return (
        <div className={classes.main}>score: {props.score}</div>
    )
}