import React  from "react";
import $ from "jquery";
import { connect }  from "react-redux";
import { Redirect } from  "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from '../../redux/store/store';
import { Form, Input, Button, Message } from "element-react";
import styled from "styled-components";
import logo from "../../images/logomini.png";

@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: "",
				pwd: "",
				authCode: ""
			},
			rules: {
				name: [
					{required: true, message: '请输入用户名', trigger: 'blur'}
				],
				pwd: [
					{required: true, message: '请输入密码', trigger: 'blur'}
				],
				authCode: [
					{required: true, message: '请输入验证码', trigger: 'blur'}
				]
			},
			authImage: "/Admin/Public/verify.html"
		}
	}
	refresh=()=>{
		this.setState({
			authImage: "/Admin/Public/verify.html?t="+ Date.now()
		})
	}
	onChange(key, val) {
		this.setState({
			form: Object.assign({}, this.state.form, {[key]: val})
		})
	}
	handleSubmit() {
		this.refs.form.validate((valid)=>{
			if(valid){
				this.login(this.state.form.name,this.state.form.pwd,this.state.form.authCode)
			}else {
				Message("请完成表单填写")
			}
		})
	}
	login=(name,pwd,authCode)=>{
		let _this = this;
		$.ajax({
			type: "post",
			url: "/Admin/Public/checkLogin.html",
			dataType: "json",
			data: {
				username: name,
				password: pwd,
				verify: authCode
			},
			success: function (data) {
				sessionStorage.setItem("isAuth", true);
				_this.props.history.push("/home");
			}
		})
	}
	componentDidMount() {
		this.refresh();
	}
	render() {
		return (
			<LoginBox>
				{this.props.user.isAuth ? <Redirect to="/home"></Redirect> : null}
				<LogoImgBox>
					<img src={logo}  alt=""/>
				</LogoImgBox>
				<ElFormBox>
					<Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="80">
						<Form.Item label="用户名" prop="name">
							<Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}></Input>
						</Form.Item>
						<Form.Item label="密码" prop="pwd">
							<Input value={this.state.form.pwd} onChange={this.onChange.bind(this, 'pwd')}></Input>
						</Form.Item>
						<Form.Item label="验证码" prop="authCode">
							<Input value={this.state.form.authCode}
							       onChange={this.onChange.bind(this, 'authCode')}
							       style={authCodeInput}>
							</Input>
							<img src={this.state.authImage} style={authCodeImage} onClick={this.refresh} alt=""/>
						</Form.Item>
						<Form.Item>
							<Button onClick={this.handleSubmit.bind(this)}>登录</Button>
						</Form.Item>
					</Form>
				</ElFormBox>
			</LoginBox>
		)
	}
}

const LoginBox = styled.div`
	position: absolute;
    width: 600px;
    height: 460px;
    top: 50%;
    left: 50%;
    margin: -230px 0 0 -300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 30px;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.5)
`;
const LogoImgBox = styled.div`
	display: inline-block;
	margin: 0  0 10px 110px;
`;
const ElFormBox = styled.div`
	width: 400px;
    margin-left: 40px;
`;
const authCodeInput = {
	width: "160px",
	marginRight: "10px"
};
const authCodeImage = {
	position: "absolute",
	top: "1px",
	height: "34px",
	width: "148px",
	borderRadius: "3px"
};