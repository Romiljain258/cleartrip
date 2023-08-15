import { useState, useEffect, useCallback, useContext } from "react";
import Card from './Card';
import Header from './Header';
import MyContext from "../context/context";

const Result = () => {
    let [data, setData] = useState([]);
    let [filterData, setFilterData] = useState([]);
    let { contextData } = useContext(MyContext);
    let { favArr } = contextData;

    const fetchApi = async () => {
        try{
            let res = await fetch("https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c")
            let res2 = await res.json("");
            setData(res2);
            setFilterData(res2);
        }catch(e){
            console.log(e);
        }
    };

    useEffect(() => {
        fetchApi();
    }, [])

    const filterRes = useCallback((val) => {
        let filteredData = data;
        let res = filteredData.filter((d) => (d.name.slice(0, val.length).toLowerCase() == val || d.id.slice(0, val.length).toLowerCase() == val));
        setFilterData(res);
    }, [data]);

    const showfav = useCallback(() => {
        setFilterData(favArr);
    }, []);

    const refreshUI = useCallback(() => {
        setFilterData(data);
    }, [data]);

    const handleSort = () => {
        let res = [...data].sort((a, b) => a.price - b.price);
        setFilterData(res);
    };

    return (
        <MyContext.Provider value={contextData}>
            <div className="main__conatiner">
                <Header data={filterData} filterRes={filterRes} showfav={showfav} refreshUI={refreshUI} handleSort={handleSort} />
                <Card data={filterData} />
            </div>
        </MyContext.Provider>
    )
};

export default Result;