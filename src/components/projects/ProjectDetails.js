import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
          <div className="card z-depth-0">
              <div className="card-content">
                  <span className="card-title">Project Title - {id}</span>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae sint accusamus a voluptas, error maxime dicta dolorem magnam commodi ab unde hic velit ipsum eum dolore eaque cupiditate, necessitatibus esse?</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                  <div> Posted By Ben</div>
                  <div> 11th of November, 5:30pm</div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProjectDetails
