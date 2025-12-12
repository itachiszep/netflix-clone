"use client"
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function EmailSignup(){
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    if (email) {
      setIsLoading(true);
      // Symulacja request
      setTimeout(() => {
        setIsLoading(false);
        setEmail("");
      }, 1000);
    }
  };

  return (
    <div className="w-full bg-black px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
      <div className="max-w-4xl w-full text-center mx-auto">
        {/* Title */}
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
          Zaczynamy oglądać?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed">
          Wprowadź adres e-mail, aby utworzyć lub odnowić konto.
        </p>

        {/* Input & Button */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {/* Email Input */}
            <input 
              type="email"
              placeholder="Adres e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg bg-gray-800/80 text-white border border-white/20 placeholder-gray-500 rounded-md sm:rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-700 focus:border-white/40 transition-all duration-300 backdrop-blur-sm min-h-[44px] sm:min-h-auto"
            />

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={isLoading || !email}
              className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 font-bold text-base sm:text-lg lg:text-xl bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:bg-red-600/50 disabled:cursor-not-allowed text-white rounded-md sm:rounded-lg transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px] sm:min-h-auto drop-shadow-lg hover:shadow-lg hover:drop-shadow-xl group"
            >
              <span>
                {isLoading ? "Ładowanie..." : "Rozpocznij"}
              </span>
              <ChevronRight 
                size={20} 
                className={`transition-all duration-300 ${isLoading ? "hidden" : "block group-hover:translate-x-1"}`} 
              />
            </button>
          </div>
        </div>

        {/* Helper Text */}
        <p className="text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6">
          Aby kontynuować, musisz zaakceptować nasze warunki. Netflix wyśle ci wiadomość e-mail zawierającą informacje dotyczące Twojego konta.
        </p>
      </div>
    </div>
  )
}