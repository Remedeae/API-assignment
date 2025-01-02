import { useEffect, useState } from 'react';
import axios, { isCancel, AxiosError } from 'axios';

function Home() {

    const [search, setSearch] = useState();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://randomuser.me/api/").then((res) =>
            setData(res.data.results));
    }, []);
    console.log(data)

    const handleSearch = () => {

        setSearch = ("");
    };

    return (
        <div className="home">
            <form action="">
                <label htmlFor="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input type="text" id="search" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button onClick={handleSearch}>Search</button>
            </form>
            <div>
                {data.filter((item) => {
                    return
                    if (search.toLowerCase === "") {item}
                    else if (search.toLowerCase === "first") {}
                }).map((info, index) => (
                    <ul key={index}>
                        <li>First name: {info.name.first}</li>
                        <li>Last name: {info.name.last}</li>
                        <li>Gender: {info.gender}</li>
                        <li>Age: {info.dob.age}</li>
                        <li>City of residence: {info.location.city}</li>
                        <li>Nationality: {info.location.country}</li>
                        <li>Phonenumber: {info.phone}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

export default Home;