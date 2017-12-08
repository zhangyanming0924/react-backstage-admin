import React from "react";
import { Redirect } from  "react-router-dom";
import { connect }  from "react-redux";
import { mapStateToProps, mapDispatchToProps } from '../../redux/store/store';
import HeaderBox from "../../components/header";
import SlideBox from "../../components/slideBox/slideBox";
import styled from "styled-components";

@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class Home  extends  React.Component {
	constructor(props){
		super(props)
		this.state = {
			isAuth: ""
		}
	}
	componentWillMount(){
		this.setState({
			isAuth: sessionStorage.getItem("isAuth")
		})
	}
	componentDidMount() {
		if(this.props.history) {
			this.props.history.push({
				pathname: "/home/movie",
				search: '?name=yzf',
				state: {age:25}
			})
		}
	}
	render() {
		const content =
			<HomeContainer>
				<HeaderBox></HeaderBox>
				<SlideBox></SlideBox>
				<Main>
					{this.props.children}
				</Main>
			</HomeContainer>
		return (
			this.state.isAuth ? content : <Redirect to="/login"></Redirect>
		)
	}
}

const HomeContainer = styled.div`
	height: inherit;
    overflow: hidden;
`;
const Main = styled.div`
	position: absolute;
    top: 50px;
    left: 170px;
    right: 0;
    bottom: 0;
    padding: 15px 0;
    background-color: #fff;
`;