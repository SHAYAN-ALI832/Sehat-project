import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  // Sample data for the months of 2024 for All, Northwest, and RMI
  const data = {
    2024: {
      All: [320, 50, 280, 70, 260, 40, 220, 30, 200, 20, 180],
      Northwest: [100, 130, 160, 150, 140, 180, 190, 200, 210, 230, 240, 250],
      RMI: [80, 100, 120, 110, 100, 130, 140, 150, 160, 180, 190, 200],
    },
    2023: {
      All: [110, 140, 170, 160, 150, 190, 200, 210, 220, 240, 250, 260],
      Northwest: [90, 120, 150, 140, 130, 170, 180, 190, 200, 220, 230, 240],
      RMI: [70, 90, 110, 100, 90, 120, 130, 140, 150, 170, 180, 190],
    },
    // Add other years as needed
  };

  // State for selecting year and region
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Chart data preparation
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: `${selectedRegion} Data ${selectedYear}`,
        data: data[selectedYear][selectedRegion],
        backgroundColor: '#f59e0b', // Green color for bars
        borderColor: '#388e3c', // Darker green for borders
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 2,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        // text: `Monthly Data for ${selectedRegion} - ${selectedYear}`,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
    elements: {
    bar: {
      borderRadius: 20, // Round the edges of the bars
      borderWidth: 3, // Add a border width for better visibility
      barThickness: 2, // Set the thickness of the bars
      maxBarThickness: 2, // Maximum thickness allowed for bars
    },
  },
  };

  return (
    <div className='bg-white mt-3 mx-auto rounded-lg h-[20rem] w-[97vw]'>
    <div>
      {/* Year Selection */}
      <div className='flex justify-between pt-2'>
        <div className='flex items-center gap-x-3 pl-2'>
          <p>Total Funds Utilized</p>
          <select className='bg-yellow-300 rounded-md p-1' onChange={(e) => setSelectedYear(Number(e.target.value))} value={selectedYear}>
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            {/* Add other years as needed */}
          </select>
        </div>
        <select className='bg-blue-200 rounded-md  text-blue-700 mr-1' onChange={(e) => setSelectedRegion(e.target.value)} value={selectedRegion}>
          <option value="All">All</option>
          <option value="Northwest">Northwest</option>
          <option value="RMI">RMI</option>
        </select>
      </div>
      <p className='text-[25px] font-semibold ml-2'>{'568,997'}<sup className='text-[15px] no-underline'>PKR</sup></p>
    </div>
  
    {/* Bar Chart */}
    <div className="w-[95vw] h-[15rem]">
    <Bar data={chartData} options={options}/>

    </div>
  </div>
  
  );
};

export default BarChart;
