import axios from 'axios';
import { useRouter } from 'next/router.js';
import { useState } from 'react';

export default function Axios() { 
  const router = useRouter();

      //get token string
      function getToken(){

        if (typeof window !== 'undefined') {
          const tokenString = localStorage.getItem('token');
          const userToken = JSON?.parse(tokenString);
          return userToken;
        }


    }
    //get user string
    function getUser(){
      if (typeof window !== 'undefined') {

        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
      }
    }

  const [user,setUser] = useState(getUser());
  const [token,setToken] = useState(getToken());

  function saveToken(user,token){
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      const storeToken = localStorage.setItem('token',JSON.stringify(token));
      const storeUser = localStorage.setItem('user',JSON.stringify(user));

      setToken(storeToken);
      setUser(storeUser);

      router.replace("/profile/user/", "/dashboard");

    }
  }

  function logout(){
    localStorage.clear();
     router.replace("/profile/user/", "/login");
  }

    const http = axios.create({
        // baseURL:"http://hotel.api",
        headers:{
            "Content-Type":"application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${token}`
        }
    });

  return {
    http,
    saveToken,
    logout,
    token,
    user,
    getToken
  };
}