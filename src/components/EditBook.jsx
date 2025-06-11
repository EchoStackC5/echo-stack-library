import { X, Undo2, Plus,SquarePen } from 'lucide-react';
import GenreOptions from './GenreOptions';
import { genreOptions } from './GenreOptions';
import Select from 'react-select';
import FileUpload from './FileUpload';
import { apiClient } from '@/api/client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
export default function EditBookForm() {
    const postBook = (event) => {
        //prevents default form submission
        event.preventDefault();
        //collect form data
        const data = new FormData(event.target);
        //post data to backend api,that means to add a new book to the database
        apiClient.post('/books', data, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log(response.data);
                // Optionally, you can reset the form or show a success message
                event.target.reset();
            })
            .catch(error => {
                console.error('There was an error adding the book!', error);
            });



    }
    return (
        <Dialog className="">
            <DialogTrigger asChild>
                <button className='flex items-center gap-2 '>
                    <SquarePen className="mr-2 w-3" />
                    Edit Book
                </button>
            </DialogTrigger>
            <DialogContent className=" max-h-[90vh] overflow-y-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
                <form onSubmit={postBook} >
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-2'>
                            <p className="text-2xl text-primary font-medium">Edit Book</p>
                            {/* <p className="text-sm text-secondary-text font-normal">P</p> */}
                        </div>

                    </div>
                    <div className='flex justify-between'>
                        <div className=' flex flex-col gap-2'>
                            <label className='text-lg font-normal text-secondary-text'>Book Title <span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                name='bookTitle'
                                required
                                placeholder='enter book title'
                                className='outline-none border text-secondary-text border-dark-border p-2 rounded-md'
                            />
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <label className='text-lg font-normal text-secondary-text'>Author Name<span className='text-red-500'>*</span></label>
                            <input
                                type='text'
                                name='authorNameTitle'
                                required
                                placeholder='enter author name'
                                className='outline-none border text-secondary-text border-dark-border p-2 rounded-md'
                            />
                        </div>
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <label className='text-lg font-normal text-secondary-text'>Description</label>
                        <textarea
                            type='text'
                            name='description'
                            required
                            placeholder='add description of the book'
                            className='outline-none border text-secondary-text border-dark-border p-2 rounded-md'
                        />
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <label className='text-lg font-normal text-secondary-text'>Select Genre<span className='text-red-500'>*</span></label>

                        {/* <Select options={options}
                    name='genre'
                    required 
                    type='text'
                    placeholder='enter book title'
                    className='outline-none border text-secondary-text bg-backgrounds border-dark-border p-2 rounded-md'
                    /> */}
                        <Select
                            options={genreOptions}
                            isMulti
                            name='selectCategory'
                            required
                            placeholder='Select Genre'
                            className='' />

                    </div>
                    <div className='flex justify-between'>
                        <div className=' flex flex-col gap-2'>
                            <label className='text-lg font-normal text-secondary-text'>Pulished Year <span className='text-red-500'>*</span></label>
                            <input
                                type='date'
                                name='publishYear'
                                required
                                placeholder='enter publish year'
                                className='outline-none border text-secondary-text border-dark-border p-2 rounded-md'
                            />
                        </div>
                        {/* <div className=' flex flex-col gap-2'>
                        <label className='text-lg font-normal text-secondary-text'>ISBN</label>
                        <input
                            type='text'
                            name='title'
                            required
                            placeholder='enter isbn number'
                            className='outline-none border text-secondary-text border-dark-border p-2 rounded-md'
                        />
                    </div> */}
                    </div>

                    <div className=' flex flex-col gap-2'>
                        <label className='text-lg font-normal text-secondary-text'>Book Cover <span className='text-red-500'>*</span></label>
                        <input
                            type='text'
                            name='cover'
                            required
                            placeholder='paste book cover url'
                            className='outline-none border text-secondary-text border-dark-border p-2 rounded-md'
                        />
                    </div>

                    {/* <FileUpload /> */}
                    <div className='flex  flex-col md:flex-row gap-2'>
                        <button className='w-full bg-backgrounds border border-primary text-primary justify-center flex items-center gap-2 rounded-full font-normal text-lg py-2   cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90 active:scale-95 '><Undo2 />Cancel</button>
                        <button className='w-full bg-primary border border-primary text-white justify-center flex items-center gap-2 rounded-full font-normal text-lg py-2   cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90 active:scale-95 ' type='submit'><Plus />Add Book</button>
                    </div>
                </form>
            </DialogContent>

        </Dialog>
    )
}