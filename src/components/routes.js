import About from './About';
import Login from './Login';

const routes = [
    {
        path: '/',
        component: Login,
        key: 'login',
        exact: true
    },
    {
        path: '/about',
        component: About,
        key: 'about'
    },
];

export default routes;
