import Span from '../../../Clock/Stopwatch/Span';
import './InputScroll.css';

function InputScroll(props){
        
    return(
       <div className="inputContainer">
        <p className='inputName'>{props.input}</p>
        <input className='input' id={props.inputId} type={props.type} min={props.minValue}  max={props.maxValue} value={props.value}  />
       </div>
    );
}
export default InputScroll;