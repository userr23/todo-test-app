import React    from 'react';
import MainPage from '../containers/MainPage';
import Layout   from '../layouts/Layout';


export default function TodoApp () {
    return (
        <Layout  pageTitle="ToDo App">
            <MainPage />
        </Layout>
    );
}

