import { Search } from "lucide-react";
import React, {useState} from "react";
export default function BooksSearchBar(){
    const [query, setQuery] = useState('');
    const handleInputChange = (event) =>{
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); //pass query to parent component
    }

    return(
        <div className="flex bg-backgrounds border border-light-border px-6 py-2  gap-2 outline-none rounded-full">
           <div className="w-8 h-8 bg-primary text-white flex justify-center items-center rounded-full">
  <Search className="w-4 h-4" />
</div>
            <input
        type="text"
        placeholder="search book list .."
        value={query}
        onChange={handleInputChange}
        className="outline-none text-sm"
        /> 
        
        </div>
       
    );
};