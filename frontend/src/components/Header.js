import React from 'react';

//export default function Header(props) { //The Props Of Component is Inject on Function By Parameter
export default function Header({title, children}) {
    return(
        <header>

            <h1>My Friends - {title}</h1>
            <h2>{children}</h2>

        {/*
            <h1>My Friends - {props.title}</h1>
            <h2>{props.children}</h2>  The Content in the tags <Header> ... </Header>
        */}
        </header>
    );
}