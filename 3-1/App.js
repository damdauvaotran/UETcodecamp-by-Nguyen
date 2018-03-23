

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>My to do list</h1>
                <Form/>
            </header>
        );
    }
}


class Form extends React.Component {
    render() {
        return (
            <form className={"create"}>
                <input type={"text"} placeholder={"What do you want to do"} id={"input"}/>
                <button type={"button"} id={"btnAdd"}>Add</button>
            </form>
        );
    }
}



class Main extends React.Component{
    render(){
        return(
            <div className={"main"}>
                <ul id = {"list"}>
                <TodoLi text = "Uet code camp"/>
                </ul>
            </div>
        );

    }
}

class TodoLi extends React.Component{
    render(){
        return(
            <li >{this.props.text}<span onclick="remove(this)" class="close">x</span></li>
        );
    }
}

class Website extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}
ReactDOM.render(<Website/>,document.getElementById('root'));
