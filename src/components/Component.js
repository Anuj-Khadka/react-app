import ClassComp from './ClassComponent';
import FuncComp from './FunctionalComponent'

function Component(){
    return (
        <> 
        <h1>Components</h1>
        <ul>
            <li>They are reusable pieces of code.</li>
            <li>They are the building blocks of a program.</li>
            <li>They describe the part of UI</li>
            <li>They may be nested(i.e. App component has other compornents.)</li>
            <li>It consists of 5 major parts. <ul>
                    <li>Header</li>
                    <li>Footer</li>
                    <li>Main Content</li>
                    <li>Sidenav</li>
                    <li>Root(App)</li>
                </ul>
            </li>
        </ul>
        <div>
        <p>Components are of two types:</p>
        <a href="./components/functional_component.js">Stateless functional components</a> <br/>
        <a href="./components/class_component.js">Stateful class components</a>
        </div>
        <FuncComp />
        <ClassComp />
        </>
    )
}


export default Component;