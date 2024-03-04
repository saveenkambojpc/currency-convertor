import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../config/axios";

export default function useAvailableCurrencies() {
    const [data, setData] = useState([])
    useEffect(() => {
        axiosInstance.get('/listquotes').then(({ data }) => {
            setData(data)
        })
    }, [])    
    return data
}