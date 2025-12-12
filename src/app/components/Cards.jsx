import { Download, Smartphone, Tv, Users } from "lucide-react"

export default function Cards(){
  const cards = [
    {
      id: 1,
      title: "Oglądaj na telewizorze",
      description: "Oglądaj na telewizorach Smart TV, konsolach PlayStation i Xbox, odtwarzaczach Chromecast, Apple TV oraz Blu-ray i nie tylko.",
      icon: Tv
    },
    {
      id: 2,
      title: "Pobierz ulubione tytuły i oglądaj offline",
      description: "Zapisz ulubione tytuły, aby zawsze mieć coś do obejrzenia.",
      icon: Download
    },
    {
      id: 3,
      title: "Oglądaj wszędzie",
      description: "Oglądaj filmy, seriale i programy bez ograniczeń na telefonie, tablecie, laptopie i telewizorze.",
      icon: Smartphone
    },
    {
      id: 4,
      title: "Utwórz profile dla dzieci",
      description: "Pozwól dziecom przeżywać przygody w tworytstwie ulubionych bohaterów w specjalnej sekcji oferowanej bezpłatnie w ramach członkostwa.",
      icon: Users
    }
  ];

  return(
    <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Title */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
          Więcej powodów aby dołączyć
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-7xl mx-auto w-full">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div 
              key={card.id}
              className="border border-purple-500/40 rounded-lg sm:rounded-xl p-5 sm:p-6 lg:p-8 bg-gradient-to-br from-purple-950/60 to-purple-900/30 hover:border-purple-400 hover:bg-gradient-to-br hover:from-purple-900/80 hover:to-purple-800/40 hover:shadow-2xl active:scale-95 transition-all duration-300 flex flex-col h-full group cursor-pointer overflow-hidden relative"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />

              {/* Content Container */}
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Icon - Mobile positioned top, Desktop positioned bottom */}
                <div className="lg:hidden mb-4">
                  <div className="p-3 sm:p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/35 group-hover:to-pink-500/35 transition-all duration-300 w-fit">
                    <Icon size={32} className="text-purple-300 group-hover:text-purple-200 sm:group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 leading-snug group-hover:text-purple-200 transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {card.description}
                </p>

                {/* Desktop Icon - Bottom Right */}
                <div className="hidden lg:flex mt-auto pt-6 justify-end">
                  <div className="p-5 lg:p-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/40 group-hover:to-pink-500/40 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:scale-110">
                    <Icon size={56} className="text-purple-300 group-hover:text-purple-100 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional: Add decorative elements */}
      <div className="hidden lg:block absolute top-1/2 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="hidden lg:block absolute bottom-0 left-0 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </div>
  )
}