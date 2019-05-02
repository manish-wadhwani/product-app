import * as actionTypes from '../actions/actionTypes'

const initialState = {
    selectedProduct: null
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.UPDATE_PRODUCTS: {

            const indexOfProductToBeUpdated = state.products.findIndex((product) => {
                return product.name === state.selectedProduct
            })
            
            const productList = state.products;
            productList[indexOfProductToBeUpdated] = action.value

            return { ...state, products: productList }
        }

        case actionTypes.LOAD_DATA: {
            return { ...state, ...action.value }
        }

        case actionTypes.SAVE_SELECTED_PRODUCT: {
            return {...state, selectedProduct: action.value}
        }
    }
    return state;
}
export default reducer;