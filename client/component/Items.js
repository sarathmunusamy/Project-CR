import React from 'react';
import ItemsForm from './ItemsForm';


function RenderContent(props) {
    var items = props.items;
    var i = 0;
    return (
        <table className="table">
            <tbody>
                <tr style={{ width: '10px' }}>
                    <th>
                        S.No
  </th>       <th>
                        Name
  </th>
                    <th>
                        Category
</th>
                    <th>
                        Price
</th>
                    <th>
                        Stocked
</th>

                </tr>

                {items.map((item, index) => {

                    if (props.onlyAvilableStock) {
                        if (!item.stocked)
                            return null
                    }

                    if (props.searchKeyword != '') {

                        if (!item.name.toUpperCase().startsWith(props.searchKeyword)) {
                            return null;
                        }
                    }

                    return (
                        <tr key={index}>
                            <td>
                                {i += 1}
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.category}
                            </td>
                            <td>
                                {item.price}
                            </td>
                            <td>
                                {item.stocked ? 'Available' : 'Out of stock'}
                            </td>
                        </tr>
                    )

                })}
            </tbody>
        </table>

    )

}

class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.items,
            filteredItems: [],
            searchKeyword: '',
            errorMessage: '',
            onlyAvilableStock: false
        }
        this.filterItems = this.filterItems.bind(this);
        this.filterByAvaliablity = this.filterByAvaliablity.bind(this);
    }

    filterItems(e) {

        // if (e.target.value != '' && e.target.value != ' ') {
        this.setState({
            filteredItems: [],
            searchKeyword: (e.target.value).toUpperCase()
        });
        //}
    }
    filterByAvaliablity(e) {

        var isChecked = e.target.checked;

        this.setState({
            onlyAvilableStock: isChecked
        })
    }

    render() {

        var items = this.state.filteredItems.length > 0 ? this.state.filteredItems : this.state.items;

        return (
            <div>

                <ItemsForm />
                <span><input type='text' onChange={(e) => this.filterItems(e)} />    <input type="checkbox" onClick={this.filterByAvaliablity} /> Only available stocks        </span>
                <RenderContent items={items} onlyAvilableStock={this.state.onlyAvilableStock} searchKeyword={this.state.searchKeyword} />

            </div>
        )
    }

}

export default Items;