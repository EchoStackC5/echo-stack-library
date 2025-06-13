// AddBooks.js - Client Component (no async)
"use client"
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/client';
import { useNavigate } from 'react-router';

import { columns, Books } from "@/components/custom/books/columns"
import { DataTable } from "@/components/custom/books/book-data-table"
import BooksTableFilter from '@/components/BooksTableFilter';
import BooksSearchBar from '@/components/BookSearchBar';
import AddAndEditBookForm from "@/components/AddAndEditBookForm"
import AddBookForm from '@/components/AddAndEditBookForm';
import { ThreeDots } from 'react-loader-spinner';


export default function AddBooks() {
  const [books, setBooks] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  // const navigate = useNavigate();

//   const handleSearch = (query) => {
//     const lowerQuery = query.toLowerCase();
//     const filtered = books.filter(book => 
//         book.bookTitle.toLowerCase().includes(lowerQuery) || 
//         book.authorNameTitle.toLowerCase().includes(lowerQuery)
//     );
//     setFilteredBooks(filtered);
// };


  // const getBooks = () => {
  //   apiClient.get('/books')
  //   .then((response) => {
  //     console.log(response.data)
  //     setBooks(response.data)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }
  //  useEffect(getBooks, []); 
  // No async/await needed since you're using static data
  // useEffect(() => {
  //   setIsLoading(true); // Start loading
  //   apiClient.get('/books')
  //     .then((response) => {
  //       console.log(response.data);
  //       setBooks(response.data);
  //       setFilteredBooks(response.data); 
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false); // Stop loading
  //     });
  // }, []);

//   const handleFilterChange = (filterValue) => {
//   setSelectedFilter(filterValue);
//   applyFilters(books, searchQuery, filterValue);
// };

 const handleSearch = (query) => {
    setSearchQuery(query);
    applyFilters(books, query, selectedFilter);
  };

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
    applyFilters(books, searchQuery, filterValue);
  };

  const applyFilters = (booksData, searchQuery, filterValue) => {
    let filtered = [...booksData];

    // Apply search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(book =>
        book.bookTitle.toLowerCase().includes(lowerQuery) ||
        book.authorNameTitle.toLowerCase().includes(lowerQuery)
      );
    }

    // Apply category/year filter
    if (filterValue) {
      // Check if it's a year filter (numeric)
      if (!isNaN(filterValue)) {
        filtered = filtered.filter(book => 
          book.publishYear === filterValue || book.publishYear === parseInt(filterValue)
        );
      } else {
        // It's a genre filter
        filtered = filtered.filter(book => 
          book.selectCategory && book.selectCategory.toLowerCase() === filterValue.toLowerCase()
        );
      }
    }

    setFilteredBooks(filtered);
  };


  

  useEffect(() => {
    setIsLoading(true);
    apiClient.get('/books')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
        setFilteredBooks(response.data); // Initialize filtered books with all books
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='space-y-10 mx-auto'>
      <div className="font-font-satoshi">
        <h1 className=" text-lg md:text-2xl font-medium text-darkestHeading ">Manage and Add Books</h1>
        <p className="text-muted-foreground text-sm md:text-base">Manage all books here!</p>
      </div>
      <div className=" font-satoshi container mx-auto py-10 bg-white px-10 space-y-4 rounded-md border border-light-border">
        <div className='flex flex-col md:flex-row justify-between  py-4 space-y-10 md:space-y-2'>
          <div className='flex md:flex-row flex-col items-center gap-4'>
            <p className='text-darkestHeading text-sm md:text-xl '>All Books <span className='text-secondary-text text-sm'>{filteredBooks.length}</span></p>
            <BooksSearchBar onSearch={handleSearch} />

          </div>

          <div className='flex flex-col md:flex-row  gap-2'>

            <AddBookForm className=" " />
            <BooksTableFilter onFilterChange={handleFilterChange} />
          </div>


        </div>
        {isLoading ? (
          <div className="flex justify-center py-10">
            <ThreeDots height="120" width="120" color="#084182" />
          </div>
        ) : (
          <DataTable DataTable columns={columns} data={filteredBooks} className="bg-white [&_thead]:bg-red-600 [&_th]:font-semibold [&_td]:py-3 border" />
        )}

      </div>

    </div>

  )
} 