import React from 'react'
import { makeStyles } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
    main: {
        position: 'absolute',
        top: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 180,
        height: 60,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: 50,
        height: 50
    },
    liveUnused: {
        color: 'red'
    },
    liveUsed: {
        color: 'black'
    }
}))

export default function LivesLeft(props: {
    livesLeft: number
}) {
    const classes = useStyles()
    return (
        <div className={classes.main}>
            {['', '', ''].map((elem, index) => {
                const isLiveUnused = props.livesLeft >= index + 1
                return (
                    <FavoriteIcon
                        className={`${classes.icon} ${isLiveUnused ? classes.liveUnused : classes.liveUsed}`}
                    />
                )
            })}
        </div>
    )
}
