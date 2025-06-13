import { Search } from "lucide-react";
import React, {useState} from "react";
// export default function BooksSearchBar(){
//     const [query, setQuery] = useState('');
//     const handleInputChange = (event) =>{
//         const newQuery = event.target.value;
//         setQuery(newQuery);
//         onSearch(newQuery); //pass query to parent component
//     }

//     return(
//         <div className="flex bg-backgrounds  max-w-full border border-light-border px-6 py-2  gap-2 outline-none rounded-full ">
//            <div className=" w-6 h-6 md:w-8  md:h-8 bg-primary text-white flex justify-center items-center rounded-full">
//   <Search className=" w-2 h-2 md:w-4  md:h-4" />
// </div>
//             <input
//         type="text"
//         placeholder="search book list .."
//         value={query}
//         onChange={handleInputChange}
//         className="outline-none text-sm"
//         /> 
        
//         </div>
       
//     );
// };


export default function BooksSearchBar({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); 
    };

    return (
        <div className="flex bg-backgrounds max-w-full border border-light-border px-6 py-2 gap-2 outline-none rounded-full">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-primary text-white flex justify-center items-center rounded-full">
                <Search className="w-2 h-2 md:w-4 md:h-4" />
            </div>
            <input
                type="text"
                placeholder="search book list..."
                value={query}
                onChange={handleInputChange}
                className="outline-none text-sm"
            />
        </div>
    );
}
