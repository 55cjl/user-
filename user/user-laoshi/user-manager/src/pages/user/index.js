import React, {Component} from 'react'
// 导入路由
import {Switch, Route} from "react-router-dom"
// 导入组件,用于删除和获取用户信息
import Index from './components/index'
// 导入组件,用于新增用户
import Create from './components/create'
// 导入组件,用于编辑用户
import Edit from './components/edit'

class User extends Component {

    render() {
        return (
            <Switch>
                {/* 跳转到删除用户组件 */}
                <Route exact path={'/user'}><Index></Index></Route>
                {/* 跳转到新增用户组件 */}
                <Route path={'/user/create'}><Create></Create></Route>
                {/* 跳转到编辑用户组件 */}
                <Route path="/user/edit/:userId" component={Edit}></Route>
            </Switch>

        );
    }
}

export default User;