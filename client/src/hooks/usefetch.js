import { useEffect, useState } from "react";
import { fetchDatafromApi } from "../utils/api";

const Usefetch = (endpoint) => {
    const [data, setdata] = useState();

    useEffect(
        (async) => {
            makeapicall(endpoint);
        },
        [endpoint]
    );

    const makeapicall = async (endpoint) => {
        const res = await fetchDatafromApi(endpoint);
        setdata(res);
    };
    return { data };
};
export default Usefetch;
