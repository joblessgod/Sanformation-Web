import { SignUp } from '@clerk/nextjs';

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100">

            <main className="flex flex-col items-center justify-center flex-1 p-6 bg-red-300 rounded-lg shadow-lg">
                <SignUp />
            </main>
            <footer className="w-full p-4 mt-4 bg-gray-700 text-white text-center">
                <p>&copy; 2023 Sanformation. All rights reserved.</p>
            </footer>
        </div>
    );
}