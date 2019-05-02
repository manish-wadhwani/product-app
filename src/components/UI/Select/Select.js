import React from 'react';

const select = (props) => {

    const optionList = props.list.map((option) => {
        return <option
            key={option}
            value={option}
        >{option}</option>
    })

    return (
        <select value={props.selected} onChange={props.changed}>
            {optionList}
        </select>
    );
}

export default select;