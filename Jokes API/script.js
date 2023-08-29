document.addEventListener('DOMContentLoaded', function () {
    const jokeElement = document.getElementById('joke');
    const fetchJokeButton = document.getElementById('fetch-joke');
  
    fetchJokeButton.addEventListener('click', fetchJoke);
  
    function fetchJoke() {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          displayJoke(data.value);
        })
        .catch(error => {
          console.error('Error fetching joke:', error);
        });
    }
  
    function displayJoke(joke) {
      jokeElement.textContent = joke;
    }
  });
  