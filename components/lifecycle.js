import React from 'react';
class Component extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:0
		}
		this.SetNewNumber=this.SetNewNumber.bind(this);
	}
		SetNewNumber(){
			this.setState({
				data:this.state.data+1
			})
		}

		render(){
			return(
				<div>
					<button onClick={this.SetNewNumber}>Increment</button>
					<LifeCycle MyNumber={this.state.data}>
					</LifeCycle>
				</div>
				)
		}
}

class LifeCycle extends React.Component{
	componentWillMount(){
		console.log("Component Will Mount Here")
	}
		componentDidMount(){
			console.log("Component Did Mount Here")
		}
			shouldComponentUpdate(newProps,newState){
				return true;
			}
				componentWillUpdate(nextProps,nextState){
					console.log("Component will updated Here")
				}
					componentDidUpdate(prevProps,prevState){
						console.log("Component updated Here")
					}
						componentWillReceiveProps(newProps){
							console.log("Component will receive Props Here")
						}
							componentWillUnmount(){
								console.log("Component UnMounted")
							}

			  render(){
			    	return(
			            	<div>
			              			<h1>{this.props.MyNumber}</h1>
			            	</div>
			      )
			  }
			}

export default Component;
