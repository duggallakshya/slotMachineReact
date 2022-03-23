import React from 'react';

const SlotMachine = () => {
    let x ='😊';
    let y ='😊';
    let z ='😊';

    if(x===y && y==z){
        return (
            <>
                <div className="slot-inner">

                    <h1> {x} {y} {z} </h1>
                    <h1> Match </h1>
                    <hr/>

                </div>
            </>
        )
    }
    else{
        return (
            <>
                <div className="slot-inner">

                    <h1> {x} {y} {z} </h1>
                    <h1> No Match </h1>
                    <hr/>

                </div>
            </>
        )
    }
}

const App = () => {
    return(
        <>
            <h1 className="heading-style"> Welcome to Slot machine game </h1>
            <div>
                <SlotMachine x ='😊' y ='😊' x ='😊'/>
                <SlotMachine />
                <SlotMachine />
            </div>
        </>
    )
}

export default App;