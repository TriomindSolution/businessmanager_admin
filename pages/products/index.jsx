import React, { useEffect, useState, useCallback } from "react";
import Axios from "@/utils/axios";
import DeleteIcon from "@/components/elements/DeleteIcon";
import EditIcon from "@/components/elements/EditIcon";
import ViewIcon from "@/components/elements/ViewIcon";
import DataTable from "react-data-table-component";
import { PRODUCT_END_POINT } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";

const Products = () => {
    /*** Storing data start */
    const { http } = Axios();
    const router = useRouter();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(10);
    const [isViewModalOpen, setViewIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteIsModalOpen] = useState(false);

    /*** Storing data end */
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



    /**Render Function Start */
    const reFetchHandler = (isRender) => {
        if (isRender) fetchProductList();
    };
    /**Render Function end */


    /***Fetching table Data Start */

    const fetchProductList = async () => {
        try {
            const response = await http.get(PRODUCT_END_POINT.list());
            console.log(response.data?.data?.data)
            setProductList(response.data?.data?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching seller list:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductList();
        return () => {
        };
    }, []);

    /***Fetching table Data end */



    const columns = [
        {
            name: "SL",
            selector: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Created By",
            selector: (row) => row.created_by,
            sortable: true,
        }, {
            name: "Action",
            selector: (row) => actionButton(row),
        }


    ];

    const handleEdit = (row) => {
        console.log("values", row); 
        const queryParams = new URLSearchParams({ row: JSON.stringify(row) }).toString();
        router.push(`/products/ProductForm?${queryParams}`);
    };
    
    
    const actionButton = (row) => {
        return (
            <>
                <ul className="action flex list-none p-0">

                    <li className="m-2" onClick={() => handleEdit(row)} >
                        <EditIcon />
                    </li>

                    <li  className="m-2" >
                        <a>
                            <ViewIcon />
                        </a>
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
                                            <h6 className="text-15">Expense category</h6>
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
                                                    <Link href="/products/ProductForm">
                                                        Add
                                                    </Link>
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
                                                data={productList}
                                                pagination
                                                highlightOnHover
                                                subHeader
                                                subHeaderComponent={
                                                    <input
                                                        type="text"
                                                        placeholder="search..."
                                                        className="w-25 form-control"
                                                    // value={search}
                                                    // onChange={(e) => setSearch(e.target.value)}
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
            {/* <ExpenseCategoryForm isOpen={isModalOpen} onClose={closeModal} setEditData={editData} isParentRender={reFetchHandler} />
        <DeleteExpenseCategory isOpen={isDeleteModalOpen} onClose={closeDeleteModal} data={editData} isParentRender={reFetchHandler} /> */}
        </>
    )
}

export default Products