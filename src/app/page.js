import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <div>
        <Link href={'/'}>LinkList</Link>
        <nav>
          <Link href={'/about'}>About</Link>
          <Link href={'/about'}>Contact</Link>
        </nav>
        </div>
        <div>
          <Link href={'/login'}>Sign In</Link>
          <Link href={'/register'}>Create Account</Link>
        </div>
      </header>
      <section>

      </section>
    </main>
  );
}
