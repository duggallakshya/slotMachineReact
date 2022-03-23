import React from 'react';

const SlotMachine = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if(props.x===props.y && props.y==props.z){
        return (
            <>
                <div className="slot-inner">

                    <h1> {props.x} {props.y} {props.z} </h1>
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

                    <h1> {props.x} {props.y} {props.z} </h1>
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
                <SlotMachine x ='😊' y ='😊' z ='😊'/>
                <SlotMachine x ='😊' y ='😂' z ='😊'/>
                <SlotMachine x ='😊' y ='😊' z ='🦍'/>
            </div>
        </>
    )
}

export default App;