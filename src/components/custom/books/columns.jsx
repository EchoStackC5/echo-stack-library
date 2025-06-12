import { MoreHorizontal, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import BookDetails from "@/pages/dashboard/BookDetails";
import Modal from "../modal"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import EditBookForm from "@/components/EditBook"
import { useState } from "react";
import { apiClient } from "@/api/client";
// import { ColumnDef } from "@tanstack/react-table";

export const Books = [
  {
    id: '001',
    bookTitle: 'The mystery library',
    author: 'Eliza Daniels',
    genre: 'Mystery',
    isbn: '65regcd-gvsf',
    publishedYear: '2023'
  },
  {
    id: '002',
    bookTitle: 'All men in lagos are mad',
    author: 'Eliza Daniels',
    genre: 'Romance',
    isbn: '65regcd-gvsf',
    publishedYear: '2023'
  },
  {
    id: '003',
    bookTitle: 'Come Here',
    author: 'Eliza Daniels',
    genre: 'Mystery',
    isbn: '65regcd-gvsf',
    publishedYear: '2023'
  },
  {
    id: '004',
    bookTitle: 'Whispers in the Dark',
    author: 'Marcus Chen',
    genre: 'Thriller',
    isbn: '89nhgt-klos',
    publishedYear: '2024'
  },
  {
    id: '005',
    bookTitle: 'The Last Symphony',
    author: 'Isabella Rodriguez',
    genre: 'Drama',
    isbn: '23fghi-mnop',
    publishedYear: '2022'
  },
  {
    id: '006',
    bookTitle: 'Midnight Garden',
    author: 'Oliver Thompson',
    genre: 'Romance',
    isbn: '45qrst-uvwx',
    publishedYear: '2023'
  },
  {
    id: '007',
    bookTitle: 'Echoes of Tomorrow',
    author: 'Sarah Williams',
    genre: 'Science Fiction',
    isbn: '67yzab-cdef',
    publishedYear: '2024'
  },
  {
    id: '008',
    bookTitle: 'The Forgotten Key',
    author: 'David Johnson',
    genre: 'Mystery',
    isbn: '12ghij-klmn',
    publishedYear: '2021'
  },
  {
    id: '009',
    bookTitle: 'Dancing with Shadows',
    author: 'Emily Parker',
    genre: 'Fantasy',
    isbn: '34opqr-stuv',
    publishedYear: '2023'
  },
  {
    id: '010',
    bookTitle: 'The Silent Observer',
    author: 'James Mitchell',
    genre: 'Thriller',
    isbn: '56wxyz-abcd',
    publishedYear: '2022'
  },
  {
    id: '011',
    bookTitle: 'Beneath the Surface',
    author: 'Luna Martinez',
    genre: 'Drama',
    isbn: '78efgh-ijkl',
    publishedYear: '2024'
  },
  {
    id: '012',
    bookTitle: 'The Time Keeper',
    author: 'Alexander Brown',
    genre: 'Science Fiction',
    isbn: '90mnop-qrst',
    publishedYear: '2023'
  },
  {
    id: '013',
    bookTitle: 'Crimson Nights',
    author: 'Victoria Stone',
    genre: 'Romance',
    isbn: '13uvwx-yzab',
    publishedYear: '2022'
  },
  {
    id: '014',
    bookTitle: 'The Hidden Truth',
    author: 'Michael Davis',
    genre: 'Mystery',
    isbn: '35cdef-ghij',
    publishedYear: '2024'
  },
  {
    id: '015',
    bookTitle: 'Storm Chaser',
    author: 'Rachel Green',
    genre: 'Adventure',
    isbn: '57klmn-opqr',
    publishedYear: '2023'
  },
  {
    id: '016',
    bookTitle: 'The Moonlit Path',
    author: 'Thomas Wilson',
    genre: 'Fantasy',
    isbn: '79stuv-wxyz',
    publishedYear: '2021'
  },
  {
    id: '017',
    bookTitle: 'Broken Promises',
    author: 'Amanda Clark',
    genre: 'Drama',
    isbn: '91abcd-efgh',
    publishedYear: '2024'
  },
  {
    id: '018',
    bookTitle: 'The Digital Maze',
    author: 'Kevin Lee',
    genre: 'Science Fiction',
    isbn: '14ijkl-mnop',
    publishedYear: '2023'
  }
]

export const columns = [
  {
    accessorKey: "bookTitle",
    header: "Book Title",
  },
  {
    accessorKey: "authorNameTitle",
    header: "Author",
  },
  {
    accessorKey: "selectCategory",
    header: "Genre",
  },
  // {
  //   accessorKey: "isbn",
  //   header: "ISBN",
  // },
  {
    accessorKey: "publishYear",
    header: "Published year",
    cell: (info) => {
      const date = new Date(info.getValue());
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const book = row.original

      const [open, setOpen] = useState(false)
      const [deleteOpen, setDeleteOpen] = useState(false);
      const [isDeleting, setIsDeleting] = useState(false);
      const [viewBookOpen, setViewBookOpen] = useState(false);

      const deleteBook = async () => {
        setIsDeleting(true)
        try {
          await apiClient.delete(`/books/${book.id}`)

          window.location.reload()
        } catch (error) {
          console.error('Delete failed:', error)
          alert('Failed to delete book')
        } finally {
          setIsDeleting(false)
          setDeleteOpen(false)
        }
      }


      return (
        <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
             <DropdownMenuItem
                onClick={() => setViewBookOpen(true)}
              >
                View Book details
              </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem onClick={() => setOpen(true)}>
        Edit Book
      </DropdownMenuItem> */}
            <EditBookForm id={book.id} open={open} onOpenChange={setOpen} />

            <Tooltip>
              <TooltipTrigger asChild>
                <Modal
                  trigger={
                    <Button
                      variant="ghost"
                      className="flex items-center justify-center font-normal rounded-lg p-0 transition-colors hover:text-foreground/60 hover:bg-transparent "
                      onClick={() => setDeleteOpen(true)}
                    >
                      <Trash2 />
                      Delete Book
                    </Button>
                  }
                  headerText="Are you sure you want to delete this book?"
                  submitButtonText="Confirm"
                  onClick={deleteBook}
                  isLoading={isDeleting}
                />

              </TooltipTrigger>
              <TooltipContent side="right">Delete</TooltipContent>

            </Tooltip>

            {/* <DropdownMenuItem><Trash2/><button onClick={deleteBook}>Delete book</button></DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <BookDetails 
          isOpen={viewBookOpen} 
          closeModal={() => setViewBookOpen(false)}
          id={book.id}  // Pass only the ID
        />
          </>
      )
    },
  },
  //   {
  //     accessorKey: "actions",
  //     header: "Actions",
  //   },


  // ... more columns
]

//view book function
// import { useSearchParams } from "react-router";