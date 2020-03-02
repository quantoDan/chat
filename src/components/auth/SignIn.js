import React, {Component} from 'react'

class SignIn extends Component {
    State = {
        email: '',
        pass: '',
    }
    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="pass">Password</label>
                        <input type="password" id="pass" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn