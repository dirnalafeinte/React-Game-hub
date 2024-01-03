import {AxiosRequestConfig, CanceledError} from "axios";
import {useEffect, useState} from "react";
import apiClient from "../services/apiClient.ts";

interface FetchingRes<T> {
    count: number,
    results: T[]
}

const useData = <T>(endpoint : string, requestconfig? : AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setIsLoading(true)
        apiClient.get<FetchingRes<T>>(endpoint, {signal: controller.signal, ...requestconfig})
            .then(response => {
                setIsLoading(false)
                setData(response.data.results)
            })
            .catch(error => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setIsLoading(false)
            })

        return () => controller.abort()
    }, deps ? [...deps] : [])

    return {data, error, isLoading}
}

export default useData