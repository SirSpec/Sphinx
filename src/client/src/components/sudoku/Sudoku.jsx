import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import * as signalR from "@microsoft/signalr"

import styles from "./sudoku"

import Cell from "../cell/Cell"

const Sudoku = ({ sudoku, setSudoku, changeCell }) => {
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/hub").build()

        connection.on("ReceiveMap", sudoku => {
            console.log(sudoku)
            setSudoku(sudoku);
        })

        connection.start().then(() => {
            console.log("Map component connection started.")
            connection.invoke("SendMap").catch(err => {
                console.log(err.toString());
            });
        }).catch(err => {
            console.log(err)
        });

        setConnection(connection);
    }, []);

    return (
        <ul className={styles.sudoku}>
            {sudoku.cells ? sudoku.cells.map((row, rowIndex) =>
                row.map((cell, columnIndex) =>
                    <Cell
                        key={`${rowIndex}_${columnIndex}`}
                        cell={
                            {
                                value: cell,
                                row: rowIndex,
                                column: columnIndex
                            }
                        }
                        onValueChange={changeCell} />
                )
            ) : "Loading"}
        </ul>
    );
};

Sudoku.propTypes = {
    sudoku: PropTypes.any.isRequired
};

export default Sudoku;