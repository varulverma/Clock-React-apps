function Span(props){
    return(
        <span
            className={props.className}
            onClick={
                props.handleClick
                ? props.handleClick
                : ()=> {console.log("Nothing is passed to handle.");}
                    }
            >
            {props.text}
        </span>
    );
}
export default Span;