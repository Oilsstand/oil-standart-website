import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Droplets, Beaker, Settings } from "lucide-react"

export function Products() {
  const products = [
    {
      name: "Стандарт М1",
      category: "Базовый состав",
      description:
        "Базовый состав для нанесения на любые виды металлических форм. Универсальное решение для стандартных задач формования.",
      features: ["Универсальность", "Надежность", "Экономичность"],
      icon: <Settings className="h-8 w-8 text-indigo-700" />,
      image: "/placeholder.svg?height=200&width=300&text=Стандарт М1 формовочная смазка",
      popular: true,
    },
    {
      name: "Стандарт М1 Elite",
      category: "Улучшенный состав",
      description:
        "Улучшенный состав для формования сложных изделий. Устраняет дефекты пор при недостаточной вибрации, обеспечивает улучшенное качество поверхности.",
      features: ["Сложные изделия", "Устранение пор", "Премиум качество"],
      icon: <Star className="h-8 w-8 text-orange-500" />,
      image: "/placeholder.svg?height=200&width=300&text=Стандарт М1 Elite формовочная смазка",
      popular: false,
    },
    {
      name: "Стандарт М1 NEO",
      category: "Концентрат",
      description:
        "Концентрат для получения премиальной эмульсии с возможностью удешевления производственного процесса.",
      features: ["Концентрат", "Премиальная эмульсия", "Экономия"],
      icon: <Beaker className="h-8 w-8 text-indigo-600" />,
      image: "/placeholder.svg?height=200&width=300&text=Стандарт М1 NEO формовочная смазка",
      popular: false,
    },
    {
      name: "ЭКС-А",
      category: "Для горизонтальных форм",
      description:
        "Концентрат для горизонтальных форм и несложных изделий. Оптимальное решение для стандартных производственных задач.",
      features: ["Горизонтальные формы", "Простые изделия", "Стабильность"],
      icon: <Droplets className="h-8 w-8 text-indigo-600" />,
      image: "/placeholder.svg?height=200&width=300&text=ЭКС-А формовочная смазка",
      popular: false,
    },
    {
      name: "ЭКС-А NEO",
      category: "Простая эмульсия",
      description:
        "Для приготовления простой эмульсии с посредственным, но стабильным качеством поверхности. Минимальное образование пор для изделий без серьезных требований к качеству поверхности.",
      features: ["Простая эмульсия", "Стабильное качество", "Минимум пор"],
      icon: <Droplets className="h-8 w-8 text-indigo-600" />,
      image: "/placeholder.svg?height=200&width=300&text=ЭКС-А NEO формовочная смазка",
      popular: false,
    },
  ]

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Формовочные смазки</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные формовочные смазки для металлических форм. Обеспечиваем идеальное качество поверхности и
            надежную защиту форм от износа.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-300 hover:shadow-2xl border-2 ${
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
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
                <CardTitle className="text-xl">{product.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Особенности:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-center font-medium">
                          <div className="w-2 h-2 bg-indigo-700 rounded-full mr-3 shadow-sm"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    className="w-full font-semibold shadow-md border"
                    variant={product.popular ? "default" : "outline"}
                  >
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Собственное производство формовочных смазок</h3>
              <p className="text-lg text-gray-700 mb-6">
                Контролируем качество на каждом этапе производства. Используем современные технологии и проверенные
                рецептуры для создания эффективных формовочных составов.
              </p>
              <Button size="lg" className="bg-indigo-900 hover:bg-indigo-800 font-bold shadow-lg">
                Узнать о производстве
              </Button>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=200&width=300&text=Производство формовочных смазок"
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
