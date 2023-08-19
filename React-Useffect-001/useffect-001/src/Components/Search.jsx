import React from 'react';

const Search = ({ inputvalue, setInputvalue, value, setValue }) => {

    return (
        <div className='Search' style={{position:"sticky",top:"0" , left:"0"}}>
            <input type="text" onChange={(e) => {
                setValue(e.currentTarget.value)
            }} />

            <button onClick={(e) => {
                setInputvalue(value)
            }
            }>Submit</button>
        </div>
    )
}

export default Search;