import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    const ref = React.createRef();
    const options = {
        orientation: 'portrait',
        unit: 'in',
        format: [8.27, 11.69]
    };
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <Pdf targetRef={ref} filename="code-example.pdf" options={options} x={1}>
                    {({ toPdf }) => <button className='btn btn-success' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>

            <Accordion defaultActiveKey="0" className='py-5' ref={ref} >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tell us the differences between uncontrolled and controlled components.
                    </Accordion.Header>
                    <Accordion.Body>
                        Controlled Component: <br />
                        In React, a "controlled component" is a form element such as an input or textarea whose value is controlled by React through its component state. This means that instead of relying on the browser's default behavior to manage and update the value of the input element, React takes control and manages the state of the input value itself. React state the "single source of truth" for the form's data, any changes made to the form by the user allowing for real-time updates and validation.
                        using controlled components in React provides a more predictable and efficient way of managing form data, ensuring that the UI and state are always in sync and reducing the likelihood of bugs or unexpected behavior.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                    <Accordion.Body>
                        React has some validator properties to validate props. some validator properties are PropTypes.any: The prop can be of any data type
                        PropTypes.bool: The prop should be a Boolean <br />
                        PropTypes.number: The prop should be a number <br />
                        PropTypes.string: The prop should be a string <br />
                        PropTypes.func: The prop should be a function <br />
                        PropTypes.array: The prop should be an array <br />
                        PropTypes.object: The prop should be an object <br />
                        PropTypes.symbol: The prop should be a symbol <br />
                        <br />
                        Using this validator react validate props
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Tell us the difference between nodejs and express js.</Accordion.Header>
                    <Accordion.Body>
                        NodeJS is the package, which provides the JavaScript run-time environment, And Express js is a framework that based on NodeJS and helps us to handle requests and responses.
                        <br />
                        <br />
                        Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language.
                        <br />
                        <br />
                        Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. It adds helpful utilities to Node.js’s HTTP objects. It facilitates the rendering of dynamic HTTP objects
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook?</Accordion.Header>
                    <Accordion.Body>
                        Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.
                        <br />
                        When we want to share the logic between other components, we can extract it to a separate function. According to official documents, the custom hook has to:
                        start with the key word use
                        call other hooks
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

export default Blog;