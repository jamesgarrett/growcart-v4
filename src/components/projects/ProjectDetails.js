import React from 'react'

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title -  {id}</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam at iure facere odit dicta tempora, molestiae illum natus aliquam inventore incidunt quaerat accusamus assumenda sint maxime facilis nemo dolore ipsam.</p>
				</div>
				<div className="card-action card-action grey lighten-4 grey-text">
					<div>Posted by Garrett</div>
					<div>October 31st, 2am</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails