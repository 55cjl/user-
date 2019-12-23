import React, { Component } from 'react'
// 导入路由
import {Link} from "react-router-dom"
// axios 向服务器发送get、post请求
import axios from "axios"

// 用户管理组件
class User extends Component {

    constructor(run) {
        super(run)
        // 
        this.state = {
            // 设置/暂存用户列表的信息
            users: []
        }
    }

    // 从服务器获取用户列表
    usersList = () => {
        // 列出所有用户
        axios.get('http://127.0.0.1:8888/mock.php/user')
            // then()   ES6,then()方法是异步执行(就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到的问题)
            .then((userinfo) => {
                this.setState({
                    users: userinfo.data
                })
            })
            // 捕获错误
            .catch((error) => {
                // 警告框显示错误
                alert(error);
            })
        // .then() .catch()     为链式操作，会捕获到上一步.then中抛出的操作
    }

    // 删除指定用户功能
    // 删除指定用户后的用户列表
    editUser = (userId) => {
        // 用于再次确认用户是否要删除该数据
        // window.confirm(参数)方法用于显示一个带有指定消息和确认及取消按钮的对话框(对话框的内容为参数)。如果访问者点击"确定"，此方法返回true，否则返回false。
        if (!window.confirm('是否确认删除')) {
            // 如果判断为false,则返回空
            return
        }

        // 删除指定用户(需要后端的相应端口)
        axios.post('http://127.0.0.1:8888/mock.php/user/delete?id=' + userId)
        // then()   ES6,then()方法是异步执行(就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到的问题)
        .then((omit) => {
            // 调用相应函数,显示删除指定用户后的用户列表
            this.usersList()
        })
        // 捕获错误
        .catch((error) => {
            // 警告框显示错误
            alert(error)
        })
        // .then() .catch()     为链式操作，会捕获到上一步.then中抛出的操作
    }

    // componentDidMount()  挂载(生命周期)
    componentDidMount() {
        // 调用相应函数,显示删除指定用户后的用户列表
        this.usersList()
    }

    render() {
        return (
            <div className='user'>
                <Link to='/user/add'>新增用户</Link>
                <table border='1px'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>用户名</th>
                            <th>性别</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // this.state   用户列表
                            // this.state.users     用户列表的信息
                            // map()    遍历(相当于循环)
                            // this.state.users.map()   遍历这个用户列表的信息,并把信息显示在浏览器上
                            this.state.users.map((user) => {
                                return(
                                    // {}   把里面的数据变活,是变量
                                    // key={user.id}    键,不写浏览器控制台会报错
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.username}</td>
                                        {/* ==最好改为===,不然浏览器控制台会警告 */}
                                        <td>{user.sex === '1' ? '男' : '女'}</td>
                                        <td>
                                            <Link to={'/user/edit/' + user.id}>编辑</Link>
                                            {/* <Link to='/user/edit'>编辑</Link> */}
                                            <a onClick={() => {
                                                this.editUser (user.id)
                                                }}>删除</a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default User;