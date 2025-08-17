import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Zap } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { CatalogModal } from "@/components/catalog-modal"

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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Комплексные решения для
              <span className="block text-orange-500 drop-shadow-md">промышленности</span>
            </h1>
            <p className="text-lg sm:text-xl text-indigo-50 mb-8 leading-relaxed drop-shadow-sm">
              Производим формовочные смазки, СОЖ серии СТАНДАРТ и поставляем полный спектр технических жидкостей для
              промышленных предприятий. Обеспечиваем качество и надежность на каждом этапе производства.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10 lg:mb-12">
              <CatalogModal>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-400 text-white font-bold shadow-xl border-2 border-orange-600 transform hover:scale-105 transition-all duration-300"
                >
                  Каталог продукции
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CatalogModal>
              <ConsultationModal>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 bg-transparent font-semibold shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Получить консультацию
                </Button>
              </ConsultationModal>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold">15+</div>
                <div className="text-sm text-indigo-100 font-medium">лет опыта</div>
              </div>
              <div className="text-center">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold">500+</div>
                <div className="text-sm text-indigo-100 font-medium">клиентов</div>
              </div>
              <div className="text-center">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500 mx-auto mb-2" />
                <div className="text-xl sm:text-2xl font-bold">99%</div>
                <div className="text-sm text-indigo-100 font-medium">качество</div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-2xl">
              {/* Main Hero Images - разделено на 2 части */}
              <div className="relative h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-2 gap-2 h-full">
                  {/* Изображение 1 - Производство */}
                  <div className="relative overflow-hidden rounded-l-xl">
                    <img
                      src="/placeholder.svg?height=320&width=300&text=Производство формовочных смазок"
                      alt="Производство формовочных смазок Oil-Standart"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-orange-500/90 text-white px-3 py-2 rounded text-sm font-semibold backdrop-blur-sm">
                        Производство
                      </div>
                    </div>
                  </div>

                  {/* Изображение 2 - СОЖ серии СТАНДАРТ */}
                  <div className="relative overflow-hidden rounded-r-xl">
                    <img
                      src="/placeholder.svg?height=320&width=300&text=СОЖ серии СТАНДАРТ на станках"
                      alt="СОЖ серии СТАНДАРТ на промышленных станках"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-indigo-900/90 text-white px-3 py-2 rounded text-sm font-semibold backdrop-blur-sm">
                        СОЖ СТАНДАРТ
                      </div>
                    </div>
                  </div>
                </div>
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
