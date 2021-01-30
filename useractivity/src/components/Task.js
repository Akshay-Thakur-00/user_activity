import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            show:false
        }
        this.title=React.createRef()
        this.completed=React.createRef()
    }
    componentDidMount(){
       fetch("http://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
            console.log(res)
            return res.json()
        }).then((data)=>{
            console.log(data)
            this.setState({list:data})
        })
        
    }
    delete(id,e){
        let temp=this.state.list
        temp.splice(id,1)
        this.setState({list:temp})
        e.preventDefault()

    }
    add(){
        this.setState({show:true})
    }
    addtask(){
        let temp=this.state.list
        let task={
            userId:1,
            id:temp.length+1,
            title:this.title.current.value,
            completed:(this.completed.current.value.toLowerCase()==='true'?true:false)
        }
        let newlist=[...temp,task]
        this.setState({list:newlist,show:false})
    }
    render() {
        console.log(this.state.list)
        let list1=this.state.list
        
        if(this.state.list.length==0){
            return(
                <></>
            )
        }
        console.log(list1[0].title)
        console.log(list1[0].completed)
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
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">title</th>
      <th scope="col">Completed</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {list1.map((data,i)=>{
          return(
            <tr key={i}>
            <td>{i+1}</td>
            <td>{data.title}</td>
            <td>{typeof data.completed==='boolean'?data.completed.toString():data.completed}</td>
            <td> <button type="submit" class="btn btn-danger mb-3" onClick={this.delete.bind(this,i)}>Delete</button></td>
          </tr>
          )
      })
    
    }
    </tbody>
</table>
{this.state.show===false &&
<div class="mb-3 row ">
                                    <div class="d-grid gap-2 col-4 mx-5">
                                        <button type="Button" class="btn btn-primary mb-3" onClick={this.add.bind(this)}>Add Task</button>
                                    </div>
                                </div>}

           
        {this.state.show && 
            <div className="container">
            <div className="row mt-4">
                <form>
                    <div class="form-group row mb-2">
                        <label for="staticEmail" class="col-sm-2 col-form-label">title</label>
                        <div class="col-sm-5">
                            <input type="text"  ref={this.title} class="form-control" id="title"  />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Completed</label>
                        <div class="col-sm-5">
                            <input type="text" ref={this.completed}  class="form-control" id="completed"  />
                        </div>
                    </div>

                </form>
            </div>
            <div class="mt-3 row ">
                <div class="d-grid gap-2 col-4 mx-2">
                    <button type="Button" class="btn btn-primary mb-3" onClick={this.addtask.bind(this)} >Add</button>
                </div>


                
            </div>
        </div>}
        </div>
        )
    }
}
