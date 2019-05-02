import * as actionTypes from './actionTypes'
import * as productData from '../../assets/products';


export const updateProducts = (value) => {
    return {
        type: actionTypes.UPDATE_PRODUCTS,
        value: value
    }
}

const loadData = (value) => {
    return {
        type: actionTypes.LOAD_DATA,
        value: value
    }
}

export const loadDataInStore = () => {
    return (dispatch) => {
        const data = Object.assign({}, { products: productData.products }, { pricingInfo: productData.pricingInfo });
        dispatch(loadData(data))
    }
}

export const saveSelectedProduct = (value) => {
    return {
        type: actionTypes.SAVE_SELECTED_PRODUCT,
        value: value
    }
}