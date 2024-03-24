import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { get } from "@/helpers/api_helper";
import ToastMessage from "@/components/Toast";
import Axios from "@/utils/axios";
import { Row, Table, Tag } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EXPENSE_END_POINT } from "@/constants";
import ExpenseForm from "./ExpenseForm";
import DeleteExpense from "./DeleteExpense";
import ViewExpense from "./ViewExpense";

const Expense = () => {
    /*** Storing data start */
    const { http } = Axios();
    const notify = useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);
    const [expenseList, setExpenseList] = useState([]);
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
        if (isRender) fetchExpenseList();
    };
    /**Render Function end */


    /***Fetching table Data Start */

    const fetchExpenseList = async () => {
        try {
            const response = await http.get(EXPENSE_END_POINT.list(page, limit));
            setExpenseList(response.data?.data?.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching seller list:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchExpenseList();
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
            title: "Amount",
            dataIndex: "amount",
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Status",
            dataIndex: "status",
            render: (status) => {
                const statusText = status === 1 ? "Active" : "Inactive";
                const color = status === 1 ? "green" : "red";
                return <span style={{ color }}>{statusText}</span>;
            },
        },
        {
            title: "Created At",
            dataIndex: "created_at",
        },
        {
            title: "Action",
            key: "action",
            fixed: "right",
            width: 120,
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



    const pagination = {
        total: expenseList?.total,
        current: page,
        pageSize: perPage,
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ['2', '5', '10', '20', '30']
    };

    const onChange = (
        pagination,
        filters,
        sorter,
        extra
    ) => {
        setPage(pagination.current);
        setLimit(pagination.pageSize);
        // setSelectedRowKeys([]);
        console.log(pagination, filters, sorter, extra);
    };



    return (
        <div className="flex flex-col gap-10">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="py-6 px-4 md:px-6 xl:px-7.5 flex justify-between items-center border-b border-stroke dark:border-strokedark">
                    <h4 className="text-xl font-semibold text-black dark:text-white">
                        All Expense
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
                <ExpenseForm isOpen={isModalOpen} onClose={closeModal} setEditData={editData} isParentRender={reFetchHandler} />
                <DeleteExpense isOpen={isDeleteModalOpen} onClose={closeDeleteModal} data={editData} isParentRender={reFetchHandler} />
                <ViewExpense isOpen={isViewModalOpen} onClose={closeViewModal} data={editData} isParentRender={reFetchHandler} />

                <Table
                    className="border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark text-black dark:text-white"
                    columns={columns}
                    dataSource={expenseList}
                    scroll={{ x: "max-content" }}
                    pagination={pagination}
                    onChange={onChange}

                />



            </div>
        </div>
    )
}

export default Expense