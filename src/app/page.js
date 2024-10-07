import HeroForm from "@/components/forms/HeroForm";

export default function Home() {
  return (
    <main>
      <section className="p-6 pt-32 max-w-4xl mx-auto">
        <div className="max-w-md mb-6">
          <h1 className="text-6xl font-bold">
            Your one link<br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and more on page
          </h2>
        </div>
        <HeroForm />
      </section>
    </main>
  );
}
