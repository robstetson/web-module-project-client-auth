import React from 'react';
import axiosWithAuth from '../Utility/axiosWithAuth';

class Friends extends React.Component {

    state = {
        friends: []
    }

    componentDidMount() {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(response => {
                console.log(response)
                this.setState({
                    ...this.state,
                    friends: response.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h1>Friends List</h1>
                    {
                        this.state.friends.map(friend => (
                            <div key={friend.id}>
                                <p>{friend.name}</p>
                                <p>Age: {friend.age}</p>
                                <p>Email: {friend.email}</p>
                            </div>
                        ))
                    }
            </div>
        )
    }
}

export default Friends