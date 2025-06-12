import img from "../../assets/images/img1.png"
import img1 from "../../assets/images/clock.png"
import img2 from "../../assets/images/edit.png"
import img3 from "../../assets/images/review.png"
import { useState, useEffect } from "react"
export default function BookDetails() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (

        <>
            <section>
                <h1>our popup description BookDetails</h1>

                <button id="MyBtn" onClick={openModal}>Open Modal</button>

                <div
                    id="myModal"
                    style={{
                        display: isOpen ? "flex" : "none",
                        backgroundColor: "var(--color-backgrounds)",
                    }}
                    className="fixed inset-0 bg-opacity-60 justify-center items-center z-50 p-4"
                >
                    <div className="relative bg-white p-4 md:p-6 rounded-lg w-full max-w-4xl flex flex-col md:flex-row gap-6 shadow-2xl overflow-y-auto max-h-[90vh] shadow-indigo-500/40">
                        <span
                            onClick={closeModal}
                            className="absolute top-3 right-4 text-2xl text-gray-700 cursor-pointer"
                        >
                            ×
                        </span>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                            <div
                                style={{ backgroundColor: "var(--color-backgrounds)" }}
                                className="h-auto w-90 rounded-md shadow-md hover:shadow-lg transition duration-300 p-2 pl-5 pt-0 pr-3 mt-5"
                            >
                                <img
                                    src={img}
                                    alt="Book"
                                    className="w-150 h-auto  rounded shadow-md mb-4 mt-7 hover:shadow-lg transition duration-700"
                                />
                            </div>


                            <div className="flex flex-col justify-start text-black w-full ml-5">
                                <p className="text-xl mb-2 text-gray-700 font-satoshi">Damilare Kuku</p>

                                <h2 className="font-[Acme] font-normal text-[32px] md:text-[42px] leading-[44px] md:leading-[54px] tracking-normal">
                                    The power Of <br /> Questions
                                </h2>

                                <div className="flex flex-wrap gap-4 mt-4">
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        <img src={img1} alt="" className="w-4 h-4" />
                                        30 mins read
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        <img src={img3} alt="" className="w-5 h-5" />
                                        4.5(2,500 ratings)
                                    </span>
                                </div>

                                <p className="text-gray-700 text-sm mt-4">
                                    This is a description of the book. It will show right next to the
                                    image. This book is best book to ask you on the question of life
                                </p>

                                <span className="font-[Satoshi] font-medium text-[20px] leading-[20px] tracking-normal mt-5 text-gray-700">
                                    Categories
                                </span>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                                    {["Mystery", "Sci-fi", "Mental Health", "Self Help", "Unfinished"].map((cat) => (
                                        <span
                                            key={cat}
                                            className="flex items-center text-center gap-2 rounded-xl px-4 py-2 text-xs font-medium shadow-sm border border-[#E0E4EA] text-gray-700 pl-13 "
                                            style={{ backgroundColor: "var(--color-backgrounds)" }}
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>

                                <button className="mt-6 self-start">
                                    <a href="#">
                                        <span
                                            className="flex items-center justify-center w-[140px] h-[40px] rounded-[20px] border border-solid gap-2 px-3 py-2 text-sm text-white"
                                            style={{ backgroundColor: "var(--color-primary)" }}
                                        >
                                            <img src={img2} alt="" className="w-3 h-3" />
                                            Edit Book
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </section>
        </>

    )
}