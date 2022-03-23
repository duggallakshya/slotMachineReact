import React from 'react';
import SlotMachine from './SlotMachine';

const App = () => {
    return(
        <>
            <h1 className="heading-style"> 🎰 "😸"Welcome to Slot machine game 🎰</h1>
            <div className="main-div">
                <SlotMachine x ='😊' y ='😊' z ='😊'/>
                <SlotMachine x ='😊' y ='😂' z ='😊'/>
                <SlotMachine x ='😊' y ='😊' z ='🦍'/>
                <SlotMachine x ='😊' y ="" z ='🦍'/>
            </div>
        </>
    )
}

export default App;