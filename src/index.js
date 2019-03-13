import React from 'react';
import ReactDOM from 'react-dom';
class Hello extends React.Component{
	render(){
		return(
			<h1>Hello</h1>
			)
	}
}

class World extends React.Component{
	render(){
		return(
			<h2>world</h2>
		)
	}	
} 

class HelloWorld extends React.Component{
	render(){
		return(
			<section>
				<Hello/>
				<World/>
			</section>
		)
	}
}

ReactDOM.render(<HelloWorld/>,document.getElementById('root'))