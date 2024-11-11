import './index.css';
// Importing React manually
// This line is generated automatically when creating a React boilerplaete
import * as ReactDOM from "react-dom/client";
import App from './App';

// function Hello({name, age}) 
//     {
//     // const name = props.name;
//     // const age = props.age;
    
//     // var destructuring
//     // const {name, age} = props;

//     return (
//         <div>
//             <h1>Hello! {name}, {age} ✨</h1>
//         </div>
//     );
// }

const rootContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(rootContainer);
root.render(<App />);