import { SELLER_END_POINT } from '@/constants';
import Axios from '@/utils/axios';
import React, { useCallback, useEffect, useState } from "react";
import ToastMessage from "@/components/Toast";

const SellerForm = ({ isOpen, onClose, setEditData, isParentRender }) => {
    const { http } = Axios();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);
    const [loading, setLoading] = useState(false);
    const [seller, setSeller] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        description: "",
        status: "",
    });


    useEffect(() => {
        if (setEditData === null) {
            setSeller({ name: "", address: "", phone: "", email: "", description: "", status: null, });
        } else {
            setSeller({
                id: setEditData.id || "",
                name: setEditData.name || "",
                address: setEditData.address || "",
                phone: setEditData.phone || "",
                email: setEditData.email || "",
                description: setEditData.description || "",
                status: setEditData.status || "",
            });
        }
    }, [setEditData?._id, setEditData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSeller((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {


            if (setEditData?.id) {
                const response = await http.put(SELLER_END_POINT.update(setEditData.id), seller);
                if (response.data.status === true) {
                    notify('success', response.data.message);
                    if (isParentRender) {
                        isParentRender(true);
                    }
                    setSeller({});
                    onClose();
                } else {
                    notify('error', response.data.message);
                }
            } else {
                const response = await http.post(SELLER_END_POINT.create(), seller);
                if (response.data.status === true) {
                    notify('success', response.data.message);
                    if (isParentRender) {
                        isParentRender(true);
                    }
                    setSeller({});
                    onClose();
                } else {
                    notify('error', response.data.message);
                }
            }
        } catch (error) {
            console.error(error);
            notify('error', error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div
                style={{ marginLeft: "16.25rem" }}
                className="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm"
            >

                <div className="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
                    <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                        <div className="gap-2 ">
                            <div className="col-span-12 card 2xl:col-span-12">

                                {isOpen && (
                                    <div
                                        id="largeModal"
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-bg"

                                    >
                                        <div className="fixed flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-md dark:bg-zink-600">
                                            <div className="w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col">
                                                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                                                    <h5 className="text-16">Seller</h5>
                                                    <button
                                                        onClick={() => {
                                                            onClose();
                                                        }}
                                                        className="transition-all duration-200 ease-linear text-slate-500 hover:text-red-500 dark:text-zink-200 dark:hover:text-red-500"
                                                    >
                                                        <i data-lucide="x" className="size-5" />
                                                    </button>
                                                </div>
                                                <div className="mx-auto md:max-w-lg">
                                                    <form action="#!" id="signUp">
                                                        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="firstNameInput"
                                                                    className="inline-block mb-2 text-base font-medium"
                                                                >
                                                                    Name <span className="text-red-500">*</span>
                                                                </label>
                                                                <input
                                                                    name="name"
                                                                    type="text"
                                                                    id="lastNameInput"
                                                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Type Seller name"
                                                                    defaultValue={seller?.name}
                                                                    onChange={handleChange}
                                                                />
                                                                <p id="firstNameError" className="mt-1 text-sm text-red-500" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="lastNameInput"
                                                                    className="inline-block mb-2 text-base font-medium"
                                                                >
                                                                    Phone <span className="text-red-500">*</span>
                                                                </label>
                                                                <input
                                                                    name="phone"
                                                                    type="text"
                                                                    id="lastNameInput"
                                                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Type Seller phone"
                                                                    defaultValue={seller?.phone}
                                                                    onChange={handleChange}
                                                                />
                                                                <p id="lastNameError" className="mt-1 text-sm text-red-500" />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="firstNameInput"
                                                                    className="inline-block mb-2 text-base font-medium"
                                                                >
                                                                    email <span className="text-red-500">*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    id="emailInput"
                                                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Type Seller email"
                                                                    defaultValue={seller?.email}
                                                                    onChange={handleChange}
                                                                />
                                                                <p id="firstNameError" className="mt-1 text-sm text-red-500" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="lastNameInput"
                                                                    className="inline-block mb-2 text-base font-medium"
                                                                >
                                                                    Status <span className="text-red-500">*</span>
                                                                </label>


                                                                <select
                                                                    name="status"
                                                                    onChange={handleChange}
                                                                    value={seller?.status}
                                                                    className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200">
                                                                    <option selected="">Select category</option>
                                                                    <option value="1">Active</option>
                                                                    <option value="2">Inactive</option>
                                                                </select>
                                                                <p id="lastNameError" className="mt-1 text-sm text-red-500" />
                                                            </div>
                                                        </div>
                                                        {/*end grid*/}
                                                        <div className="mb-4">
                                                            <label
                                                                htmlFor="emailInput"
                                                                className="inline-block mb-2 text-base font-medium"
                                                            >
                                                                Details <span className="text-red-500">*</span>
                                                            </label>
                                                            <textarea
                                                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                id="textArea"
                                                                rows={3}
                                                                onChange={handleChange}
                                                                defaultValue={seller?.address}
                                                                name="address"
                                                            />

                                                            <p id="emailError" className="mt-1 text-sm text-red-500" />
                                                        </div>

                                                        <div className="mb-4">
                                                            <label
                                                                htmlFor="emailInput"
                                                                className="inline-block mb-2 text-base font-medium"
                                                            >
                                                                Details <span className="text-red-500">*</span>
                                                            </label>
                                                            <textarea
                                                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                id="textArea"
                                                                rows={3}
                                                                defaultValue={""}
                                                                onChange={handleChange}
                                                                value={seller?.description}
                                                                name="description"
                                                            />

                                                            <p id="emailError" className="mt-1 text-sm text-red-500" />
                                                        </div>



                                                    </form>
                                                </div>

                                                <div className="flex justify-end gap-2 mt-5 p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                                    <button
                                                        type="button"
                                                        className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                                                        onClick={() => {
                                                            onClose();
                                                        }}
                                                    >
                                                        <i data-lucide="x" className="inline-block size-4" />{" "}
                                                        <span className="align-middle">Cancel</span>
                                                    </button>
                                                    <button
                                                        onClick={handleSubmit}
                                                        type="submit"
                                                        className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                                    >
                                                        Submit
                                                    </button>

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
        </>
    )
}

export default SellerForm