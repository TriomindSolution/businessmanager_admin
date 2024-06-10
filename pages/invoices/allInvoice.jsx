import DeleteIcon from "@/components/elements/DeleteIcon";
import EditIcon from "@/components/elements/EditIcon";
import ViewIcon from "@/components/elements/ViewIcon";
import { ORDER_END_POINT } from "@/constants/api_endpoints/orderEndPoints";
import Axios from "@/utils/axios";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import DataTable from "react-data-table-component";

const AllInvoice = () => {


    /*** Storing data start */
    const { http } = Axios();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);
    const [orderList, setOrderList] = useState([]);
    console.log("orderList", orderList)
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [editData, setEditData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setViewIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteIsModalOpen] = useState(false);


    /*** Storing data end */


        /**Add function  start */
        const handleAdd = () => {
            setIsModalOpen(true);
            setEditData(null);
        };
        /**Add function end */
    
    
        /** edit function start */
        const handleEdit = (data) => {
            console.log(data)
            setEditData(data);
            setIsModalOpen(true);
        };
        /** edit function  end */
    
        const closeModal = () => {
            setIsModalOpen(false);
        };
    
    
    
        /** Delete function start */
        const handleDelete = (data) => {
            setEditData(data);
            setDeleteIsModalOpen(true);
        };
        const closeDeleteModal = () => {
            setDeleteIsModalOpen(false);
        };
        /** Delete function end */
    
    
        /** view function start */
        const handleView = (data) => {
            setEditData(data);
            setViewIsModalOpen(true);
        };
        const closeViewModal = () => {
            setViewIsModalOpen(false);
        };
        /** view function end */

            /**Render Function Start */
    const reFetchHandler = (isRender) => {
        if (isRender) fetchOrderList();
    };
    /**Render Function end */

    /***Fetching table Data Start */

    const fetchOrderList = async () => {
        try {
            const response = await http.get(ORDER_END_POINT.list());
            setOrderList(response.data?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching seller list:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrderList();
        return () => {
        };
    }, []);

    /***Fetching table Data end */


    const columns = [
        {
            name: "invoice",
            selector: (row) => row.invoice,
            sortable: true,
        },
        {
            name: "invoice_date",
            selector: (row) => row.invoice_date,
            sortable: true,
        },
        {
            name: "shipping_charge",
            selector: (row) => row.shipping_charge,
            sortable: true,
        },
        {
            name: "total_amount",
            selector: (row) => row.total_amount,
            sortable: true,
        },
        {
            name: "order_code",
            selector: (row) => row.order_code,
            sortable: true,
        }, {
            name: "Action",
            selector: (row) => actionButton(row),
        },


    ];


    const actionButton = (row) => {
        return (
            <>
                <ul className="action flex list-none p-0">
                   
                    <li className="m-2"  onClick={() => handleEdit(row)}>
                        <EditIcon />
                    </li>
                    <li  className="m-2">
                        <ViewIcon />
                    </li>
                    <li className="m-2" onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                    </li>
                </ul>
            </>
        );
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
                                        <h6 className="text-15">Order</h6>
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
                                                onClick={handleAdd}
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
                                        
                                  

                                        <DataTable
                                            columns={columns}
                                            data={orderList}
                                            pagination
                                            highlightOnHover
                                            subHeader
                                            subHeaderComponent={
                                                <input
                                                    type="text"
                                                    placeholder="search..."
                                                    className="w-80 border-2 border-black-600 rounded-md px-3 py-1"
                                                
                                                />
                                            }
                                            striped
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        </>
    )
}

export default AllInvoice