import React, { Component } from 'react'
// 导入路由
import {HashRouter, Route} from 'react-router-dom'
// import {HashRouter, Switch, Route} from 'react-router-dom'
// 导入首页
import Home from './home'
// 导入用户管理
import User from './user'
// 导入组件,用于编辑用户
import Edit from './user/edit'
// 导入组件,用于新增用户
import Add from './user/add'
// 导入订单管理
import Order from './order'

// 主体组件
class Center extends Component {
    render() {
        return (
            <HashRouter>
                <div className='center'>
                    {/* <Switch> */}
                        <Route exact path='/'>您已成功进入</Route>
                        {/* 跳转到首页 */}
                        <Route path='/home'><Home></Home></Route>
                        {/* 跳转到用户管理 */}
                        <Route exact path='/user' component={User}></Route>
                        {/* 跳转到编辑用户 */}
                        <Route path="/user/edit/:userId" component={Edit}></Route>
                        {/* 跳转到新增用户 */}
                        <Route path="/user/add" component={Add}></Route>
                        {/* 跳转到订单管理 */}
                        <Route path='/order'><Order></Order></Route>
                    {/* </Switch> */}
                </div>
            </HashRouter>
        )
    }
}

export default Center;