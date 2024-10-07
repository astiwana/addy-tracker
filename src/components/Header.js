import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto">
                <div className="flex gap-6 px-8">
                    <Link href={'/'}>LinkList</Link>
                    <nav className="flex items-center gap-4 text-slate-500 text-sm">
                        <Link href={'/about'}>About</Link>
                        <Link href={'/contact'}>Contact</Link>
                    </nav>
                </div>
                <nav className="flex gap-4 text-sm text-slate-500">
                    <Link href={'/login'}>Sign In</Link>
                    <Link href={'/register'}>Create Account</Link>
                </nav>
            </div>
      </header>
    );
}
