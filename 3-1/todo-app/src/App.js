import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
  }
}


class Header extends Component{
    render(){
        return(

            <header>
                <h1>My to do list</h1>
                <form className={"create"}>
                    <input placeholder={"What do you want to do"} id={"input"} type={"text"}/>
                        <button type={"button"} id={"btnAdd"}>Add</button>
                </form>
            </header>
        );
    }
}

class Main extends Component{

    render(){
        return(
            <div className={"main"}>
                <ul id={"list"}>
                    <li className={"completed"} >UET code camp<span onClick="remove(this)" className="close">x</span></li>
                </ul>
            </div>

        );
    }
}
export default App;
