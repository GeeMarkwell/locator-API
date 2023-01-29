import React, { useState } from 'react'
import axios from 'axios'

export const SearchHome = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [data, setData] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

  //Once handleSubmit is triggered, will use value entered to = ${ipAddress}
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`http://localhost:8080/city/${ipAddress}`);
    // `data` = {object} containg longitude and latidue within response.
    let data = response.data;
    //Hooks to set long & lat values
    setData(data);
    setLongitude(data.longitude)
    setLatitude(data.latitude)
    // console.log(longitude) some debugging/testing
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-bl from-gray-700 via-gray-900 to-black">
    <form className="bg-white rounded-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-2" onSubmit={handleSubmit}>
      <div className="flex">
        <input className="border-none outline-none border-gray-300  w-full p-2" placeholder="Enter IP Address" type="text" value={ipAddress} onChange={event => setIpAddress(event.target.value)} />
      <button className="ml-2 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600" type="submit">Search</button>
      </div>
      {data && (
        <div className="flex border-t-[2px] mt-4 justify-center justify-evenly">
          <h1 className="text-lg">Longitude: {longitude}</h1>
          <p className="text-lg">Latitude: {latitude}</p>
        </div>
      )}
    </form>
    </div>
  );
}
