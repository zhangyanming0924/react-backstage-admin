import React from "react";
import styled from "styled-components";
import logo from "../images/logomini.png";

const Header = styled.header`
	height: 50px;
    line-height: 50px;
    background-color: #ccc;
`;
const LogoImg = styled.span`
	dispaly: inline-block;
	position: relative;
	top: 5px;
	left: 50px;
`;
export default class HeaderBox extends React.Component {
	render (){
		return (
			<Header>
				<LogoImg>
					<img src={logo} width="170" height="40" alt="LOGO"/>
				</LogoImg>
			</Header>
		)
	}
}