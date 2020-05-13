import React from 'react';
import Navigation from './Navigation';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav>
            <Navigation />
        </nav>
    </header>
)