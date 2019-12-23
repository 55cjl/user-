import React, {Component} from 'react';
import './style.css'

// 显示产品数据
class Product extends Component {
    render() {
        return (
            <div>
                {/* 显示接收过来的数据 */}
                <div>{this.props.name}</div>
                <div>￥{this.props.price}</div>
            </div>
        );
    }
}

export default Product;