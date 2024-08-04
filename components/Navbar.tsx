import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="max-w-6xl mx-auto py-4">
            <div className="flex items-center gap-4">
                <Link href={"/"} className="hover:underline text-sm">
                    Home
                </Link>
                <Link href={"/post"} className="hover:underline text-sm">
                    Post
                </Link>
            </div>
        </nav>
    );
}
