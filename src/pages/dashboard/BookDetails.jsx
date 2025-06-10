import img from "../../assets/images/img1.png"
import img1 from "../../assets/images/clock.png"
import { useState, useEffect } from "react"
export default function BookDetails() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (

        <>
            <section>
                <h1>our popup description BookDetails</h1>
                {/* our popup descrption modal */}
                <button id="MyBtn" onClick={openModal}>Open Modal</button>
                <div
                    id="myModal"
                    style={{ display: isOpen ? "flex" : "none" }}
                    className="fixed inset-0 bg-black bg-opacity-60 justify-center items-center z-50"
                >
                    <div className="relative bg-white p-6 rounded-lg w-full max-w-3xl flex gap-6">
                        {/* Close button */}
                        <span
                            onClick={closeModal}
                            className="absolute top-3 right-4 text-2xl text-gray-700 cursor-pointer"
                        >
                            ×
                        </span>

                        {/* ✅ FLEX CONTAINER STARTS HERE */}
                        <div className="flex gap-10 items-start">
                            {/* Book Image */}
                            <img
                                src={img}
                                alt="Book"
                                className="w-70 h-auto rounded shadow mt-20 mb-20"
                            />

                            {/* Text beside image */}
                            <div className="flex flex-col justify-start text-black">
                                <p className="text-x1 mb-2 text-gray-700 mt-13 font-satoshi">Damilare Kuku</p>
                                <h2 className="font-[Acme] font-normal text-[42px] leading-[54px] align-middle tracking-normal">The power Of <br></br> Questions</h2>
                                <div className="flex flex-row gap-5 mt-5">
                                    <span className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-2xs text-gray-700" style={{ backgroundColor: "var(--color-backgrounds)" }}>
                                        <img src={img1} alt="" className="w-4 h-4" />
                                        30 mins read
                                    </span>
                                    <span className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-2xs text-gray-700" style={{ backgroundColor: "var(--color-backgrounds)" }}>
                                        <img src={img1} alt="" className="w-4 h-4" />
                                        30 mins read
                                    </span>
                                </div>
                                <p className="text-gray-700 text-sm mt-5">
                                    This is a description of the book. It will show right next to the image.
                                    This book is best book to ask you on the question of life
                                </p>
                                <span className="font-[Satoshi] font-medium text-[20px] leading-[20px] tracking-normal align-middle mt-5 text-gray-700">Category</span>
                                <div className="grid grid-cols-3 gap-4 mt-5">
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-sm w-30 border border-[#E0E4EA] text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        Mystery
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-sm w-30 border border-[#E0E4EA] text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        Sci-fi
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-sm w-30 border border-[#E0E4EA] text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        Mental Health
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-sm w-30 border border-[#E0E4EA] text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        Self Help
                                    </span>
                                    <span
                                        className="flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-medium shadow-sm w-30 border border-[#E0E4EA] text-gray-700"
                                        style={{ backgroundColor: "var(--color-backgrounds)" }}
                                    >
                                        Unfinished
                                    </span>

                                </div>
                                <button>
                                    <a href=""></a>
                                </button>
                            </div>
                        </div>
                        {/* ✅ FLEX CONTAINER ENDS HERE */}
                    </div>
                </div>


            </section>
        </>

    )
}