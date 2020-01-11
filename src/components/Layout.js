import React  from 'react';
import Header from './Header';
import Meta   from './Meta';

export default function Layout ( props ) {
    return (
        <section>
            <Meta
                siteTitle="ToDo App"
                siteDescription="Simple ToDo App"
            />
            <Header pageTitle={props.pageTitle} />
            <div className="content">{props.children}</div>
        </section>
    );
}
