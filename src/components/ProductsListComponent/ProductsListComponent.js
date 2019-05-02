import React from 'react';
import ProductsTable from './ProductsTable/ProductsTable'
import './ProductListComponent.css'

const productsListComponent = (props) => {
    return (
        <div className="ProductList">
            <h2 className="text-center">List of Products</h2>
            <ProductsTable data={props.tableData}
                editButtonClicked={props.editButtonClicked} />
        </div>
    );
};

export default productsListComponent;