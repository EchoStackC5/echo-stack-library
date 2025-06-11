import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import EditBookForm from "@/components/EditBook"
// import { ColumnDef } from "@tanstack/react-table";

export  const Books = [
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
    header: "Book Tille",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "genre",
    header: "Genre",
  },
  {
    accessorKey: "isbn",
    header: "ISBN",
  },
  {
    accessorKey: "publishedYear",
    header: "Published year",
  },
   {
    id: "actions",
    cell: ({ row }) => {
      const Books= row.original
 
      return (
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
              onClick={() => navigator.clipboard.writeText(Books.id)}
            >
              View Book details
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><EditBookForm/></DropdownMenuItem>
            <DropdownMenuItem>Delete Book</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
//   {
//     accessorKey: "actions",
//     header: "Actions",
//   },
  

  // ... more columns
]