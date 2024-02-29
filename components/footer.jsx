const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-auto border-t bottom-0">
            <div className="w-full mx-auto max-w-screen-xl sm:px-8 p-4 flex md:flex-row flex-col items-center md:justify-between justify-center gap-4">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023-2036{" "}
                    <a
                        href="https://github.com/ahmad-munab"
                        className="hover:underline"
                    >
                        Ahmad Munab
                    </a>
                    . All Rights Reserved.
                </span>

                <li className="flex gap-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    Contact me:
                    <p className="hover:underline">ahmadmunab22@gmail.com</p>
                </li>
            </div>
        </footer>
    );
};

export default Footer;
