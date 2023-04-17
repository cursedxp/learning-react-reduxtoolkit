//import hooks useSelector to reach State and useDispatch to dispach the actions
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export default function Counter(props) {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
