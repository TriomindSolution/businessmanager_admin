import React, { useEffect, useState,useCallback } from "react";
import Link from "next/link";
import { get } from "@/helpers/api_helper";

const Seller = () => {

    const fetchSellerData = async () => {
        try {
            const SellerData = await get(NEXT_PUBLIC_API_URL.delete(data?._id));
            if (deleteSubject.status == 'SUCCESS') {
                notify('success', SellerData.message);
            }
        } catch (error) {
            notify('error', SellerData.errorMessage);
            setLoading(false);
        }

    }
  return (
    <div className="flex flex-col gap-10">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center border-b border-stroke dark:border-strokedark">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        All Sellers
                    </h4>
                    <button
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-5 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                       
                    >
                        Add
                       
                    </button>
                </div>



               


                
            </div>
        </div>
  )
}

export default Seller