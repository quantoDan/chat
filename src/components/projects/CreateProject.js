import React, {Component} from 'react'

class CreateProjects extends Component {
    State = {
        title: '',
        content: '',
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
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <h5 className="grey-text text-darken-3"></h5>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content"  onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProjects