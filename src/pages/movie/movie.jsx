import React from "react";
import $ from "axios";
import { Form, Input, Button, Table, Pagination, Message,Select } from "element-react";
import { QueryFormBox, TableBox, PaginationBox, DangerButton } from "../../components/style";

export default class Movie extends React.Component {
	constructor(props) {
		super(props);
		this.getMovieListData = this.getMovieListData.bind(this);
		this.state = {
			currentPage: 1,
			pageSize: 10,
			total: 0,
			form: {
				status: "",
				keywords: ""
			},
			columns: [
				{
					label: "影片名称",
					prop: "cn_name",
					width: 200,
				},
				{
					label: "导演",
					prop: "director",
					width: 200,
				},
				{
					label: "分类",
					prop: "movie_status",
					width: 100,
					align: "center",
					render: (row)=>{
						if (row.movie_status === "1") {
							return "即将上映";
						} else if (row.movie_status === "2") {
							return "正在上映";
						} else if (row.movie_status === "3") {
							return "冻结";
						} else if (row.movie_status === "4") {
							return "放映结束";
						}
						return "--"
					}
				},
				{
					label: "状态",
					prop: "edit_status",
					width: 100,
					align: "center",
					render:(row)=>{
						if (row.edit_status === "1") {
							return "已发布";
						} else if (row.edit_status === "2") {
							return "未发布";
						}
						return "--";
					}
				},
				{
					label: "添加时间",
					prop: "create_time",
					width: 300,
					align: "center"
				},
				{
					label: "操作",
					align: "center",
					render:(row)=>{
						return (
							<span>
								<Button type="text" size="small">查看</Button>
				                <Button type="text" size="small">编辑</Button>
				                <Button type="text" size="small"> <DangerButton>删除</DangerButton></Button>
				            </span>
						)
					}
				}
			],
			data: [],
			options: [
				{
					value: 1,
					label: "已发布"
				},
				{
					value: 2,
					label: "未发布"
				}
			]
		}
	}
	componentWillMount() {
		// console.log(this.props.location.state)
		this.getMovieListData()
	}
	onChange(key, val) {
		this.setState({
			form: Object.assign({}, this.state.form, {[key]: val})
		})
	}
	getMovieListData() {
		$({ method: "get",
			url: "/Admin/Movie/getMovie",
			responseType: "json",
			params:  Object.assign({
				"page": this.state.currentPage,
				"numPerPage": this.state.pageSize,
			},this.state.form)
		}).then((res)=>{
			if(res.data.status === 1) {
				this.setState({
					data: res.data.data.lists,
					total: parseInt(res.data.data.total_num)
				})
			}
		})
	}
	pageSizeChange=(val)=>{
		this.setState({
			pageSize: val
		});
		setTimeout(()=>{
			this.getMovieListData();
		},10);
	};
	currentPageChange=(val)=>{
		this.setState({
			currentPage: val
		});
		setTimeout(()=>{
			this.getMovieListData();
		},10);
	};
	render() {
		return(
			<div>
				<QueryFormBox>
					<Form ref="form" inline={true}
					      model={this.state.form}
					      labelWidth="80"
					      style={{position: "relative",bottom: "-10px"}}>
						<Form.Item label="发布状态" prop="status">
							{/*<Input size="small"*/}
								   {/*value={this.state.form.status}*/}
							       {/*onChange={this.onChange.bind(this, 'status')}></Input>*/}
							<Select value={this.state.form.status} size="small">
								{
									this.state.options.map(el => {
										return <Select.Option key={el.value} label={el.label} value={el.value} />
									})
								}
							</Select>
						</Form.Item>
						<Form.Item label="关键字" prop="pwd">
							<Input size="small"
							       value={this.state.form.keywords}
							       onChange={this.onChange.bind(this, 'keywords')}></Input>
						</Form.Item>
						<Form.Item>
							<Button size="small" onClick={this.getMovieListData}> 查 询 </Button>
						</Form.Item>
					</Form>
				</QueryFormBox>
				<TableBox>
					<Table
						style={{width: '100%'}}
						columns={this.state.columns}
						data={this.state.data}
						border={true}
						height={420}
					/>
				</TableBox>
				<PaginationBox>
					<Pagination layout="total, sizes, prev, pager, next, jumper"
					            total={this.state.total}
					            pageSizes={[10, 20, 30, 40]}
					            pageSize={this.state.pageSize}
					            currentPage={this.state.currentPage}
					            onSizeChange={this.pageSizeChange}
					            onCurrentChange={this.currentPageChange}
					/>
				</PaginationBox>
			</div>
		)
	}
}
