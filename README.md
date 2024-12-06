# Next.js 15 Runtime Error: Client-Side Data Fetching

This repository demonstrates a common runtime error encountered in Next.js 15 applications when performing client-side data fetching within dynamic routes.  The error arises from incorrectly using the `await` keyword in a non-async function.

## The Problem

The `about.js` file attempts to fetch data from an external API using `fetch` and `await` within a non-async function. This causes a runtime error in the browser because `await` can only be used inside an `async` function.

## The Solution

The `aboutSolution.js` file corrects this by declaring the `About` function as `async`. This allows `await` to be used correctly, resolving the runtime error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about` in your browser.  The original `about.js` will throw an error; the solution will work properly.

## Lessons Learned

* Always declare functions as `async` when using `await`.
* Ensure you handle potential errors during data fetching (e.g., network errors).
* Consider using `next/fetch` for optimized data fetching within Next.js applications.