import React, { Component } from 'react'
import Card from "../../components/Card/Card";
import Navigation from "../../components/Navigation/Navigation";
import classes from './Layout.module.css';
import Header from '../../components/Header/Header'

class Layout extends Component{

    render(){
        return(
            <Card >
                <Header />
                
                
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </Card>
           
        )
    }
}

export default Layout;