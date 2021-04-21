import CalcButton from './CalcButton';


function CalcForm({ handleSubmit, cutton, keypadData, handleInput }){

    return(
        <form onSubmit={ handleSubmit }>
            <div className="inputcontainer">
                <input type="text" name="textinput" id="textInput" value={cutton} readOnly/>
            </div>
            <div className='keyContainer'>
                { keypadData.map((key, id)=> <CalcButton key={id} buttonName={key} onClickHandle={e => handleInput(e.target.value)} />) }
            </div>
        </form>
    );
}


export default CalcForm;