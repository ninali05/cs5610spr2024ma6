import React, { useContext } from "react";
import { GridContext } from "../GridContext";
import "./Cell.css";

export default function Cell (props) {
    const [cellsState, setCellsState] = useContext(GridContext);
    function handleClick() {
        const newState = {
            ...cellsState,
            [props.id]: !cellsState[props.id],
        }
        setCellsState(newState);
    }
    let color;
    if (cellsState[props.id]) {
        color = "blackCell";
    } else {
        color = "whiteCell";
    }

    return (
        <div className={color} onClick={handleClick}>
        </div>

    );
}