import React from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css'

import Button from '../../UI/Button/Button'

const productTable = (props) => {

    const columns = [{
        Header: 'Name',
        accessor: 'name'
    }, {
        Header: 'Weight',
        accessor: 'weight'
    }, {
        Header: 'Availability',
        accessor: 'availability'
    }, {
        Header: 'Editable',
        accessor: 'isEditable',
        Cell: (original) => <span>{original.value ? <Button classes="btn btn-info" clicked={(event) => props.editButtonClicked(event, original.original.name)}>Edit</Button> : null}</span>
    }]

    return (
        <div className="text-center">


            <ReactTable data={props.data} columns={columns} defaultPageSize={10} />
        </div>
    );
};

export default productTable;