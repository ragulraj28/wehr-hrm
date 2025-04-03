import React from 'react'
import { SearchIcon } from '../../assets/icons/icon'

const Search = ({placeholder, onChange, ref}) => {
  return (
    <div className='search'>
        <input type="text" placeholder={placeholder} ref={ref} onChange={onChange}/>
        <div className="icon">
            <SearchIcon />
        </div>
    </div>
  )
}

export default Search