import ToastMessage from "@/components/Toast";
import { EXPENSE_END_POINT, EXPENSECATEGORY_END_POINT } from "@/constants";
import { post, put } from "@/helpers/api_helper";
import { mapArrayToDropdown } from "@/helpers/common_Helper";
import Axios from "@/utils/axios";
import React, { useCallback, useEffect, useState } from "react";

const ExpenseForm = ({ isOpen, onClose, setEditData, isParentRender }) => {

    const { http } = Axios();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);
    const [loading, setLoading] = useState(false);
    const [expenseCategoryList, setExpenseCategoryList] = useState([]);
    const [expenseCtgryOption, setExpenseCtgryOption] = useState([]);
    console.log("expenseCategoryList", expenseCategoryList);
    console.log("expenseCtgryOption", expenseCtgryOption);
    const [expense, setExpense] = useState({
        expensecategory_id: "",
        date: "",
        details: "",
        amount: "",
    });
    console.log("expense", expense)


    /***Fetching ExpenseCategory Data Start */

    const fetchExpenseCategoryList = async () => {
        try {
            const response = await http.get(EXPENSECATEGORY_END_POINT.list());
            setExpenseCategoryList(response.data?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching seller list:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenseCategoryList();
        return () => {
        };
    }, []);

    /***Fetching ExpenseCategory Data end */


    /**ExpenseCategory dropdown */
    useEffect(() => {
        const EXPENCTGRYDROPDOWN = mapArrayToDropdown(
            expenseCategoryList,
            'name',
            'id'
        );

        const allCtgry = EXPENCTGRYDROPDOWN?.map((item) => ({
            id: item?.id,
            value: item?.name,
        }));
        setExpenseCtgryOption(allCtgry);
    }, [expenseCategoryList]);


    /**fetch ExpenseCategory dropdown list  End */


    useEffect(() => {
        if (setEditData === null) {
            setExpense({ amount: "", date: "", details: "", expensecategory_id: "", status: null, });
        } else {
            setExpense({
                id: setEditData.id || "",
                amount: setEditData.amount || "",
                date: setEditData.date || "",
                details: setEditData.details || "",
                expensecategory_id: setEditData.expensecategory_id || "",
                status: setEditData.status || "",
            });
        }
    }, [setEditData?.id, setEditData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (setEditData?.id) {
                const response = await http.put(EXPENSE_END_POINT.update(setEditData.id), expense);
                if (response.data.status === true) {
                    notify('success', response.data.message);
                    if (isParentRender) {
                        isParentRender(true);
                    }
                    setExpense({});
                    onClose();
                } else {
                    notify('error', response.data.message);
                }
            } else {
                const response = await http.post(EXPENSE_END_POINT.create(), expense);
                if (response.data.status === true) {
                    notify('success', response.data.message);
                    if (isParentRender) {
                        isParentRender(true);
                    }
                    setExpense({});
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


    const formatDate = (dateString) => {
        console.log("Date string:", dateString);
        const parts = dateString.split('/');
        console.log("Split parts:", parts);
        if (parts.length !== 3) {
            console.error("Unexpected date format:", dateString);
            return '';
        }
        const [day, month, year] = parts;
        // Ensure month and day are in two digits format
        const formattedMonth = month.padStart(2, '0');
        const formattedDay = day.padStart(2, '0');
        return `${year}-${formattedMonth}-${formattedDay}`;
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
                                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                                    // onClick={() => {
                                    //     onClose();
                                    //     setExpense({});
                                    // }}
                                    >
                                        <div className="fixed flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white shadow-md rounded-md dark:bg-zink-600">
                                            <div className="w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col">
                                                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
                                                    <h5 className="text-16">Expense</h5>
                                                    <button
                                                        onClick={() => {
                                                            onClose();
                                                            setExpense({});
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
                                                                <select
                                                                    name="expensecategory_id"
                                                                    id="countries"
                                                                    className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                                    onChange={handleChange}
                                                                    value={expense?.expensecategory_id}

                                                                >
                                                                    {expenseCtgryOption && (
                                                                        <>
                                                                            <option value="" disabled>
                                                                                Choose a Category
                                                                            </option>
                                                                            {expenseCtgryOption.map((expenseCtgry) => (
                                                                                <option key={expenseCtgry.id} value={expenseCtgry.id}>
                                                                                    {expenseCtgry.value}
                                                                                </option>
                                                                            ))}
                                                                        </>
                                                                    )}
                                                                </select>
                                                                <p id="firstNameError" className="mt-1 text-sm text-red-500" />
                                                            </div>
                                                            <div className="mb-4">
                                                                <label
                                                                    htmlFor="lastNameInput"
                                                                    className="inline-block mb-2 text-base font-medium"
                                                                >
                                                                    Amount <span className="text-red-500">*</span>
                                                                </label>
                                                                <input
                                                                    name="amount"
                                                                    type="text"
                                                                    id="lastNameInput"
                                                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="Enter lastname"
                                                                    value={expense?.amount}
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
                                                                    Date <span className="text-red-500">*</span>
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    name="date"
                                                                    id="emailInput"
                                                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                                    placeholder="example@gmail.com"
                                                                    onChange={handleChange}
                                                                    value={expense.date}
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
                                                                    value={expense?.status}
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
                                                                defaultValue={""}
                                                                onChange={handleChange}
                                                                value={expense?.details}
                                                                name="details"
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
                                                            setExpense({});
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
    );
};

export default ExpenseForm;
