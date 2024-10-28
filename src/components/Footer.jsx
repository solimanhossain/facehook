export default function Footer() {
    return (
        <footer className="sticky top-0 z-50 border-t border-[#3F3F3F] bg-[#1E1F24] py-4 h-[3rem]">
            <div className="container flex flex-col items-center justify-center gap-6 sm:flex-row">
                <p className="text-sm text-gray-400">
                    {"All rights reserved. Copyright © 2024 | By "}
                    <a
                        className="underline"
                        href="https://solimanhossain.github.io/"
                    >
                        Soliman Hossain
                    </a>
                </p>
            </div>
        </footer>
    );
}
