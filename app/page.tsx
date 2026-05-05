import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          Welcome Home
        </h1>
      </main>
      <Footer />
    </div>
  );
}
