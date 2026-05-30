// Day 47: Async/Await & Fetch Practice
console.log("Day 47: Async/Await & Fetch Practice");

async function fetchData(url) {
    try {
        console.log('Fetching data from:', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log('Data fetched successfully:');
        console.log('Title:', data.title);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
fetchData(apiUrl);