import React from "react";

class SuccessComponent extends React.Component {
    componentDidMount() {
        alert("Success component will render");
    }
    
    componentWillUnmount() {
        alert("Success Component will unmount");
    }

    render() {
        return (
            <div>Login Success...</div>
        );
    }
}

class ErrorComponent extends React.Component {
    componentDidMount() {
        alert("Error component will render");
    }

    componentWillUnmount() {
        alert("Error Component will unmount");
    }

    render() {
        return (
            <div>Invalid Login</div>
        );
    }
}

export default class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                UserName: 'john',
                Password: 'john@11'
            },
            formDetails: {
                UserName: '',
                Password: ''
            },
            result: null
        };
        this.handleUserName = this.handleUserName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.HandleLoginClick = this.HandleLoginClick.bind(this);
    }

    handleUserName(event) {
        this.setState({
            formDetails: {
                UserName: event.target.value,
                Password: this.state.formDetails.Password
            }
        });
    }

    handlePassword(event) {
        this.setState({
            formDetails: {
                UserName: this.state.formDetails.UserName,
                Password: event.target.value
            }
        });
    }

    HandleLoginClick() {
        if (this.state.formDetails.UserName === this.state.userDetails.UserName && 
            this.state.formDetails.Password === this.state.userDetails.Password) {
            this.setState({ result: <SuccessComponent /> });
        } else {
            this.setState({ result: <ErrorComponent /> });
        }
    }

    render() {
        return (
            <div className="container">
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" onChange={this.handleUserName} /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={this.handlePassword} /></dd>
                </dl>
                <button onClick={this.HandleLoginClick}>Login</button>
                <div>
                    {this.state.result}
                </div>
            </div>
        );
    }
}
