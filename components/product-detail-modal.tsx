"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Star, Settings, Beaker, Droplets, CheckCircle, ArrowRight } from "lucide-react"

interface ProductDetailModalProps {
  children: React.ReactNode
  product: {
    name: string
    category: string
    description: string
    features: string[]
    icon: React.ReactNode
    image?: string
    popular?: boolean
  }
}

export function ProductDetailModal({ children, product }: ProductDetailModalProps) {
  console.log("ProductDetailModal rendered for:", product.name)

  // Определяем телефон для формовочных смазок
  const phoneNumber = "+79605947171"
  const whatsappNumber = "79605947171"
  const whatsappMessage = `Здравствуйте! Интересует ${product.name}. Можете предоставить подробную информацию?`

  // Дополнительные изображения и инструкции для каждого продукта
  const getProductDetails = (productName: string) => {
    switch (productName) {
      case "Стандарт М1":
        return {
          images: [
            "/placeholder.svg?height=300&width=400&text=Инструкция по применению Стандарт М1",
            "/placeholder.svg?height=300&width=400&text=Технические характеристики М1",
            "/placeholder.svg?height=300&width=400&text=Примеры использования М1",
          ],
          detailedDescription:
            "Базовый состав Стандарт М1 - это универсальное решение для нанесения на любые виды металлических форм. Обеспечивает надежную защиту от прилипания бетона и легкое извлечение готовых изделий.",
          instructions: [
            "Очистите поверхность формы от остатков бетона и загрязнений",
            "Нанесите тонкий равномерный слой смазки кистью или распылителем",
            "Дайте смазке впитаться в течение 2-3 минут",
            "Заливайте бетонную смесь согласно технологии",
            "После застывания аккуратно извлеките изделие",
          ],
          specifications: [
            "Расход: 80-120 г/м²",
            "Температура применения: от -10°C до +40°C",
            "Время высыхания: 2-3 минуты",
            "Срок хранения: 12 месяцев",
          ],
        }
      case "Стандарт М1 Elite":
        return {
          images: [
            "/placeholder.svg?height=300&width=400&text=Инструкция Elite состав",
            "/placeholder.svg?height=300&width=400&text=Применение для сложных изделий",
            "/placeholder.svg?height=300&width=400&text=Результаты использования Elite",
          ],
          detailedDescription:
            "Улучшенный состав Стандарт М1 Elite специально разработан для формирования сложных изделий с высокими требованиями к качеству поверхности. Устраняет дефекты пор при недостаточной вибрации.",
          instructions: [
            "Подготовьте форму: очистите и обезжирьте поверхность",
            "Нанесите Elite состав равномерным слоем",
            "Особое внимание уделите углам и сложным участкам",
            "Время выдержки: 3-5 минут для лучшего результата",
            "Заливайте бетон с минимальной вибрацией",
          ],
          specifications: [
            "Расход: 100-150 г/м²",
            "Температура применения: от -5°C до +45°C",
            "Время высыхания: 3-5 минут",
            "Эффективность: до 99% качественных изделий",
          ],
        }
      case "Стандарт М1 NEO":
        return {
          images: [
            "/placeholder.svg?height=300&width=400&text=Концентрат NEO инструкция",
            "/placeholder.svg?height=300&width=400&text=Приготовление эмульсии NEO",
            "/placeholder.svg?height=300&width=400&text=Экономия с NEO",
          ],
          detailedDescription:
            "Концентрат Стандарт М1 NEO позволяет получить премиальную эмульсию с возможностью значительного удешевления производственного процесса за счет разбавления.",
          instructions: [
            "Разбавьте концентрат водой в соотношении 1:3 или 1:5",
            "Тщательно перемешайте до получения однородной эмульсии",
            "Дайте эмульсии отстояться 10-15 минут",
            "Нанесите на подготовленную поверхность формы",
            "Контролируйте качество эмульсии перед каждым использованием",
          ],
          specifications: [
            "Коэффициент разбавления: 1:3 до 1:5",
            "Расход концентрата: 20-40 г/м²",
            "Экономия: до 70% по сравнению с готовыми составами",
            "Срок хранения эмульсии: 7 дней",
          ],
        }
      case "ЭКС-А":
        return {
          images: [
            "/placeholder.svg?height=300&width=400&text=ЭКС-А для горизонтальных форм",
            "/placeholder.svg?height=300&width=400&text=Применение ЭКС-А",
            "/placeholder.svg?height=300&width=400&text=Результаты ЭКС-А",
          ],
          detailedDescription:
            "Концентрат ЭКС-А специально разработан для горизонтальных форм и несложных изделий. Обеспечивает стабильное качество и надежную защиту форм.",
          instructions: [
            "Подходит для горизонтальных и слабонаклонных форм",
            "Разбавьте концентрат согласно инструкции",
            "Нанесите тонким слоем на чистую поверхность",
            "Особенно эффективен для простых геометрических форм",
            "Обеспечивает стабильный результат при серийном производстве",
          ],
          specifications: [
            "Оптимальный угол наклона: 0-15°",
            "Расход: 60-100 г/м²",
            "Время высыхания: 2-4 минуты",
            "Подходит для: плиты, блоки, простые изделия",
          ],
        }
      case "ЭКС-А NEO":
        return {
          images: [
            "/placeholder.svg?height=300&width=400&text=ЭКС-А NEO простая эмульсия",
            "/placeholder.svg?height=300&width=400&text=Стабильное качество NEO",
            "/placeholder.svg?height=300&width=400&text=Применение ЭКС-А NEO",
          ],
          detailedDescription:
            "ЭКС-А NEO предназначен для приготовления простой эмульсии с посредственным, но стабильным качеством поверхности. Оптимальное решение для массового производства.",
          instructions: [
            "Приготовьте простую эмульсию согласно пропорциям",
            "Используйте для массового производства типовых изделий",
            "Обеспечивает минимальное количество пор",
            "Подходит для изделий с невысокими требованиями к поверхности",
            "Экономичное решение для больших объемов",
          ],
          specifications: [
            "Качество поверхности: стандартное",
            "Количество пор: минимальное",
            "Расход: 70-110 г/м²",
            "Экономичность: высокая",
          ],
        }
      default:
        return {
          images: ["/placeholder.svg?height=300&width=400&text=Подробная информация о продукте"],
          detailedDescription: product.description,
          instructions: ["Следуйте инструкции на упаковке", "Соблюдайте технику безопасности"],
          specifications: ["Подробные характеристики уточняйте у менеджера"],
        }
    }
  }

  const productDetails = getProductDetails(product.name)

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-indigo-900 mb-2 flex items-center">
            {product.icon}
            <span className="ml-3">{product.name}</span>
            {product.popular && (
              <Badge className="ml-3 bg-orange-500 text-white font-bold border-2 border-orange-600">Популярный</Badge>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Основная информация */}
          <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
            <Badge variant="secondary" className="mb-3">
              {product.category}
            </Badge>
            <p className="text-gray-700 leading-relaxed">{productDetails.detailedDescription}</p>
          </div>

          {/* Галерея изображений */}
          <div>
            <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center">
              <Star className="h-5 w-5 mr-2 text-orange-600" />
              Инструкции и документация
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {productDetails.images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} - изображение ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-lg border-2 border-gray-200 hover:border-indigo-300 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Инструкция по применению */}
          <div>
            <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-orange-600" />
              Инструкция по применению
            </h3>
            <div className="bg-white rounded-lg p-4 border-2 border-indigo-200">
              <ol className="space-y-2">
                {productDetails.instructions.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-indigo-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Технические характеристики */}
          <div>
            <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center">
              <Beaker className="h-5 w-5 mr-2 text-orange-600" />
              Технические характеристики
            </h3>
            <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
              <ul className="space-y-2">
                {productDetails.specifications.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Преимущества */}
          <div>
            <h3 className="text-lg font-bold text-indigo-900 mb-3 flex items-center">
              <Droplets className="h-5 w-5 mr-2 text-orange-600" />
              Ключевые преимущества
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-3 border-2 border-indigo-200 flex items-center">
                  <ArrowRight className="h-4 w-4 text-indigo-700 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Кнопки связи */}
          <div className="bg-indigo-50 rounded-lg p-6 border-2 border-indigo-200">
            <h3 className="text-lg font-bold text-indigo-900 mb-4 text-center">Получить консультацию по продукту</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Позвонить сейчас
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Написать в WhatsApp
              </a>
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                <strong>Формовочные смазки:</strong> {phoneNumber}
              </p>
              <p className="text-xs text-gray-500 mt-1">Пн-Пт: 9:00-17:00 (МСК)</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
