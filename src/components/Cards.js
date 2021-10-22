import React from 'react'

export default function Cards(props) {
     const classes = 'card ' + props.className;
    return (
        <div className={classes} >
            {props.children}
        </div>
    )
}
