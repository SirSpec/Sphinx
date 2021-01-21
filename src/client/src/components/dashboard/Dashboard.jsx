import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import * as signalR from "@microsoft/signalr"

import styles from "./dashboard"

import Configuration from "../../constants/Configuration"

import Sudoku from "../sudoku/Sudoku"
import Button from "../button/Button"
import Loader from "../loader/Loader"

const Dashboard = ({ sudoku, setSudoku, changeCell }) => {
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        var connection = new signalR.HubConnectionBuilder()
            .withUrl(Configuration.BackendHubUrl)
            .build()

        connection.on("ReceiveSudoku", sudoku => setSudoku(sudoku))

        connection
            .start()
            .then(() => console.log("Sudoku component connection started."))
            .catch(error => console.log(error))

        setConnection(connection)
    }, []);

    function sendSudoku() {
        connection
            .invoke("Solve", sudoku)
            .catch(err => console.log(err.toString()));
    }

    return Array.isArray(sudoku)
        ? (
            <div className={styles.dashboard}>
                <Sudoku cells={sudoku} changeCell={changeCell} />
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
    sudoku: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
};

export default Dashboard;