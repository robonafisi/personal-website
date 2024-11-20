export default function Questions() {
  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <main>
        {/* Header Section */}
        <div className="h-[calc(10vh-2rem)] w-[calc(99vw-2rem)] p-8 border border-white box-border flex items-center justify-start">
          <h1 className="text-2xl font-bold text-white">MOHAMMAD NAFISI</h1>
        </div>
        {/* Content Section */}
        <div className="h-[calc(85vh-2rem)] w-[calc(99vw-2rem)] p-8 border border-white box-border">
          <div className="space-y-6">
            <h1 className="text-3xl text-center mb-8">Big Questions I Keep Wondering About</h1>
            <ul className="list-disc pl-6 space-y-2 mx-48">
              <li>The holy trinity of wonders: Light/Time, Matter, and Consciousness. What is the nature of light? Why does it travel fastest than anything we know? </li>
              <li>Many have proposed this but here is my favourite phrasing: There are probably around 20 million people at any given time who have been born in a wealthy country, have had great education, they are entrepeneurial, and are young. And yet, only about 500 of people at any generation would start a company that is roughly $100M valued or more at some point. Why? What determines the difference between ones who do and ones who don&apos;t?</li>
              <li>Item 3</li>
              <li>Item 4</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
