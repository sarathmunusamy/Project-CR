import React from 'react';

class Sample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            url: 'https://jsonplaceholder.typicode.com/posts/',
            target: 1
        }
        this.changeTarget = this.changeTarget.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
        this.fetchData();

    }

    fetchData() {
        fetch(this.state.url + this.state.target)
            .then(response => response.json())
            .then(json => this.setState({ data: json }))
    }

    changeTarget() {
        console.log('taget clicked');
        this.setState({
            target: Math.floor(Math.random() * 100) + 1
        })
        this.fetchData();
    }

    render() {
        console.log('Render........');
        return (
            <div>
                {this.state.data && this.state.data.body && <div>
                    {this.state.data.body}
                </div>
                }
                <button onClick={this.changeTarget} className="btn btn-primary">Click for another data</button>
                {this.state.target}
            </div>
        )
    }

}
export default Sample;