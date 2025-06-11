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


export default function AddBooks() {
  const [books ,setBooks] = useState([])
      const getBooks = () => {
        apiClient.get('/books')
        .then((response) => {
          console.log(response.data)
          setBooks(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
      }
       useEffect(getBooks, []); 
  // No async/await needed since you're using static data
  return (
    <div className='space-y-10'>
      <div className="font-font-satoshi">
        <h1 className="text-2xl font-medium text-darkestHeading ">Manage and Add Books</h1>
        <p className="text-muted-foreground">Manage all books here!</p>
      </div>
      <div className=" font-satoshi container mx-auto py-10 bg-white px-10 rounded-md border border-light-border">
        <div className='flex justify-between  py-4'>
          <div className='flex items-center gap-4'>
            <p className='text-darkestHeading text-xl'>All Books <span className='text-secondary-text text-sm'>30</span></p>
            <BooksSearchBar className="" />
          </div>

          <div className='flex gap-2'>

            <AddBookForm className=" " />
            <BooksTableFilter />
          </div>


        </div>
        <DataTable columns={columns} data={books} className="bg-white [&_thead]:bg-red-600 [&_th]:font-semibold [&_td]:py-3 border"
        />

      </div>

    </div>

  )
} 