import {useHistory} from "react-router-dom";
import React from 'react';

// 底部
function HomeButton() {

    // 跳转的路由
    let history = useHistory();

    function handleClick() {
        // 要跳转的地址
        history.push("/home");
    }

    return (
        <div>
            <hr/>
            <button type="button" onClick={handleClick}>
                Go home
            </button>
        </div>
    );
}

export default HomeButton
