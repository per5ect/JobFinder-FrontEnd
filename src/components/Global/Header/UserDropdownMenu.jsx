export function UserDropdownMenu() {
    return (
        <>
            <li>
                <a href="/my-account" className="block px-4 py-3 hover:bg-black dark:hover:text-white">
                    My account
                </a>
            </li>
            <li>
                <a href="/my-applications" className="block px-4 py-3 hover:bg-black dark:hover:text-white">
                    Applications
                </a>
            </li>
            <li>
                    <a href="/favorite-vacancies" className="block px-4 py-3 transition-colors ease-in-out hover:bg-black dark:hover:text-white">
                        Favorite vacancies
                    </a>
            </li>
        </>
    )
}