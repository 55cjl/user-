import React, { Component } from 'react'
// 导入路由
import {Link} from 'react-router-dom'

class Bottom extends Component {
    render() {
        return (
            <div className='bottom'>
                <hr/>
                <Link to='/home'><button>返回首页</button></Link>
            </div>
        )
    }
}

export default Bottom;