import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
            <span className="card-title">Project title - {id}</span>
                <p>Loremsaskdaksdkawkjaskdjasd</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>asdasdasdasd</div>
                <div>asdasdasdasd</div>
            </div>
         </div>
    )
}

export default ProjectDetails