import React, { useEffect } from 'react';

function Search() {
    useEffect(() => {
        const search = document.querySelector('.search');
        const icon = document.querySelector('.icon');
        const clear = document.querySelector('.clear');
        icon.onclick = function (){
            search.classList.toggle('active')
        }
        clear.onclick = function (){
            document.getElementById('mySearch').value = '';
        }
    }, []);

    return (
        <div className='search'>
            <div className='icon'></div>
            <div className='input'>
                <input type='text' placeholder='Search' id='mySearch' />
            </div>
            <span className='clear'></span>
        </div>
    );
}

export default Search;
