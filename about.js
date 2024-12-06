```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a runtime error if the function is not awaited
  const data = await fetch('https://api.example.com/data'); 
  const json = await data.json();
  console.log(json);
  return (
    <div>About Page</div>
  );
}
```