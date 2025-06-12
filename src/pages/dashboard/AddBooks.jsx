// AddBooks.js - Client Component (no async)
"use client"
import { Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { apiClient } from '@/api/client';

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
  useEffect(() => {
    setIsLoading(true); // Start loading
    apiClient.get('/books')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
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
            <p className='text-darkestHeading text-sm md:text-xl '>All Books <span className='text-secondary-text text-sm'>30</span></p>
            <BooksSearchBar className="" />
          </div>

          <div className='flex flex-col md:flex-row  gap-2'>

            <AddBookForm className=" " />
            <BooksTableFilter />
          </div>


        </div>
        {isLoading ? (
          <div className="flex justify-center py-10">
            <ThreeDots height="120" width="120" color="#084182" />
          </div>
        ) : (
          <DataTable columns={columns} data={books} className="bg-white [&_thead]:bg-red-600 [&_th]:font-semibold [&_td]:py-3 border" />
        )}

      </div>

    </div>

  )
} 