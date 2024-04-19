import ToastMessage from '@/components/Toast';
import { SECURITY_END_POINT } from '@/constants';
import { post } from '@/helpers/api_helper';
import Axios from '@/utils/axios';
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { http, setToken,saveToken, token } = Axios();
    console.log("email",email);
    console.log("password",password);

    const notify = React.useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);



    const submitForm = async (event) => {

        // console.log("click",email,password)
        event.preventDefault();
        try {
          const login = await post(SECURITY_END_POINT.login(), {  email: email,password: password });
          console.log(login);
        //   return; 
          saveToken(login.data.user,login.data.access_token);
          notify("success", "successfully Login!");
    
        } catch (error) {
          let message;
          const errorStatus = error?.response?.status;
          if (errorStatus) {
            switch (error.response.status) {
              case 404:
                message = 'Sorry! the page you are looking for could not be found';
                break;
              case 500:
                message = 'Sorry! something went wrong, please contact our support team';
                break;
              case 401:
                message = 'Invalid credentials';
                break;
              default:
                message = error[1];
                break;
            }
          }
    
    
          if (!errorStatus && error.code === 'ERR_NETWORK') {
            message = 'Netword Error!';
          }
          notify("error", message);
        }
        // console.log("{ phone: phone, password: password }",{ phone: phone, password: password });
    
      }

    return (
        <>
            <div className="relative">
                <div className="absolute hidden opacity-50 ltr:-left-16 rtl:-right-16 -top-10 md:block">
                    <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 125 316"
                        width={125}
                        height={316}
                    >
                        <title>&lt;Group&gt;</title>
                        <g id="<Group>">
                            <path
                                id="<Path>"
                                className="fill-custom-100/50 dark:fill-custom-950/50"
                                d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-100 dark:fill-custom-950"
                                d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-200/50 dark:fill-custom-900/50"
                                d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-200/75 dark:fill-custom-900/75"
                                d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-200 dark:fill-custom-900"
                                d="m54.6 253.1l-1.3-3.1v-315.4l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-300/50 dark:fill-custom-800/50"
                                d="m62.4 260.9l-1.2-3.1v-315.4l1.2 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-300/75 dark:fill-custom-800/75"
                                d="m70.3 268.7l-1.3-3.1v-315.4l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-300 dark:fill-custom-800"
                                d="m78.1 276.5l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-400/50 dark:fill-custom-700/50"
                                d="m85.9 284.3l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-400/75 dark:fill-custom-700/75"
                                d="m93.7 292.1l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-400 dark:fill-custom-700"
                                d="m101.5 299.9l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-500/50 dark:fill-custom-600/50"
                                d="m109.3 307.8l-1.3-3.1v-315.4l1.3 3.1z"
                            />
                        </g>
                    </svg>
                </div>
                <div className="absolute hidden -rotate-180 opacity-50 ltr:-right-16 rtl:-left-16 -bottom-10 md:block">
                    <svg
                        version="1.2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 125 316"
                        width={125}
                        height={316}
                    >
                        <title>&lt;Group&gt;</title>
                        <g id="<Group>">
                            <path
                                id="<Path>"
                                className="fill-custom-100/50 dark:fill-custom-950/50"
                                d="m23.4 221.8l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-100 dark:fill-custom-950"
                                d="m31.2 229.6l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-200/50 dark:fill-custom-900/50"
                                d="m39 237.4l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-200/75 dark:fill-custom-900/75"
                                d="m46.8 245.2l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-200 dark:fill-custom-900"
                                d="m54.6 253.1l-1.3-3.1v-315.4l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-300/50 dark:fill-custom-800/50"
                                d="m62.4 260.9l-1.2-3.1v-315.4l1.2 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-300/75 dark:fill-custom-800/75"
                                d="m70.3 268.7l-1.3-3.1v-315.4l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-300 dark:fill-custom-800"
                                d="m78.1 276.5l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-400/50 dark:fill-custom-700/50"
                                d="m85.9 284.3l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-400/75 dark:fill-custom-700/75"
                                d="m93.7 292.1l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-400 dark:fill-custom-700"
                                d="m101.5 299.9l-1.3-3.1v-315.3l1.3 3.1z"
                            />
                            <path
                                id="<Path>"
                                className="fill-custom-500/50 dark:fill-custom-600/50"
                                d="m109.3 307.8l-1.3-3.1v-315.4l1.3 3.1z"
                            />
                        </g>
                    </svg>
                </div>
                <div className="mb-0 w-screen lg:mx-auto lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
                    <div className="!px-10 !py-12 card-body">
                        <a href="#!">
                            <img
                                src="./assets/images/logo-light.png"
                                alt=""
                                className="hidden h-6 mx-auto dark:block"
                            />
                            <img
                                src="./assets/images/logo-dark.png"
                                alt=""
                                className="block h-6 mx-auto dark:hidden"
                            />
                        </a>
                        <div className="mt-8 text-center">
                            <h4 className="mb-1 text-custom-500 dark:text-custom-500">
                                Welcome Back !
                            </h4>
                            <p className="text-slate-500 dark:text-zink-200">
                                Sign in to continue to Tailwick.
                            </p>
                        </div>
                        <form  className="mt-10" >
                            <div
                                className="hidden px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50"
                                id="successAlert"
                            >
                                You have <b>successfully</b> signed in.
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="username"
                                    className="inline-block mb-2 text-base font-medium"
                                >
                                    UserName/ Email ID
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter username or email"
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <div id="username-error" className="hidden mt-1 text-sm text-red-500">
                                    Please enter a valid email address.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="password"
                                    className="inline-block mb-2 text-base font-medium"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <div id="password-error" className="hidden mt-1 text-sm text-red-500">
                                    Password must be at least 8 characters long and contain both letters
                                    and numbers.
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <input
                                        id="checkboxDefault1"
                                        className="border rounded-sm appearance-none size-4 bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                                        type="checkbox"
                                        defaultValue=""
                                    />
                                    <label
                                        htmlFor="checkboxDefault1"
                                        className="inline-block text-base font-medium align-middle cursor-pointer"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <div id="remember-error" className="hidden mt-1 text-sm text-red-500">
                                    Please check the Remember me before submitting the form.
                                </div>
                            </div>
                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                                onClick={submitForm}
                                >
                                    Sign In
                                </button>
                            </div>
                            <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                                <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">
                                    Sign In with
                                </h5>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2">
                                <button
                                    type="button"
                                    className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600"
                                >
                                    <i data-lucide="facebook" className="size-4" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600"
                                >
                                    <i data-lucide="mail" className="size-4" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600"
                                >
                                    <i data-lucide="twitter" className="size-4" />
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600"
                                >
                                    <i data-lucide="github" className="size-4" />
                                </button>
                            </div>
                            <div className="mt-10 text-center">
                                <p className="mb-0 text-slate-500 dark:text-zink-200">
                                    Dont have an account ?{" "}
                                    <a
                                        href="auth-register-basic.html"
                                        className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"
                                    >
                                        {" "}
                                        SignUp
                                    </a>{" "}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login