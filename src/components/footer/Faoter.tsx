const Faoter = () =>  {

    return (
        <footer className="py-6 border border-t-white">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
            {/* Sección Izquierda: Información */}
            <div className="text-center sm:text-left mb-4 sm:mb-0">
                <p className="text-sm">&copy; 2025 CPWLTDA | I&D. Todos los derechos reservados.</p>
            </div>

            {/* Sección Derecha: Enlaces y Redes Sociales */}
            <div className="flex items-center space-x-6">
                {/* Enlaces */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400 text-sm">Inicio</a>
                    <a href="#" className="hover:text-blue-400 text-sm">Servicios</a>
                    <a href="#" className="hover:text-blue-400 text-sm">Contacto</a>
                </div>

                {/* Íconos de Redes Sociales */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                            />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm0 8.625a1.875 1.875 0 100 3.75 1.875 1.875 0 000-3.75z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
    
};

export default Faoter;