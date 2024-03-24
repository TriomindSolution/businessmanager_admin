import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { get } from "@/helpers/api_helper";
import { SELLER_END_POINT } from "@/constants";
import ToastMessage from "@/components/Toast";
import Axios from "@/utils/axios";
import { Row, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SellerForm from "./SellerForm";
import DeleterSeller from "./DeleterSeller";
import ViewSeller from "./ViewSeller";

const Seller = () => {

  /*** Storing data start */
  const { http } = Axios();
  const notify = useCallback((type, message) => {
    ToastMessage({ type, message });
  }, []);
  const [sellerList, setSellerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);
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
    const closeViewDeleteModal = () => {
      setViewIsModalOpen(false);
    };
    /** view function end */


 /**Render Function Start */
  const reFetchHandler = (isRender) => {
    if (isRender) fetchSellerList();
};
/**Render Function end */

  /***Fetching table Data Start */

  const fetchSellerList = async () => {
    try {
      // const response = await http.get(SELLER_END_POINT.list(page,limit));
      const response = await http.get(SELLER_END_POINT.list());
      setSellerList(response.data?.data?.data);
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
  }, [limit]);

  /***Fetching table Data end */


  /**Table Column Start */
  const columns = [
    {
      title: "SL",
      fixed: "left",
      render: (text, record, index) => index + 1,
    },
    {
      title: "name",
      dataIndex: "name",
    },
    {
      title: "phone",
      dataIndex: "phone",
    },

    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 100,
      render: (row) => actionButton(row),
    },
  ];

  /**Table Column End */


  const actionButton = (row) => {
    return (
      <>
        <Row
          justify="space-between"
          style={{ display: "flex", alignItems: "center" }}
        >
          <a onClick={() => handleView(row)} style={{ color: "green" }}>
            <EyeOutlined style={{ fontSize: "22px" }} />
          </a>

          <a onClick={() => handleEdit(row)} className="text-primary">
            <EditOutlined style={{ fontSize: "22px" }} />
          </a>

          <a onClick={() => handleDelete(row)} className="text-danger">
            <DeleteOutlined style={{ fontSize: "22px" }} />
          </a>
        </Row>
      </>
    );
  };


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
            onClick={handleAdd}
          >
            Add
            <span className="button-icon-space ml-5">
              <FontAwesomeIcon icon={faPlusCircle} />
            </span>
          </button>
        </div>
        <SellerForm isOpen={isModalOpen} onClose={closeModal} setEditData={editData} isParentRender={reFetchHandler} />
        <DeleterSeller isOpen={isDeleteModalOpen} onClose={closeDeleteModal} data={editData} isParentRender={reFetchHandler} />
        <ViewSeller isOpen={isViewModalOpen} onClose={closeViewDeleteModal} data={editData} isParentRender={reFetchHandler} />

        <Table
          className="border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-black dark:text-white"
          columns={columns}
          dataSource={sellerList}
          scroll={{ x: "max-content" }}

        />



      </div>
    </div>
  )
}

export default Seller