import React, { Component } from 'react'
// axios 向服务器发送get、post请求
import axios from 'axios'
// qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库
import qs from 'qs'
// 导入路由
// import {withRouter} from "react-router-dom";

// 编辑组件
class Edit extends Component {

    constructor(run) {
        super(run);

        // 编辑用户信息
        this.state = {
            // id: 0,  // id定死,可写可不写
            username: '',
            sex: '',
        }
        // console.log(this.props)  // {history: {…}, location: {…}, match: {…}, staticContext: undefined}
        // console.log(this.props.match)  // {path: "/user/edit/:userId", url: "/user/edit/89", isExact: true, params: {…}}
        // console.log(this.props.match.params)  // {userId: "89"}
        console.log(this.props.match.params.userId)  // 要编辑用户的Id
    }

    // componentDidMount() 挂载
    componentDidMount() {
        let userId = this.props.match.params.userId  // 要编辑用户的Id

        // 查询单个用户
        axios.get('http://127.0.0.1:8888/mock.php/user/get?id=' + userId)
        // then()   ES6,then()方法是异步执行(就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到的问题)
        .then((userinfo) => {
            console.log(userinfo)  // {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
            
            // 重新渲染要编辑用户的信息(把数据变活)
            this.setState(userinfo.data)
        })
        // 捕获错误
        .catch((error) => {
            // 警告框显示错误
            alert(error);
        })
    // .then() .catch()     为链式操作，会捕获到上一步.then中抛出的操作
    }

    // 
    handleClick = () => {
        axios({
            // 更新指定用户信息
            method: 'post',
            url: 'http://127.0.0.1:8888/mock.php/user/update?id=' + this.state.id,
            headers: {
                // Content-Type代表发送端发送的实体数据的数据类型
                "Content-Type": "application/x-www-form-urlencoded"
            },
            // qs.stringify()将对象 序列化成URL的形式，以&进行拼接
            data: qs.stringify(this.state)
        })
        // then()   ES6,then()方法是异步执行(就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到的问题)
        .then((userinfo) => {
            console.log(userinfo)  // {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
            
            if (userinfo.data.status) {

                // 
                this.props.history.push('/user')
            } else {
                // 警告框,显示要编辑用户的信息
                alert(userinfo.data)
            }
        });
    }


    render() {
        return (
            <div>
                <div>
                    {/* this.state.username     要编辑用户的用户名 */}
                    用户名:<input type = 'text' value = {this.state.username}
                        onChange = {(e) => {
                            // 实时修改用户名
                            // target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口
                            this.setState({username: e.target.value})
                    }}
                    />
                </div>
                <div>
                    {/* this.state.sex      要编辑用户的性别 */}
                    性别:<input type = 'text' value = {this.state.sex}
                        onChange={(e) => {
                            // 实时修改用户性别
                            // target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口
                            this.setState({sex: e.target.value})
                        }}
                    />
                </div>
                <div>
                    {/* 更新指定用户信息 */}
                    <button onClick={this.handleClick}>保存</button>
                </div>
            </div>
        )
    }
}

// withRouter()     接收路由的参数
// export default withRouter(Edit);
export default Edit;