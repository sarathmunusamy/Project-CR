import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions/actionCreator';


class ItemsForm extends React.Component {


    submitEntry({ name, category, price, stock }) {
        this.props.addItems({ name, category, price, stock });
    }
    render() {

        const { handleSubmit, field: { name, category, price } } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submitEntry.bind(this))}>

                <fieldset className="form-group">
                    <label>Name: </label>
                    <Field name="name"
                        component="input"
                        type="text"
                        className="form-control"
                    />

                </fieldset>

                <fieldset className="form-group">
                    <label>Category: </label>
                    <Field name="category"
                        component="input"
                        type="text"
                        className="form-control"
                    />

                </fieldset>
                <fieldset className="form-group">
                    <label>Price ($): </label>
                    <Field name="price"
                        component="input"
                        type="text"
                        className="form-control"
                    />

                </fieldset>
                <fieldset className="form-group">
                    <label>Stock : </label>
                    <Field name="stock"
                        component="input"
                        type="bool"
                        className="form-control"
                    />

                </fieldset>
                <button action="submit">Add</button>
            </form>
        )
    }
}
export default reduxForm({
    form: 'addItem',
    field: ['name', 'category', 'price', 'stock']
})(connect(null, actions)(ItemsForm));