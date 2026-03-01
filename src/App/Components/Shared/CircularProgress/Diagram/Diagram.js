import React from "react"
import classes from "./Diagram.module.css"

function Diagram({percentage, gradient}) {
    const colors = gradient.split(":")
    const begin = colors[0]
    let end = colors[1]
    if (end == undefined) {
        end = begin
    }

    const gradientId = `gradient-${begin}-${end}`.replace(/[^a-zA-Z0-9-]/g, '')

    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference


    return (
        <svg className={classes.svg} viewBox="0 0 100 100">
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="0%"
                    y1="25%"
                    x2="0%"
                    y2="100%"
                >
                    <stop offset="0%" stopColor={begin} />
                    <stop offset="100%" stopColor={end} />
                </linearGradient>
            </defs>
            {/* Background circle */}
            <circle
                className={classes.circleBackground}
                cx="50"
                cy="50"
                r={radius}
            />
            {/* Progress circle */}
            <circle
                className={classes.circleProgress}
                cx="50"
                cy="50"
                r={radius}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                stroke={`url(#${gradientId})`}
            />
        </svg>
    )
}

export default Diagram
