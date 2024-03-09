import { useState } from "react";
import { GridContext } from "../GridContext";
import "./Grid.css";
import Cell from "../Cell/Cell";

export default function Grid () {

    const [cellsState, setCellsState] = useState({0: false, 1: false, 2: false, 3: false});

    let blackCellsCount = 0;
    Object.values(cellsState).forEach((value) => {
        if (value) {
            blackCellsCount += 1;
        }
      });

    return (
        <GridContext.Provider value={[cellsState, setCellsState]}>
            <div>
                <h1>Count: {blackCellsCount}</h1>
                <div className="grid">
                    <Cell id={0}/>
                    <Cell id={1}/>
                    <Cell id={2}/>
                    <Cell id={3}/>
                </div>
            </div>
            
        </GridContext.Provider>
    );
}