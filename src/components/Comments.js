import React from "react";
import "./Comments.css"
import DEFAULTAVATAR from './default-avatar.jpg';

class Comments extends React.Component{
	render(){
		return(
			<div>
				<div className="main">
					<div className="inputField"></div>
					<div className="chatField">
						<div className="wrapper-for-avatar"><img className="defaultAvatar" src={DEFAULTAVATAR} /></div>
						<div className="wrapper-for-message">
							<div className="nameLastName">
								<p>Name:  </p>
								<p>Last Name:  </p>
							</div>
							
							<textarea className="message" type="text" ></textarea>
						</div>
					</div>
				</div>
			</div>	
			)
	}
} 

export default Comments