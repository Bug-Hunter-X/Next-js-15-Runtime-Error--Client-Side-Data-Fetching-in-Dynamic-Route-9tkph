```javascript
// pages/aboutSolution.js

export default async function About() {
  try {
    const data = await fetch('https://api.example.com/data'); 
    if (!data.ok) {
      throw new Error(`HTTP error! status: ${data.status}`);
    }
    const json = await data.json();
    console.log(json);
    return (
      <div>About Page: {JSON.stringify(json)}</div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>Error loading data.</div>
    );
  }
}
```