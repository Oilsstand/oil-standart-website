import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Droplets, Beaker, Settings } from "lucide-react"
import { ConsultationModal } from "@/components/consultation-modal"

export function Products() {
  const products = [
    {
      name: "Стандарт М1",
      category: "Базовый состав",
      description:
        "Базовый состав для нанесения на любые виды металлических форм. Универсальное решение для стандартных задач формования.",
      features: ["Универсальность", "Надежность", "Экономичность"],
      icon: <Settings className="h-6 w-6 text-indigo-700" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-14_01-21-00-t8pcIyB7IcnRosTOVz0HggsUiJ9zms.png",
      popular: true, // Обновленная строка
      isLabel: false, // Убираем флаг этикетки
    },
    {
      name: "Стандарт М1 Elite",
      category: "Улучшенный состав",
      description:
        "Улучшенный состав для формования сложных изделий. Устраняет дефекты пор при недостаточной вибрации.",
      features: ["Сложные изделия", "Устранение пор", "Премиум качество"],
      icon: <Star className="h-6 w-6 text-orange-500" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-14_01-15-45-oJJmz7OBFkXosNXwct8lqTRV8aWlnN.png", // Обновленная строка
      popular: false,
    },
    {
      name: "Стандарт М1 NEO",
      category: "Концентрат",
      description:
        "Концентрат для получения премиальной эмульсии с возможностью удешевления производственного процесса.",
      features: ["Концентрат", "Премиальная эмульсия", "Экономия"],
      icon: <Beaker className="h-6 w-6 text-indigo-600" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-14_01-38-41-QccJKhXw9r6VTWqreeNrqm2tqNrER9.png", // Обновленная строка
      popular: false,
    },
    {
      name: "ЭКС-А",
      category: "Для горизонтальных форм",
      description: "Концентрат для горизонтальных форм и несложных изделий. Оптимальное решение для стандартных задач.",
      features: ["Горизонтальные формы", "Простые изделия", "Стабильность"],
      icon: <Droplets className="h-6 w-6 text-indigo-600" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-14_01-34-39-DvxT8Cnx5zam64oXM5OUKbgjg6yNsE.png", // Обновленная строка
      popular: false,
    },
    {
      name: "ЭКС-А NEO",
      category: "Простая эмульсия",
      description: "Для приготовления простой эмульсии с посредственным, но стабильным качеством поверхности.",
      features: ["Простая эмульсия", "Стабильное качество", "Минимум пор"],
      icon: <Droplets className="h-6 w-6 text-indigo-600" />,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-08-14_01-31-42-AzXsWCDvf8Nim8xvHJGJhijVIgkV1X.png", // Обновленная строка
      popular: false,
    },
  ]

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Формовочные смазки</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Профессиональные формовочные смазки для металлических форм. Обеспечиваем идеальное качество поверхности и
            надежную защиту форм от износа.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-xl border-4 ${
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
              <div className="relative h-48 overflow-hidden bg-white flex items-center justify-center rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  {product.icon}
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Особенности:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex items-center font-medium">
                          <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full mr-2 shadow-sm"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full font-semibold shadow-md border text-sm py-2"
                    variant={product.popular ? "default" : "outline"}
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 bg-orange-50 rounded-xl p-4 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-4 items-center">
            <div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Собственное производство формовочных смазок</h3>
              <p className="text-sm text-gray-700 mb-3">
                Контролируем качество на каждом этапе производства. Используем современные технологии и проверенные
                рецептуры.
              </p>
              <ConsultationModal>
                <Button className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg text-sm px-4 py-2">
                  Узнать о производстве
                </Button>
              </ConsultationModal>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=120&width=200&text=Производство формовочных смазок"
                alt="Производство формовочных смазок"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
