import React from 'react';

import App    from './App';
import Layout from '../Layout';


export default function MainPage ( props ) {
    return (
        <Layout pageTitle={props.pageTitle}>
            <App />
        </Layout>
    );
}

