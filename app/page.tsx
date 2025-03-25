import Image from "next/image";

// export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#0B1120] to-[#111E3F] min-h-screen text-white">
      {/* Header */}
      <header className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg overflow-hidden flex items-center justify-center p-2">
            <Image src="/globe.svg" alt="ESports Tracker" width={30} height={30} className="opacity-80" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">ESTrack</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all">Accueil</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all">Matchs</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all">Équipes</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all">Tournois</a>
          <a href="#" className="text-gray-300 hover:text-cyan-400 transition-all">Classements</a>
        </nav>
        <button className="p-2 bg-[#1A2142] rounded-lg md:hidden hover:bg-[#253369] transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Suis tes <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">matchs</span> comme jamais
            </h2>
            <p className="text-gray-400 mb-10 text-lg">Toutes les compétitions esports en direct. Stats, équipes, tournois et bien plus encore à portée de main.</p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-cyan-400 to-purple-600 hover:opacity-90 px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-purple-600/20">Matchs en direct</button>
              <button className="border border-[#253369] bg-[#1A2142] hover:bg-[#253369] px-8 py-4 rounded-xl font-medium transition-all">Explorer</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative bg-gradient-to-tr from-[#0D1326] to-[#192044] p-6 rounded-2xl shadow-2xl flex items-center justify-center h-[350px] overflow-hidden">
              <div className="absolute inset-0 bg-[url('/window.svg')] bg-repeat-space opacity-5"></div>
              <div className="relative z-10 flex items-center justify-center">
                <div className="absolute w-40 h-40 bg-purple-600/20 blur-3xl rounded-full"></div>
                <div className="absolute w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full -translate-x-20"></div>
                {/* <Image src="/window.svg" alt="Esports Tournament" width={180} height={180} className="opacity-90 z-20" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-8 flex items-center">
          <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></span> 
          Matchs en direct
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((match) => (
            <div key={match} className="bg-gradient-to-br from-[#1A2142] to-[#141C36] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-600/10 transition-all border border-[#253369]/30">
              <div className="p-4 border-b border-[#253369]/30 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gradient-to-r from-red-500 to-red-700 px-3 py-1 rounded-full font-medium">LIVE</span>
                  <span className="text-xs text-gray-400">League of Legends</span>
                </div>
                <span className="text-xs text-cyan-400 font-medium">LEC</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#0D1326] to-[#192044] mb-3 flex items-center justify-center border-2 border-[#253369]/30">
                      <Image src="/vercel.svg" alt="Team 1" width={30} height={30} className="opacity-80" />
                    </div>
                    <span className="font-medium">Fnatic</span>
                  </div>
                  <div className="text-center px-3">
                    <div className="text-2xl font-bold mb-1">2 - 1</div>
                    <span className="text-xs text-gray-400 px-2 py-1 bg-[#0D1326] rounded-full">Bo5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#0D1326] to-[#192044] mb-3 flex items-center justify-center border-2 border-[#253369]/30">
                      <Image src="/next.svg" alt="Team 2" width={30} height={30} className="opacity-80" />
                    </div>
                    <span className="font-medium">G2</span>
                  </div>
                </div>
                <button className="w-full bg-[#253369] hover:bg-[#2A3A80] py-3 rounded-lg text-sm transition-all flex items-center justify-center gap-2">
                  <span>Regarder</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="bg-[#1A2142] text-cyan-400 hover:bg-[#253369] px-8 py-3 rounded-xl font-medium transition-all flex mx-auto items-center gap-2">
            <span>Tous les matchs</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="container mx-auto px-4 py-14">
        <h3 className="text-2xl font-bold mb-8">Tournois à venir</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Valorant Championship', 'CS:GO Major', 'Dota 2 International'].map((tournament, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1A2142] to-[#141C36] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-600/10 transition-all border border-[#253369]/30 group">
              <div className="h-48 bg-gradient-to-br from-[#0D1326] to-[#192044] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/file.svg')] bg-repeat-space opacity-5"></div>
                <div className="absolute w-32 h-32 bg-purple-600/20 blur-3xl rounded-full transition-all group-hover:scale-150 group-hover:opacity-50"></div>
                <Image src="/file.svg" alt={tournament} width={70} height={70} className="opacity-70 z-10 transition-all group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{tournament}</h4>
                <p className="text-gray-400 text-sm mb-4">12-20 Novembre 2023 • Paris, France</p>
                <div className="flex justify-between text-sm">
                  <span className="bg-[#0D1326] px-3 py-1 rounded-full text-gray-300">16 équipes</span>
                  <span className="text-cyan-400 font-medium">€1,000,000</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-14">
        <h3 className="text-2xl font-bold mb-8">Dernières actualités</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((news) => (
            <div key={news} className="bg-gradient-to-br from-[#1A2142] to-[#141C36] rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-600/10 transition-all border border-[#253369]/30 hover:-translate-y-1 duration-300">
              <div className="h-40 bg-gradient-to-br from-[#0D1326] to-[#192044] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/window.svg')] bg-repeat-space opacity-5"></div>
                <Image 
                  src={news % 2 === 0 ? "/globe.svg" : "/window.svg"} 
                  alt="News" 
                  width={50} 
                  height={50} 
                  className="opacity-70 z-10" 
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-xs text-cyan-400 block">Actualités</span>
                  <span className="text-xs text-gray-400 block">Il y a 2h</span>
                </div>
                <h4 className="text-md font-bold mb-2">L'équipe Fnatic remporte le championnat mondial</h4>
                <p className="text-gray-400 text-sm line-clamp-2">La finale s'est terminée par un score impressionnant de 3-0 contre les champions en titre...</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1120] mt-14 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="relative w-8 h-8 bg-gradient-to-tr from-cyan-400 to-purple-600 rounded-lg overflow-hidden flex items-center justify-center p-1.5">
                  <Image src="/globe.svg" alt="ESports Tracker" width={20} height={20} className="opacity-80" />
                </div>
                <h3 className="text-xl font-bold">ESTrack</h3>
              </div>
              <p className="text-gray-400 text-sm">La plateforme nouvelle génération pour suivre tous les matchs esports et leurs résultats en temps réel.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Liens rapides</h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-all">Matchs en direct</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all">Calendrier</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all">Tournois</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all">Équipes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Jeux</h4>
              <ul className="space-y-2.5 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-all">League of Legends</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all">CS:GO</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all">Valorant</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-all">Dota 2</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
              <div className="flex gap-3">
                {['twitter', 'twitch', 'youtube', 'discord'].map((social, index) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-gradient-to-br from-[#1A2142] to-[#141C36] w-10 h-10 rounded-lg flex items-center justify-center hover:from-cyan-400 hover:to-purple-600 transition-all group"
                  >
                    <Image 
                      src={index % 2 === 0 ? "/vercel.svg" : "/next.svg"} 
                      alt={social} 
                      width={18} 
                      height={18} 
                      className="opacity-80 group-hover:opacity-100" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-[#192044] mt-10 pt-8 text-center text-gray-500 text-sm">
            © 2023 ESTrack. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
