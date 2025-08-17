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
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-14_20-04-42-g2te2PFNqcvkrcKlvMPq7XUEuYNRyG.png",
      popular: true,
      bestseller: true, // Новое свойство
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
      image: "/images/multicut-140-label.png",
      popular: false,
      bestseller: false,
    },
    {
      name: "СТАНДАРТ AutoCut 200",
      category: "Для станков-автоматов",
      description:
        "Специализированная СОЖ для станков-автоматов и многошпиндельных станков. Оптимизирована для непрерывной работы.",
      features: ["Непрерывная работа 24/7", "Высокие скорости резания", "Стабильность при длительной эксплуатации"],
      applications: ["Станки-автоматы", "Многошпиндельные станки", "Автоматические линии"],
      icon: <Cog className="h-7 w-7 text-indigo-600" />,
      image: "/images/autocut-200-label.png", // Обновленное изображение
      popular: false,
      bestseller: false,
    },
    {
      name: "СТАНДАРТ AluCut 300",
      category: "Для цветных металлов",
      description: "Специальная СОЖ для обработки алюминия и цветных металлов. Предотвращает налипание стружки.",
      features: ["Предотвращение налипания стружки", "Идеальная чистота поверхности", "Защита от пятнообразования"],
      applications: ["Алюминий", "Медь", "Латунь", "Цинковые сплавы"],
      icon: <Droplets className="h-7 w-7 text-indigo-600" />,
      image: "/images/alucut-300-label.png", // Обновить эту строку
      popular: false,
      bestseller: false,
    },
    {
      name: "СТАНДАРТ SteelCut 400",
      category: "Для черных металлов",
      description:
        "Высокоэффективная СОЖ для обработки стали и чугуна. Обеспечивает отличное охлаждение при тяжелых режимах резания.",
      features: ["Тяжелые режимы резания", "Отличное охлаждение", "Высокая смазывающая способность"],
      applications: ["Углеродистая сталь", "Легированная сталь", "Чугун", "Нержавеющая сталь"],
      icon: <Shield className="h-7 w-7 text-indigo-600" />,
      image: "/images/steelcut-400-label.png",
      popular: false,
      bestseller: false,
    },
    {
      name: "СТАНДАРТ EcoCut 500",
      category: "Экологичная",
      description: "Биоразлагаемая СОЖ на основе растительных компонентов. Безопасна для персонала и окружающей среды.",
      features: ["100% биоразлагаемая формула", "Безопасность для персонала", "Отсутствие вредных испарений"],
      applications: ["Экологичное производство", "Пищевая промышленность", "Медицинское оборудование"],
      icon: <Leaf className="h-7 w-7 text-green-600" />,
      image: "/images/ecocut-500-label.png",
      popular: false,
      bestseller: false,
    },
    {
      name: "МР-7 Ойл Стандарт",
      category: "Масляная СОЖ",
      description:
        "Высококачественная масляная смазочно-охлаждающая жидкость для тяжелых режимов обработки металлов. Обеспечивает превосходную смазку и охлаждение при экстремальных нагрузках.",
      features: [
        "Превосходные смазывающие свойства",
        "Высокая термическая стабильность",
        "Защита от задиров и износа инструмента",
      ],
      applications: ["Тяжелое точение", "Глубокое сверление", "Нарезание резьбы", "Зубообработка"],
      icon: <Droplets className="h-7 w-7 text-amber-600" />,
      image: "/images/mr7-label.png",
      popular: false,
      bestseller: false,
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
          {coolantProducts.slice(0, -1).map((product, index) => (
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
              <div className="relative h-40 overflow-hidden rounded-t-lg grid grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center">
                  {index === 0 ? (
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%82%D0%BE%D0%BA%D0%B0%D1%80%D0%BD%D0%BE%20%D1%84%D1%80%D0%B5%D0%B7%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%BA-YEXRXTiabwmTxIpq0SvrOWfcn2VL3N.png"
                      alt="Универсальный токарно-фрезерный станок с системой СОЖ"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 1 ? (
                    <img
                      src="/images/cnc-machine.png"
                      alt="Станок с ЧПУ для высокоточной обработки с СОЖ СТАНДАРТ MultiCut 140"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 2 ? (
                    <img
                      src="/images/automatic-machining.png"
                      alt="Автоматическая обработка на многошпиндельном станке с СОЖ СТАНДАРТ AutoCut 200"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 3 ? (
                    <img
                      src="/images/aluminum-machining.png"
                      alt="Обработка алюминия с использованием СОЖ СТАНДАРТ AluCut 300"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 4 ? (
                    <img
                      src="/images/steel-processing.png"
                      alt="Обработка стали с использованием СОЖ СТАНДАРТ SteelCut 400"
                      className="w-full h-full object-cover"
                    />
                  ) : index === 5 ? (
                    <img
                      src="/images/precision-machining.png"
                      alt="Прецизионная обработка с использованием экологичной СОЖ СТАНДАРТ EcoCut 500"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="/placeholder.svg?height=144&width=140&text=Продукт в действии"
                      alt={`${product.name} в использовании`}
                      className="w-full h-full object-cover opacity-50"
                    />
                  )}
                </div>
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

                  <ConsultationModal>
                    <Button
                      className="w-full font-semibold shadow-md border text-xs py-1.5"
                      variant={product.popular ? "default" : "outline"}
                    >
                      Получить консультацию
                    </Button>
                  </ConsultationModal>

                  {/* Отметка "ХИТ ПРОДАЖ" */}
                  {product.bestseller && (
                    <div className="flex justify-center mt-2">
                      <Badge className="bg-indigo-600 text-white font-bold border-2 border-indigo-700 shadow-md text-xs px-3 py-1">
                        ХИТ ПРОДАЖ
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Отдельная секция для ОйлСтандарт */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Масляные СОЖ</h3>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Специализированные масляные смазочно-охлаждающие жидкости для особо тяжелых режимов обработки
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-6 max-w-4xl mx-auto">
            <div className="w-full">
              {/* Рендер карточки ОйлСтандарт */}
              {coolantProducts.slice(-1).map((product, index) => (
                <Card
                  key={`mr7-${index}`}
                  className="transition-all duration-300 hover:shadow-xl border-4 border-amber-300 hover:border-amber-500"
                >
                  <div className="relative h-40 overflow-hidden rounded-t-lg grid grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img
                        src="/images/oil-machining.png"
                        alt="Обработка металла с масляной СОЖ ОйлСтандарт"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      {product.icon}
                      <Badge variant="secondary" className="font-medium text-xs bg-amber-100 text-amber-800">
                        {product.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-base text-amber-900">{product.name}</CardTitle>
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
                              <div className="w-1 h-1 bg-amber-700 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 text-xs">Применение:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs py-0 px-1 border-amber-300">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <ConsultationModal>
                        <Button className="w-full font-semibold shadow-md border text-xs py-1.5 bg-amber-600 hover:bg-amber-700 text-white">
                          Получить консультацию
                        </Button>
                      </ConsultationModal>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 bg-orange-50 rounded-lg p-2 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-2 items-center">
            <div>
              <h3 className="text-sm font-bold text-indigo-900 mb-1">Серия СТАНДАРТ - наша гордость</h3>
              <p className="text-xs text-gray-700 mb-2">
                Линейка СОЖ серии СТАНДАРТ разработана с учетом современных требований металлообработки. Каждый продукт
                проходит строгий контроль качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-1">
                <ConsultationModal>
                  <Button className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg text-xs px-2 py-1">
                    Получить консультацию
                  </Button>
                </ConsultationModal>
                <CatalogModal>
                  <Button
                    variant="outline"
                    className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white font-semibold bg-transparent text-xs px-2 py-1"
                  >
                    Скачать каталог серии СТАНДАРТ
                  </Button>
                </CatalogModal>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-1">
                <img
                  src="/placeholder.svg?height=50&width=60&text=Лаборатория"
                  alt="Лаборатория контроля качества СОЖ серии СТАНДАРТ"
                  className="w-full h-auto rounded-md shadow-sm"
                />
                <img
                  src="/placeholder.svg?height=50&width=60&text=Производство"
                  alt="Производство СОЖ серии СТАНДАРТ"
                  className="w-full h-auto rounded-md shadow-sm"
                />
                <img
                  src="/placeholder.svg?height=50&width=60&text=Тестирование"
                  alt="Тестирование СОЖ серии СТАНДАРТ"
                  className="w-full h-auto rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
