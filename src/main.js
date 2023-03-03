import React, { useState, useEffect } from 'react';
import './main.css';


function Main(){

    const [gameTimer, setGameTimer] = useState(0);

    class Card extends React.Component
    {

        constructor(props)
        {
            super(props)
            this.state = {
                flash_timer: 5,
                game_timer: 0,
                flash_ready: "ready",
                role: props.role
            };
            this.incrementGameTimer = this.incrementGameTimer.bind(this);
        }

        // loads as soon as element is rendered by DOM
        componentDidMount()
        {
            this.interval = setInterval(this.incrementGameTimer, 1000);
        }

        // last step of the 'update' function
        componentWillUnmount()
        {
            clearInterval(this.incrementGameTimer);
        }


        incrementGameTimer()
        {
            this.setState(state => ({game_timer: state.game_timer + 1}))
        }


        flash()
        {
            console.log('flash');
            this.setState(state => ({flash_timer: state.game_timer + 300}));
            console.log(this.state.game_timer);
        }

        render()
        {
            // use ready
            return (
                <div className='card'>
                    <h1>{this.state.role}</h1>
                    <p>fTIMER: {this.state.game_timer}</p>

                    {/* shows timer or ready message */}
                    {this.state.flash_timer - this.state.game_timer > 0 
                        ? <p>Ready in: {this.state.flash_timer - this.state.game_timer}</p>
                        : <p> Flash Ready! </p>}
                    <button onClick = {()=> this.flash()}>Flash</button>
                    <button onClick = {() => console.log(this.state.role)}>test </button>
                    {/* <hr/> */}
                </div>
            );
        }
    }



    // define _timer outside function so gameTimer can be easily manipulated by other functions
    // const timer = gameTimer;
    // var _timer// = setTimeout(() => setGameTimer(timer + 1), 1000);
    // var counter = 0;
    // function CountGameTimer()
    // {
    //     useEffect(() => {
    //         const timer = gameTimer;
    //         _timer = setTimeout(() => setGameTimer(timer + 1), 1000)
    //     })
    // }

    function CountGameTimerTwo(){
        const timer = gameTimer;
        setTimeout(() => setGameTimer(timer + 1), 1000)
    }
    // CountGameTimerTwo();

    var p = {"role": "sup"};
    var t = new Card(p);
    // console.log(t.flash_timer);

    function test()
    {
        setGameTimer(gameTimer + 1);
    }


    return(<>

        {/* <h1 style={{textAlign: "center"}}>{gameTimer} </h1>  */}
        <h1 style={{textAlign: "center"}}>{t.state.game_timer} </h1> 
        <Card role="top"/>
        <Card role="mid"/>
        <Card role="bot"/>
        {t.flash_timer}
        <button onClick={test}>fdsa</button>
        
    
</>)


}

export default function MainExport()
{

    return(<>
              
        <Main />    
        
    </>)
}







/*
    5 cards
    each card should track: flash, sum2
        sum2 should be variable

    
    



*/