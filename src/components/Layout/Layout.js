/* eslint-disable */
import { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import './Layout.scss'


const Layout = (props)=>{
    return <Fragment>
        <MainNavigation></MainNavigation>
        <main>{props.children}</main>
    </Fragment>

}

export default Layout;