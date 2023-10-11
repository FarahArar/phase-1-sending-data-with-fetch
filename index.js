// Add your code here

function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    const data = {
      name: name,
      email: email
    };
    const jsonData = JSON.stringify(data);
  
    return fetch(url, {
      method: 'POST',
      headers: headers,
      body: jsonData
    })
    .then(response => response.json())
    .then(data => {
      // Handle successful response
      const id = data.id;
      const idElement = document.createElement('div');
      idElement.textContent = 'New ID: ' + id;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      console.error('Error:', error);
      const errorElement = document.createElement('div');
      errorElement.textContent = 'Error: ' + error.message;
      document.body.appendChild(errorElement);
    });
  }






    

