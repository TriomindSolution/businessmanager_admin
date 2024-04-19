import React, { useState } from 'react';

const Modal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>


            <div
                style={{ marginLeft: "16.25rem" }}
                className="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm"
            >

                <div className="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
                    <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                        <div className="gap-2 py-4 ">
                            <div className="col-span-12 card 2xl:col-span-12">
                                <div className="card-body">
                                    <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
                                        <div className="2xl:col-span-3">
                                            <h6 className="text-15">Expense</h6>
                                        </div>
                                        {/*end col*/}
                                        <div className="2xl:col-span-3 2xl:col-start-10">
                                            <div className="flex gap-3">
                                                <div className="relative grow">
                                                    <input
                                                        type="text"
                                                        className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Search for ..."
                                                        autoComplete="off"
                                                    />
                                                    <i
                                                        data-lucide="search"
                                                        className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                                // onClick={handleAdd}
                                                >
                                                    <i className="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line" />
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                    {/*end grid*/}
                                    <div className="overflow-x-auto">
                                        <div className="w-full whitespace-nowrap dark:text-zink-200 dark:bg-zink-600">

                                            <button
                                                onClick={openModal}
                                                type="button"
                                                className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:focus:ring-custom-400/20"
                                            >
                                                Large Modal
                                            </button>
                                            {isOpen && (
                                                <div
                                                    id="largeModal"
                                                    modal-center=""
                                                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                                                    onClick={closeModal}
                                                >
                                                    <div
                                                        className="fixed flex flex-col transition-all duration-300 ease-in-out left-1/2 z-drawer -translate-x-2/4 -translate-y-2/4 show"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <div className="w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full">
                                                            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                                                                <h5 className="text-16">Modal Heading</h5>
                                                                <button
                                                                    onClick={closeModal}
                                                                    className="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500"
                                                                >
                                                                    <i data-lucide="x" className="size-5" />
                                                                </button>
                                                            </div>
                                                            <div className="max-h-[calc(100vh - 180px)] p-4 overflow-y-auto">
                                                                <h5 className="mb-3 text-16">Modal Content</h5>
                                                                <p className="text-slate-500 dark:text-zink-200">
                                                                    They all have something to say beyond the words on the page. They can
                                                                    come across as casual or neutral, exotic or graphic.
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center justify-between p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                                                <h5 className="text-16">Modal Footer</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
};

export default Modal;
