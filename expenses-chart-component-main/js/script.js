const ctx = document.getElementById('graficoUm');


  


  const data =  fetch('./db.json');
  data.then(r => r.json())
  .then(json =>{


    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: json.map(row => row.day),
        datasets: [{
          label: '$',
          data: json.map(row => row.amount),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
         
        }
      }
    });
  


  })