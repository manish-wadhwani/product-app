import React, { Component } from 'react'
import ProductsListComponent from '../../components/ProductsListComponent/ProductsListComponent'
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/actionCreators'

class ProductList extends Component {

    componentDidMount() {
        this.props.loadDataFromFile()
    }

    editButtonClickedHandler = (event, productName) => {
        event.preventDefault();
        this.props.saveSelectedProduct(productName);
        this.props.history.push("/edit-product")
    }

    render() {
        return (
            <React.Fragment>
                <ProductsListComponent tableData={this.props.productData}
                    editButtonClicked={this.editButtonClickedHandler} />
            </React.Fragment>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        productData: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateProductInformation: () => { dispatch(actionCreators.updateProducts(123)) },
        loadDataFromFile: () => { dispatch(actionCreators.loadDataInStore()) },
        saveSelectedProduct: (value) => { dispatch(actionCreators.saveSelectedProduct(value)) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList)