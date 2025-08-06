import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Zap, Factory, Droplets, Settings } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-2000"></div>

        {/* Industrial Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="bg-white/10 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Комплексные решения для
              <span className="block text-orange-500 drop-shadow-md">промышленности</span>
            </h1>
            <p className="text-xl text-indigo-50 mb-8 leading-relaxed drop-shadow-sm">
              Производим формовочные смазки, СОЖ серии СТАНДАРТ и поставляем полный спектр технических жидкостей для
              промышленных предприятий. Обеспечиваем качество и надежность на каждом этапе производства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-400 text-white font-bold shadow-xl border-2 border-orange-600 transform hover:scale-105 transition-all duration-300"
              >
                Каталог продукции
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 bg-transparent font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Получить консультацию
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-indigo-100 font-medium">лет опыта</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-indigo-100 font-medium">клиентов</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold">99%</div>
                <div className="text-sm text-indigo-100 font-medium">качество</div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual Section */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              {/* Industrial Visualization */}
              <div className="relative h-80 bg-gradient-to-br from-indigo-800/50 to-purple-800/50 rounded-xl overflow-hidden">
                {/* Factory Icons Layout */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="bg-orange-500/20 p-4 rounded-full border-2 border-orange-400/50">
                        <Factory className="h-12 w-12 text-orange-400" />
                      </div>
                      <span className="text-sm font-medium text-white/80">Производство</span>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <div className="bg-orange-500/20 p-4 rounded-full border-2 border-orange-400/50">
                        <Droplets className="h-12 w-12 text-orange-400" />
                      </div>
                      <span className="text-sm font-medium text-white/80">СОЖ СТАНДАРТ</span>
                    </div>
                    <div className="flex flex-col items-center space-y-3">
                      <div className="bg-orange-500/20 p-4 rounded-full border-2 border-orange-400/50">
                        <Settings className="h-12 w-12 text-orange-400" />
                      </div>
                      <span className="text-sm font-medium text-white/80">Оборудование</span>
                    </div>
                  </div>
                </div>

                {/* Animated Connections */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 300 200">
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 75 100 Q 150 50 225 100"
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                    />
                    <path
                      d="M 75 100 Q 150 150 225 100"
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse delay-1000"
                    />
                  </svg>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
              </div>

              {/* Company Logo Integration */}
              <div className="mt-6 flex items-center justify-center space-x-4">
                <img
                  src="/images/oil-standart-logo.jpg"
                  alt="Oil-Standart Logo"
                  className="h-16 w-16 rounded-full shadow-lg border-2 border-white/30"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">Oil-Standart</h3>
                  <p className="text-sm text-indigo-200">Стандарт качества</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
