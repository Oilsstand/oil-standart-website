import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Droplets, Zap, Shield, Beaker, Cog } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { CatalogModal } from "@/components/catalog-modal"

export function TechnicalFluids() {
  const technicalProducts = [
    {
      name: "Масло индустриальное И-20",
      category: "Индустриальные масла",
      description:
        "Высококачественное индустриальное масло И-20 для смазки промышленного оборудования, подшипников и механизмов с умеренными нагрузками.",
      features: [
        "Отличные смазывающие свойства",
        "Стабильность при температурных колебаниях",
        "Защита от коррозии и износа",
        "ГОСТ 20799-88",
      ],
      applications: ["Станки", "Редукторы", "Подшипники", "Промышленное оборудование"],
      icon: <Wrench className="h-10 w-10 text-indigo-700" />,
      image: "/placeholder.svg?height=250&width=350&text=Масло индустриальное И-20",
      popular: false,
    },
    {
      name: "Масло индустриальное И-40",
      category: "Индустриальные масла",
      description:
        "Индустриальное масло И-40 повышенной вязкости для тяжелонагруженного оборудования и механизмов, работающих в сложных условиях.",
      features: [
        "Высокая несущая способность",
        "Устойчивость к окислению",
        "Превосходная защита от износа",
        "Длительный срок службы",
      ],
      applications: ["Тяжелые станки", "Прессы", "Крупные редукторы", "Промышленные механизмы"],
      icon: <Cog className="h-10 w-10 text-indigo-600" />,
      image: "/placeholder.svg?height=250&width=350&text=Масло индустриальное И-40",
      popular: true,
    },
    {
      name: "Растворитель 646",
      category: "Растворители",
      description:
        "Универсальный растворитель 646 для разбавления лакокрасочных материалов, обезжиривания поверхностей и очистки оборудования.",
      features: [
        "Высокая растворяющая способность",
        "Быстрое испарение",
        "Совместимость с различными материалами",
        "ГОСТ 18188-72",
      ],
      applications: ["Лакокрасочные работы", "Обезжиривание", "Очистка оборудования", "Промышленная химия"],
      icon: <Beaker className="h-10 w-10 text-green-600" />,
      image: "/placeholder.svg?height=250&width=350&text=Растворитель 646",
      popular: false,
    },
    {
      name: "Жидкость гидравлическая МГЕ-10А",
      category: "Гидравлические жидкости",
      description:
        "Высококачественная гидравлическая жидкость МГЕ-10А для гидросистем промышленного оборудования, обеспечивающая надежную работу при различных температурах.",
      features: [
        "Стабильные вязкостно-температурные свойства",
        "Отличная фильтруемость",
        "Защита от пенообразования",
        "Антикоррозионные присадки",
      ],
      applications: ["Гидравлические системы", "Прессы", "Подъемники", "Станки с ЧПУ"],
      icon: <Droplets className="h-10 w-10 text-indigo-600" />,
      image: "/placeholder.svg?height=250&width=350&text=Жидкость гидравлическая МГЕ-10А",
      popular: false,
    },
    {
      name: "Жидкость гидравлическая ВМГЗ",
      category: "Гидравлические жидкости",
      description:
        "Всесезонная гидравлическая жидкость ВМГЗ с улучшенными низкотемпературными свойствами для работы в широком диапазоне температур.",
      features: [
        "Всесезонное применение",
        "Низкая температура застывания",
        "Высокий индекс вязкости",
        "Стабильность свойств",
      ],
      applications: ["Мобильная техника", "Строительное оборудование", "Сельхозтехника", "Автокраны"],
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      image: "/placeholder.svg?height=250&width=350&text=Жидкость гидравлическая ВМГЗ",
      popular: false,
    },
    {
      name: "Антифриз концентрат",
      category: "Охлаждающие жидкости",
      description:
        "Высококачественный антифриз-концентрат на основе этиленгликоля для систем охлаждения промышленного оборудования и автотранспорта.",
      features: [
        "Защита от замерзания до -65°C",
        "Антикоррозионные свойства",
        "Совместимость с различными металлами",
        "Длительный срок службы",
      ],
      applications: ["Системы охлаждения", "Автотранспорт", "Промышленное оборудование", "Отопительные системы"],
      icon: <Zap className="h-10 w-10 text-cyan-600" />,
      image: "/placeholder.svg?height=250&width=350&text=Антифриз концентрат",
      popular: false,
    },
  ]

  return (
    <section id="technical-fluids" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Технические жидкости</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Полный спектр технических жидкостей для промышленных предприятий. Индустриальные масла, растворители,
            гидравлические и охлаждающие жидкости высокого качества.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {technicalProducts.map((product, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-2xl border-2 ${
                product.popular
                  ? "ring-2 ring-orange-500 border-orange-300 shadow-lg"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {product.popular && (
                <Badge className="absolute -top-3 left-4 bg-orange-500 text-white font-bold border-2 border-orange-600 shadow-md z-10">
                  Популярный
                </Badge>
              )}
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {product.icon}
                  <Badge variant="secondary" className="font-medium">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-indigo-900">{product.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Преимущества:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start font-medium">
                          <div className="w-2 h-2 bg-indigo-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Применение:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full font-semibold shadow-md border"
                    variant={product.popular ? "default" : "outline"}
                  >
                    Запросить цену
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Комплексные поставки технических жидкостей</h3>
              <p className="text-lg text-gray-700 mb-6">
                Обеспечиваем промышленные предприятия полным спектром технических жидкостей. Гарантируем качество,
                соответствие ГОСТам и оперативную доставку.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CatalogModal>
                  <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg">
                    Запросить прайс-лист
                  </Button>
                </CatalogModal>
                <ConsultationModal>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white font-semibold bg-transparent"
                  >
                    Оптовые поставки
                  </Button>
                </ConsultationModal>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=300&width=400&text=Склад технических жидкостей"
                alt="Склад технических жидкостей"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
