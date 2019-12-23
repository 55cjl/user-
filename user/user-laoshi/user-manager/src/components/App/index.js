import React, {Component} from 'react';

import {HashRouter, Switch, Route} from "react-router-dom"

// 导入顶部
import Nav from '../Nav'
// 导入用户管理(包含新增用户)
import User from '../../pages/user'
// 导入订单管理
import Order from '../../pages/order'
// 导入底部
import HomeButton from '../../components/HomeButton'
// 导入
import Index from "../../pages/user/components";

// 首页
class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    {/* 顶部,固定不变,显示用户和订单管理 */}
                    <Nav></Nav>

                    {/* 三个只显示其中一个 */}
                    <Switch>
                        {/* exact   精确匹配 */}
                        <Route exact path={'/'}>
                            Home
                        </Route>
                        {/* 用户管理(包含新增用户) */}
                        <Route path={'/user'} component={User}></Route>
                        {/* 订单管理 */}
                        <Route path={'/order'}><Order></Order></Route>
                    </Switch>

                    {/* 底部,固定不变,显示按钮 */}
                    <HomeButton></HomeButton>
                </div>
            </HashRouter>
        );
    }
}

export default App;