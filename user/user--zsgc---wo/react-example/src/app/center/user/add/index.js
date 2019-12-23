import React, { Component } from 'react';
// axios 向服务器发送get、post请求
import axios from "axios"
// qs 是一个增加了一些安全性的查询字符串解析和序列化字符串的库
import qs from "qs"
// 导入路由
import {createHashHistory} from 'history'
// 导入路由
// import {withRouter} from "react-router-dom";  // 下面没有使用,浏览器上会有警告

// 新增用户组件
class Add extends Component {

    constructor(run) {
        super(run)

        console.log(this.props)  // {}
        // console.log(this.state)  // undefined

        // 设置用户信息
        this.state = {
            username: '',
            sex: '',
        }

        // console.log(this.state)  // {username: "", sex: ""}
    }

    // 新增用户
    addUser = () => {
        // 新增用户
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8888/mock.php/user/create',
            headers: {
                // Content-Type代表发送端发送的实体数据的数据类型
                "Content-Type": "application/x-www-form-urlencoded"
            },
            
            // qs.stringify()将对象 序列化成URL的形式，以&进行拼接
            data: qs.stringify(this.state)
        }).then((user) => {
            // console.log(this.state)  // {username: "dfrb dzsxrfb", sex: "dzfb "}    用户信息
            // console.log(user)  // {data: 105, status: 200, statusText: "OK", headers: {…}, config: {…}, …}      发送端发送的的数据
            
            console.log(user.data)  // 用户名Id
            
            // 如果新增用户的Id大于设定值,就跳转到用户管理界面,不然就出现一个警告框
            if (user.data > 0) {

                //跳转到列表页
                //import {createHashHistory} from 'history'

                // createHashHistory()  路由(组件之外的跳转))
                // push()   尾部加入到用户管理组件
                createHashHistory().push('/user')

                //import {withRouter} from "react-router-dom";
                //export default withRouter(Create);
                //this.props.history.push('/user');


            } else {
                // 警告框,显示新增用户的Id
                alert(user.data)
            }
        });
    }


    // 用户名和性别的输入框,只要其中一个输入框第一次输入内容 就一定输出 SyntheticEvent {dispatchConfig: {…}, _targetInst: FiberNode, nativeEvent: InputEvent, type: "change", target: input, …}      之后两个输入框都输出 SyntheticEvent {dispatchConfig: {…}, _targetInst: FiberNode, _dispatchInstances: FiberNode, nativeEvent: InputEvent, _dispatchListeners: ƒ, …}
    render() {
        return (
            <div>
                <div>
                    用户名:<input type = 'text' 
                        value = {this.state.username}
                        // onchange 事件会在域的内容改变时发生
                        onChange = {(e) => {
                                // 实时修改用户名
                                // target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口
                                this.setState({username: e.target.value})
                                console.log(e)  // 输出 SyntheticEvent {dispatchConfig: {…}, _targetInst: FiberNode, _dispatchInstances: FiberNode, nativeEvent: InputEvent, _dispatchListeners: ƒ, …}
                                // console.log(e.target)  // <input value="输入框输入的内容(实时变化)">
                            }}
                        />
                </div>
                <div>
                    性别:<input type = 'text' value = {this.state.sex}
                    // onchange 事件会在域的内容改变时发生
                            // e    Event 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态
                            onChange={(e) => {
                                // / 实时修改用户性别
                                // target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口
                                this.setState({sex: e.target.value})

                                // console.log(e)  // 输出 SyntheticEvent {dispatchConfig: {…}, _targetInst: FiberNode, _dispatchInstances: FiberNode, nativeEvent: InputEvent, _dispatchListeners: ƒ, …}
                                // console.log(e.target)  // <input type="text" value="输入框输入的内容(实时变化)">
                            }}
                        />
                </div>
                <div>
                    <input type="button" value='保存' 
                        // 当按钮被点击时执行相应函数(新增用户)
                        onClick={this.addUser}/>
                </div>
            </div>
        )
    }
}

export default Add;