import React from 'react'

// Note: add bottom padding to your main page container (e.g. <main className="pb-28">)
// so page content doesn't get covered by the fixed footer.
const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-100 px-6 py-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex flex-col">
                    <span className="text-2xl font-semibold">Savorly</span>
                    <span className="text-sm text-gray-400 mt-1">Fresh ideas, easy cooking — every day.</span>
                </div>

                <div className="flex flex-col items-start">
                    <div className="flex gap-3" aria-label="Social links">
                        <a href="https://app.netlify.com/teams/dev-varun-007/projects?creator=me" target="_blank" rel="noopener noreferrer" aria-label="Netlify" className="hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 2L2 7l3 11h14l3-11-10-5zM12 6l6.16 3.09L12 15 5.84 9.09 12 6z"/>
                            </svg>
                        </a>
                        <a href="https://github.com/varunwebcodes" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5A11.5 11.5 0 001.5 12.03C1.5 17 4.28 21.1 8.44 22.5c.62.12.84-.27.84-.6 0-.3-.01-1.09-.02-2.14-3.43.75-4.15-1.64-4.15-1.64-.56-1.44-1.36-1.83-1.36-1.83-1.11-.76.09-.75.09-.75 1.22.09 1.86 1.26 1.86 1.26 1.09 1.87 2.86 1.33 3.56 1.02.11-.79.43-1.33.78-1.64-2.74-.31-5.62-1.37-5.62-6.08 0-1.34.48-2.43 1.26-3.29-.13-.31-.55-1.56.12-3.25 0 0 1.02-.33 3.33 1.26a11.46 11.46 0 016.06 0c2.31-1.59 3.32-1.26 3.32-1.26.68 1.69.26 2.94.13 3.25.79.86 1.26 1.95 1.26 3.29 0 4.72-2.89 5.76-5.64 6.07.44.38.83 1.13.83 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.73.85.6A11.5 11.5 0 0012 .5z"/>
                            </svg>
                        </a>
                    </div>

                    <a href="mailto:hello@foodrecipe.example" className="mt-3 text-sm text-gray-400 hover:text-white">varunnegiweb@gmail.com</a>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-6 pt-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-2">
                    <span>© {new Date().getFullYear()} Savorly. All rights reserved.</span>
                    <span>Designed for home cooks • <a href="/terms" className="hover:text-white">Terms</a></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer