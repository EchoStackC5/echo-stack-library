import img from "../../assets/images/img1.png"
import img1 from "../../assets/images/clock.png"
import img2 from "../../assets/images/edit.png"
import img3 from "../../assets/images/review.png"
import { useState, useEffect } from "react"
import { apiClient } from "@/api/client";
import { ThreeDots } from "react-loader-spinner"

export default function BookDetails({ isOpen, closeModal, id }) {
    const [bookDetails, setBookDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getBookDetails = async () => {
        if (!id) return; // Don't make API call if no ID

        setLoading(true);
        setError(null);

        try {
            const response = await apiClient.get(`/books/${id}`);
            console.log(response.data);
            setBookDetails(response.data);
        } catch (error) {
            console.log("error getting book details", error);
            setError("Failed to load book details");
        } finally {
            setLoading(false);
        }
    }

    // Only fetch when modal opens and ID exists
    useEffect(() => {
        if (isOpen && id) {
            getBookDetails();
        }
    }, [isOpen, id]);

    // Don't render anything if modal is not open
    if (!isOpen) return null;

    return (
        <section className="font-satoshi">
            <div
                id="myModal"
                style={{
                    display: "flex",
                    backgroundColor: "var(--color-backgrounds)",
                }}
                className="fixed inset-0 bg-opacity-60 justify-center items-center z-50 p-4"
            >
                <div className="relative bg-white p-4 md:p-6 rounded-lg w-full max-w-4xl flex flex-col md:flex-row gap-6 shadow-2xl overflow-y-auto max-h-[90vh] shadow-indigo-500/40">
                    <span
                        onClick={closeModal}
                        className="absolute top-3 right-4 text-2xl text-gray-700 cursor-pointer hover:text-gray-900"
                    >
                        ×
                    </span>

                    {loading ? (
                        <div className="flex justify-center items-center w-full h-64">
                            <ThreeDots height="120" width="120" color="#084182" />
                        </div>
                    ) : error ? (
                        <div className="flex justify-center items-center w-full h-64">
                            <div className="text-lg text-red-600">{error}</div>
                        </div>
                    ) : bookDetails ? (
                        <div className="flex flex-col md:flex-row  gap-6 md:gap-10 justify-center items-center">
                            <div
                                style={{ backgroundColor: "var(--color-backgrounds)" }}
                                className="h-auto w-90 rounded-md shadow-md hover:shadow-lg transition duration-300 p-2 pl-5 pt-0 pr-3 mt-5"
                            >
                                <img
                                    src={bookDetails.cover || img} // Use API image or fallback
                                    alt="Book Cover"
                                    className="w-150 h-auto rounded shadow-md mb-4 mt-7 hover:shadow-lg transition duration-700"
                                />
                            </div>

                            <div className="flex flex-col justify-start text-black  ml-5">
                                <p className="text-xl mb-2 text-gray-700 font-satoshi">
                                    {bookDetails.authorNameTitle}
                                </p>

                                <h2 className=" font-acme font-normal text-lg md:text-2xl leading-[44px] md:leading-[54px] tracking-normal">
                                    {bookDetails.bookTitle || bookDetails.title || "Untitled Book"}
                                </h2>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        <img src={img1} alt="" className="w-4 h-4" />
                                        {bookDetails.readTime || "30 mins read"}
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        <img src={img3} alt="" className="w-5 h-5" />
                                        {bookDetails.rating || "4.5(2,500 ratings)"}
                                    </span>
                                </div>


                                <p className="text-gray-700 text-sm mt-4 break-all w-[200px]">
                                    {bookDetails.description || "No description available for this book."}
                                </p>




                                <span className="font-satoshi font-medium text-[20px] leading-[20px] tracking-normal mt-5 text-gray-700">
                                    Genre
                                </span>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                    {bookDetails.categories && Array.isArray(bookDetails.categories) ?
                                        bookDetails.categories.map((cat, index) => (
                                            <span
                                                key={index}
                                                className="flex items-center text-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow-sm border border-[#E0E4EA] text-gray-700 pl-13"
                                                style={{ backgroundColor: "var(--color-backgrounds)" }}
                                            >
                                                {cat}
                                            </span>
                                        )) :
                                        <span
                                            className="flex items-center text-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow-sm border border-[#E0E4EA] text-gray-700 pl-13"
                                            style={{ backgroundColor: "var(--color-backgrounds)" }}
                                        >
                                            {bookDetails.selectCategory || bookDetails.genre || "Uncategorized"}
                                        </span>
                                    }
                                </div>

                                {/* <div className="flex gap-4 mt-6">
                                    <button className="self-start">
                                        <span
                                            className="flex items-center justify-center w-[140px] h-[40px] rounded-[20px] border border-solid gap-2 px-3 py-2 text-sm text-white hover:opacity-90 transition-opacity"
                                            style={{ backgroundColor: "var(--color-primary)" }}
                                        >
                                            <img src={img2} alt="" className="w-3 h-3" />
                                            Edit Book
                                        </span>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    ) : (
                        <div className="flex justify-center items-center w-full h-64">
                            <div className="text-lg text-gray-600">No book details available</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}