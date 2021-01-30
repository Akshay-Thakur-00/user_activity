import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.username=React.createRef()
        this.password=React.createRef()
    }
    login(){
        let input={username:this.username.current.value,password:this.password.current.value}
        localStorage.setItem('user',JSON.stringify(input))
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                
                <div className="container">
                    <div className="row">
                        <div class="card mt-5 mx-auto col-6">
                            <div class="card-header">
                                Login
                            </div>
                            <div class="card-body">
                                <div class="mb-3 row">
                                    <label for="staticEmail" class="col-sm-3 col-form-label">Email</label>
                                    <div class="col-sm-9">
                                        <input type="text" ref={this.username} class="form-control" id="name" placeholder="username" />
                                    </div>
                                </div>
                                <div class="mb-3 row">
                                    <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                                    <div class="col-sm-9">
                                        <input type="password" ref={this.password} class="form-control" id="inputPassword" />
                                    </div>
                                </div>
                                <div class="mb-3 row ">
                                    <div class="d-grid gap-2 col-4 mx-5">
                                        <button type="Button" class="btn btn-primary mb-3" onClick={this.login.bind(this)}>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
