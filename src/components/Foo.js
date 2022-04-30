import { useContext, useReducer, useState } from "react"
import AppContext from "../context/appContext";

function reducer(state, action) { 
    switch(action.type){
        case "Inc":
            return { counter:state.counter+1 } ;
        case "Dec":
            return { counter:state.counter-1 } ;
        default:
            return state;
    }
    

}
export default function() {
    const [saloni, setSaloni] = useState(true);
    const initialState = {
        counter: 0
    }    
    const [state, dispatch] = useReducer(reducer, initialState);
    

    const context = useContext(AppContext);
    // context variable is equal to the value given in the provider sandwich, in this case appContextObj

    console.log(context)
    console.log(state.counter);

    return (
        <>
            <h1>User logged in: {context.loggedIn + " "} {saloni + " "}  </h1>
            { context.temp }
            <button onClick={() => setSaloni(!saloni)} >Click</button>
            <button onClick={() => context.setLoggedIn(false)} >Click</button>
            Count: {state.count}
      <button onClick={() => dispatch({type: 'Dec'})}>-</button>
      <button onClick={() => dispatch({type: 'Inc'})}>+</button>
        </>
    ); 
}