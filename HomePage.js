import React from 'react';
import '../Styles/HomePage.css';
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import SearchComp from '../Components/SearchComp';


function HomePage() {
    return (
        <div className = "homepage">
            <div className = "homepage__header">
                <div className = "homepage__headerLeft">
                    <Link to ="/about">About</Link>
                    <Link to ="/store">Store</Link>
                </div>
                <div className = "homepage__headerRight">
                    <Link to ="/gmail">Gmail</Link>
                    <Link to ="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className = "homepage__body">
                <img src = "http://pngimg.com/uploads/google/google_PNG19644.png" alt = "google-logo"/>
                <div className = "homepage__inputContainer">
                    <SearchComp />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
