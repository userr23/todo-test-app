import React  from 'react';

import Header         from './components/Header';
import ContentWrapper from './components/ContentWrapper';
import Footer         from './components/Footer';
import Meta           from './components/Meta';


export default function Layout ( props ) {
    const title = `ToDo App / ${props.title}`;

    return (
        <>
            <Meta siteTitle={title} />
            <Header pageTitle={props.pageTitle} />
            <ContentWrapper content={props.children} />
            <Footer />

            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
        </>
    );
}
