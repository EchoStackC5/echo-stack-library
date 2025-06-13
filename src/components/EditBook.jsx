import { X, Undo2, Save, Plus, SquarePen } from 'lucide-react';
import SubmitButton from './SubmitButton';
import GenreOptions from './GenreOptions';
import { genreOptions } from './GenreOptions';
import Select from 'react-select';
import FileUpload from './FileUpload';
import { apiClient } from '@/api/client';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export default function EditBookForm({ id }) {
    const [book, setBook] = useState({});

    const getBook = () => {
        apiClient.get(`/books/${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.error("Error fetching book:", error);
            });
    }
    useEffect(getBook, []);

    const patchBook = async (data) => {
        try {
            const response = await apiClient.patch(`/books/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error adding the book!', error);
            setErrorMessage(error.response?.data?.message || error.message || 'An error occurred');
        }
    }

    return (
        <Dialog className="">
            <DialogTrigger asChild>
                <button className='flex items-center gap-1 sm:gap-2 text-sm sm:text-base'>
                    <SquarePen className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                    <span className="hidden sm:inline">Edit Book</span>
                    <span className="sm:hidden">Edit</span>
                </button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed bg-white p-3 sm:p-4 md:p-6 rounded-md shadow-md w-[95vw] sm:w-[90vw] md:w-full max-w-2xl mx-auto">
                <form action={patchBook} className='flex flex-col gap-3 sm:gap-4 md:gap-6'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-1 sm:gap-2'>
                            <p className="text-xl sm:text-2xl text-primary font-medium">Edit Book</p>
                        </div>
                    </div>

                    {/* Title and Author - Stack on mobile, side by side on larger screens */}
                    <div className='flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-4'>
                        <div className='flex flex-col gap-1 sm:gap-2 flex-1 sm:mr-2'>
                            <label className='text-xs sm:text-sm font-normal text-secondary-text'>
                                Book Title <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                name='bookTitle'
                                required
                                placeholder='Enter book title'
                                className='outline-none border text-secondary-text border-dark-border p-2 sm:p-3 rounded-md text-sm sm:text-base w-full'
                                defaultValue={book.bookTitle}
                            />
                        </div>
                        <div className='flex flex-col gap-1 sm:gap-2 flex-1 sm:ml-2'>
                            <label className='text-xs sm:text-sm font-normal text-secondary-text'>
                                Author Name<span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='text'
                                name='authorNameTitle'
                                required
                                placeholder='Enter author name'
                                className='outline-none border text-secondary-text border-dark-border p-2 sm:p-3 rounded-md text-sm sm:text-base w-full'
                                defaultValue={book.authorNameTitle}
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <label className='text-xs sm:text-sm font-normal text-secondary-text'>Description</label>
                        <textarea
                            name='description'
                            required
                            placeholder='Add description of the book'
                            className='outline-none border text-secondary-text border-dark-border p-2 sm:p-3 rounded-md text-sm sm:text-base w-full min-h-[80px] sm:min-h-[100px] resize-y'
                            defaultValue={book.description}
                        />
                    </div>

                    {/* Genre Selection */}
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <label className='text-xs sm:text-sm font-normal text-secondary-text'>
                            Select Genre<span className='text-red-500'>*</span>
                        </label>
                        <Select
                            options={genreOptions}
                            isMulti
                            name='selectCategory'
                            required
                            placeholder='Select Genre'
                            className='text-sm sm:text-base'
                            classNamePrefix="react-select"
                            styles={{
                                control: (provided) => ({
                                    ...provided,
                                    minHeight: '40px',
                                    fontSize: window.innerWidth < 640 ? '14px' : '16px'
                                }),
                                menu: (provided) => ({
                                    ...provided,
                                    fontSize: window.innerWidth < 640 ? '14px' : '16px'
                                })
                            }}
                        />
                    </div>

                    {/* Published Year */}
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <label className='text-xs sm:text-sm font-normal text-secondary-text'>
                            Published Year <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='date'
                            name='publishYear'
                            required
                            className='outline-none border text-secondary-text border-dark-border p-2 sm:p-3 rounded-md text-sm sm:text-base w-full sm:w-auto'
                            defaultValue={book.publishYear ? new Date(book.publishYear).toISOString().split('T')[0] : ''}
                        />
                    </div>

                    {/* Book Cover */}
                    <div className='flex flex-col gap-1 sm:gap-2'>
                        <label className='text-xs sm:text-sm font-normal text-secondary-text'>
                            Book Cover <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='text'
                            name='cover'
                            required
                            placeholder='Paste book cover URL'
                            className='outline-none border text-secondary-text border-dark-border p-2 sm:p-3 rounded-md text-sm sm:text-base w-full'
                            defaultValue={book.cover}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 sm:pt-4">
                        <SubmitButton 
                            title={"Save Changes"} 
                            className="w-full bg-primary border border-primary text-white justify-center flex items-center gap-2 rounded-full font-normal text-sm sm:text-base md:text-lg py-2 sm:py-3 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-[0.98] active:scale-95" 
                        />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}