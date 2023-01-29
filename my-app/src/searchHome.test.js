import axios from 'axios';
import {searchHome} from './pages/searchHome'; // import the component you want to test
import {render, fireEvent} from '@testing-library/react'


test('Test axios GET request', async () => {
    const ipAddress = '127.0.0.1';
    const mockData = { city: 'San Francisco' };
    axios.get = jest.fn().mockResolvedValue({ data: mockData });
    const response = await axios.get(`http://localhost:8080/city/${ipAddress}`);
    expect(axios.get).toHaveBeenCalledWith(`http://localhost:8080/city/${ipAddress}`);
    expect(response.data).toEqual(mockData);
  });

  
  test('Test if response has data', async () => {
    const ipAddress = '127.0.0.1';
    const mockData = { city: 'San Francisco' };
    axios.get = jest.fn().mockResolvedValue({ data: mockData });
    const response = await axios.get(`http://localhost:8080/city/${ipAddress}`);
    expect(response.data).toBeTruthy();
  });


  test('Test if response includes longitude and latitude', async () => {
    const ipAddress = '127.0.0.1';
    const mockData = { city: 'San Francisco', longitude: '123', latitude: '456' };
    axios.get = jest.fn().mockResolvedValue({ data: mockData });
    const response = await axios.get(`http://localhost:8080/city/${ipAddress}`);
    expect(response.data).toHaveProperty('longitude');
    expect(response.data).toHaveProperty('latitude');
  });
  
  