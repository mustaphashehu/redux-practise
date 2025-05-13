import { useSelector, useDispatch } from "react-redux";
import { increament, decreament, clear } from "../app/features/counter/counterSlice"
const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return ( 
        <div className="">
            <h1 className="text-8xl">{count}</h1>
            <button className="text-6xl" onClick={() => dispatch(decreament())}>-</button>
            <button className="text-6xl" onClick={() => dispatch(increament())}>+</button>
            <button className="text-6xl" onClick={() => dispatch(clear())}>clear</button>
        </div>
     );
}
 
export default Counter;