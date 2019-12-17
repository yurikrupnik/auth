import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {
    Formik, Form, Field
} from 'formik';

import { Context } from '../contexts/auth';
import RenderInput from '../RenderInput';
import styles from './styles.scss';

const formData = [
    {
        type: 'email',
        name: 'email',
        label: 'Email',
    },
    {
        type: 'password',
        name: 'password',
        label: 'Password'
    }
];

const Login = (props) => {
    const authContext = React.useContext(Context);
    const { history } = props;

    const goToAbout = React.useCallback(() => {
        history.push('/about');
    }, []);

    const handleSubmit = React.useCallback((values) => {
        authContext.login(values, goToAbout);
    }, []);

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    if (!values.password) {
                        errors.password = 'Required';
                    }
                    return errors;
                }}
            >
                {(formProps) => {
                    const { values } = formProps;
                    const {
                        isValid
                    } = formProps;
                    return (
                        <Form className={styles.root}>
                            {
                                formData.map((field) => (
                                    <div
                                        key={field.name}
                                    >
                                        <Field
                                            fullWidth
                                            type={field.type}
                                            name={field.name}
                                            label={field.label}
                                            value={values.email}
                                            component={RenderInput}
                                        />
                                    </div>
                                ))
                            }

                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                fullWidth
                                disabled={!isValid}
                            >
                                Login
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};


Login.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default Login;
