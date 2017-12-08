import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "element-react";
import  "./slideBox.css";

export default class SlideBox extends React.Component {
	render(){
		return (
			<Layout.Col style={slide_box}>
				<Menu defaultActive="1" style={menu_box}>
					<Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>基础数据</span>}>
						<Menu.Item index="1-1" className="menu-item">
							<Link to="/home/movie">{<span><i className="el-icon-message"></i>影片管理</span>}</Link>
						</Menu.Item>
						<Menu.Item index="1-2" className="menu-item">
							<Link to="/home/cinema">{<span><i className="el-icon-message"></i>影院管理</span>}</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="2" title={<span><i className="el-icon-menu"></i>运营管理</span>}>
						<Menu.Item index="2-1" className="menu-item">
							<Link to="/home/xx">登陆</Link>
						</Menu.Item>
						<Menu.Item index="2-2" className="menu-item">
							<Link to="/home/qq">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="3" title={<span><i className="el-icon-menu"></i>券管理</span>}>
						<Menu.Item index="3-1" className="menu-item">
							<Link to="/home/ss">登陆</Link>
						</Menu.Item>
						<Menu.Item index="3-2" className="menu-item">
							<Link to="/home/ee">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="4" title={<span><i className="el-icon-menu"></i>手机端管理</span>}>
						<Menu.Item index="4-1" className="menu-item">
							<Link to="/home/dd">登陆</Link>
						</Menu.Item>
						<Menu.Item index="4-2" className="menu-item">
							<Link to="/home/ff">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="5" title={<span><i className="el-icon-menu"></i>用户管理</span>}>
						<Menu.Item index="5-1" className="menu-item">
							<Link to="/home/tt">登陆</Link>
						</Menu.Item>
						<Menu.Item index="5-2" className="menu-item">
							<Link to="/home/yy">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="6" title={<span><i className="el-icon-menu"></i>交易管理</span>}>
						<Menu.Item index="6-1" className="menu-item">
							<Link to="/home/uu">登陆</Link>
						</Menu.Item>
						<Menu.Item index="6-2" className="menu-item">
							<Link to="/home/ii">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="7" title={<span><i className="el-icon-menu"></i>财务管理</span>}>
						<Menu.Item index="7-1" className="menu-item">
							<Link to="/home/oo">登陆</Link>
						</Menu.Item>
						<Menu.Item index="7-2" className="menu-item">
							<Link to="/home/pp">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="8" title={<span><i className="el-icon-menu"></i>系统管理</span>}>
						<Menu.Item index="8-1" className="menu-item">
							<Link to="/home/nn">登陆</Link>
						</Menu.Item>
						<Menu.Item index="8-2" className="menu-item">
							<Link to="/home/mm">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
					<Menu.SubMenu index="9" title={<span><i className="el-icon-menu"></i>会员管理</span>}>
						<Menu.Item index="9-1" className="menu-item">
							<Link to="/home/bb">登陆</Link>
						</Menu.Item>
						<Menu.Item index="9-2" className="menu-item">
							<Link to="/home/vv">操作</Link>
						</Menu.Item>
					</Menu.SubMenu>
				</Menu>
			</Layout.Col>
		)
	}
}
const slide_box = {
	width: "170px",
	height: "inherit"
};
const menu_box = {
	height: "inherit",
	overflow: "auto"
};