import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    main: {
        position: 'fixed',
        width: 300,
        height: 300,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 100,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#42a5f5',
        boxShadow: '0px 0px 2px 0px #bbdefb'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, .7)',
        zIndex: 100
    },
    userInfo: {
        fontSize: 16,
        lineHeight: 1.5,
        color: 'white',
        marginBottom: 25
    },
    menuContainer: {
        paddingLeft: 0
    },
    menuItem: {
        listStyle: 'none',
        marginBottom: 15,
        fontSize: 20,
        color: 'white',
        '&:hover': {
            textDecoration: 'underline',

        }
    }
}))

export default function InGameMenuModal(props: {
    isOpen: boolean
    handleClosingModal: () => void
    startNewGame: () => void
    isPauseModal: boolean
    info: string
    score: number
    isHighScore: boolean
}) {
    const classes = useStyles()
    const portalContainer = document.getElementById("modal")!
    if (!props.isOpen) return null

    const handleRestart = () => {
        props.handleClosingModal()
        props.startNewGame()
    }
    return ReactDOM.createPortal(
        <>
            <div className={classes.modalOverlay}>
            </div>
            <div className={classes.main}>
                <div
                    className={classes.userInfo}
                >
                    {props.isPauseModal ? props.info : `${props.info} ${props.score}.`}
                </div>
                <ul className={classes.menuContainer}>
                    {props.isPauseModal ? <li
                        className={classes.menuItem}
                        onClick={props.handleClosingModal}
                    >
                        Resume
                    </li> : ''}
                    <li className={classes.menuItem} onClick={handleRestart}>Restart</li>
                    <Link to="/"><li className={classes.menuItem}>Exit to menu</li></Link>
                </ul>
            </div>
        </>,
        portalContainer
    )
}
