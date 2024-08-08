import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
    const location = useLocation();

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                
                <Link
                    to="/"
                    className={`text-gray-800 dark:text-gray-200 border-b-2 ${
                        location.pathname === "/" ? "border-blue-500" : "border-transparent"
                    } mx-1.5 sm:mx-6`}
                >
                    Home
                </Link>

                <Link
                    to="/gallery"
                    className={`border-b-2 ${
                        location.pathname === "/gallery" ? "border-blue-500" : "border-transparent"
                    } hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6`}
                >
                    Galería
                </Link>

                <Link
                    to="/contact"
                    className={`border-b-2 ${
                        location.pathname === "/contact" ? "border-blue-500" : "border-transparent"
                    } hover:text-gray-800 dark:hover:text-gray-200 mx-1.5 sm:mx-6`}
                >
                    Contacto
                </Link>
            </div>
        </nav>
    );
};
