import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class User extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            flag1: false,
            flag: true,
           
        }
        this.newpassword=React.createRef()
        
    }
   
    changepass() {
        this.setState({ flag: false, flag1: true })
    }
    savepass() {
        let input = JSON.parse((localStorage.getItem('user')))
        input.password = this.newpassword.current.value
        localStorage.setItem('user', JSON.stringify(input))
        this.setState({ flag1: false, flag: true })
    }
    logout(){
        localStorage.clear()
        this.props.history.push('/')
    }
    handleChange(e){
        this.setState({newpassword:e.target.value})
    }
    render() {
        let input = JSON.parse((localStorage.getItem('user')));
        let username = input.username
        let password = input.password
        console.log(this.state.flag,this.state.flag1)
        if (this.state.flag) {
            return (
                <div>
                     <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" >LOGO</a>
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
                    <div className="container">
                        <div className="row mt-4">
                            <form>
                                <div class="form-group row">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">username</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="username" value={username} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-5">
                                        <input type="password" readOnly value={password} class="form-control" id="inputPassword" placeholder="Password" />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div class="mt-3 row ">
                            <div class="d-grid gap-2 col-4 mx-2">
                                <button type="Button" class="btn btn-primary mb-3" onClick={this.changepass.bind(this)} >change passeword</button>
                            </div>


                            <div class="d-grid gap-2 col-4">
                                <button type="Button" class="btn btn-primary mb-3" onClick={this.logout.bind(this)}>logout</button>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
        else if (this.state.flag1) {
            return (
                <div>
                     <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
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
                    <div className="container">
                    <form onSubmit={this.savepass.bind(this)}> 
                        <div className="row mt-4">
                           
                                <div class="form-group row">
                                    <label for="staticEmail" class="col-sm-2 col-form-label">username</label>
                                    <div class="col-sm-10">
                                        <input type="text" readonly class="form-control-plaintext" id="username" value={username} />
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">NewPassword</label>
                                    <div class="col-sm-5">
                                        <input type="password" ref={this.newpassword} onChange={this.handleChange.bind(this)} class="form-control" id="inputPassword2"  required/>
                                    </div>
                                </div>

                            
                        </div>
                        <div class="mt-3 row ">
                            <div class="d-grid gap-2 col-4 mx-2">
                                <button type="submit" class="btn btn-primary mb-3" >save passeword</button>
                            </div>


                            <div class="d-grid gap-2 col-4">
                                <button type="Button" class="btn btn-primary mb-3" onClick={this.logout.bind(this)}>logout</button>
                            </div>

                        </div>
                        </form>
                    </div>
                </div>
            )
        }
    }
}
