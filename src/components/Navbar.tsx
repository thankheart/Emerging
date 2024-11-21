export default function Navbar() {
    return (
        <nav className="w-full bg-teal-800 text-white py-4 shadow-lg">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
                <h1 className="text-2xl font-bold">Domestic Humanoid Robot</h1>
                <h3 className="text-sm sm:text-base font-medium mt-2 sm:mt-0">
                    Jung, John, Cort, & Steven
                </h3>
            </div>
        </nav>
    );
}
