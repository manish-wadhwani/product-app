import React, { Component } from 'react';
import EditProductComponent from '../../components/EditProductComponent/EditProductComponent'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actionCreators'

class EditProduct extends Component {

    state = {
        // selectedProductData: {
        //     name: "Micromax A57",
        //     pricingTier: "budget",
        //     priceRange: "5k-8k",
        //     weight: 200, // In grams,
        //     availability: 100,
        //     productUrl: "https://e...content-available-to-author-only...e.com/mma57",
        //     isEditable: true
        // },
        selectedProductData: null,
        pricingInfo: null,
        saveButtonEnabled: true
    }

    loadingDataOfSelectedProduct = () => {

        // Check if data is present in redux store
        if (this.props.allProductData && this.props.selectedProduct) {
            const productData = this.props.allProductData.filter((product) => {
                return product.name === this.props.selectedProduct;
            })

            // Setting Selected Product Data in state
            this.setState({ selectedProductData: productData[0] });

            // Based on current Product Proce Tier populating Pricing Info for DropDown
            this.setState({ pricingInfo: this.props.pricingInfo[productData[0]["pricingTier"]] })
        }

    }

    componentDidMount() {
        this.loadingDataOfSelectedProduct()
    }

    inputChangeHandler = (event, field) => {
        const updatedData = this.state.selectedProductData;

        if (field === "isEditable") {
            // For CheckBox
            updatedData[field] = event.target.checked;
        } else {
            // For Remaining Fields
            updatedData[field] = event.target.value;
        }


        // If Radio Button is changes then setting up price Info

        if (field === "pricingTier") {
            this.setState({ pricingInfo: this.props.pricingInfo[updatedData[field]] })
        }

        this.setState({ selectedProduct: updatedData });
        this.saveButtonActiveHandler();
    }

  
    saveButtonClickedHandler = (event) => {
        event.preventDefault();
        this.props.saveEditedProduct(this.state.selectedProductData)
        //Redirecting to home page
        this.props.history.push("/")
    }

    saveButtonActiveHandler = () => {
        const currentData = this.state.selectedProductData;
        if (currentData.name && currentData.weight && currentData.productUrl &&
            currentData.pricingTier && currentData.priceRange) {
            this.setState({ saveButtonEnabled: true })
        } else {
            this.setState({ saveButtonEnabled: false });
        }
    }


    render() {
        return (
            this.state.selectedProductData ?
                <EditProductComponent
                    productData={this.state.selectedProductData}
                    pricingInfo={this.state.pricingInfo}
                    inputChanged={this.inputChangeHandler}
                    saveButtonClicked={this.saveButtonClickedHandler}
                    saveButtonEnabled={this.state.saveButtonEnabled} /> : null
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.selectedProduct,
        allProductData: state.products,
        pricingInfo: state.pricingInfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveEditedProduct: (value) => { dispatch(actionCreators.updateProducts(value)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)