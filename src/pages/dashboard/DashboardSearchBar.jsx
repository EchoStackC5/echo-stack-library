import React, {useState} from "react";
import { Search } from "lucide-react";

export default function DashboardSearchBar(){
    const [query, setQuery] = useState('');
    const handleInputChange = (event) =>{
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); //pass query to parent component
    }

    return(
        // <input
        // type="text"
        // placeholder="search dashbaord"
        // value={query}
        // onChange={handleInputChange}
        // />
          <div className="flex bg-backgrounds border border-light-border px-6 py-2 gap-2 rounded-full w-full focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-violet-500">
    <div className="w-8 h-8 bg-primary text-white flex justify-center items-center rounded-full">
        <Search className="w-4 h-4" />
    </div>
    <input
        type="text"
        placeholder="search dashboard .."
        value={query}
        onChange={handleInputChange}
        className="outline-none text-sm flex-1"
    /> 
</div>
    );
};