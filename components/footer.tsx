import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-indigo-900 text-white border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/images/oil-standart-logo.jpg" alt="Oil-Standart Logo" className="h-12 w-12 rounded-full" />
              <h3 className="text-2xl font-bold">Oil-Standart</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Производитель высококачественных формовочных смазок и СОЖ серии СТАНДАРТ для металлических форм и станков.
              Обеспечиваем идеальное качество поверхности и надежную защиту оборудования.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="border-t-2 border-indigo-700 mt-8 pt-8">
            <h4 className="text-lg font-semibold mb-4">Формовочные смазки</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors font-medium">
                  Стандарт М1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors font-medium">
                  Стандарт М1 Elite
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors font-medium">
                  ЭКС-А NEO
                </a>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mb-4 mt-6">СОЖ серии СТАНДАРТ</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors font-medium">
                  СТАНДАРТ MultiCut 140
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors font-medium">
                  СТАНДАРТ Multi Cut 100
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300 transition-colors font-medium">
                  СТАНДАРТ AutoCut 200
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t-2 border-indigo-700 mt-8 pt-8">
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>

            {/* Телефоны по отделам */}
            <div className="space-y-4 text-gray-300">
              <div>
                <h5 className="font-semibold text-orange-300 mb-2">Формовочные смазки:</h5>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+79605947171" className="hover:text-orange-300 transition-colors">
                    +7-960-594-71-71
                  </a>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-orange-300 mb-2">СОЖ серии СТАНДАРТ:</h5>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+79066277171" className="hover:text-orange-300 transition-colors">
                    +7-906-627-71-71
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <h5 className="font-semibold text-orange-300 mb-2">Email:</h5>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:info@oil-standart.com" className="hover:text-orange-300 transition-colors">
                    info@oil-standart.com
                  </a>
                </div>
              </div>

              <div className="pt-2 text-sm text-gray-400">
                <p>Пн-Пт: 9:00-17:00</p>
                <p>Сб-Вс: выходной</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Oil-Standart. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
