import React, {Component} from 'react';
// 导入路由
import {Link} from "react-router-dom"

import './style.scss'

// 顶部
class Nav extends Component {
    render() {
        return (
            <div className={'Nav'}>
                <ul>
                    <li className={'menu-item'}>
                        {/* <Link to="path"></Link>     类似<a href='path'></a> */}
                        <Link to='/user'>用户管理</Link>
                    </li>

                    <li className={'menu-item'}>
                        <Link to='/order'>订单管理</Link>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Nav;