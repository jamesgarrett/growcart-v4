import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
	const {notifications} = props;
	return (
		<div className="section">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Notifications</span>
					<ul className="notifications">
						{ notifications && notifications.map(item => {
							return (
								<li key={item.id}>
									<span className="teal-text lighten-3">{item.user} </span>
									<span className="item-content">{item.content} <br /></span>
									<span className="grey-text note-date">
										{ moment(item.time.toDate()).fromNow()}
									</span>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
		)
}

export default Notifications