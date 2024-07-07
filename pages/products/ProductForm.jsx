import React, { useCallback, useEffect, useState } from "react";
import Axios from "@/utils/axios";
import ToastMessage from "@/components/Toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { mapArrayToDropdown } from "@/helpers/common_Helper";
import { CATEGORY_END_POINT, PRODUCT_END_POINT, SELLER_END_POINT } from "@/constants";
import { useRouter } from "next/router";


const ProductForm = () => {
    const { http } = Axios();

    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);

    const router = useRouter();
    // const { row } = router.query;
    // const rowData = row ? JSON.parse(row) : null;

    const [editData, setEditData] = useState(false);
    const { data } = router.query;
    const parsedData = JSON.parse(data);
    console.log("Parsed Data", parsedData);

    const [loading, setLoading] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [categoryOption, setCategoryOption] = useState([]);
    const [sellerList, setSellerList] = useState([]);
    const [sellerOption, setSellerOption] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        per_unit_product_price: null,
        product_unit: null,
        stock_alert: null,
        category_id: null,
        seller_id: null,
        product_quantity: null,
        total_price: null,
        product_details: '',
        product_sku_code: '',
        date: '',
        status: "",
    });
    const [variants, setVariants] = useState([
        { size: '', color: '', quantity: '' }
    ]);


    useEffect(() => {
        if (data === null) {
            setEditData(false);
        } else {
            try {
                setEditData(true);
                setProduct({
                    id: parsedData?.id,
                    name: parsedData?.name,
                    per_unit_product_price: parsedData?.per_unit_product_price,
                    product_unit: parsedData?.product_unit,
                    stock_alert: parsedData?.stock_alert,
                    category_id: parsedData?.category_id,
                    seller_id: parsedData?.seller_id,
                    product_quantity: parsedData?.product_quantity,
                    total_price: parsedData?.total_price,
                    product_details: parsedData?.product_details,
                    product_sku_code: parsedData?.product_sku_code,
                    date: parsedData?.date,
                    status: parsedData?.status,
                });

                // Set variants state
                const formattedVariants = parsedData?.product_variants.map(variant => ({
                    id:variant.id,
                    size: variant.size,
                    color: variant.color,
                    quantity: variant.quantity
                }));
                setVariants(formattedVariants);
            } catch (error) {
                console.error("Error parsing JSON data:", error);
            }
        }
    }, [data]);



    /***Fetching ExpenseCategory Data Start */

    const fetchExpenseCategoryList = async () => {
        try {
            const response = await http.get(CATEGORY_END_POINT.list());
            setCategoryList(response.data?.data);
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


    /**Category dropdown */
    useEffect(() => {
        const EXPENCTGRYDROPDOWN = mapArrayToDropdown(
            categoryList,
            'name',
            'id'
        );

        const allCtgry = EXPENCTGRYDROPDOWN?.map((item) => ({
            id: item?.id,
            value: item?.category_name,
        }));
        setCategoryOption(allCtgry);
    }, [categoryList]);


    /**fetch Category dropdown list  End */



    /***Fetching Seller Data Start */

    const fetchSellerList = async () => {
        try {
            // const response = await http.get(SELLER_END_POINT.list(page,limit));
            const response = await http.get(SELLER_END_POINT.list());
            setSellerList(response.data?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching seller list:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSellerList();
        return () => {
        };
    }, []);

    /***Fetching Seller Data end */




    /**Seller dropdown */
    useEffect(() => {
        const SELLERDROPDOWN = mapArrayToDropdown(
            sellerList,
            'name',
            'id'
        );

        const allSeller = SELLERDROPDOWN?.map((item) => ({
            id: item?.id,
            value: item?.name,
        }));
        setSellerOption(allSeller);
    }, [sellerList]);


    /**fetch Seller dropdown list  End */

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));


    };





    const handleChangeVariants = (index, e) => {
        const { name, value } = e.target;
        const updatedVariants = [...variants];
        updatedVariants[index][name] = value;
        setVariants(updatedVariants);
    };

    const addVariant = () => {
        setVariants([...variants, { size: '', color: '', quantity: '' }]);
    };

    const removeVariant =async (index,variant) => {
        // const updatedVariants = [...variants];
        // updatedVariants.splice(index, 1);
        // setVariants(updatedVariants);
        console.log(variant)


        try {
            const response = await http.delete(PRODUCT_END_POINT.productDelele(variant?.id));
            console.log("response", response);
            
            if (response.data.status === true) {
                notify('success', response.data.message);
        //         const updatedVariants = [...variants];
        // updatedVariants.splice(index, 1);
        // setVariants(updatedVariants);
                // onClose();
            } else {
                notify('error', response.data.message);
            }
        } catch (error) {
            notify('error', error.message);
        }


    };



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (product?.id) {
    //         const response = await http.post(PRODUCT_END_POINT.update(product?.id), product, variants);
    //         if (response.data.status === true) {
    //             notify('success', response.data.message);

    //         } else {
    //             notify('error', response.data.message);
    //         }

    //     } else {
    //         const response = await http.post(PRODUCT_END_POINT.create(), product, variants);
    //         if (response.data.status === true) {
    //             notify('success', response.data.message);

    //         } else {
    //             notify('error', response.data.message);
    //         }
    //     }

    // }


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Combine product and variants into a single object with correct field names
        const payload = {
            category_id: product.category_id,
            seller_id: product.seller_id,
            name: product.name,
            per_unit_product_price: product.per_unit_product_price,
            product_unit: product.product_unit,
            product_quantity: product.product_quantity,
            total_price: product.total_price,
            stock_alert: product.stock_alert,
            product_details: product.product_details,
            status: product.status,
            date: product.date,
            product_sku_code: product.product_sku_code,
            variants: variants.map(variant => ({
                id: variant.id,
                size: variant.size,
                color: variant.color,
                quantity: variant.quantity
            }))
        };
    
        try {
            let response;
            if (product?.id) {
                response = await http.put(PRODUCT_END_POINT.update(product?.id), payload);
            } else {
                response = await http.post(PRODUCT_END_POINT.create(), payload);
            }
    
            if (response.data.status === true) {
                notify('success', response.data.message);
                router.push('/products')
            } else {
                notify('error', response.data.message);
            }
        } catch (error) {
            notify('error', 'An error occurred while submitting the data.');
            console.error("Error submitting data:", error);
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
                        <div className="gap-2 py-4 ">
                            <div className="col-span-12  2xl:col-span-12">
                                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="name"
                                                        defaultValue={product?.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>


                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        category<span className="text-red-500">*</span>
                                                    </label>



                                                    <select
                                                        name="category_id"
                                                        id="countries"
                                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                        onChange={handleChange}
                                                        value={product?.category_id}

                                                    >
                                                        {categoryOption && (
                                                            <>
                                                                <option value="" disabled>
                                                                    Choose a Category
                                                                </option>
                                                                {categoryOption.map((category) => (
                                                                    <option key={category.id} value={category.id}>
                                                                        {category.value}
                                                                    </option>
                                                                ))}
                                                            </>
                                                        )}
                                                    </select>
                                                </div>


                                            </div>

                                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Product Unit <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="product_unit"
                                                        defaultValue={product?.product_unit}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Product Quantity{" "}
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="product_quantity"
                                                        defaultValue={product?.product_quantity}
                                                        onChange={handleChange}
                                                    />
                                                </div>


                                            </div>

                                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">


                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Unit Price <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="per_unit_product_price"
                                                        defaultValue={product?.per_unit_product_price}
                                                        onChange={handleChange}
                                                    />
                                                </div>


                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Product Code <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="product_sku_code"
                                                        defaultValue={product?.product_sku_code}
                                                        onChange={handleChange}
                                                    />
                                                </div>


                                            </div>

                                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Stock Alert <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="stock_alert"
                                                        defaultValue={product?.stock_alert}
                                                        onChange={handleChange}
                                                    />
                                                </div>


                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Seller <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        name="seller_id"
                                                        id="countries"
                                                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                        onChange={handleChange}
                                                        value={product?.seller}

                                                    >
                                                        {sellerOption && (
                                                            <>
                                                                <option value="" disabled>
                                                                    Choose a Seller
                                                                </option>
                                                                {sellerOption.map((seller) => (
                                                                    <option key={seller.id} value={seller.id}>
                                                                        {seller.value}
                                                                    </option>
                                                                ))}
                                                            </>
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Date<span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="date"
                                                        defaultValue={product?.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Status <span className="text-red-500">*</span>
                                                    </label>
                                                    <select
                                                        name="status"
                                                        onChange={handleChange}
                                                        value={product?.status}
                                                        className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200">
                                                        <option selected="">Select category</option>
                                                        <option value="1">Active</option>
                                                        <option value="2">Inactive</option>
                                                    </select>
                                                </div>


                                            </div>

                                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">


                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="inputText"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Total Price <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="inputText"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        required=""
                                                        name="total_price"
                                                        defaultValue={product?.total_price}
                                                        onChange={handleChange}
                                                    />
                                                </div>




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
                                                    value={product?.details}
                                                    name="details"
                                                />

                                                <p
                                                    id="emailError"
                                                    className="mt-1 text-sm text-red-500"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*end card*/}
                                    <div className="card">
                                        <div className="card-body">


                                            <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
                                                <div className="2xl:col-span-3">
                                                    <h6 className="text-15">Variant category</h6>
                                                </div>
                                                {/*end col*/}
                                                <div className="2xl:col-span-3 2xl:col-start-10">
                                                    <div className="flex gap-3">

                                                        <button
                                                            type="button"
                                                            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                                            onClick={addVariant}
                                                        >
                                                            <FontAwesomeIcon icon={faPlus} /> Add Variant
                                                        </button>

                                                    </div>
                                                </div>
                                                {/*end col*/}
                                            </div>


                                            {variants.map((variant, index) => (
                                                <div key={index} className="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
                                                    <div className="mb-3">
                                                        <label htmlFor={`size${index}`} className="inline-block mb-2 text-base font-medium">
                                                            Size <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`size${index}`}
                                                            className="form-input"
                                                            required
                                                            name="size"
                                                            value={variant.size}
                                                            onChange={e => handleChangeVariants(index, e)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor={`color${index}`} className="inline-block mb-2 text-base font-medium">
                                                            Color <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id={`color${index}`}
                                                            className="form-input"
                                                            required
                                                            name="color"
                                                            value={variant.color}
                                                            onChange={e => handleChangeVariants(index, e)}
                                                        />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor={`quantity${index}`} className="inline-block mb-2 text-base font-medium">
                                                            Quantity <span className="text-red-500">*</span>
                                                        </label>
                                                        <div className="flex items-center">
                                                            <input
                                                                type="number"
                                                                id={`quantity${index}`}
                                                                className="form-input mr-2"
                                                                required
                                                                name="quantity"
                                                                value={variant.quantity}
                                                                onChange={e => handleChangeVariants(index, e)}
                                                            />
                                                            {index !== 0 && (
                                                                <button onClick={() => removeVariant(index,variant)} className="flex items-center text-red-500">
                                                                    <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}



                                        </div>
                                        <div className="flex justify-end gap-2 mt-5 p-4 mt-auto border-t border-slate-200 dark:border-zink-500">
                                            <button
                                                type="button"
                                                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductForm;
