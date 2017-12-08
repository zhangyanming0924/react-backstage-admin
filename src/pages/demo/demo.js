import React, { Component } from 'react';
import { connect } from  "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/store/store';
import './demo.css';

@connect(
	mapStateToProps,
	mapDispatchToProps
)
class App extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.addGunAsyncClick = this.addGunAsyncClick.bind(this);
	}
	handleClick(e) {
		this.props.addGun()
		this.props.login()
	}
	addGunAsyncClick() {
		const {addGunAsync} = this.props;
		addGunAsync("./data/filmSeat.json")
	}
	componentWillMount() {
		// const {addGunAsync} = this.props;
		// addGunAsync("./data/filmSeat.json")
	}
	componentDidMount() {
		// this.props.addGunAsync("./data/filmSeat.json")
	}
    render() {
		let roomName = this.props.cityData.roomName;
	    let dataList = [];
		if(!roomName && this.props.cityData.length > 0) {
			this.props.cityData.forEach((item)=> {
				 dataList.push(<li key={item.seatId}>{item.seatId}</li>)
			})
		}
      return (
        <div className="main">
          <h1>现在有机枪{this.props.num}</h1>
          <button onClick={this.handleClick}>申请武器</button>
          <button onClick={this.props.removeGun}>上交武器</button>
          <button onClick={this.addGunAsyncClick}>拖两天再给</button>
	        {roomName ? <p>{roomName}</p> : <ul>{dataList}</ul>}
        </div>
      );
    }
}

export default App;
