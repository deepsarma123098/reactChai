import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {

    return(
    <div>
        <h1>Hello World</h1>
    </div>  
    )
    
}

// const reactElement =  {
//     type:  'a',    
//     props: {       
//         href: 'https://google.com',
//         target: "_blank",
//     },
//         children: "Click me to visit google"  

//     }    

// const Elem = "Hello" 

const anotherElem = (
    <a href='https://google.com'>Visit google</a>
)

//createElement is a method present in react and we can pass any value to it. It takes an object where the object type is predefined i.e. the keys fileds are predefined

const reactElement = React.createElement(
    'a',  //first a tag

    //Second an object where we pass the attributes and values and if not attributes then leave blank
    {
        href: 'https://google.com',
        target: '_blank',
    },
    'click me to visit google' //third is a text 
)


ReactDOM.createRoot(document.getElementById('root')).render(

    //MyApp()
    //Elem  //This will not be executed as there is a type defined inside react to execute. See anotherEleme

    //anotherElem
    
    //reactElement
    
    <App/>
)
