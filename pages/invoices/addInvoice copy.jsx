
import ToastMessage from "@/components/Toast";
import { ORDER_END_POINT } from "@/constants/api_endpoints/orderEndPoints";
import { post, put } from "@/helpers/api_helper";
import { mapArrayToDropdown } from "@/helpers/common_Helper";
import Axios from "@/utils/axios";
import React, { useCallback, useEffect, useState } from "react";



const AddInvoice = ({ isOpen, onClose, setEditData, isParentRender }) => {

    const { http } = Axios();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);

    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState({
        invoice_no: "",
        delivery_date: "",
        notes:"",
        payment:"",
        payment_method:"",
        payment_from:"",
        shipping_charge:"",
        total_amount:"",
        name:"",
        phone:"",
        address_1:"",
        product_id:"",
        quantity:"",
        price:"",
        discount:"",
        tax:"",
        product_total:"",
        size:"",
        color:""




        
        



    });


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
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#!">
                                            <h6 className="mb-4 text-gray-800 underline text-16 dark:text-zink-50">
                                                Generale Info:
                                            </h6>
                                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="invoiceID"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Invoice No.
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="invoiceID"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Enter invoice no."
                                                        defaultValue="#TW15090251"
                                                        disabled=""
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="invoiceNo"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Invoice Date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="invoiceNo"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Invoice Date"
                                                        data-provider="flatpickr"
                                                        data-date-format="d M, Y"
                                                        readOnly="readonly"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="invoiceDue"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Invoice Due
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="invoiceDue"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Invoice Due"
                                                        data-provider="flatpickr"
                                                        data-date-format="d M, Y"
                                                        readOnly="readonly"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="legalRegistrationNo"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Legal Registration No.
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="legalRegistrationNo"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Legal Registration No"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="emailInvoiceInput"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="emailInvoiceInput"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="tailwick@themesdesign.com"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="websiteInput"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Website
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="websiteInput"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="www.themesdesign.in"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="contactInput"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Contact US
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="contactInput"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="(241) 1234 567 8900"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="paymentStatus"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Payment Status
                                                    </label>
                                                    <select
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        data-choices=""
                                                        data-choices-search-false=""
                                                        name="paymentStatus"
                                                        id="paymentStatus"
                                                    >
                                                        <option selected="">Select Status</option>
                                                        <option value="Paid">Paid</option>
                                                        <option value="Unpaid">Unpaid</option>
                                                        <option value="Cancel">Cancel</option>
                                                        <option value="Refund">Refund</option>
                                                    </select>
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end grid*/}
                                         
                                            {/*end grid*/}
                                         
                                          
                                            {/*end grid*/}
                                            <h6 className="my-5 underline text-16">Products Info:</h6>
                                            <div className="overflow-x-auto">
                                                <table className="w-full whitespace-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">
                                                                Item Name
                                                            </th>
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">
                                                                Quantity
                                                            </th>
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">
                                                                Price
                                                            </th>
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">
                                                                Discount
                                                            </th>
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">
                                                                TAX
                                                            </th>
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500 w-44">
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="before:block before:h-3 item-list">
                                                        <tr className="item">
                                                            <td className="border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Item Name"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <div className="flex justify-center text-center input-step">
                                                                    <button
                                                                        type="button"
                                                                        className="border size-9 leading-[15px] btn-minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                                    >
                                                                        <i data-lucide="minus" className="inline-block size-4" />
                                                                    </button>
                                                                    <input
                                                                        type="number"
                                                                        className="w-12 text-center ltr:pl-2 rtl:pr-2 h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500 item-quantity"
                                                                        defaultValue={0}
                                                                        min={0}
                                                                        max={100}
                                                                        readOnly=""
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l size-9 border-slate-200 btn-plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                                    >
                                                                        <i data-lucide="plus" className="inline-block size-4" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="number"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-price"
                                                                    placeholder="$00.00"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-discount"
                                                                    placeholder="0%"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-text"
                                                                    placeholder="0%"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td
                                                                className="border border-slate-200 dark:border-zink-500"
                                                                rowSpan={2}
                                                            >
                                                                <div className="mb-1">
                                                                    <input
                                                                        type="text"
                                                                        id="ItemTotal"
                                                                        className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-line-price"
                                                                        placeholder="$00.00"
                                                                        readOnly=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    id="itemDiscountsInput"
                                                                    className="px-3.5 pb-2.5 pt-0 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount"
                                                                    placeholder="-$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemdescription1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Enter Description (Optional)"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="border border-slate-200 px-3.5 py-1.5 text-center dark:border-zink-500">
                                                                <button
                                                                    type="button"
                                                                    className="px-2 py-1.5 text-xs text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20 product-removal"
                                                                >
                                                                    <i
                                                                        data-lucide="trash-2"
                                                                        className="inline-block mr-1 align-middle size-3"
                                                                    />{" "}
                                                                    <span className="align-middle">Delete</span>
                                                                </button>
                                                            </td>
                                                            <td
                                                                colSpan={3}
                                                                className="border border-slate-200 dark:border-zink-500"
                                                            />
                                                        </tr>
                                                    </tbody>
                                                    <tbody className="before:block before:h-3 item-list">
                                                        <tr className="item">
                                                            <td className="border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Item Name"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <div className="flex justify-center text-center input-step">
                                                                    <button
                                                                        type="button"
                                                                        className="border size-9 leading-[15px] btn-minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                                    >
                                                                        <i data-lucide="minus" className="inline-block size-4" />
                                                                    </button>
                                                                    <input
                                                                        type="number"
                                                                        className="w-12 text-center ltr:pl-2 rtl:pr-2 h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500 item-quantity"
                                                                        defaultValue={0}
                                                                        min={0}
                                                                        max={100}
                                                                        readOnly=""
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l size-9 border-slate-200 btn-plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                                                                    >
                                                                        <i data-lucide="plus" className="inline-block size-4" />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="number"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-price"
                                                                    placeholder="$00.00"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-discount"
                                                                    placeholder="0%"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="w-40 border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemName1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-text"
                                                                    placeholder="0%"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td
                                                                className="border border-slate-200 dark:border-zink-500"
                                                                rowSpan={2}
                                                            >
                                                                <div className="mb-1">
                                                                    <input
                                                                        type="text"
                                                                        id="ItemTotal"
                                                                        className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-line-price"
                                                                        placeholder="$00.00"
                                                                        readOnly=""
                                                                    />
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    id="itemDiscountsInput"
                                                                    className="px-3.5 pb-2.5 pt-0 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount"
                                                                    placeholder="-$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="border border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemdescription1"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Enter Description (Optional)"
                                                                    required=""
                                                                />
                                                            </td>
                                                            <td className="border border-slate-200 px-3.5 py-1.5 text-center dark:border-zink-500">
                                                                <button
                                                                    type="button"
                                                                    className="px-2 py-1.5 text-xs text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20 product-removal"
                                                                >
                                                                    <i
                                                                        data-lucide="trash-2"
                                                                        className="inline-block mr-1 align-middle size-3"
                                                                    />{" "}
                                                                    <span className="align-middle">Delete</span>
                                                                </button>
                                                            </td>
                                                            <td
                                                                colSpan={3}
                                                                className="border border-slate-200 dark:border-zink-500"
                                                            />
                                                        </tr>
                                                    </tbody>
                                                    <tbody className="before:block before:h-4" id="invoiceTable">
                                                        <tr>
                                                            <td colSpan={6}>
                                                                <a href="javascript:void(0)" id="addBtn">
                                                                    <button
                                                                        type="button"
                                                                        className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20"
                                                                    >
                                                                        <i
                                                                            data-lucide="plus"
                                                                            className="inline-block mr-1 align-middle size-3"
                                                                        />{" "}
                                                                        <span className="align-middle">Add Item</span>
                                                                    </button>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                    <tbody className="before:block before:h-3" id="totalAmount">
                                                        <tr>
                                                            <td colSpan={4} />
                                                            <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                                                Sub Total
                                                            </td>
                                                            <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="subTotale"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-subtotal"
                                                                    placeholder="$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4} />
                                                            <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                                                Estimated Tax (18%)
                                                            </td>
                                                            <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="estimatedTax"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-tax"
                                                                    placeholder="$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4} />
                                                            <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                                                Item Discounts
                                                            </td>
                                                            <td className="font-medium border-b border-slate-200 dark:border-zink-500 text-slate-500">
                                                                <input
                                                                    type="text"
                                                                    id="itemDiscounts"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount"
                                                                    placeholder="-$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4} />
                                                            <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                                                Shipping Charge
                                                            </td>
                                                            <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="shippingCharge"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-shipping"
                                                                    placeholder="$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td colSpan={4} />
                                                            <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                                                Total Amount
                                                            </td>
                                                            <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                                                <input
                                                                    type="text"
                                                                    id="totalAmount"
                                                                    className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-total"
                                                                    placeholder="$00.00"
                                                                    readOnly=""
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <h6 className="my-5 underline text-16">Payments Details:</h6>
                                            <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="paymentMethod"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Full Name
                                                    </label>
                                                    <select
                                                        className="form-input border-slate-300 focus:outline-none focus:border-custom-500"
                                                        data-choices=""
                                                        data-choices-search-false=""
                                                        name="paymentMethod"
                                                        id="paymentMethod"
                                                    >
                                                        <option value="">Select Method</option>
                                                        <option value="Credit Card">Credit Card</option>
                                                        <option value="Paypal">Paypal</option>
                                                        <option value="Paypal">Paypal</option>
                                                        <option value="American Express">American Express</option>
                                                    </select>
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="cardHolderName"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Card Holder Name
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="cardHolderName"
                                                        inputMode="numeric"
                                                        pattern="[0-9\s]{13,19}"
                                                        autoComplete="cc-number"
                                                        maxLength={19}
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Full Name"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="cardNumber"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Card Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="cardNumber"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="xxxx xxxx xxxx xxxx"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="totalPayment"
                                                        className="inline-block mb-2 text-base font-medium "
                                                    >
                                                        Total Payment
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="totalPayment"
                                                        className=" tform-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200otalPaymentinput"
                                                        placeholder="$00.00"
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-12">
                                                    <label
                                                        htmlFor="taxBillingInput"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Notes
                                                    </label>
                                                    <textarea
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Enter notes pertaining to the customer or payment"
                                                        id="taxBillingInput"
                                                        rows={3}
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                {/*end col*/}
                                            </div>
                                            {/*end grid*/}
                                            <div className="flex justify-end gap-2 mt-5">
                                                <button
                                                    type="button"
                                                    className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"
                                                >
                                                    <i data-lucide="refresh-ccw" className="inline-block mr-1 size-4" />{" "}
                                                    <span className="align-middle">Reset</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                                >
                                                    <i data-lucide="save" className="inline-block mr-1 size-4" />{" "}
                                                    <span className="align-middle">Save</span>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10"
                                                >
                                                    <i data-lucide="download" className="inline-block mr-1 size-4" />{" "}
                                                    <span className="align-middle">Download</span>
                                                </button>
                                            </div>
                                        </form>
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

export default AddInvoice