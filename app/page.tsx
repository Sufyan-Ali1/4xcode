import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-3xl font-semibold text-black dark:text-white">
          Welcome Home
        </h1>
      </main>
    </div>
  );
}
