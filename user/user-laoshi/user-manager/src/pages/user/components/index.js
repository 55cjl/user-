import React, {Component} from 'react'
// 导入路由
import {Link} from "react-router-dom"
// axios 向服务器发送get、post请求
import axios from "axios"

// 用户管理组件
class Index extends Component {

    constructor(popos) {
        super(popos)

        // console.log(this)  // 输出Index对象     Index {props: {…}, context: undefined, refs: {…}, updater: {…}, deleteUser: ƒ, …}
        
        // 获取用户列表
        // state    是组件内部维护的一组用于反映组件变化的状态集合,初次渲染浏览器
        this.state = {
            // 设置/暂存用户列表的信息
            users: [
                // {id: 1, username: "jack", sex: 1},
                // {id: 2, username: "mary", sex: 1},
            ]
        }  // 未提升
        // console.log(this.state)  // 输出{users: Array(0)}
    }

    // deleteUser   变量(里面存储方法,用于删除指定用户)
    // userId       用户Id
    deleteUser = (userId) => {

        // console.log(window.confirm('确定删除吗'))  // 返回一个布尔值
        // confirm(参数)方法用于显示一个带有指定消息和确认及取消按钮的对话框(对话框的内容为参数)。如果访问者点击"确定"，此方法返回true，否则返回false。
        // 用于再次确认用户是否要删除该数据
        if (!window.confirm('确定删除吗')) {
            // 如果判断为false,则返回空
            return 
            // return console.log('222')
            
        }

        //ajax
        // 删除指定用户(需要后端的相应端口)
        axios.post('http://127.0.0.1:8888/mock.php/user/delete?id=' + userId)
            // then()方法是异步执行(就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到的问题)
            .then((response) => {
                // console.log(response);
                // 调用相应函数,显示删除指定用户后的用户列表
                this.init()
                // console.log('2222222')
                

            })
            // .catch 也可以理解为 promise.then(undefined, onRejected)      建议多用catch方法，少用then方法的第二个参数
            // catch()      捕获错误/异常
            // 打开浏览器按F12,选着Network,点击第二行第二个的清除按钮,在选着第三行的All,再删除指定用户,即可查看有无报错(红色的为报错,该过程浏览器不能刷新)
            .catch((error) => {
            // .then() .catch()     为链式操作，会捕获到上一步.then中抛出的操作

            console.log(error );

            })
    }

    // init   变量(里面存储方法,用于获取用户列表)
    init = () => {
        //ajax
        // 列出所有用户
        axios.get('http://127.0.0.1:8888/mock.php/user')
            // then()   ES6,异步
            .then((response) => {

                // setState()   异步,修改state,再次渲染浏览器
                this.setState({
                    // 用得到的信息设置用户列表
                    users: response.data
                })

            }).catch((error) => {

            console.log(error);

        })
    }

    // componentDidMount()  设置一个定时器(生命周期)
    componentDidMount() {
        // 调用相应函数,显示删除指定用户后的用户列表
        this.init()
    }

    render() {
        // return()里面只能写HTML和相应的react代码,其他语法要在外面包上{}
        return (
            <div>
                <div>
                    {/* 跳转到新增用户组件 */}
                    <Link to="/user/create">新增用户</Link>
                </div>
                {/* 表格的边框粗细为1 */}
                <table border="1">
                    {/* 表格的表头,不写浏览器控制台会报错 */}
                    <thead>
                        {/* 表行 */}
                        <tr>
                            <td>ID</td>
                            <td>username</td>
                            <td>sex</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    {/* 表格主体(正文),不写浏览器控制台会报错 */}
                    <tbody>
                    {
                        // this.state   用户列表
                        // this.state.users     用户列表的信息
                        // map()    遍历(相当于循环)
                        // this.state.users.map()   遍历这个用户列表的信息,并把信息显示在浏览器上
                        this.state.users.map((user) => {

                            // 只能在 return外面, 函数里面才可以使用js语法
                            // console.log('11111')
                            
                            return (
                                // {}   把里面的数据变活,是变量
                                // key={user.id}    键,不写浏览器控制台会报错
                                <tr key={user.id}>
                                    {/* 用户Id */}
                                    <td>{user.id}</td>
                                    {/* 用户名 */}
                                    <td>{user.username}</td>
                                    {/* 用户性别,三元运算符 */}
                                    {/* ==最好改为===,不然浏览器控制台会警告 */}
                                    <td>{user.sex == 1 ? '男' : '女'}</td>
                                    <td>
                                        {/* 路由,跳转到相应界面(并且带上当前用户的Id) */}
                                        <Link to={'/user/edit/' + user.id}>编辑</Link>

                                        {/* 点击a链接,触发相应函数,根据当前用户的Id,删除当前用户的信息 */}
                                        {/* 写a链接浏览器控制台会警告 */}
                                        <a onClick={() => {
                                            this.deleteUser(user.id)
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

export default Index;