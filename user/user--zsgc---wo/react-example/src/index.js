import React from 'react';
import {render} from 'react-dom';
import App from './app';



// class User extends React.Component {
//     render() {
//         return (
//             <div>
//                 <App></App>
//             </div>
//         )
//     }
// }

// let element = (
//     // <div>
//             <User></User>
//     // </div>
// )


// render(element,document.getElementById('root'));
render(<App></App>,document.getElementById('root'));