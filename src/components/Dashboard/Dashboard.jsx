import React, { useEffect, useState } from 'react';

import FilteredChart from '../FilteredChart/FilteredChart';
import { parseFile } from '../../utils/CSVParser/CSVParser';

const Dashboard = () => {
  const [message, setMessage] = useState('Loading data. Please wait.');
  const [data, setData] = useState({ data: [] });

  async function fetchData() {
    try {
      const parsedData = await parseFile('http://localhost:3000/data.csv')
      
      if (parsedData.errors.length) setMessage(parsedData.errors);
      else setMessage(false);

      setData(parsedData);
    } catch(error) {
      setMessage(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      { message
        ? JSON.stringify(message)
        : <FilteredChart data={data.data} />
      }
    </div>
  );
};

export default Dashboard;