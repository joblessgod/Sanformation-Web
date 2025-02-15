import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
  const user = await currentUser()
  return (
    <div className="bg-gray-100 text-black grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold text-center">{user ? `Hello ${user.fullName}` : `Hello Guest User`}</h1>
      <div className="text-center"></div>
      <h2 className="text-2xl font-semibold mt-8">Welcome to Sanformation</h2>
      <p className="mt-4 text-lg">
        Sanformation is your go-to source for the latest tech information. Sanchit provides insights, tutorials, and updates on the newest trends in technology.
      </p>
      <div className="mt-8">
        <h3 className="text-xl font-medium">Latest Articles</h3>
        <ul className="list-disc list-inside mt-4 text-left">
          <li>Understanding JavaScript Closures</li>
          <li>Getting Started with React Hooks</li>
          <li>Exploring the New Features in ES2023</li>
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-medium">What People Say</h3>
        <ul className="list-disc list-inside mt-4 text-left">
          <li>"Sanformation is a fantastic resource for tech enthusiasts!" - Jane Doe</li>
          <li>"I always find the latest tech trends here." - John Smith</li>
          <li>"The tutorials are easy to follow and very informative." - Alice Johnson</li>
        </ul>
      </div>
      <div className="mt-8 flex space-x-4">
        <a href="https://twitter.com" className="text-blue-500">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="https://facebook.com" className="text-blue-700">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://linkedin.com" className="text-blue-600">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; 2025 All rights reserved.
      </div>
    </div>
  )
}
