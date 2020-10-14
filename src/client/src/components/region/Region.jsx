import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import styles from "./region"

import Cell from "../cell/Cell"

const Region = (props) => {
    return (
        <div className={styles.region}>
            <Cell value="1"></Cell>
            <Cell value="2"></Cell>
            <Cell value="3"></Cell>
            <Cell value="4"></Cell>
            <Cell value="5"></Cell>
            <Cell value="6"></Cell>
            <Cell value="7"></Cell>
            <Cell value="8"></Cell>
            <Cell value="9"></Cell>
        </div>
    );
};

Region.propTypes = {
};

export default Region;