export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-navy via-navy-light to-navy-dark flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gold mb-6">
          BirdiePool
        </h1>
        <p className="text-2xl md:text-3xl text-white font-light">
          Your Tournament Pool, Simplified
        </p>
        <div className="mt-12">
          <button className="bg-gold text-navy px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gold-light transition-colors duration-200 shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}
