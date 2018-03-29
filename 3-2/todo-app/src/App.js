import React, {Component} from 'react';

import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

    }





    render() {
        return (

            <div>
                <Header onCreate={this.handleAddTodo.bind(this)}/>
                <Main onToggle={this.handleToggle.bind(this)} onDelete={this.handleDelete.bind(this)}
                      list={this.state.list}/>
            </div>
        );

    }


    handleAddTodo(text) {
        var {list} = this.state;
        list.push({
            title: text,
            completed: false
        });
        this.setState({
            list: list
        });

        localStorage.clear();
        localStorage.setItem("todoDatabase", JSON.stringify(list));

    }

    handleToggle(id) {
        const {list} = this.state;
        const todo = list[id];

        todo.completed = !todo.completed;

        this.setState({
            list: list
        })

        localStorage.clear();
        localStorage.setItem("todoDatabase", JSON.stringify(list));


    }

    handleDelete(id) {
        var {list} = this.state;

        list.splice(id, 1);
        this.setState({
            list: list
        })

        localStorage.clear();
        localStorage.setItem("todoDatabase", JSON.stringify(list));
        ;
    }


}

class Header extends Component {
    state = {
        text: ''
    };


    render() {
        const text = this.state.text;
        return (
            <header>
                <h1>My to do list</h1>
                <form className={"create"}>
                    <input placeholder={"What do you want to do"} id={"input"} type={"text"}
                           onChange={this.onHandleChangeInput.bind(this)} value={text}/>
                    <button type={"button"} id={"btnAdd"} onClick={this.onHandleAddTodo.bind(this)}>Add</button>
                </form>
            </header>
        );
    }


    onHandleAddTodo() {
        const {text} = this.state;

        this.props.onCreate(text);


    }

    onHandleChangeInput(e) {
        var text = e.target.value;
        this.setState({
            text: text
        });
        console.log(text);
    }


}

class Main extends Component {
    state = {
        todo: []
    }

    render() {

        const {list} = this.props;


        return (
            <div className={"main"}>
                <ul id={"list"}>
                    {
                        list.map((data, index) => {
                                return (

                                    <Li onToggle={this.handleToggle.bind(this, index)}
                                        onDelete={this.handleDelete.bind(this, index)} key={index} data={data}/>);
                            }
                        )
                    }


                </ul>
            </div>

        );
    }

    handleToggle(id) {
        this.props.onToggle(id);
    }

    handleDelete(id) {
        this.props.onDelete(id);
    }
}

class Li extends Component {
    render() {
        var {data} = this.props;
        return (
            <li
                className={data.completed ? "completed" : ""}>
                <span onClick={this.handleOnToggle.bind(this)} className={"toggleButton"}> {data.title} </span>
                <span onClick={this.handleOnDelete.bind(this)} className={"close"}>x</span>
            </li>
        );
    }

    handleOnToggle(id) {
        this.props.onToggle(id);
    }

    handleOnDelete(id) {
        this.props.onDelete(id);
    }

}

export default App;
