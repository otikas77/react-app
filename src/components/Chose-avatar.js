import React, {Component} from "react";
import './Chose-avatar.css';


class ChooseAvatar extends Component{
	state = {
		isOpen: false
	}

	render(){
		const URLInput = this.state.isOpen && <input className="lovButton" type="text" placeholder="your URL"></input>
		return(
			<div className="choose-avatar">
				<p>How do you want to download your avatar?</p>
					<div>
						<button onClick={this.closeOpen}>From Internet</button>
						{URLInput}
						<button>From Computer</button>
					</div>
			</div>
			)
		}

		closeOpen = ()=>{
			this.setState({
				isOpen: !this.state.isOpen
			})
		}

}			

export default ChooseAvatar;