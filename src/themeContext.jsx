import React from "react";

const {Provider, Consumer} = React.createContext()

class NameContextProvider extends React.Component{

    state = {
        username: ''
    }

    changeName = (item) => {
        this.setState({username: item})
    }

    render() {
        return (
            <Provider value={{username:this.state.username, changeName: this.changeName}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {NameContextProvider, Consumer as NameContextConsumer}