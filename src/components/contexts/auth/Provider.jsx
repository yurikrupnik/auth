import React from 'react';
import PropTypes from 'prop-types';
import Context from './contex';

const Provider = (props) => {
    const { children } = props;

    const [user, setUser] = React.useState(null);
    const login = React.useCallback((body, cb, errCb = console.log) => {
        return Promise.resolve()
            .then((res) => {
                setUser(body);
                cb(res);
            })
            .catch(errCb);
    }, []);

    const logout = React.useCallback((cb, errCb = console.log) => {
        return Promise.resolve()
            .then(cb)
            .catch(errCb);
    }, []);
    return (
        <Context.Provider
            value={{
                login,
                logout,
                user
            }}
        >
            {children}
        </Context.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]).isRequired
};

export default Provider;
