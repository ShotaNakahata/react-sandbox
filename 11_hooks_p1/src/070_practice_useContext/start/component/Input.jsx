import { useStateContext } from "../context/CalcContext";
import { useStateContextdispatch } from "../context/CalcContext";
const Input=({name})=>{
    const state = useStateContext()
    const dispatch =useStateContextdispatch()

    const numChangeHandler = (e) => {
        dispatch({
          type: "change",
          payload: { name: e.target.name, value: e.target.value },
        });
      };

    return (
        <div>
        {name}
        <input
          type="number"
          name={name}
          value={state[name]}
          onChange={numChangeHandler}
        />
      </div>
    )
}
export default Input;