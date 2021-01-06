import React from 'react'
import { makeStyles } from '@material-ui/core'
import { AccessAlarm, Favorite } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    main: {
        width: 360,
        height: 450,
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 5,
        transition: 'transform .5s ease-in-out',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    title: {
        margin: 0,
        marginBottom: 35,
        fontSize: 22,
        textAlign: 'center',
    },
    iconContainer: {
        marginBottom: 35,
        display: 'flex',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 100,
        color: '#2196f3',
    },
    description: {
        fontSize: 16,
        marginBottom: 11,
        lineHeight: 1.45
    },
    buttonContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    button: {
        height: 40,
        width: 100,
        padding: 5,
        fontSize: 16,
        border: 'none',
        cursor: 'pointer'
    }
}))

export default function GameModeCard(props: {
    description: string[]
    title: string
}) {
    const path = props.title.toLowerCase()
    const classes = useStyles()
    return (
        <div className={classes.main}>
            <h2 className={classes.title}>{props.title}</h2>
            <div className={classes.iconContainer}>

                {props.title === 'Standard' ?
                    <AccessAlarm className={classes.icon} /> : <Favorite className={classes.icon} />}
            </div>
            {props.description.map(sentence => <div className={classes.description}>{sentence}</div>)}
            <div className={classes.buttonContainer}>

                <Link to={path}>
                    <button className={classes.button}>Play</button>
                </Link>
            </div>
        </div>
    )
}
