import React, { Component } from 'react';
// 导入路由
import {Link} from 'react-router-dom'

// 顶部组件
class Top extends Component {
    render() {
        return (
            <div className='top'>
                <ul className='clear menu'>
                    <li className='menu-item fl'>
                        <Link to='user'>用户管理</Link>
                    </li>
                    <li className='menu-item'>
                        <Link to='order'>订单管理</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Top;