
function customRender(reactElement, contaiber) { 
      /*
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    mainContainer.appendChild(domElement)
    */

    const newDomElement = document.createElement(reactElement.type)
    newDomElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {

        document.setAttribute(prop, reactElement.props[prop])
    
        }
    mainContainer.appendChild(newDomElement)

    
}


const reactElement =  {
    type:  'a',     //It tells what type of is the element i.e. a div, a paragraph etc.
    props: {       //It tells what are the properties and it is an object
        href: 'https://google.com',
        target: "_blank",
    },

        children: "Click me to visit google"   //props, href, children are terminologies

        //The above code is how and what ract does under the hood. This is a custom react app so we are declaring the varibales
    }    


const mainContainer = document.querySelector('#root')

//render means adding the element to the document.

//We are declaring a function customRender(rwhatToInject, whereToInject)

customRender(reactElement, mainContainer)
