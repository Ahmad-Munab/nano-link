const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-auto border-t ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a
                        href="https://github.com/ahmad-munab"
                        className="hover:underline"
                    >
                        Ahmad Munab
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li className="flex gap-3">
                        Contact me:
                        <p className="hover:underline">
                            ahmadmunab22@gmail.com
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
