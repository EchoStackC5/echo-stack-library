import React from 'react';
import Select from 'react-select';
export const genreOptions = [
    { value: 'Romance', label: 'Romance' },
    { value: 'fiction', label: 'Fiction' },
    { value: 'self-help', label: 'Self-Help' },
    { value: 'satire', label: 'Satire' },
    { value: 'drama', label: 'Drama' },
    { value: 'mystery', label: 'Mystery' },
    { value: 'biography', label: 'Biography' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'science-fiction', label: 'Science Fiction' },
    { value: 'horror', label: 'Horror' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'business', label: 'Business' },
    { value: 'technology', label: 'Technology' },
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