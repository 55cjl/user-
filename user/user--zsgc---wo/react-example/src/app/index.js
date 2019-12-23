import React, { Component } from 'react'
// 导入路由
import {HashRouter} from 'react-router-dom'
// import {HashRouter, Switch, Route} from 'react-router-dom'
// 导入顶部
import Top from './top'
// 导入主体
import Center from './center'
// 导入首页
// import Home from './home'
// 导入用户管理
// import User from './user'
// 导入订单管理
// import Order from './order'
// 导入底部
import Bottom from './bottom';
// 导入CSS样式
import './css/index.css';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Top></Top>

                    {/* <Switch> */}

                        <Center></Center>

                        {/* <Route exact path='/'>您已成功进入</Route> */}
                        {/* <Route path='/home'><Home></Home></Route>
                        <Route path='/user' component={User}></Route>
                        <Route path='/order'><Order></Order></Route> */}

                    {/* </Switch> */}

                    <Bottom></Bottom>
                </div>
            </HashRouter>
        )
    }
}

export default App;