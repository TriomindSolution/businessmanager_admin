
const ViewSeller = ({ isOpen, onClose, data, isParentRender }) => {

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto ">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="fixed inset-0 bg-black opacity-25"></div>
                        <div className="relative bg-white p-8 rounded-lg  dark:border-strokedark dark:bg-boxdark w-full max-w-md max-h-full">
                            {/* Modal content */}

                            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700  dark:bg-black dark:text-white">
                            <div class="relative p-4 text-center bg-white ">
                                <button onClick={onClose} type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>



                                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 border-0 border-b-2">
                                    Seller Details
                                    </h5>

                                    <div class="grid gap-x-8 gap-y-4 lg:grid-cols-2 sm:grid-cols-1">
                                        <div> <span className='font-bold'>Name:</span>{data?.name}</div>
                                        <div> <span className='font-bold'>Phone: </span>{data?.phone}</div>
                                        <div> <span className='font-bold'>Email:</span>{data?.email}</div>
                                        <div> <span className='font-bold'>Address: </span>{data?.address}</div>
                                        <div> <span className='font-bold'>Description: </span>{data?.description}</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewSeller