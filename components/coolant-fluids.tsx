import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Wrench, Cpu, Cog, Droplets, Shield, Leaf } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"
import { CatalogModal } from "@/components/catalog-modal"

export function CoolantFluids() {
  const coolantProducts = [
    {
      name: "СТАНДАРТ Multi Cut 100",
      category: "Универсальная СОЖ",
      description:
        "Универсальная смазочно-охлаждающая жидкость для обработки различных металлов на токарных, фрезерных и сверлильных станках.",
      features: [
        "Подходит для всех типов металлообработки",
        "Отличные антикоррозийные свойства",
        "Стабильная эмульсия длительного действия",
      ],
      applications: ["Токарные станки", "Фрезерные станки", "Сверлильные станки"],
      icon: <Wrench className="h-7 w-7 text-indigo-700" />,
      image: "/placeholder.svg?height=140&width=280&text=СТАНДАРТ Multi Cut 100",
      popular: true,
    },
    {
      name: "СТАНДАРТ MultiCut 140",
      category: "Для станков ЧПУ",
      description:
        "Высокопроизводительная СОЖ для станков с ЧПУ. Обеспечивает точность обработки и продлевает срок службы инструмента.",
      features: [
        "Высокая точность размеров",
        "Продление срока службы инструмента до 40%",
        "Превосходная защита от коррозии",
      ],
      applications: ["Обрабатывающие центры", "Токарные ЧПУ", "Фрезерные ЧПУ"],
      icon: <Cpu className="h-7 w-7 text-orange-500" />,
      image: "/placeholder.svg?height=140&width=280&text=СТАНДАРТ MultiCut 140",
      popular: false,
    },
    {
      name: "СТАНДАРТ AutoCut 200",
      category: "Для станков-автоматов",
      description:
        "Специализированная СОЖ для станков-автоматов и многошпиндельных станков. Оптимизирована для непрерывной работы.",
      features: ["Непрерывная работа 24/7", "Высокие скорости резания", "Стабильность при длительной эксплуатации"],
      applications: ["Станки-автоматы", "Многошпиндельные станки", "Автоматические линии"],
      icon: <Cog className="h-7 w-7 text-indigo-600" />,
      image: "/placeholder.svg?height=140&width=280&text=СТАНДАРТ AutoCut 200",
      popular: false,
    },
    {
      name: "СТАНДАРТ AluCut 300",
      category: "Для цветных металлов",
      description: "Специальная СОЖ для обработки алюминия и цветных металлов. Предотвращает налипание стружки.",
      features: ["Предотвращение налипания стружки", "Идеальная чистота поверхности", "Защита от пятнообразования"],
      applications: ["Алюминий", "Медь", "Латунь", "Цинковые сплавы"],
      icon: <Droplets className="h-7 w-7 text-indigo-600" />,
      image: "/placeholder.svg?height=140&width=280&text=СТАНДАРТ AluCut 300",
      popular: false,
    },
    {
      name: "СТАНДАРТ SteelCut 400",
      category: "Для черных металлов",
      description:
        "Высокоэффективная СОЖ для обработки стали и чугуна. Обеспечивает отличное охлаждение при тяжелых режимах резания.",
      features: ["Тяжелые режимы резания", "Отличное охлаждение", "Высокая смазывающая способность"],
      applications: ["Углеродистая сталь", "Легированная сталь", "Чугун", "Нержавеющая сталь"],
      icon: <Shield className="h-7 w-7 text-indigo-600" />,
      image: "/placeholder.svg?height=140&width=280&text=СТАНДАРТ SteelCut 400",
      popular: false,
    },
    {
      name: "СТАНДАРТ EcoCut 500",
      category: "Экологичная",
      description: "Биоразлагаемая СОЖ на основе растительных компонентов. Безопасна для персонала и окружающей среды.",
      features: ["100% биоразлагаемая формула", "Безопасность для персонала", "Отсутствие вредных испарений"],
      applications: ["Экологичное производство", "Пищевая промышленность", "Медицинское оборудование"],
      icon: <Leaf className="h-7 w-7 text-green-600" />,
      image: "/placeholder.svg?height=140&width=280&text=СТАНДАРТ EcoCut 500",
      popular: false,
    },
  ]

  return (
    <section id="coolant-fluids" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Смазочно-охлаждающие жидкости серии СТАНДАРТ</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Профессиональные СОЖ серии СТАНДАРТ для станков, станков-автоматов и оборудования с ЧПУ. Обеспечиваем
            точность обработки, продлеваем срок службы инструмента и защищаем оборудование.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {coolantProducts.map((product, index) => (
            <Card
              key={index}
              className={`transition-all duration-300 hover:shadow-xl border-2 ${
                product.popular
                  ? "ring-2 ring-orange-500 border-orange-300 shadow-lg"
                  : "border-gray-200 hover:border-indigo-300"
              }`}
            >
              {product.popular && (
                <Badge className="absolute -top-2 left-3 bg-orange-500 text-white font-bold border-2 border-orange-600 shadow-md z-10 text-xs">
                  Популярный
                </Badge>
              )}
              <div className="relative h-28 overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  {product.icon}
                  <Badge variant="secondary" className="font-medium text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-base text-indigo-900">{product.name}</CardTitle>
                <CardDescription className="text-xs leading-relaxed text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-xs">Преимущества:</h4>
                    <ul className="space-y-0.5">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-start font-medium">
                          <div className="w-1 h-1 bg-indigo-700 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 text-xs">Применение:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs py-0 px-1">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full font-semibold shadow-md border text-xs py-1.5"
                    variant={product.popular ? "default" : "outline"}
                  >
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Серия СТАНДАРТ - наша гордость</h3>
              <p className="text-sm text-gray-700 mb-3">
                Линейка СОЖ серии СТАНДАРТ разработана с учетом современных требований металлообработки. Каждый продукт
                проходит строгий контроль качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <ConsultationModal>
                  <Button className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg text-sm px-4 py-2">
                    Получить консультацию
                  </Button>
                </ConsultationModal>
                <CatalogModal>
                  <Button
                    variant="outline"
                    className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white font-semibold bg-transparent text-sm px-4 py-2"
                  >
                    Скачать каталог серии СТАНДАРТ
                  </Button>
                </CatalogModal>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=120&width=200&text=Лаборатория контроля качества СОЖ серии СТАНДАРТ"
                alt="Лаборатория контроля качества СОЖ серии СТАНДАРТ"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
