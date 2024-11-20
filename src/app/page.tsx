import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <main>
        <div className="h-[calc(10vh-2rem)] w-[calc(99vw-2rem)] p-8 border border-white box-border flex items-center">
          <h1 className="text-2xl font-bold text-white">MOHAMMAD NAFISI</h1>
        </div>
        <div className="h-[calc(85vh-2rem)] w-[calc(99vw-2rem)] p-8 border border-white box-border flex items-center">
          <div className="flex w-full items-center">
            {/* Left half with the image */}
            <div className="flex-1 h-[70vh] relative">
              <Image 
                src="/forklift.png" 
                alt="profile"
                fill
                sizes="50vw"
                priority
                className="object-cover"
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '800px',
                  maxHeight: '800px'
                }}
              />
            </div>
            {/* Right half with the bullet point list */}
            <div className="flex-1 flex flex-col items-start pl-4">
              <ul className="text-white list-disc pl-6">
                <li>
                  <a href="#link1" className="text-white hover:underline">Posts</a>
                </li>
                <li>
                  <a href="/principles" className="text-white hover:underline">Principles</a>
                </li>
                <li>
                  <a href="#link3" className="text-white hover:underline">Questions</a>
                </li>
                <li>
                  <a href="#link4" className="text-white hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}