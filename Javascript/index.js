document.getElementById('date').innerHTML = new Date().toDateString();

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then( (json) => {
      console.log(json);
      document.querySelector('#post').innerHTML = json.body
  });

// test commit