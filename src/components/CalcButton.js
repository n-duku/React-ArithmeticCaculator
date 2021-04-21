function CalcButton({buttonName, onClickHandle}){

    return(
        <input type="submit" className='btn' value={buttonName} onClick={onClickHandle} />
    );
}


export default CalcButton;