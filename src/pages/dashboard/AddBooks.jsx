// AddBooks.js - Client Component (no async)
"use client"

import { columns, Books } from "@/components/custom/books/columns"
import { DataTable } from "@/components/custom/books/book-data-table"

export default function AddBooks() {
  // No async/await needed since you're using static data
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={Books} />
    </div>
  )
} 