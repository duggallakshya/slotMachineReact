import React from 'react';

const SlotMachine = () => {
    let x ='😊';
    let y ='😊';
    let z ='😊';

    if(x===y && y==z){
        return (
            <>
                <div className="slot-inner">

                </div>
            </>
        )
    }
}

const App = () => {
    return(
        <>
            <h1 className="heading-style"> Welcome to Slot machine game </h1>
            <SlotMachine />
        </>
    )
}

export default App;