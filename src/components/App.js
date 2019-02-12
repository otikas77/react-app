import React, {Component} from 'react';
import './App.css'
import ChooseAvatar from "./Chose-avatar"

class App extends Component{

	state = {
		isOpen: false
	}

	changeInput(fieldName, event){
		const value = event.target.value;
		this.setState({
			[fieldName]: value
		})
		
	}

	render(){
		const Avatar = this.state.isOpen && <ChooseAvatar />
		return(
		<div className="sign-in">
			<div id="wrapper">
				<h2>Wellcome to my React application</h2>
				<div className="wrapper-for-inputs">
					<input 
						className="firstName" 
						type="text" 
						placeholder="Firs name"
						onChange={this.changeInput.bind(this, "firstName")}
					 />
					<input 
						type="text"
						placeholder="Last name" 
						onChange={this.changeInput.bind(this, "secondName")}
					/>
					<button onClick={this.DisplayChoseAvatar}>Your Avatar &darr;</button>
					{Avatar}
				</div>
			</div>
			<div className="wrapper-for-button">
				<a className="enter" href="/comments">Enter</a>
			</div>	
		</div>
		
			)
		}
	DisplayChoseAvatar = ()=> {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

}


export default App;