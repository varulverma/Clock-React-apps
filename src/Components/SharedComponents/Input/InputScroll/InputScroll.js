import Span from '../../../Clock/Stopwatch/Span';
import './InputScroll.css';
import { useRef }  from "react"

function InputScroll(props){
        const inputRef = useRef(null);
    const handleChangeInput = () => {
        console.log(inputRef.current.value);
    }
    return(
       <div className="inputContainer">
        <p className='inputName'>{props.input}</p>
        <input className='input' id={props.inputId} type={props.type} min={props.minValue}  max={props.maxValue} value={props.value} onChange={handleChangeInput} ref={inputRef}  />
       </div>
    );
}
export default InputScroll;