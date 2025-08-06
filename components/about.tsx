import { Card, CardContent } from "@/components/ui/card"
import { Factory, Users, Award, Truck } from "lucide-react"

export function About() {
  const advantages = [
    {
      icon: <Factory className="h-12 w-12 text-indigo-700" />,
      title: "Собственное производство",
      description: "Полный цикл производства формовочных смазок и СОЖ с контролем качества на каждом этапе",
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-700" />,
      title: "Опытная команда",
      description: "Более 15 лет опыта в разработке и поставке технических жидкостей для промышленности",
    },
    {
      icon: <Award className="h-12 w-12 text-indigo-700" />,
      title: "Высокое качество",
      description: "Сертифицированная продукция, соответствующая ГОСТам и международным стандартам",
    },
    {
      icon: <Truck className="h-12 w-12 text-indigo-700" />,
      title: "Комплексные поставки",
      description: "Полный спектр технических жидкостей и оперативная доставка по всей России",
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании Oil-Standart</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Мы специализируемся на производстве высококачественных формовочных смазок, СОЖ серии СТАНДАРТ и
              комплексных поставках технических жидкостей для промышленных предприятий.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Наша продукция включает индустриальные масла И-20, И-40, растворители 646, гидравлические жидкости и
              другие технические составы. Обеспечиваем полный цикл снабжения предприятий всеми необходимыми жидкостями.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                <div className="text-3xl font-bold text-indigo-900 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Довольных клиентов</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-200">
                <div className="text-3xl font-bold text-indigo-900 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Лет на рынке</div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/placeholder.svg?height=400&width=500&text=Производство Oil-Standart"
              alt="Производство Oil-Standart"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Наши преимущества</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-orange-300"
              >
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">{advantage.icon}</div>
                  <h4 className="text-xl font-bold text-indigo-900 mb-3">{advantage.title}</h4>
                  <p className="text-gray-700 leading-relaxed font-medium">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-orange-50 to-indigo-50 rounded-2xl p-8 border-2 border-orange-200">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/images/oil-standart-logo.jpg"
                alt="Логотип Oil-Standart"
                className="h-48 w-48 rounded-full shadow-2xl border-4 border-white"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Oil-Standart - стандарт качества</h3>
              <p className="text-lg text-gray-700 mb-6">
                Наша компания стала синонимом надежности и качества в сфере технических жидкостей. Мы гордимся тем, что
                наши продукты помогают предприятиям работать эффективно и безопасно.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="/images/oil-standart-logo.jpg"
                  alt="Oil-Standart Logo"
                  className="h-16 w-16 rounded-full shadow-lg"
                />
                <div>
                  <h4 className="text-xl font-bold text-indigo-900">Oil-Standart</h4>
                  <p className="text-gray-600">Ваш надежный партнер</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
