import React from 'react'
import {useState} from 'react'


function SearchBar({photoUpload}) {

    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        // if (text === ''){
        //     setMessage('Search for a meme!');
        // } else {
        //     setMessage('');
        // }
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        // TO DO: handle search submit. 
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="searchBar">
                    <input onChange={handleTextChange} type="text" placeholder="Search for a meme!" value={text}></input>
                    <button>hit!</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar