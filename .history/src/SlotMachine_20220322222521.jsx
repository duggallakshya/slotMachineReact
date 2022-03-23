import React from 'react';

const SlotMachine = (props) => {
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

export default SlotMachine;