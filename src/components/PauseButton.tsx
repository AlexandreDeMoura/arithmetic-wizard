import React from 'react'
import PauseIcon from '@material-ui/icons/Pause'

export default function PauseButton(props: {
    handlePauseClick: () => void
}) {
    return (
        <PauseIcon onClick={props.handlePauseClick} style={{ color: 'white', fontSize: 70, cursor: 'pointer' }} />
    )
}

