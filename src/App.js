import React, {Component} from 'react';
import grayStar from './icons8-christmas-star-50.png';
import greenStar from './icons8-christmas-star-50 green.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function TextTrueOrFalse(props) {

    if (props.value.leftchack && props.value.rightchack)
        return (<b style={{color: "#005f00"}}>true</b>)
    else
        return (<b style={{color: "#af0000"}}>false</b>)
}

class CheckTrue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftchack: false,
            rightchack: false,

        }
        this.leftChange = this.leftChange.bind(this);
        this.rightChange = this.rightChange.bind(this);
    }

    leftChange = () => {

        this.setState(({leftchack}) => (
            {
                leftchack: !leftchack,
            }
        ));
        //console.log("leftChange" + this.state.leftchack);
    }

    rightChange = () => {

        this.setState(({rightchack}) => (
            {
                rightchack: !rightchack,
            }
        ));
       // console.log("rightChange" + this.state.rightchack);
    }

    render() {
        return (
            <div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                    <div>
                        <form>

                            <input type="checkbox" value={this.state.leftchack} onChange={this.leftChange}/>
                        </form>
                    </div>
                    <div>
                        <p>&&</p>
                    </div>
                    <div>
                        <form>

                            <input type="checkbox" value={this.state.rightchack} onChange={this.rightChange}/>
                        </form>
                    </div>
                </div>
                <div>
                    <TextTrueOrFalse value={this.state}/>
                </div>
            </div>
        );
    }
}

class StarsRange extends Component {
    constructor(props) {
        super(props);
        this.state = {star: 1};
        this.onChangeStars = this.onChangeStars.bind(this);
    }

    onChangeStars(event) {
        let value = event.target.value;
        this.setState({star: value})
    }

    render() {
        return (
            <div>
                <p>{this.state.star}</p>
                <form>
                    <input type="range" min="1" max="5" step="1" defaultValue="1"
                           onChange={this.onChangeStars.bind(this)}/>
                </form>
                <Stars value={this.state.star}/>
            </div>
        )
    }
}

function Stars(props) {
    var stars = [0, 0, 0, 0, 0];
    var num = [0,1,2,3,4];
    const s = props.value;
   // console.log("stars " + s);
    for (let i = 0; i < 5; i++) {
        if (i < s)
            stars[i] = 1;
    }
    return (
        <div>

            {num.map((number) =>
                <img src={stars[number]===1?greenStar:grayStar} key={number+1} alt={number+1}/>

            )}
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <CheckTrue/>
                <br/>
                <StarsRange/>
            </div>
        );
    }
}

export default App;
