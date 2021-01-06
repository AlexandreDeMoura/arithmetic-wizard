import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles(theme => ({
    main: {
        width: 365,
        height: 40,
        paddingLeft: 10,
        fontSize: 19,
        '&:focus': {
            outline: 'none'
        }
    }
}))

export function ResultInput(props: {
    evaluateUserInput: (input: number) => void
}) {
    const classes = useStyles()
    const [userInput, setUserInput] = useState("")
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value)
    }
    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.evaluateUserInput(parseInt(userInput, 10))
            setUserInput('')
        }
    }
    return (
        <input
            className={classes.main}
            onKeyPress={handleSubmit} onChange={handleChange}
            placeholder="Enter the result" value={userInput}
        />
    )
}