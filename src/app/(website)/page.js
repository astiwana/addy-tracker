import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import Image from "next/image";

const imageUrl = "/assets/preview.png";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="px-8 py-16"> {/* Add padding to the main section */}
      <section className="pt-32 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
        {/* Increase the max-width and space between sections */}
        <div className="max-w-7xl mb-8 md:mb-0 md:mr-16">
          {/* Increase the text size for the heading */}
          <h1 className="text-7xl font-bold">Crypto addresses simplified</h1>
          <h2 className="text-gray-500 text-3xl mt-8 mb-6">
            Share all your cryptocurrency addresses, contact info, and more on one page.
          </h2>
          {/* Increase form size */}
          <div className="max-w-2xl">
            <HeroForm user={session?.user} />
          </div>
        </div>

        {/* Increase the image size */}
        <Image
          src={imageUrl}
          alt="banner image"
          width={450} // Increased width
          height={450} // Increased height to maintain aspect ratio
          className="rounded-2xl border-4 shadow-gray-500/20 shadow-lg hover:shadow-2xl transition-shadow"
        />
      </section>
    </main>
  );
}
