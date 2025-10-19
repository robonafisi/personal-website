import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center">
      <main className="w-full max-w-6xl">
        {/* Header */}
        <div className="w-full p-4 sm:p-8 border-b border-white flex justify-center sm:justify-start">
          <h1 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">
            MOHAMMAD NAFISI
          </h1>
        </div>

        {/* Main content */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full p-4 sm:p-8 border border-white mt-4 gap-6 sm:gap-8 box-border">
          {/* Image Section */}
          <div className="relative w-full sm:w-1/2 h-64 sm:h-[70vh] flex justify-center">
            <div className="relative w-full h-full max-w-[400px] sm:max-w-[800px]">
              <Image
                src="/forklift.png"
                alt="profile"
                fill
                sizes="(max-width: 768px) 90vw, 50vw"
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2">
            <ul className="text-white list-disc list-inside space-y-2 text-lg">
              <li>
                <a href="/posts" className="hover:underline">
                  Posts
                </a>
              </li>
              <li>
                <a href="/principles" className="hover:underline">
                  Principles
                </a>
              </li>
              <li>
                <a href="/questions" className="hover:underline">
                  Questions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
