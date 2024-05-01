import React from 'react'

const InvoiceList = () => {
  return (
    <div
            style={{ marginLeft: "16.25rem" }}
            className="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm"
        >

            <div className="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
                <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <div className="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
  <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
    <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div className="grow">
        <h5 className="text-16">List View</h5>
      </div>
      <ul className="flex items-center gap-2 text-sm font-normal shrink-0">
        <li className="relative before:content-['\ea54'] before:font-remix ltr:before:-right-1 rtl:before:-left-1  before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:text-slate-400 dark:text-zink-200">
          <a href="#!" className="text-slate-400 dark:text-zink-200">
            Invoices
          </a>
        </li>
        <li className="text-slate-700 dark:text-zink-100">List View</li>
      </ul>
    </div>
    <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
      <div className="xl:col-span-3">
        <div className="sticky card print:hidden top-[calc(theme('spacing.header')_+_theme('spacing.5'))]">
          <div className="card-body">
            <h6 className="mb-4 text-16">Invoice List</h6>
            <div className="flex items-center gap-2">
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
                className="flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:ring active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:active:bg-sky-500 dark:active:text-white dark:ring-sky-400/20"
              >
                <i data-lucide="sliders-horizontal" className="size-4" />
              </button>
            </div>
          </div>
          <div
            data-simplebar=""
            className="h-[calc(100vh_-_theme('height.14')_-_theme('spacing.5')_-_theme('height.header')_*_3.5)]"
          >
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600 active"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                  Unpaid
                </span>
              </div>
              <h6>#TW15090251</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Paula Keenan</h6>
                  <p className="text-slate-500 dark:text-zink-200">$873.96</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">21 Jan, 2024</span>
                </p>
              </div>
            </a>
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                  Paid
                </span>
              </div>
              <h6>#TW15090252</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Jaqueline Hammes</h6>
                  <p className="text-slate-500 dark:text-zink-200">$1,203.74</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">27 Oct, 2023</span>
                </p>
              </div>
            </a>
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                  Paid
                </span>
              </div>
              <h6>#TW15090253</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Akeem Paucek</h6>
                  <p className="text-slate-500 dark:text-zink-200">$1,423.10</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">04 Feb, 2024</span>
                </p>
              </div>
            </a>
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                  Cancel
                </span>
              </div>
              <h6>#TW15090254</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Stephon Trantow</h6>
                  <p className="text-slate-500 dark:text-zink-200">$1,420.99</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">14 July, 2023</span>
                </p>
              </div>
            </a>
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent">
                  Refund
                </span>
              </div>
              <h6>#TW15090255</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Domenic Tromp</h6>
                  <p className="text-slate-500 dark:text-zink-200">$247.18</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">11 April, 2023</span>
                </p>
              </div>
            </a>
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                  Paid
                </span>
              </div>
              <h6>#TW15090256</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Marie Prohaska</h6>
                  <p className="text-slate-500 dark:text-zink-200">$559.32</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">03 Aug, 2023</span>
                </p>
              </div>
            </a>
            <a
              href="#!"
              className="block transition-all duration-150 ease-linear border-t card-body border-slate-200 hover:bg-slate-50 [&.active]:bg-slate-100 dark:border-zink-500 dark:hover:bg-zink-600 dark:[&.active]:bg-zink-600"
            >
              <div className="float-right">
                <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent">
                  Unpaid
                </span>
              </div>
              <h6>#TW15090257</h6>
              <div className="flex">
                <div className="grow">
                  <h6 className="mt-3 mb-1 text-16">Ethel Corwin</h6>
                  <p className="text-slate-500 dark:text-zink-200">$2,147.65</p>
                </div>
                <p className="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0">
                  <i
                    data-lucide="calendar-clock"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">15 Dec, 2024</span>
                </p>
              </div>
            </a>
          </div>
        </div>
        {/*end card*/}
      </div>
      {/*end col*/}
      <div className="xl:col-span-9">
        <div className="card print:shadow-none print:border-none">
          <div className="card-body print:hidden">
            <div className="flex flex-col gap-5 md:items-center md:flex-row">
              <div className="grow">
                <h6 className="mb-1 text-16">#TW15090257</h6>
                <ul className="flex items-center gap-3">
                  <li className="text-slate-500 dark:text-zink-200">
                    Create: 10 July, 2023
                  </li>
                  <li className="text-slate-500 dark:text-zink-200">
                    Due: 10 July, 2023
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onclick="window.print()"
                  type="button"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  <i
                    data-lucide="save"
                    className="inline-block size-4 ltr:mr-1 rtl:ml-1"
                  />{" "}
                  <span className="align-middle">Save &amp; Print</span>
                </button>
                <div className="relative dropdown">
                  <button
                    className="flex items-center justify-center w-[38.39px] h-[38.39px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                    id="categoryNotes1"
                    data-bs-toggle="dropdown"
                  >
                    <i data-lucide="more-horizontal" className="size-4" />
                  </button>
                  <ul
                    className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                    aria-labelledby="categoryNotes1"
                  >
                    <li>
                      <a
                        className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                        href="apps-invoice-add-new.html"
                      >
                        <i
                          data-lucide="file-edit"
                          className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                        />{" "}
                        <span className="align-middle">Edit</span>
                      </a>
                    </li>
                    <li>
                      <a
                        data-modal-target="deleteModal"
                        className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                        href="#!"
                      >
                        <i
                          data-lucide="trash-2"
                          className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                        />{" "}
                        <span className="align-middle">Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="!pt-0 card-body">
            <div className="p-5 rounded-md md:p-8 bg-slate-50 dark:bg-zink-600 print:p-0">
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                <div className="text-center xl:col-span-2 ltr:xl:text-left rtl:xl:text-right">
                  <div className="flex items-center justify-center mx-auto rounded-md size-16 bg-slate-100 dark:bg-zink-600 xl:mx-0">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMDk0N0MyMDY4QjcxMUVFOTYxN0Q1OTIxQkQxNzgwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMDk0N0MyMTY4QjcxMUVFOTYxN0Q1OTIxQkQxNzgwRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwOTQ3QzFFNjhCNzExRUU5NjE3RDU5MjFCRDE3ODBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwOTQ3QzFGNjhCNzExRUU5NjE3RDU5MjFCRDE3ODBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iIlVCAAACB1JREFUeNrsXGts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"
                      alt=""
                      className="h-8"
                    />
                  </div>
                  <h5 className="mt-4 mb-1">Themesdesign</h5>
                  <p className="text-slate-500 dark:text-zink-200">
                    IT Software Company
                  </p>
                </div>
                {/*end col*/}
                <div className="ltr:xl:text-right rtl:xl:text-left xl:col-start-10 xl:col-span-3">
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    Legal Registration No:{" "}
                    <span className="font-semibold">2155420</span>
                  </p>
                  <p className="mb-1 truncate text-slate-500 dark:text-zink-200">
                    Email:{" "}
                    <span className="font-semibold">
                      tailwick@themesdesign.com
                    </span>
                  </p>
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    Website:{" "}
                    <a
                      href="https://themesdesign.in"
                      target="_blank"
                      className="font-semibold underline text-custom-500"
                    >
                      www.themesdesign.in
                    </a>
                  </p>
                  <p className="text-slate-500 dark:text-zink-200">
                    Contact No:{" "}
                    <span className="font-semibold">+(01) 123 678 9654</span>
                  </p>
                </div>
                {/*end col*/}
              </div>
              {/*end grid*/}
              <div className="grid grid-cols-1 mt-6 text-center divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-dashed md:grid-cols-4 divide-slate-200 dark:divide-zink-500">
                <div className="p-3">
                  <h6 className="mb-1">#TW15090254</h6>
                  <p className="text-slate-500 dark:text-zink-200">
                    Invoice No
                  </p>
                </div>
                {/*end col*/}
                <div className="p-3">
                  <h6 className="mb-1">10 July, 2023</h6>
                  <p className="text-slate-500 dark:text-zink-200">
                    Create Date
                  </p>
                </div>
                {/*end col*/}
                <div className="p-3">
                  <h6 className="mb-1">
                    <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                      Paid
                    </span>
                  </h6>
                  <p className="text-slate-500 dark:text-zink-200">
                    Payment Status
                  </p>
                </div>
                {/*end col*/}
                <div className="p-3">
                  <h6 className="mb-1">$873.96</h6>
                  <p className="text-slate-500 dark:text-zink-200">
                    Total Amount
                  </p>
                </div>
                {/*end col*/}
              </div>
              {/*end grid*/}
              <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">
                    Shipping Address
                  </p>
                  <h6 className="mb-1 text-15">Paula Keenan</h6>
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    176 Arvid Crest Sheastad, IA
                  </p>
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    +(211) 0123 456 897
                  </p>
                </div>
                {/*end col*/}
                <div>
                  <p className="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">
                    Billing Address
                  </p>
                  <h6 className="mb-1 text-15">Paula Keenan</h6>
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    176 Arvid Crest Sheastad, IA
                  </p>
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    +(211) 0123 456 897
                  </p>
                  <p className="mb-1 text-slate-500 dark:text-zink-200">
                    TAX No. 5415421
                  </p>
                </div>
                {/*end col*/}
              </div>
              {/*end grid*/}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr>
                      <th className="px-3.5 py-2.5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">
                        #
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">
                        Item Name
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">
                        Rate
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">
                        Quantity
                      </th>
                      <th className="px-3.5 py-2.5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        1
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        <h6 className="mb-1">
                          Webadmin - Premium Admin &amp; Dashboard
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          Build with Bootstrap, React JS, Angular, Vue etc.
                        </p>
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        $24.00
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        2
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        $48
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        2
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        <h6 className="mb-1">
                          Webadmin - Admin &amp; Dashboard
                        </h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          Build with Bootstrap, React JS, Angular, Vue etc.
                        </p>
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        $25.00
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        4
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        $100
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        1
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        <h6 className="mb-1">Tocly - Admin &amp; Dashboard</h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          Build with Bootstrap, React JS, Angular, Vue etc.
                        </p>
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        $16.00
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        9
                      </td>
                      <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                        $144
                      </td>
                    </tr>
                  </tbody>
                  <tbody className="before:block before:h-3">
                    <tr>
                      <td colSpan={3} />
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        Sub Total
                      </td>
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        $292
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} />
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        Estimated Tax (18%)
                      </td>
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        $52.56
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} />
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        Item Discounts (15%)
                      </td>
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        -$43.8
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} />
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        Shipping Charge
                      </td>
                      <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                        $29
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={3} />
                      <td className="border-b border-slate-200 px-3.5 py-2.5 font-medium dark:border-zink-500">
                        Total Amount
                      </td>
                      <td className="border-b border-slate-200 px-3.5 py-2.5 font-medium dark:border-zink-500">
                        $329.76
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-5">
                <p className="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">
                  Payments Details
                </p>
                <p className="mb-1 text-slate-500 dark:text-zink-200">
                  Payment Method: Credit Card
                </p>
                <p className="mb-1 text-slate-500 dark:text-zink-200">
                  Card Holder: Paula Keenan
                </p>
                <p className="mb-1 text-slate-500 dark:text-zink-200">
                  Card Number: xxxx xxxx xxxx 1402
                </p>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  Total Amount: $755.96
                </p>
              </div>
              <div className="px-4 py-3 text-sm border rounded-md border-sky-200 text-sky-500 bg-sky-50 dark:bg-sky-400/20 dark:border-sky-500/50">
                <span className="font-bold">NOTES:</span> All accounts are to be
                paid within 7 days from receipt of invoice. To be paid by cheque
                or credit card or direct payment online. If account is not paid
                within 7 days the credits details supplied as confirmation of
                work undertaken will be charged the agreed quoted fee noted
                above.
              </div>
            </div>
          </div>
        </div>
        {/*end card*/}
      </div>
      {/*end col*/}
    </div>
    {/*end row*/}
  </div>
  {/* container-fluid */}
</div>

                </div>
            </div>


        </div>
  )
}

export default InvoiceList