import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Weather from './components/Weather'
import Project from './components/Project'
import projects from './db.json'
import { motion } from "framer-motion"



        export default class App extends Component {
            render() {
                return (
                    <Router>
                        <Fragment>
                            <Navbar />
                            <Route exact path='/' component={ Home }>Home</Route>
                            <Route path='/about' component={ About }>About</Route>
                            <Route path='/Weather' component={ Weather }>Weather</Route>
                            <Route exact path='/portfolio' render={ routerProps => {
                                return  <Portfolio {...routerProps} projects={projects} /> }
                            }>Portfolio</Route>
                            <Route path={`/portfolio/:id`} render={ routerProps=> {
                                return <Project {...routerProps} projects={projects} /> }
                            } />
                        </Fragment>
                    </Router>
                )
            }
        }
