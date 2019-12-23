import React, {Component} from 'react';
// 导入商品数据
import Product from "../../components/Porduct"
// 导入图片地址
import imgURL from '../../img/baidu.png';

// 订单管理
class Order extends Component {

    constructor(props) {
        super(props)

        // 商品信息
        this.state = {
            product: {name: "商品A", price: "234.44"},
        }
        // var x = {...this.state.product}
        // console.log(x)  // {name: "商品A", price: "234.44"}
        console.log(process)  // {title: "browser", browser: true, env: {…}, argv: Array(0), nextTick: ƒ, …}
        console.log(process.env)  // {NODE_ENV: "development", PUBLIC_URL: ""}
        console.log(process.env.PUBLIC_URL)  // 空
        
    }



    render() {
        return (
            <div>
                <h1>order page</h1>

                {/* ...this.state.product   把this.state.product里面所有的键值对一个个取出,并传送到显示商品数据组件 */}
                <Product {...this.state.product}></Product>

                <img src={imgURL} width="200"/>
                <br/>
                {/* process.env.PUBLIC_URL + "/logo192.png"     在JavaScript代码中使用公共文件夹public */}
                <img src={process.env.PUBLIC_URL + "/logo192.png"} alt=""/>
            </div>
        );
    }
}

export default Order;