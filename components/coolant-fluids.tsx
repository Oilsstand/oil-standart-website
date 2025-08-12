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
        "СТАНДАРТ Multi Cut 100 - универсальная смазочно-охлаждающая жидкость для обработки различных металлов на токарных, фрезерных и сверлильных станках.",
      features: [
        "Подходит для всех типов металлообработки",
        "Отличные антикоррозийные свойства",
        "Стабильная эмульсия длительного действия",
        "Экономичный расход",
      ],
      applications: ["Токарные станки", "Фрезерные станки", "Сверлильные станки"],
      icon: <Wrench className="h-10 w-10 text-indigo-700" />,
      image: "/placeholder.svg?height=250&width=350&text=СТАНДАРТ Multi Cut 100",
      popular: true,
    },
    {
      name: "СТАНДАРТ MultiCut 140",
      category: "Для станков ЧПУ",
      description:
        "СТАНДАРТ MultiCut 140 - высокопроизводительная СОЖ для станков с ЧПУ. Обеспечивает точность обработки, продлевает срок службы инструмента и защищает от коррозии.",
      features: [
        "Высокая точность размеров",
        "Продление срока службы инструмента до 40%",
        "Превосходная защита от коррозии",
        "Совместимость с системами рециркуляции",
      ],
      applications: ["Обрабатывающие центры", "Токарные ЧПУ", "Фрезерные ЧПУ"],
      icon: <Cpu className="h-10 w-10 text-orange-500" />,
      image: "/placeholder.svg?height=250&width=350&text=СТАНДАРТ MultiCut 140",
      popular: false,
    },
    {
      name: "СТАНДАРТ AutoCut 200",
      category: "Для станков-автоматов",
      description:
        "СТАНДАРТ AutoCut 200 - специализированная СОЖ для станков-автоматов и многошпиндельных станков. Оптимизирована для непрерывной работы и высоких скоростей резания.",
      features: [
        "Непрерывная работа 24/7",
        "Высокие скорости резания",
        "Стабильность при длительной эксплуатации",
        "Минимальное пенообразование",
      ],
      applications: ["Станки-автоматы", "Многошпиндельные станки", "Автоматические линии"],
      icon: <Cog className="h-10 w-10 text-indigo-600" />,
      image: "/placeholder.svg?height=250&width=350&text=СТАНДАРТ AutoCut 200",
      popular: false,
    },
    {
      name: "СТАНДАРТ AluCut 300",
      category: "Для цветных металлов",
      description:
        "СТАНДАРТ AluCut 300 - специальная СОЖ для обработки алюминия и цветных металлов. Предотвращает налипание стружки и обеспечивает чистоту поверхности.",
      features: [
        "Предотвращение налипания стружки",
        "Идеальная чистота поверхности",
        "Защита от пятнообразования",
        "Совместимость с алюминиевыми сплавами",
      ],
      applications: ["Алюминий", "Медь", "Латунь", "Цинковые сплавы"],
      icon: <Droplets className="h-10 w-10 text-indigo-600" />,
      image: "/placeholder.svg?height=250&width=350&text=СТАНДАРТ AluCut 300",
      popular: false,
    },
    {
      name: "СТАНДАРТ SteelCut 400",
      category: "Для черных металлов",
      description:
        "СТАНДАРТ SteelCut 400 - высокоэффективная СОЖ для обработки стали и чугуна. Обеспечивает отличное охлаждение при тяжелых режимах резания.",
      features: [
        "Тяжелые режимы резания",
        "Отличное охлаждение",
        "Высокая смазывающая способность",
        "Защита от задиров",
      ],
      applications: ["Углеродистая сталь", "Легированная сталь", "Чугун", "Нержавеющая сталь"],
      icon: <Shield className="h-10 w-10 text-indigo-600" />,
      image: "/placeholder.svg?height=250&width=350&text=СТАНДАРТ SteelCut 400",
      popular: false,
    },
    {
      name: "СТАНДАРТ EcoCut 500",
      category: "Экологичная",
      description:
        "СТАНДАРТ EcoCut 500 - биоразлагаемая СОЖ на основе растительных компонентов. Безопасна для персонала и окружающей среды при сохранении высокой эффективности.",
      features: [
        "100% биоразлагаемая формула",
        "Безопасность для персонала",
        "Отсутствие вредных испарений",
        "Высокая эффективность охлаждения",
      ],
      applications: ["Экологичное производство", "Пищевая промышленность", "Медицинское оборудование"],
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      image: "/placeholder.svg?height=250&width=350&text=СТАНДАРТ EcoCut 500",
      popular: false,
    },
  ]

  return (
    <section id="coolant-fluids" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Смазочно-охлаждающие жидкости серии СТАНДАРТ</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Профессиональные СОЖ серии СТАНДАРТ для станков, станков-автоматов и оборудования с ЧПУ. Обеспечиваем
            точность обработки, продлеваем срок службы инструмента и защищаем оборудование.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {coolantProducts.map((product, index) => (
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
                    Получить консультацию
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Серия СТАНДАРТ - наша гордость</h3>
              <p className="text-lg text-gray-700 mb-6">
                Линейка СОЖ серии СТАНДАРТ разработана с учетом современных требований металлообработки. Каждый продукт
                проходит строгий контроль качества и тестирование в реальных производственных условиях.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationModal>
                  <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg">
                    Получить консультацию
                  </Button>
                </ConsultationModal>
                <CatalogModal>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-900 hover:text-white font-semibold bg-transparent"
                  >
                    Скачать каталог серии СТАНДАРТ
                  </Button>
                </CatalogModal>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=300&width=400&text=Лаборатория контроля качества СОЖ серии СТАНДАРТ"
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
