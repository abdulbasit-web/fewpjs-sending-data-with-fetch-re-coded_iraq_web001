// Add your code here

function submitData(name, email) {
  const newUser = {
    name,
    email,
  };
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(newUser),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      alert('stop stop stop');
      console.log(error.message);
    });
}

// submitData('test', 'test.@test.com');