const players = [
    {
        name: "natali",
        score:16,
        id: 1
    },
    {
        name: "Franck",
        score:23 ,
        id:2
    },
    {
        name: "Mila",
        score:28,
        id:3
    }
];




const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers + 1 }</span>
        </header>
    );
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                {props.name}
            </span>
            <Counter score={props.score}/>
        </div>
    );
}

// const Counter = (props) => {
//     return(
//         <div className="counter">
//                 <button className="counter-action decrement"> - </button>
//                 <span className="counter-score">{props.score}</span>
//                 <button className="counter-action increment"> + </button>
//         </div>
//     );
// }


class Counter extends React.Component{

   state = {
       score:0
   };
    render(){
        return(
            <div className="counter">
                <button className="counter-action decrement"> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment"> + </button>
            </div>
                );
    }
}
const App = (props) => {
    return(
        <div className= "scorboard">
            <Header title="MyScoarboard" totalPlayers={1}/>
            {/* PLAYERS LIST */}
            {props.initialPlayer.map(player =>
                <Player 
                name={player.name}
                key={player.id.toString()}
                />
             )}
        </div>
    );
}


ReactDOM.render(
    <App initialPlayer={players} />,
    document.getElementById('root')
);