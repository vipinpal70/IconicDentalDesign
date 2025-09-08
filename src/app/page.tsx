import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col items-center">
      <Header />
      <h1 className="mt-12 text-blue-500 text-4xl sm:text-6xl font-bold">
        Welcome to <span className="text-primary">Iconic Dental Design</span>
      </h1>
    </div>
  );
}
