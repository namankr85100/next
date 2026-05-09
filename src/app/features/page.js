import Nav from "../nav";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900">Features</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore all the powerful AI features built to help your business grow faster.
        </p>
      </main>
    </div>
  );
}
