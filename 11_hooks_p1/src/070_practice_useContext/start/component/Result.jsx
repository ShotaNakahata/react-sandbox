import { useStateContext } from "../context/CalcContext";
const Result =()=>{
    const state = useStateContext()
    return <h3>結果：{state.result}</h3>
}
export default Result