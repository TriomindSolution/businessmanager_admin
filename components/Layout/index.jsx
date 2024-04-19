import React from "react";
import Leftsidebar from "../Leftsidebar";
import Header from "../Header";
import LayoutJs from "../js/layoutJs"; // Assuming these are style imports
import ChoicesJs from "../js/choicesJs";
import PopperMinJs from "../js/popperMinJs";
import TippyBundleJs from "../js/tippyBundleJs";
import SidebarJs from "../js/sidebarJs";
import PrismJs from "../js/prismJs";
import LucideJs from "../js/lucideJs";
import TailwickBoundleJs from "../js/tailwickBundleJs";
import ApexChartJS from "../js/apexChartJs";
import DashboardEcomJs from "../js/dashboardEcomJs";
import AppJs from "../js/appJs";

const Layout = ({ children }) => {
  return (
    <div className="text-base bg-body-bg text-body font-public dark:text-zink-100 dark:bg-zink-800 group-data-[skin=bordered]:bg-body-bordered group-data-[skin=bordered]:dark:bg-zink-700">
      {/* Sidebar and Header */}
      <div className="group-data-[sidebar-size=sm]:min-h-sm group-data-[sidebar-size=sm]:relative">
        {/* start left sidebar part */}
        <Leftsidebar />
        {/* start header part */}
        <Header />
        {/* start content part */}
        {children}
      </div>
      <>
        <div className="fixed items-center hidden bottom-6 right-12 h-header group-data-[navbar=hidden]:flex">
          <button
            data-drawer-target="customizerButton"
            type="button"
            className="inline-flex items-center justify-center w-12 h-12 p-0 transition-all duration-200 ease-linear rounded-md shadow-lg text-sky-50 bg-sky-500"
          >
            <i data-lucide="settings" className="inline-block w-5 h-5" />
          </button>
        </div>
        <div
          id="customizerButton"
          drawer-end=""
          className="fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:right-0 rtl:left-0 md:w-96 z-drawer show dark:bg-zink-600"
        >
          <div className="flex justify-between p-4 border-b border-slate-200 dark:border-zink-500">
            <div className="grow">
              <h5 className="mb-1 text-16">Tailwick Theme Customizer</h5>
              <p className="font-normal text-slate-500 dark:text-zink-200">
                Choose your themes &amp; layouts etc.
              </p>
            </div>
            <div className="shrink-0">
              <button
                data-drawer-close="customizerButton"
                className="transition-all duration-150 ease-linear text-slate-500 hover:text-slate-800 dark:text-zink-200 dark:hover:text-zink-50"
              >
                <i data-lucide="x" className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="h-full p-6 overflow-y-auto">
            <div>
              <h5 className="mb-3 underline capitalize text-15">
                Choose Layouts
              </h5>
              <div className="grid grid-cols-1 mb-5 gap-7 sm:grid-cols-2">
                <div className="relative">
                  <input
                    id="layout-one"
                    name="dataLayout"
                    className="absolute w-4 h-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                    type="radio"
                    defaultValue="vertical"
                    defaultChecked=""
                  />
                  <label
                    className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500"
                    htmlFor="layout-one"
                  >
                    <span className="flex h-full gap-0">
                      <span className="shrink-0">
                        <span className="flex flex-col h-full gap-1 p-1 ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500">
                          <span className="block p-1 px-2 mb-2 rounded bg-slate-100 dark:bg-zink-400" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                        </span>
                      </span>
                      <span className="grow">
                        <span className="flex flex-col h-full">
                          <span className="block h-3 bg-slate-100 dark:bg-zink-500" />
                          <span className="block h-3 mt-auto bg-slate-100 dark:bg-zink-500" />
                        </span>
                      </span>
                    </span>
                  </label>
                  <h5 className="mt-2 text-center text-15">Vertical</h5>
                </div>
                <div className="relative">
                  <input
                    id="layout-two"
                    name="dataLayout"
                    className="absolute w-4 h-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                    type="radio"
                    defaultValue="horizontal"
                  />
                  <label
                    className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500"
                    htmlFor="layout-two"
                  >
                    <span className="flex flex-col h-full gap-1">
                      <span className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-zink-500">
                        <span className="block p-1 ml-1 bg-white rounded dark:bg-zink-500" />
                        <span className="block p-1 px-2 pb-0 bg-white dark:bg-zink-500 ms-auto" />
                        <span className="block p-1 px-2 pb-0 bg-white dark:bg-zink-500" />
                      </span>
                      <span className="block p-1 bg-slate-100 dark:bg-zink-500" />
                      <span className="block p-1 mt-auto bg-slate-100 dark:bg-zink-500" />
                    </span>
                  </label>
                  <h5 className="mt-2 text-center text-15">Horizontal</h5>
                </div>
              </div>
              <div id="semi-dark">
                <div className="flex items-center">
                  <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in">
                    <input
                      type="checkbox"
                      name="customDefaultSwitch"
                      defaultValue="dark"
                      id="customDefaultSwitch"
                      className="absolute block w-5 h-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 bg-white/80 peer/published checked:bg-white checked:right-0 checked:border-custom-500 arrow-none dark:border-zink-500 dark:bg-zink-500 dark:checked:bg-zink-400 checked:bg-none"
                    />
                    <label
                      htmlFor="customDefaultSwitch"
                      className="block h-5 overflow-hidden transition duration-300 ease-linear border rounded-full cursor-pointer border-slate-200 bg-slate-200 peer-checked/published:bg-custom-500 peer-checked/published:border-custom-500 dark:border-zink-500 dark:bg-zink-600"
                    />
                  </div>
                  <label
                    htmlFor="customDefaultSwitch"
                    className="inline-block text-base font-medium"
                  >
                    Semi Dark (Sidebar &amp; Header)
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-6">
              {/* data-skin="" */}
              <h5 className="mb-3 underline capitalize text-15">
                Skin Layouts
              </h5>
              <div className="grid grid-cols-1 mb-5 gap-7 sm:grid-cols-2">
                <div className="relative">
                  <input
                    id="layoutSkitOne"
                    name="dataLayoutSkin"
                    className="absolute w-4 h-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                    type="radio"
                    defaultValue="default"
                  />
                  <label
                    className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500 bg-slate-50 dark:bg-zink-600"
                    htmlFor="layoutSkitOne"
                  >
                    <span className="flex h-full gap-0">
                      <span className="shrink-0">
                        <span className="flex flex-col h-full gap-1 p-1 ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500">
                          <span className="block p-1 px-2 mb-2 rounded bg-slate-100 dark:bg-zink-400" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                        </span>
                      </span>
                      <span className="grow">
                        <span className="flex flex-col h-full">
                          <span className="block h-3 bg-slate-100 dark:bg-zink-500" />
                          <span className="block h-3 mt-auto bg-slate-100 dark:bg-zink-500" />
                        </span>
                      </span>
                    </span>
                  </label>
                  <h5 className="mt-2 text-center text-15">Default</h5>
                </div>
                <div className="relative">
                  <input
                    id="layoutSkitTwo"
                    name="dataLayoutSkin"
                    className="absolute w-4 h-4 border rounded-full appearance-none cursor-pointer ltr:right-2 rtl:left-2 top-2 vertical-menu-btn bg-slate-100 border-slate-300 checked:bg-custom-500 checked:border-custom-500 dark:bg-zink-400 dark:border-zink-500"
                    type="radio"
                    defaultValue="bordered"
                    defaultChecked=""
                  />
                  <label
                    className="block w-full h-24 p-0 overflow-hidden border rounded-lg cursor-pointer border-slate-200 dark:border-zink-500"
                    htmlFor="layoutSkitTwo"
                  >
                    <span className="flex h-full gap-0">
                      <span className="shrink-0">
                        <span className="flex flex-col h-full gap-1 p-1 ltr:border-r rtl:border-l border-slate-200 dark:border-zink-500">
                          <span className="block p-1 px-2 mb-2 rounded bg-slate-100 dark:bg-zink-400" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                          <span className="block p-1 px-2 pb-0 bg-slate-100 dark:bg-zink-500" />
                        </span>
                      </span>
                      <span className="grow">
                        <span className="flex flex-col h-full">
                          <span className="block h-3 border-b border-slate-200 dark:border-zink-500" />
                          <span className="block h-3 mt-auto border-t border-slate-200 dark:border-zink-500" />
                        </span>
                      </span>
                    </span>
                  </label>
                  <h5 className="mt-2 text-center text-15">Bordered</h5>
                </div>
              </div>
            </div>
            <div className="mt-6">
              {/* data-mode="" */}
              <h5 className="mb-3 underline capitalize text-15">
                Light &amp; Dark
              </h5>
              <div className="flex gap-3">
                <button
                  type="button"
                  id="dataModeOne"
                  name="dataMode"
                  value="light"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 active"
                >
                  Light Mode
                </button>
                <button
                  type="button"
                  id="dataModeTwo"
                  name="dataMode"
                  value="dark"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Dark Mode
                </button>
              </div>
            </div>
            <div className="mt-6">
              {/* dir="ltr" */}
              <h5 className="mb-3 underline capitalize text-15">
                LTR &amp; RTL
              </h5>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  id="diractionOne"
                  name="dir"
                  value="ltr"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 active"
                >
                  LTR Mode
                </button>
                <button
                  type="button"
                  id="diractionTwo"
                  name="dir"
                  value="rtl"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  RTL Mode
                </button>
              </div>
            </div>
            <div className="mt-6">
              {/* data-content */}
              <h5 className="mb-3 underline capitalize text-15">
                Content Width
              </h5>
              <div className="flex gap-3">
                <button
                  type="button"
                  id="datawidthOne"
                  name="datawidth"
                  value="fluid"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 active"
                >
                  Fluid
                </button>
                <button
                  type="button"
                  id="datawidthTwo"
                  name="datawidth"
                  value="boxed"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Boxed
                </button>
              </div>
            </div>
            <div className="mt-6" id="sidebar-size">
              {/* data-sidebar-size="" */}
              <h5 className="mb-3 underline capitalize text-15">
                Sidebar Size
              </h5>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  id="sidebarSizeOne"
                  name="sidebarSize"
                  value="lg"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 active"
                >
                  Default
                </button>
                <button
                  type="button"
                  id="sidebarSizeTwo"
                  name="sidebarSize"
                  value="md"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Compact
                </button>
                <button
                  type="button"
                  id="sidebarSizeThree"
                  name="sidebarSize"
                  value="sm"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Small (Icon)
                </button>
              </div>
            </div>
            <div className="mt-6" id="navigation-type">
              {/* data-navbar="" */}
              <h5 className="mb-3 underline capitalize text-15">
                Navigation Type
              </h5>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  id="navbarTwo"
                  name="navbar"
                  value="sticky"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500 active"
                >
                  Sticky
                </button>
                <button
                  type="button"
                  id="navbarOne"
                  name="navbar"
                  value="scroll"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Scroll
                </button>
                <button
                  type="button"
                  id="navbarThree"
                  name="navbar"
                  value="bordered"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Bordered
                </button>
                <button
                  type="button"
                  id="navbarFour"
                  name="navbar"
                  value="hidden"
                  className="transition-all duration-200 ease-linear bg-white border-dashed text-slate-500 btn border-slate-200 hover:text-slate-500 hover:bg-slate-50 hover:border-slate-200 [&.active]:text-custom-500 [&.active]:bg-custom-50 [&.active]:border-custom-200 dark:bg-zink-600 dark:text-zink-200 dark:border-zink-400 dark:hover:bg-zink-600 dark:hover:text-zink-100 dark:hover:border-zink-400 dark:[&.active]:bg-custom-500/10 dark:[&.active]:border-custom-500/30 dark:[&.active]:text-custom-500"
                >
                  Hidden
                </button>
              </div>
            </div>
            <div className="mt-6" id="sidebar-color">
              {/* data-sidebar="" light, dark, brand, modern*/}
              <h5 className="mb-3 underline capitalize text-15">
                Sizebar Colors
              </h5>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  id="sidebarColorOne"
                  name="sidebarColor"
                  value="light"
                  className="flex items-center justify-center w-10 h-10 bg-white border rounded-md border-slate-200 group active"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-slate-600"
                  />
                </button>
                <button
                  type="button"
                  id="sidebarColorTwo"
                  name="sidebarColor"
                  value="dark"
                  className="flex items-center justify-center w-10 h-10 border rounded-md border-zink-900 bg-zink-900 group"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-white"
                  />
                </button>
                <button
                  type="button"
                  id="sidebarColorThree"
                  name="sidebarColor"
                  value="brand"
                  className="flex items-center justify-center w-10 h-10 border rounded-md border-custom-800 bg-custom-800 group"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-white"
                  />
                </button>
                <button
                  type="button"
                  id="sidebarColorFour"
                  name="sidebarColor"
                  value="modern"
                  className="flex items-center justify-center w-10 h-10 border rounded-md border-purple-950 bg-gradient-to-t from-red-400 to-purple-500 group"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-white"
                  />
                </button>
              </div>
            </div>
            <div className="mt-6">
              {/* data-topbar="" light, dark, brand, modern*/}
              <h5 className="mb-3 underline capitalize text-15">
                Topbar Colors
              </h5>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  id="topbarColorOne"
                  name="topbarColor"
                  value="light"
                  className="flex items-center justify-center w-10 h-10 bg-white border rounded-md border-slate-200 group active"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-slate-600"
                  />
                </button>
                <button
                  type="button"
                  id="topbarColorTwo"
                  name="topbarColor"
                  value="dark"
                  className="flex items-center justify-center w-10 h-10 border rounded-md border-zink-900 bg-zink-900 group"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-white"
                  />
                </button>
                <button
                  type="button"
                  id="topbarColorThree"
                  name="topbarColor"
                  value="brand"
                  className="flex items-center justify-center w-10 h-10 border rounded-md border-custom-800 bg-custom-800 group"
                >
                  <i
                    data-lucide="check"
                    className="w-5 h-5 hidden group-[.active]:inline-block text-white"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 p-4 border-t border-slate-200 dark:border-zink-500">
            <button
              type="button"
              id="reset-layout"
              className="w-full transition-all duration-200 ease-linear text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100"
            >
              Reset
            </button>
            <a
              href="#!"
              className="w-full text-white transition-all duration-200 ease-linear bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100"
            >
              Buy Now
            </a>
          </div>
        </div>
      </>

      {/* Import other necessary scripts */}
      <ChoicesJs />
      <LayoutJs />
      <PopperMinJs />
      <TippyBundleJs />
      <SidebarJs />
      <PrismJs />
      <LucideJs />
      <TailwickBoundleJs />
      <ApexChartJS />
      <DashboardEcomJs />
      <AppJs />
    </div>
  );
};

export default Layout;
