import React from 'react';
import './EditProductComponent.css'
import Select from '../UI/Select/Select'
import Input from '../UI/Input/Input'

import Button from '../UI/Button/Button'

const editProductComponent = (props) => {

    const list = [
        "4k-6k",
        "5k-8k",
        "8k-11k"
    ];

    return (
        <div className="EditProduct">
            <h2 className="text-center">Edit Product</h2>
            <form>
                <Input
                    value={props.productData.name}
                    type="text"
                    label="Name"

                    changed={(event) => props.inputChanged(event, "name")}
                    required />

                <Input
                    value={props.productData.weight}
                    type="text"
                    label="Weight"

                    changed={(event) => props.inputChanged(event, "weight")}
                    required />

                <Input
                    value={props.productData.availability}
                    type="number"
                    label="Availability"

                    changed={(event) => props.inputChanged(event, "availability")} />

                <Input
                    value={props.productData.productUrl}
                    type="text"
                    label="Product URL"

                    changed={(event) => props.inputChanged(event, "productUrl")}
                    required />

        
                <label>Budget
                    <input type="radio"
                        value="budget"
                        name="Price"
                        onChange={(event) => props.inputChanged(event, "pricingTier")}
                        checked={props.productData.pricingTier === "budget"}></input>
                </label>

                <label>Premier
                    <input type="radio"
                        value="premier"
                        name="Price"
                        onChange={(event) => props.inputChanged(event, "pricingTier")}
                        checked={props.productData.pricingTier === "premier"}></input>
                </label>


                <label> Price Range
                <Select
                    list={props.pricingInfo}
                    selected={props.productData.priceRange}
                    changed={(event) => props.inputChanged(event, "priceRange")} />
                </label>


                 <label>Editable
                    <input type="checkbox"
                        value="premier"
                        name="isEditable"
                        onChange={(event) => props.inputChanged(event, "isEditable")}
                        checked={props.productData.isEditable}></input>
                </label>

                <Button classes="btn btn-primary center-block" clicked={props.saveButtonClicked} disabled={!props.saveButtonEnabled}>Submit</Button>
            </form>
        </div>

    );
}

export default editProductComponent