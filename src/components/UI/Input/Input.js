import React from 'react';
import './Input.css'
const input = (props) => {
    return (
        <div className="form-group">
            <label >{props.label}</label>
            <input type={props.type}
                placeholder={props.placeholder}
                onChange={props.changed}
                value={props.value}
                required={props.required}
                name={props.name}
                checked={props.checked}
                className="form-control"
            />
        </div>
    );
}

export default input