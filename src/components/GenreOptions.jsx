import React from 'react';
import Select from 'react-select';
export const genreOptions = [
    { value: 'Romance', label: 'Romance' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Education', label: 'Education' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Fantasy', label: 'Fantasy' },
     { value: 'hero', label: 'hero' },
   
];

export default function GenreOptions(){
    
    return(
       <Select             
            options={genreOptions}
            isMulti  
            name='selectCategory'           
            placeholder="Select Genres"             
            className="basic-multi-select outline-none border text-secondary-text bg-backgrounds border-dark-border p-2 rounded-md"             
            classNamePrefix="select"         
        />
    );

}