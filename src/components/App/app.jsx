import React from 'react';
import PropTypes from 'prop-types';
import Providers from './providers';
import { Provider as ThemeProvider } from '../contexts/themes';
import { Provider as authProvider } from '../contexts/auth';
import Layout from './layout';

const App = ({ routes }) => (
    <Providers providers={[ThemeProvider, authProvider]}>
        <Layout routes={routes} />
    </Providers>
);

App.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default App;
