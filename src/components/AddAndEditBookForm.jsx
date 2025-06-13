import { X, Undo2, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import GenreOptions from './GenreOptions';
import { genreOptions } from './GenreOptions';
import Select from 'react-select';
import FileUpload from './FileUpload';
import { apiClient } from '@/api/client';
import SubmitButton from './SubmitButton';
import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

// Toast notification component
const Toast = ({ message, type, isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000); // Auto-dismiss after 4 seconds

            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] animate-in slide-in-from-right-5 ${
            type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
            {type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
            ) : (
                <AlertCircle className="h-5 w-5 text-red-600" />
            )}
            <div className="flex-1">
                <p className="font-medium">
                    {type === 'success' ? 'Success!' : 'Error!'}
                </p>
                <p className="text-sm opacity-90">{message}</p>
            </div>
            <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
            >
                <X className="h-4 w-4" />
            </button>
        </div>
    );
};

export default function AddBookForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toast, setToast] = useState({
        isVisible: false,
        message: '',
        type: 'success' // 'success' or 'error'
    });
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const showToast = (message, type = 'success') => {
        setToast({
            isVisible: true,
            message,
            type
        });
    };

    const hideToast = () => {
        setToast(prev => ({ ...prev, isVisible: false }));
    };

    const postBook = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            // Collect form data
            const formData = new FormData(event.target);
            
            // Convert FormData to regular object for JSON
            const bookData = {};
            for (let [key, value] of formData.entries()) {
                bookData[key] = value;
            }

            // Handle the multi-select genre field
            const genreSelect = event.target.querySelector('[name="selectCategory"]');
            if (genreSelect && genreSelect.__reactInternalInstance) {
                // Get the selected values from react-select
                const selectedGenres = genreSelect.props?.value || [];
                bookData.selectCategory = selectedGenres.map(genre => genre.value).join(', ');
            }

            const response = await apiClient.post('/books', bookData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Show success message from backend or default
            const successMessage = response.data?.message || 'Book added successfully!';
            showToast(successMessage, 'success');

            // Reset form
            event.target.reset();
            
            // Close dialog
            setIsDialogOpen(false);

            // Refresh window after a short delay to let user see the success message
            setTimeout(() => {
                window.location.reload();
            }, 2000);

        } catch (error) {
            console.error('Error adding book:', error);
            
            // Show error message from backend or default
            const errorMessage = error.response?.data?.message || 
                                error.message || 
                                'Failed to add book. Please try again.';
            showToast(errorMessage, 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setIsDialogOpen(false);
    };

    return (
        <>
            {/* Toast Notification */}
            <Toast 
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                    <button className='border border-primary py-2 px-3 flex justify-center items-center rounded-full text-primary text-sm hover:bg-backgrounds cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95'>
                        <Plus className="mr-2" />
                        Add a new Book
                    </button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] overflow-y-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
                    <form onSubmit={postBook} className='flex flex-col gap-6'>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-2'>
                                <p className="text-2xl text-primary font-medium">Add a book</p>
                                <p className="text-sm text-secondary-text font-normal">Please provide the fields below to add a book</p>
                            </div>
                        </div>

                        <div className='flex justify-between gap-4'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label className='text-sm font-normal text-secondary-text'>
                                    Book Title <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='text'
                                    name='bookTitle'
                                    required
                                    disabled={isSubmitting}
                                    placeholder='Enter book title'
                                    className='outline-none border text-secondary-text border-dark-border p-2 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed'
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label className='text-sm font-normal text-secondary-text'>
                                    Author Name <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='text'
                                    name='authorNameTitle'
                                    required
                                    disabled={isSubmitting}
                                    placeholder='Enter author name'
                                    className='outline-none border text-secondary-text border-dark-border p-2 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-normal text-secondary-text'>Description</label>
                            <textarea
                                name='description'
                                required
                                disabled={isSubmitting}
                                placeholder='Add description of the book'
                                className='outline-none border text-secondary-text border-dark-border p-2 rounded-md min-h-[80px] disabled:bg-gray-100 disabled:cursor-not-allowed'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-normal text-secondary-text'>
                                Select Genre <span className='text-red-500'>*</span>
                            </label>
                            <Select
                                options={genreOptions}
                                isMulti
                                name='selectCategory'
                                required
                                isDisabled={isSubmitting}
                                placeholder='Select Genre'
                                className='react-select-container'
                                classNamePrefix="react-select"
                            />
                        </div>
                        
                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-normal text-secondary-text'>
                                Published Year <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='date'
                                name='publishYear'
                                required
                                disabled={isSubmitting}
                                className='outline-none border text-secondary-text border-dark-border p-2 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed'
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-normal text-secondary-text'>
                                Book Cover <span className='text-red-500'>*</span>
                            </label>
                            <input
                                type='url'
                                name='cover'
                                required
                                disabled={isSubmitting}
                                placeholder='Paste book cover URL'
                                className='outline-none border text-secondary-text border-dark-border p-2 rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed'
                            />
                        </div>

                        <div className='flex flex-col md:flex-row gap-2'>
                            <button 
                                type="button"
                                onClick={handleCancel}
                                disabled={isSubmitting}
                                className='w-full bg-backgrounds border border-primary text-primary justify-center flex items-center gap-2 rounded-full font-normal text-lg py-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                            >
                                <Undo2 />
                                Cancel
                            </button>
                            <button 
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-primary border border-primary text-white justify-center flex items-center gap-2 rounded-full font-normal text-lg py-2 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                        Adding...
                                    </>
                                ) : (
                                    <>
                                        <Plus />
                                        Add Book
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}