import { useReducer,createContext,useContext } from "react";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "change": {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case "add": {
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
    }
    case "minus": {
      return { ...state, result: state.a - state.b };
    }
    case "divide": {
      return { ...state, result: state.a / state.b };
    }
    case "multiply": {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error("operator is invalid");
  }
};
const StateContext = createContext();
const StateContextdispatch=createContext();

const CalcProvider=({children})=>{
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };
  const [state, dispatch] = useReducer(reducer, initState);
    return(
        <StateContext.Provider value={state}>
            <StateContextdispatch.Provider value={dispatch}>
                {children}
            </StateContextdispatch.Provider>
        </StateContext.Provider>
    )
}
const useStateContext =()=>{
    return useContext(StateContext)
}

const useStateContextdispatch =()=>{
    return useContext(StateContextdispatch)
}

export{CalcProvider,useStateContext,useStateContextdispatch}