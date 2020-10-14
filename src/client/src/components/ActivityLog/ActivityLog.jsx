import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const ActivityLog = (props) => {
    const [pageNumber, setPageNumber] = useState(1);

    function logs() {
        return props.logs
            ? props.logs.slice((pageNumber - 1) * props.pageSize, pageNumber * props.pageSize)
            : []
    }

    function pagesCount() {
        return props.logs && props.pageSize
            ? Math.ceil(props.logs.length / props.pageSize)
            : 0;
    }

    function handleIncrementPage() {
        if (pageNumber < pagesCount())
            setPageNumber(pageNumber => ++pageNumber)
    }

    function handleDecrementPage() {
        if (pageNumber > 1)
            setPageNumber(pageNumber => --pageNumber)
    }

    return (
        <div isDark withTitle title="Log">
            {logs().map((log, index) => <p key={index}>{log}</p>)}
            <span onClick={handleDecrementPage}>{'<'}</span>
            <span> {pageNumber} </span>
            <span onClick={handleIncrementPage}>{'>'}</span>
        </div>
    );
};

ActivityLog.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.string),
    pageSize: PropTypes.number.isRequired
};

export default ActivityLog;