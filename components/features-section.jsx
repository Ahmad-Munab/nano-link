/**
 * v0 by Vercel.
 * @see https://v0.dev/t/b8S374nOBMo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="w-full py-16 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-900 dark:text-white"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col justify-center space-y-8 text-center">
                    <div className="space-y-8 mx-auto max-w-[700px]">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-center md:text-5xl text-4xl font-bold dark:text-white text-gray-900">
                                Features
                            </h1>
                            <div className="mx-auto rounded-xl w-[7rem] h-[6px] bg-indigo-700" />
                        </div>
                        <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            The all-in-one platform for creating, sharing, and
                            tracking links. Shorten URLs, customize branded
                            links, and measure engagement with advanced
                            analytics.
                        </p>
                    </div>
                    <div className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
                        <div className="grid gap-2 bg-white dark:bg-gray-800 h-full px-4 py-6 rounded-lg shadow-lg">
                            <LinkIcon className="w-10 h-10 mx-auto text-blue-500" />
                            <h3 className="text-lg text-gray-900 dark:text-white font-bold">
                                Custom short links
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                Create branded, memorable short links that
                                reflect your brand.
                            </p>
                        </div>
                        <div className="grid gap-2 bg-white dark:bg-gray-800 h-full px-4 py-6 rounded-lg shadow-lg">
                            <ArrowUpIcon className="w-10 h-10 mx-auto text-blue-500" />
                            <h3 className="text-lg text-gray-900 dark:text-white font-bold">
                                Analytics tracking
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                Gain insights into your audience with detailed
                                click analytics.
                            </p>
                        </div>
                        <div className="grid gap-2 bg-white dark:bg-gray-800 h-full px-4 py-6 rounded-lg shadow-lg">
                            <LockIcon className="w-10 h-10 mx-auto text-blue-500" />
                            <h3 className="text-lg text-gray-900 dark:text-white font-bold">
                                Password protection
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                Secure your links with password protection for
                                restricted access.
                            </p>
                        </div>
                        <div className="grid gap-2 bg-white dark:bg-gray-800 h-full px-4 py-6 rounded-lg shadow-lg">
                            <CalendarCheckIcon className="w-10 h-10 mx-auto text-blue-500" />
                            <h3 className="text-lg text-gray-900 dark:text-white font-bold">
                                Expiry dates
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                Set expiration dates for your links to make them
                                automatically expire.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArrowUpIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    );
}

function CalendarCheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
            <path d="m9 16 2 2 4-4" />
        </svg>
    );
}

function LinkIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    );
}

function LockIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}
