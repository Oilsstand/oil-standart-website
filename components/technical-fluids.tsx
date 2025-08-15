import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Droplets, Zap, Shield, Beaker, Cog } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { QuickRequestModal } from "@/components/quick-request-modal"

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
      ],
      applications: ["Станки", "Редукторы", "Подшипники", "Промышленное оборудование"],
      icon: <Wrench className="h-8 w-8 text-indigo-700" />,
      popular: false,
    },
    {
      name: "Масло индустриальное И-40",
      category: "Индустриальные масла",
      description:
        "Индустриальное масло И-40 повышенной вязкости для тяжелонагруженного оборудования и механизмов, работающих в сложных условиях.",
      features: ["Высокая несущая способность", "Устойчивость к окислению", "Превосходная защита от износа"],
      applications: ["Тяжелые станки", "Прессы", "Крупные редукторы", "Промышленные механизмы"],
      icon: <Cog className="h-8 w-8 text-indigo-600" />,
      popular: true,
    },
    {
      name: "Растворитель 646",
      category: "Растворители",
      description:
        "Универсальный растворитель 646 для разбавления лакокрасочных материалов, обезжиривания поверхностей и очистки оборудования.",
      features: ["Высокая растворяющая способность", "Быстрое испарение", "Совместимость с различными материалами"],
      applications: ["Лакокрасочные работы", "Обезжиривание", "Очистка оборудования", "Промышленная химия"],
      icon: <Beaker className="h-8 w-8 text-green-600" />,
      popular: false,
    },
    {
      name: "Жидкость гидравлическая МГЕ-10А",
      category: "Гидравлические жидкости",
      description:
        "Высококачественная гидравлическая жидкость МГЕ-10А для гидросистем промышленного оборудования, обеспечивающая надежную работу при различных температурах.",
      features: ["Стабильные вязкостно-температурные свойства", "Отличная фильтруемость", "Защита от пенообразования"],
      applications: ["Гидравлические системы", "Прессы", "Подъемники", "Станки с ЧПУ"],
      icon: <Droplets className="h-8 w-8 text-indigo-600" />,
      popular: false,
    },
    {
      name: "Жидкость гидравлическая ВМГЗ",
      category: "Гидравлические жидкости",
      description:
        "Всесезонная гидравлическая жидкость ВМГЗ с улучшенными низкотемпературными свойствами для работы в широком диапазоне температур.",
      features: ["Всесезонное применение", "Низкая температура застывания", "Высокий индекс вязкости"],
      applications: ["Мобильная техника", "Строительное оборудование", "Сельхозтехника", "Автокраны"],
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      popular: false,
    },
    {
      name: "Антифриз концентрат",
      category: "Охлаждающие жидкости",
      description:
        "Высококачественный антифриз-концентрат на основе этиленгликоля для систем охлаждения промышленного оборудования и автотранспорта.",
      features: ["Защита от замерзания до -65°C", "Антикоррозионные свойства", "Совместимость с различными металлами"],
      applications: ["Системы охлаждения", "Автотранспорт", "Промышленное оборудование", "Отопительные системы"],
      icon: <Zap className="h-8 w-8 text-cyan-600" />,
      popular: false,
    },
  ]

  return (
    <section id="technical-fluids" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Технические жидкости</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Полный спектр технических жидкостей для промышленных предприятий. Индустриальные масла, растворители,
            гидравлические и охлаждающие жидкости высокого качества.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {technicalProducts.map((product, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-xl border-4 ${
                product.popular
                  ? "ring-4 ring-orange-500 border-orange-300 shadow-lg"
                  : "border-indigo-300 hover:border-indigo-500"
              }`}
            >
              {product.popular && (
                <Badge className="absolute -top-2 left-3 bg-orange-500 text-white font-bold border-2 border-orange-600 shadow-md z-10 text-xs">
                  Популярный
                </Badge>
              )}
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {product.icon}
                  <Badge variant="secondary" className="font-medium text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-indigo-900">{product.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Преимущества:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start font-medium">
                          <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Применение:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <QuickRequestModal productName={product.name}>
                    <Button
                      className="w-full font-semibold shadow-md border text-sm py-2"
                      variant={product.popular ? "default" : "outline"}
                    >
                      Быстрый запрос
                    </Button>
                  </QuickRequestModal>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
          <div className="text-center">
            <h3 className="text-xl font-bold text-indigo-900 mb-3">Комплексные поставки технических жидкостей</h3>
            <p className="text-base text-gray-700 mb-6 max-w-4xl mx-auto">
              Обеспечиваем промышленные предприятия полным спектром технических жидкостей. Гарантируем качество,
              соответствие ГОСТам и оперативную доставку.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <QuickRequestModal>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-400 font-bold shadow-lg">
                  Быстрый запрос жидкостей
                </Button>
              </QuickRequestModal>
              <ConsultationModal>
                <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg">
                  Получить консультацию
                </Button>
              </ConsultationModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
