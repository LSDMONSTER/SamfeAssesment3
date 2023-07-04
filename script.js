

axios.get('INSERT API KEY HERE')
  .then(response => {
    
    const currencyData = response.data;

    
    chartData1.options.series = [{
      name: 'Currency',
      data: currencyData.map(item => item.amount)
    }]

    
    chart1.updateOptions(chartData1.options);
  })
  .catch(error => {
    console.error('Error fetching currency data:', error);
  });
  
  const chartData2 = {
    options: {
      chart: {
        type: 'line',
        foreColor: '#ffffff',
        background: '#3a3153'
      },
      series: [{
        name: 'Visitors',
        data: [120, 150, 100, 180, 90, 200, 150, 120, 250]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: ['#4d79ff'] 
    }
  };
  
  const chartData3 = {
    options: {
      chart: {
        type: 'area',
        foreColor: '#ffffff',
        background: '#3a3153'
      },
      series: [{
        name: 'Revenue',
        data: [500, 600, 800, 650, 700, 900, 750, 800, 950]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: ['#ffa64d'] 
    }
  };
  
  const chartData4 = {
    options: {
      chart: {
        type: 'donut',
        foreColor: '#ffffff',
        background: '#3a3153'
      },
      series: [30, 25, 20, 25],
      labels: ['Euro', 'Dollar', 'Yen', 'Pound'],
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          const total = opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0);
          const percentage = ((val / total) * 100).toFixed(1);
          return `${val} (${percentage}%)`;
        },
        style: {
          fontSize: 'px',
          fontFamily: 'Arial, sans-serif'
        }
      },
      legend: {
        position: 'bottom'
      },
      colors: ['#80ff80', '#4d79ff', '#ffa64d', '#8f3eff']
    }
  };
  
  
  
  
  
  const chart2 = new ApexCharts(document.querySelector('#chart2'), chartData2.options);
  chart2.render();
  
  const chart3 = new ApexCharts(document.querySelector('#chart3'), chartData3.options);
  chart3.render();
  
  const chart4 = new ApexCharts(document.querySelector('#chart4'), chartData4.options);
  chart4.render();
  