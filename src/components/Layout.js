import React  from 'react';
import Header from './Header';
import Footer from './Footer';
import Meta   from './Meta';

const wrapperStyle = {
    display      : 'flex',
    flexDirection: 'column',
    minHeight    : '100vh',
};

const contentStyle = {
    flex: '1 0 auto',
};


export default function Layout ( props ) {
    return (
        <div style={wrapperStyle}>
            <Meta
                title={props.pageTitle}
                siteDescription="Simple ToDo App"
            />
            <Header />
            <div style={contentStyle}>{props.children}</div>
            <Footer />
        </div>
    );
}
