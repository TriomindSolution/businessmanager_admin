
import ToastMessage from "@/components/Toast";
import { ORDER_END_POINT } from "@/constants/api_endpoints/orderEndPoints";
import { post, put } from "@/helpers/api_helper";
import { mapArrayToDropdown } from "@/helpers/common_Helper";
import Axios from "@/utils/axios";
import React, { useCallback, useEffect, useState } from "react";
import {PRODUCT_END_POINT} from "@/constants";


const AddInvoice = ({ isOpen, onClose, setEditData, isParentRender }) => {

    const { http } = Axios();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);
    const [itemList, setItemList] = useState([]);
    const [items,setItems]=useState([]);
    const [itemOption, setItemOption] = useState([]);
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


 /***Fetching Item Data Start */

 const fetchItemList = async () => {
    try {
        const response = await http.get(PRODUCT_END_POINT.list());

       
        setItemList(response.data?.data);
        setLoading(false);
      
    } catch (error) {
        console.error('Error fetching item list:', error);
        setLoading(false);
    }
};

useEffect(() => {
    fetchItemList();
    return () => {
    };
}, []);
console.log(itemList.data);
/***Fetching ExpenseCategory Data end */






//  /**Items dropdown */
//  useEffect(() => {
//     const ITEMDROPDOWN = mapArrayToDropdown(
//         itemList,
//         'name',
//         'id'
//     );

//     const allItem = ITEMDROPDOWN?.map((item) => ({
//         id: item?.id,
//         value: item?.name,
//     }));
//     setItemOption(allItem);
// }, [itemList]);


// /**fetch Items dropdown list  End */

const ItemList = ({ itemList }) => {
    const [items, setItems] = useState([{ id: '', quantity: 0, price: '', discount: '', text: '' }]);
};
    const handleAddItem = () => {
      setItems([...items, { id: '', quantity: 0, price: '', discount: '', text: '' }]);
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
                                                        Delivery Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="invoiceNo"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Invoice Date"
                                                        data-provider="flatpickr"
                                                        data-date-format="d M, Y"
                                                       
                                                        required=""
                                                    />
                                                </div>
                                                {/*end col*/}
                                                {/* <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="invoiceDue"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Invoice Due
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="invoiceDue"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="Invoice Due"
                                                        data-provider="flatpickr"
                                                        data-date-format="d M, Y"
                                                        
                                                        required=""
                                                    />
                                                </div> */}
                                                {/*end col*/}
                                                {/* <div className="xl:col-span-3">
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
                                                </div> */}
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="name"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="emailInvoiceInput"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="tailwick@themesdesign.com"
                                                        required=""
                                                        name="name"
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="phone"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                       phone
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="websiteInput"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="phone"
                                                        required=""
                                                        name="phone"
                                                    />
                                                </div>
                                                {/*end col*/}
                                                <div className="xl:col-span-3">
                                                    <label
                                                        htmlFor="address"
                                                        className="inline-block mb-2 text-base font-medium"
                                                    >
                                                        Address
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="contactInput"
                                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                                        placeholder="address"
                                                        required=""
                                                        name="address"
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
                                                            <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500 w-44">
                                                                Total
                                                            </th>
                                                        </tr>
                                                    </thead>

                                                   <tbody className="before:block before:h-3" id="itemBody">
          {items.map((item, index) => (
            <tr className="item" key={index}>
              <td className="border border-slate-200 dark:border-zink-500">
                <select
                  name="name"
                  id={`itemName-${index}`}
                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  value={item.id}
                  onChange={(e) => handleChange(index, 'id', e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Choose an Item
                  </option>
                  {Array.isArray(itemList) && itemList.map((item) => (
                    <option key={item.data.id} value={item.data.id}>
                      {item.data.name}
                    </option>
                  ))}
                </select>
              </td>
              <td className="w-40 border border-slate-200 dark:border-zink-500">
                <div className="flex justify-center text-center input-step">
                  <button
                    type="button"
                    className="btn-minus"
                    onClick={() => handleDecrementQuantity(index)}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="item-quantity"
                    value={item.quantity}
                    min={0}
                    max={100}
                    readOnly
                  />
                  <button
                    type="button"
                    className="btn-plus"
                    onClick={() => handleIncrementQuantity(index)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="w-40 border border-slate-200 dark:border-zink-500">
                <input
                  type="number"
                  className="item-price"
                  placeholder="$00.00"
                  value={item.price}
                  onChange={(e) => handleChange(index, 'price', e.target.value)}
                  required
                />
              </td>
              <td className="w-40 border border-slate-200 dark:border-zink-500">
                <input
                  type="text"
                  className="item-discount"
                  placeholder="0%"
                  value={item.discount}
                  onChange={(e) => handleChange(index, 'discount', e.target.value)}
                  required
                />
              </td>
              <td className="w-40 border border-slate-200 dark:border-zink-500">
                <input
                  type="text"
                  className="item-text"
                  placeholder="Item details"
                  value={item.text}
                  onChange={(e) => handleChange(index, 'text', e.target.value)}
                  required
                />
              </td>
              <td className="border border-slate-200 dark:border-zink-500" rowSpan={2}>
                <div className="mb-1">
                  <input
                    type="text"
                    className="item-line-price"
                    placeholder="$00.00"
                    value={(item.quantity * item.price).toFixed(2)}
                    readOnly
                  />
                </div>
                <input
                  type="text"
                  className="cart-discount"
                  placeholder="-$00.00"
                  value={((item.quantity * item.price * item.discount) / 100).toFixed(2)}
                  readOnly
                />
              </td>
              <td className="border border-slate-200 dark:border-zink-500 row-span-2 px-6 py-1.5">
                <button
                  type="button"
                  className="product-removal"
                  onClick={() => handleRemoveItem(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6}>
              <button
                type="button"
                id="addItemButton"
                className="bg-white border-dashed text-custom-500 btn border-custom-500"
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </td>
          </tr>
        </tfoot>

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