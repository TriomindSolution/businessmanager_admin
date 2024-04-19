import React from "react";

const Ecommerce = () => {
  return (
    <>
      <div
        id="cartSidePenal"
        drawer-end=""
        className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow dark:bg-zink-600 ltr:right-0 rtl:left-0 md:w-96 z-drawer show"
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-zink-500">
          <div className="grow">
            <h5 className="mb-0 text-16">
              Shopping Cart
              <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-[11px] font-medium border rounded-full text-white bg-custom-500 border-custom-500">
                3
              </span>
            </h5>
          </div>
          <div className="shrink-0">
            <button
              data-drawer-close="cartSidePenal"
              className="transition-all duration-150 ease-linear text-slate-500 hover:text-slate-800"
            >
              <i data-lucide="x" className="size-4" />
            </button>
          </div>
        </div>
        <div className="px-4 py-3 text-sm text-green-500 border border-transparent bg-green-50 dark:bg-green-400/20">
          <span className="font-bold underline">TAILWICK50</span> Coupon code
          applied successfully.
        </div>
        <div>
          <div className="h-[calc(100vh_-_370px)] p-4 overflow-y-auto product-list">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 product">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                  <img
                    src="./assets/images/img-012.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="overflow-hidden grow">
                  <div className="ltr:float-right rtl:float-left">
                    <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500">
                      <i data-lucide="x" className="size-4" />
                    </button>
                  </div>
                  <a
                    href="#!"
                    className="transition-all duration-200 ease-linear hover:text-custom-500"
                  >
                    <h6 className="mb-1 text-15">
                      Cotton collar t-shirts for men
                    </h6>
                  </a>
                  <div className="flex items-center mb-3">
                    <h5 className="text-base product-price">
                      $<span>155.32</span>
                    </h5>
                    <div className="font-normal rtl:mr-1 ltr:ml-1 text-slate-500 dark:text-zink-200">
                      (Fashion)
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex text-center input-step">
                      <button
                        type="button"
                        className="border w-9 h-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                      >
                        <i
                          data-lucide="minus"
                          className="inline-block size-4"
                        />
                      </button>
                      <input
                        type="number"
                        className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500"
                        defaultValue={2}
                        min={0}
                        max={100}
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                      >
                        <i data-lucide="plus" className="inline-block size-4" />
                      </button>
                    </div>
                    <h6 className="product-line-price">310.64</h6>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 product">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                  <img
                    src="./assets/images/img-03.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="overflow-hidden grow">
                  <div className="ltr:float-right rtl:float-left">
                    <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500">
                      <i data-lucide="x" className="size-4" />
                    </button>
                  </div>
                  <a
                    href="#!"
                    className="transition-all duration-200 ease-linear hover:text-custom-500"
                  >
                    <h6 className="mb-1 text-15">
                      Like style travel black handbag
                    </h6>
                  </a>
                  <div className="flex items-center mb-3">
                    <h5 className="text-base product-price">
                      $<span>349.95</span>
                    </h5>
                    <div className="font-normal rtl:mr-1 ltr:ml-1 text-slate-400 dark:text-zink-200">
                      (Luggage)
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex text-center input-step">
                      <button
                        type="button"
                        className="border w-9 h-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                      >
                        <i
                          data-lucide="minus"
                          className="inline-block size-4"
                        />
                      </button>
                      <input
                        type="number"
                        className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500"
                        defaultValue={1}
                        min={0}
                        max={100}
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                      >
                        <i data-lucide="plus" className="inline-block size-4" />
                      </button>
                    </div>
                    <h6 className="product-line-price">349.95</h6>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 product">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-slate-100 shrink-0 dark:bg-zink-500">
                  <img
                    src="./assets/images/img-09.png"
                    alt=""
                    className="h-8"
                  />
                </div>
                <div className="overflow-hidden grow">
                  <div className="ltr:float-right rtl:float-left">
                    <button className="transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-red-500 dark:hover:text-red-500">
                      <i data-lucide="x" className="size-4" />
                    </button>
                  </div>
                  <a
                    href="#!"
                    className="transition-all duration-200 ease-linear hover:text-custom-500"
                  >
                    <h6 className="mb-1 text-15">
                      Blive Printed Men Round Neck
                    </h6>
                  </a>
                  <div className="flex items-center mb-3">
                    <h5 className="text-base product-price">
                      $<span>546.74</span>
                    </h5>
                    <div className="font-normal rtl:mr-1 ltr:ml-1 text-slate-400 dark:text-zink-200">
                      (Fashion)
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex text-center input-step">
                      <button
                        type="button"
                        className="border w-9 h-9 leading-[15px] minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                      >
                        <i
                          data-lucide="minus"
                          className="inline-block size-4"
                        />
                      </button>
                      <input
                        type="number"
                        className="w-12 text-center h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500"
                        defaultValue={4}
                        min={0}
                        max={100}
                        readOnly=""
                      />
                      <button
                        type="button"
                        className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l w-9 h-9 border-slate-200 plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"
                      >
                        <i data-lucide="plus" className="inline-block size-4" />
                      </button>
                    </div>
                    <h6 className="product-line-price end">2,186.96</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-slate-200 dark:border-zink-500">
            <table className="w-full mb-3">
              <tbody className="table-total">
                <tr>
                  <td className="py-2">Sub Total :</td>
                  <td className="text-right cart-subtotal">$2,847.55</td>
                </tr>
                <tr>
                  <td className="py-2">
                    Discount <span className="text-muted">(TAILWICK50)</span>:
                  </td>
                  <td className="text-right cart-discount">-$476.00</td>
                </tr>
                <tr>
                  <td className="py-2">Shipping Charge :</td>
                  <td className="text-right cart-shipping">$89.00</td>
                </tr>
                <tr>
                  <td className="py-2">Estimated Tax (12.5%) :</td>
                  <td className="text-right cart-tax">$70.62</td>
                </tr>
                <tr className="font-semibold">
                  <td className="py-2">Total :</td>
                  <td className="text-right cart-total">$2,531.17</td>
                </tr>
              </tbody>
            </table>
            <div className="flex items-center justify-between gap-3">
              <a
                href="apps-ecommerce-product-grid.html"
                className="w-full text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:ring-slate-400/10"
              >
                Continue Shopping
              </a>
              <a
                href="apps-ecommerce-checkout.html"
                className="w-full text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginLeft: "16.25rem" }}
        className="relative min-h-screen group-data-[sidebar-size=sm]:min-h-sm"
      >
        <div className="group-data-[sidebar-size=lg]:ltr:md:ml-vertical-menu group-data-[sidebar-size=lg]:rtl:md:mr-vertical-menu group-data-[sidebar-size=md]:ltr:ml-vertical-menu-md group-data-[sidebar-size=md]:rtl:mr-vertical-menu-md group-data-[sidebar-size=sm]:ltr:ml-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:mr-vertical-menu-sm pt-[calc(theme('spacing.header')_*_1)] pb-[calc(theme('spacing.header')_*_0.8)] px-4 group-data-[navbar=bordered]:pt-[calc(theme('spacing.header')_*_1.3)] group-data-[navbar=hidden]:pt-0 group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:px-0 group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:ltr:md:ml-auto group-data-[layout=horizontal]:group-data-[sidebar-size=lg]:rtl:md:mr-auto group-data-[layout=horizontal]:md:pt-[calc(theme('spacing.header')_*_1.6)] group-data-[layout=horizontal]:px-3 group-data-[layout=horizontal]:group-data-[navbar=hidden]:pt-[calc(theme('spacing.header')_*_0.9)]">
          <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
            <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
              <div className="grow">
                <h5 className="text-16">Ecommerce</h5>
              </div>
              <ul className="flex items-center gap-2 text-sm font-normal shrink-0">
                <li className="relative before:content-['\ea54'] before:font-remix ltr:before:-right-1 rtl:before:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:text-slate-400 dark:text-zink-200">
                  <a href="#!" className="text-slate-400 dark:text-zink-200">
                    Dashboards
                  </a>
                </li>
                <li className="text-slate-700 dark:text-zink-100">Ecommerce</li>
              </ul>
            </div>
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
              <div className="relative col-span-12 overflow-hidden card 2xl:col-span-8 bg-slate-900">
                <div className="absolute inset-0"></div>
                <div className="relative card-body">
                  <div className="grid items-center grid-cols-12">
                    <div className="col-span-12 lg:col-span-8 2xl:col-span-7">
                      <h5 className="mb-3 font-normal tracking-wide text-slate-200">
                        Welcome Paula Keenan 🎉
                      </h5>
                      <p className="mb-5 text-slate-400">
                        An ecommerce dashboard has just that purpose. It
                        provides your ecommerce team with a clear overview of
                        key financial and website KPIs at any time.
                      </p>
                      <button
                        type="button"
                        className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-500/20 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-500/20 dark:ring-custom-400/20"
                      >
                        Take a Product
                      </button>
                    </div>
                    <div className="hidden col-span-12 2xl:col-span-3 lg:col-span-2 lg:col-start-11 2xl:col-start-10 lg:block">
                      <img
                        src="./assets/images/dashboard.png"
                        alt=""
                        className="h-40 ltr:2xl:ml-auto rtl:2xl:mr-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card 2xl:col-span-4 2xl:row-span-2">
                <div className="card-body">
                  <div className="flex items-center mb-3">
                    <h6 className="grow text-15">Order Statistics</h6>
                    <div className="relative">
                      <a
                        href="#!"
                        className="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600"
                      >
                        View All
                        <i
                          data-lucide="move-right"
                          className="inline-block align-middle size-4 ltr:ml-1 rtl:mr-1"
                        />
                      </a>
                    </div>
                  </div>
                  <div
                    id="orderStatisticsChart"
                    className="apex-charts"
                    data-chart-colors='["bg-purple-500", "bg-sky-500"]'
                    dir="ltr"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                  <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                    <i data-lucide="wallet-2" />
                  </div>
                  <h5 className="mt-4 mb-2">
                    $
                    <span className="counter-value" data-target="236.18">
                      0
                    </span>
                    k
                  </h5>
                  <p className="text-slate-500 dark:text-zink-200">
                    Total Revenue
                  </p>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                  <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
                    <i data-lucide="package" />
                  </div>
                  <h5 className="mt-4 mb-2">
                    <span className="counter-value" data-target={13461}>
                      0
                    </span>
                  </h5>
                  <p className="text-slate-500 dark:text-zink-200">
                    Total Orders
                  </p>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                  <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
                    <i data-lucide="truck" />
                  </div>
                  <h5 className="mt-4 mb-2">
                    <span className="counter-value" data-target={17150}>
                      0
                    </span>
                  </h5>
                  <p className="text-slate-500 dark:text-zink-200">Delivered</p>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                  <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
                    <i data-lucide="package-x" />
                  </div>
                  <h5 className="mt-4 mb-2">
                    <span className="counter-value" data-target={3519}>
                      0
                    </span>
                  </h5>
                  <p className="text-slate-500 dark:text-zink-200">Cancelled</p>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card 2xl:col-span-8">
                <div className="card-body">
                  <div className="flex flex-col gap-4 mb-4 md:mb-3 md:items-center md:flex-row">
                    <h6 className="grow text-15">Sales Revenue Overview</h6>
                    <div className="relative">
                      <i
                        data-lucide="calendar-range"
                        className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200"
                      />
                      <input
                        type="text"
                        className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        data-provider="flatpickr"
                        data-date-format="d M, Y"
                        data-range-date="true"
                        readOnly="readonly"
                        placeholder="Select Date"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-4 mb-3">
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center rounded-md size-12 text-sky-500 bg-sky-50 shrink-0 dark:bg-sky-500/10">
                          <i data-lucide="bar-chart" />
                        </div>
                        <div className="grow">
                          <p className="mb-1 text-slate-500 dark:text-zink-200">
                            Total Sales
                          </p>
                          <h5 className="text-15">
                            $
                            <span
                              className="counter-value"
                              data-target="1517.36"
                            >
                              0
                            </span>
                            k
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center text-green-500 rounded-md size-12 bg-green-50 shrink-0 dark:bg-green-500/10">
                          <i data-lucide="trending-up" />
                        </div>
                        <div className="grow">
                          <p className="mb-1 text-slate-500 dark:text-zink-200">
                            Total Profit
                          </p>
                          <h5 className="text-15">
                            $
                            <span
                              className="counter-value"
                              data-target="746.84"
                            >
                              0
                            </span>
                            k
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id="salesRevenueOverview"
                    className="apex-charts"
                    data-chart-colors='["bg-custom-500", "bg-custom-400", "bg-custom-300"]'
                    dir="ltr"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 2xl:col-span-4">
                <div className="grid grid-cols-12 gap-x-5">
                  <div className="col-span-12 card lg:col-span-6 2xl:col-span-12">
                    <div className="card-body">
                      <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Traffic Resources</h6>
                        <div className="relative">
                          <a
                            href="#!"
                            className="transition-all duration-300 ease-linear text-custom-500 hover:text-custom-700"
                          >
                            View Status
                            <i
                              data-lucide="move-right"
                              className="inline-block align-middle size-4 ltr:ml-1 rtl:mr-1"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-6 2xl:col-span-7">
                          <div
                            id="trafficResourcesChart"
                            className="apex-charts"
                            data-chart-colors='["bg-sky-500", "bg-purple-500", "bg-green-500", "bg-yellow-500"]'
                            dir="ltr"
                          />
                        </div>
                        <div className="col-span-12 md:col-span-6 2xl:col-span-5">
                          <ul className="flex flex-col gap-3">
                            <li className="flex items-center gap-2">
                              <div className="bg-green-500 size-3 shrink-0 clip-triangle" />
                              <p className="text-green-500">
                                Search Engine (22%)
                              </p>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="bg-purple-500 size-3 shrink-0 clip-triangle" />
                              <p className="text-purple-500">Referral (34%)</p>
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="size-3 bg-sky-500 shrink-0 clip-triangle" />
                              <p className="text-sky-500">Direct (44%)</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-span-12 card lg:col-span-6 2xl:col-span-12">
                    <div className="card-body">
                      <div className="flex items-center mb-2">
                        <h5 className="grow">
                          <span className="counter-value" data-target={1596}>
                            0
                          </span>
                        </h5>
                        <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-white border-red-100 text-red-500 dark:bg-zink-700 dark:border-red-900">
                          <i
                            data-lucide="trending-down"
                            className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                          />
                          6.8%
                        </span>
                      </div>
                      <h6 className="mb-0">Monthly Orders Goal (20000+)</h6>
                      <div>
                        <div className="flex items-center justify-between mt-5 mb-2">
                          <p className="text-slate-500 dark:text-zink-200">
                            Total Orders
                          </p>
                          <h6 className="mb-0 text-custom-500">85%</h6>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2.54 dark:bg-zink-600">
                          <div
                            className="bg-custom-500 h-2.5 rounded-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end grid*/}
              </div>
              {/*end col*/}
              <div className="col-span-12 card 2xl:col-span-12">
                <div className="card-body">
                  <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
                    <div className="2xl:col-span-3">
                      <h6 className="text-15">Product Orders</h6>
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
                        >
                          <i className="align-baseline ltr:pr-1 rtl:pl-1 ri-download-2-line" />
                          Export
                        </button>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end grid*/}
                  <div className="overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                      <thead className="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600">
                        <tr>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            #
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Order ID
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Customer Name
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Location
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Order Date
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Payments
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Quantity
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Price
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Total Amount
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Status
                          </th>
                          <th className="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            01
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100365
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Marie Prohaska
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Germany
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            08 Jun, 2023
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Credit Card
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            05
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $146.99
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $749.95
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                              Delivered
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction1"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction1"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            02
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100366
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Jaqueline Hammes
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            France
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            11 July, 2023
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Paypal
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            02
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $450.00
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $900.00
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">
                              Shipping
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction2"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction2"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            03
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100367
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Marlene Hirthe
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Argentina
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            21 Aug, 2023
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Visa Card
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            03
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $147.23
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $294.46
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">
                              New
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction3"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction3"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            04
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100368
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Reagan Larson
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Belgium
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            28 Nov, 2023
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            American Express
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            01
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $579.12
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $579.12
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                              Delivered
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction4"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction4"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            05
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100369
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Glennie Langosh
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Australia
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            11 Oct, 2023
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            American Express
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            01
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $349.00
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $349.00
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">
                              Pending
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction5"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction5"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            06
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100370
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Rickie Cremin
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            United States
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            16 Feb, 2023
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            COD
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            03
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $89.49
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $268.47
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                              Delivered
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction6"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction6"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            07
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <a href="apps-ecommerce-order-overview.html">
                              #TWT5015100371
                            </a>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Domenic Tromp
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            Afghanistan
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            21 Jan, 2024
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            PayPal
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            02
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $739.79
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            $1,479.58
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">
                              New
                            </span>
                          </td>
                          <td className="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500">
                            <div className="relative dropdown">
                              <button
                                id="orderAction6"
                                data-bs-toggle="dropdown"
                                className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                              >
                                <i
                                  data-lucide="more-horizontal"
                                  className="size-3"
                                />
                              </button>
                              <ul
                                className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                                aria-labelledby="orderAction6"
                              >
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="apps-ecommerce-order-overview.html"
                                  >
                                    <i
                                      data-lucide="eye"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">
                                      Overview
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="file-edit"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Edit</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                                    href="#!"
                                  >
                                    <i
                                      data-lucide="trash-2"
                                      className="inline-block size-3 ltr:mr-1 rtl:ml-1"
                                    />
                                    <span className="align-middle">Delete</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex flex-col items-center mt-5 md:flex-row">
                    <div className="mb-4 grow md:mb-0">
                      <p className="text-slate-500 dark:text-zink-200">
                        Showing <b>07</b> of <b>19</b> Results
                      </p>
                    </div>
                    <ul className="flex flex-wrap items-center gap-2 shrink-0">
                      <li>
                        <a
                          href="#!"
                          className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
                        >
                          <i
                            className="mr-1 size-4 rtl:rotate-180"
                            data-lucide="chevron-left"
                          />
                          Prev
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="inline-flex items-center justify-center bg-white dark:bg-zink-700 w-8 h-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="inline-flex items-center justify-center bg-white dark:bg-zink-700 w-8 h-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="inline-flex items-center justify-center bg-white dark:bg-zink-700 w-8 h-8 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#!"
                          className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-500 dark:[&.active]:text-custom-500 [&.active]:bg-custom-50 dark:[&.active]:bg-custom-500/10 [&.active]:border-custom-50 dark:[&.active]:border-custom-500/10 [&.active]:hover:text-custom-700 dark:[&.active]:hover:text-custom-700 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
                        >
                          Next
                          <i
                            className="ml-1 size-4 rtl:rotate-180"
                            data-lucide="chevron-right"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                  <div className="flex items-center mb-3">
                    <h6 className="grow text-15">Customer Service</h6>
                    <div className="relative dropdown shrink-0">
                      <button
                        type="button"
                        className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle"
                        id="customServiceDropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i
                          data-lucide="more-vertical"
                          className="inline-block size-4"
                        />
                      </button>
                      <ul
                        className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                        aria-labelledby="customServiceDropdown"
                      >
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            1 Weekly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            1 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            3 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            6 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            This Yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mt-5 mb-2">
                      <p className="text-slate-500 dark:text-zink-200">
                        28% of the Goal Reached ($25k)
                      </p>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-zink-600">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: "28%" }}
                      />
                    </div>
                    <div className="grid mt-3 xl:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <div className="shrink-0">
                          <i
                            data-lucide="calendar-days"
                            className="inline-block mb-1 align-middle size-4"
                          />
                        </div>
                        <p className="mb-0 text-slate-500 dark:text-zink-200">
                          This Month:
                          <span className="font-medium text-slate-800 dark:text-zink-50">
                            $13,741
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-4 mb-3">Top Customer</h6>
                  <ul className="divide-y divide-slate-200 dark:divide-zink-500">
                    <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                      <div className="w-8 h-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/avatar-2.png"
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="grow">
                        <h6 className="font-medium">Urrie Arthur</h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          arthur@tailwick.com
                        </p>
                      </div>
                      <div className="shrink-0">
                        <h6>$2,452</h6>
                      </div>
                    </li>
                    <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                      <div className="w-8 h-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/avatar-3.png"
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="grow">
                        <h6 className="font-medium">Natalie Christy</h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          natalie@tailwick.com
                        </p>
                      </div>
                      <div className="shrink-0">
                        <h6>$1,893</h6>
                      </div>
                    </li>
                    <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                      <div className="w-8 h-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/avatar-4.png"
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="grow">
                        <h6 className="font-medium">Laurie Jackson</h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          jackson@tailwick.com
                        </p>
                      </div>
                      <div className="shrink-0">
                        <h6>$1,196</h6>
                      </div>
                    </li>
                    <li className="flex items-center gap-3 py-2 first:pt-0 last:pb-0">
                      <div className="w-8 h-8 rounded-full shrink-0 bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/avatar-5.png"
                          alt=""
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div className="grow">
                        <h6 className="font-medium">Michael Torres</h6>
                        <p className="text-slate-500 dark:text-zink-200">
                          torres@tailwick.com
                        </p>
                      </div>
                      <div className="shrink-0">
                        <h6>$976</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                  <div className="flex items-center mb-3">
                    <h6 className="grow text-15">Sales This Month</h6>
                    <div className="relative dropdown shrink-0">
                      <button
                        type="button"
                        className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle"
                        id="sellingProductDropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i
                          data-lucide="more-vertical"
                          className="inline-block size-4"
                        />
                      </button>
                      <ul
                        className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                        aria-labelledby="sellingProductDropdown"
                      >
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            1 Weekly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            1 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            3 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            6 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            This Yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 my-3">
                    <div className="flex items-center justify-center text-green-500 rounded-md size-12 bg-green-50 shrink-0 dark:bg-green-500/10">
                      <i data-lucide="trending-up" />
                    </div>
                    <div className="grow">
                      <p className="mb-1 text-slate-500 dark:text-zink-200">
                        Total Profit
                      </p>
                      <h5 className="text-15">
                        $
                        <span className="counter-value" data-target="746.84">
                          0
                        </span>
                        k
                      </h5>
                    </div>
                  </div>
                  <div
                    id="salesThisMonthChart"
                    className="apex-charts"
                    data-chart-colors='["bg-sky-100", "bg-orange-100", "bg-sky-500", "bg-orange-500"]'
                    dir="ltr"
                  />
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                  <div className="flex items-center mb-3">
                    <h6 className="grow text-15">Top Selling Products</h6>
                    <div className="relative dropdown shrink-0">
                      <button
                        type="button"
                        className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle"
                        id="sellingProductDropdown"
                        data-bs-toggle="dropdown"
                      >
                        <i
                          data-lucide="more-vertical"
                          className="inline-block size-4"
                        />
                      </button>
                      <ul
                        className="absolute z-50 hidden py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                        aria-labelledby="sellingProductDropdown"
                      >
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            1 Weekly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            1 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            3 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            6 Monthly
                          </a>
                        </li>
                        <li>
                          <a
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            href="#!"
                          >
                            This Yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/img-02.png"
                          alt=""
                          className="h-6"
                        />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="truncate">Mesh Ergonomic Black Chair</h6>
                        <div className="text-yellow-500">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </div>
                      </div>
                      <h6 className="shrink-0">
                        <i
                          data-lucide="shopping-cart"
                          className="inline-block align-middle size-4 text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"
                        />
                        798
                      </h6>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/img-03.png"
                          alt=""
                          className="h-6"
                        />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="truncate">Fastcolors Typography Men</h6>
                        <div className="text-yellow-500">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </div>
                      </div>
                      <h6 className="shrink-0">
                        <i
                          data-lucide="shopping-cart"
                          className="inline-block align-middle size-4 text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"
                        />
                        695
                      </h6>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/img-04.png"
                          alt=""
                          className="h-6"
                        />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="truncate">Mesh Ergonomic Green Chair</h6>
                        <div className="text-yellow-500">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </div>
                      </div>
                      <h6 className="shrink-0">
                        <i
                          data-lucide="shopping-cart"
                          className="inline-block align-middle size-4 text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"
                        />
                        985
                      </h6>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/img-05.png"
                          alt=""
                          className="h-6"
                        />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="truncate">
                          Techel Black Bluetooth Soundbar
                        </h6>
                        <div className="text-yellow-500">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </div>
                      </div>
                      <h6 className="shrink-0">
                        <i
                          data-lucide="shopping-cart"
                          className="inline-block align-middle size-4 text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"
                        />
                        813
                      </h6>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/img-06.png"
                          alt=""
                          className="h-6"
                        />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="truncate">Bovet Fleurier AIFSQ029</h6>
                        <div className="text-yellow-500">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </div>
                      </div>
                      <h6 className="shrink-0">
                        <i
                          data-lucide="shopping-cart"
                          className="inline-block align-middle size-4 text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"
                        />
                        915
                      </h6>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-md bg-slate-100 dark:bg-zink-600">
                        <img
                          src="./assets/images/img-03.png"
                          alt=""
                          className="h-6"
                        />
                      </div>
                      <div className="overflow-hidden grow">
                        <h6 className="truncate">Fastcolors Typography Men</h6>
                        <div className="text-yellow-500">
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-fill" />
                          <i className="ri-star-half-fill" />
                        </div>
                      </div>
                      <h6 className="shrink-0">
                        <i
                          data-lucide="shopping-cart"
                          className="inline-block align-middle size-4 text-slate-500 dark:text-zink-200 ltr:mr-1 rtl:ml-1"
                        />
                        785
                      </h6>
                    </li>
                  </ul>
                </div>
              </div>
              {/*end col*/}
              <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                  <h6 className="relative mb-3 grow text-15">Audience</h6>
                  <div
                    id="audienceChart"
                    className="-mt-9 apex-charts"
                    data-chart-colors='["bg-sky-500", "bg-orange-400", "bg-green-500", "bg-yellow-500"]'
                    dir="ltr"
                  />
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end grid*/}
          </div>
          {/* container-fluid */}
        </div>
        {/* End Page-content */}
        <footer className="ltr:md:left-vertical-menu rtl:md:right-vertical-menu group-data-[sidebar-size=md]:ltr:md:left-vertical-menu-md group-data-[sidebar-size=md]:rtl:md:right-vertical-menu-md group-data-[sidebar-size=sm]:ltr:md:left-vertical-menu-sm group-data-[sidebar-size=sm]:rtl:md:right-vertical-menu-sm absolute right-0 bottom-0 px-4 h-14 group-data-[layout=horizontal]:ltr:left-0 group-data-[layout=horizontal]:rtl:right-0 left-0 border-t py-3 flex items-center dark:border-zink-600">
          <div className="group-data-[layout=horizontal]:mx-auto group-data-[layout=horizontal]:max-w-screen-2xl w-full">
            <div className="grid items-center grid-cols-1 text-center lg:grid-cols-2 text-slate-400 dark:text-zink-200 ltr:lg:text-left rtl:lg:text-right">
              <div>© Tailwick.</div>
              <div className="hidden lg:block">
                <div className="ltr:text-right rtl:text-left">
                  Design &amp; Develop by Themesdesign
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Ecommerce;
