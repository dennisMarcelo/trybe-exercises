import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <li>{ this.props.text }</li>
        )
    }   
}

export default Task;