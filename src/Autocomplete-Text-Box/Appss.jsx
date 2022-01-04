import React from 'react'
import AutoCompleteText from "./AutoCompleteText";
import countries from './countries';
function Appss() {
    return (
        <div className="App">
            <h1>AutoComplete text Box</h1>
            <AutoCompleteText items={countries}/>
            <br/>
            <AutoCompleteText items={['anil','patidar','nit']}/>
        </div>
    )
}

export default Appss;
