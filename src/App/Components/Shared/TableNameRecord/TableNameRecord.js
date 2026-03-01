import React from "react"
import classes from "./TableNameRecord.module.css"

function TableNameRecord({value={}, click=()=>{}, active=false}) {
    let style = {
        "--hover-border-color": "#1A73E8",
        cursor: "pointer",
    }

    const {
        code="",
        fullname="",
    } = value

    let name = code
    if (name.trim() === "") {
        name = fullname
        style = {
            justifyContent: "start",
            fontSize: "11px",
            fontWeight: "400",
            "--hover-border-color": "#e6e7e8",
        }

    }

    const cls = [classes.record]
    if (active) {
        cls.push(classes.active)
    }

    return (
        <div className={cls.join(" ")} style={style} onClick={click}>
            {name}
        </div>
    )
}

export default TableNameRecord
