import React, {useState} from "react";
export default function DashboardSearchBar(){
    const [query, setQuery] = useState('');
    const handleInputChange = (event) =>{
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); //pass query to parent component
    }

    return(
        <input
        type="text"
        placeholder="search dashbaord"
        value={query}
        onChange={handleInputChange}
        />
    );
};