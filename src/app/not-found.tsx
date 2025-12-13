// app/not-found.tsx
import Link from "next/link";


export default function NotFound() {
    return (
        <div className="not-found">
            <div className="content">
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>

                <Link href="/" className="">
                    Go Home
                </Link>
            </div>
        </div>
    );
}
