import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import * as signalR from "@microsoft/signalr"

import styles from "./dashboard"

import Sudoku from "../sudoku/Sudoku"
import Button from "../button/Button"
import Loader from "../loader/Loader"

const Dashboard = ({ sudoku, setSudoku, changeCell }) => {
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:5001/hub").build()

        connection.on("ReceiveMap", sudoku => {
            setSudoku(sudoku);
        })

        connection.start().then(() => {
            console.log("Map component connection started Dashboard.")
            connection.invoke("SendMap").catch(err => {
                console.log(err.toString());
            });
        }).catch(err => {
            console.log(err)
        });

        setConnection(connection);
    }, []);

    function sendSudoku() {
        console.log(sudoku)
    }

    return sudoku.cells
        ? (
            <div className={styles.dashboard}>
                <Sudoku cells={sudoku.cells} changeCell={changeCell} />
                <Button type={Button.types.PRIMARY} onClick={sendSudoku}>Send</Button>
            </div>
        )
        : (
            <div className={styles.dashboard}>
                <Loader />
            </div>
        );
};

Dashboard.propTypes = {
    setSudoku: PropTypes.func.isRequired,
    changeCell: PropTypes.func.isRequired,
    sudoku: PropTypes.shape(PropTypes.arrayOf(PropTypes.array.isRequired).isRequired).isRequired,
};

export default Dashboard;