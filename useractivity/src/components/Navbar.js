import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand">LOGO</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <Link to="/home">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page">Home</a>
                                    </li>
                                </Link>
                                <Link to="/task">
                                    <li class="nav-item">
                                        <a class="nav-link">Task</a>
                                    </li>
                                </Link>
                                <Link to="/user">
                                    <li class="nav-item">
                                        <a class="nav-link" >User</a>
                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container d-flex p-1">
                    <div className="row">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
