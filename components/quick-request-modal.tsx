"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Zap, CheckCircle, Phone, Package, Loader2, AlertCircle, Send, TestTube } from "lucide-react"

interface QuickRequestModalProps {
  children: React.ReactNode
  productName?: string
}

export function QuickRequestModal({ children, productName }: QuickRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: productName || "",
    volume: "",
    company: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isTesting, setIsTesting] = useState(false)
  const [error, setError] = useState("")

  const technicalFluids = [
    "Масло индустриальное И-20",
    "Масло индустриальное И-40",
    "Растворитель 646",
    "Жидкость гидравлическая МГЕ-10А",
    "Жидкость гидравлическая ВМГЗ",
    "Антифриз концентрат",
    "Другое",
  ]

  const volumes = ["До 100 л", "100-500 л", "500-1000 л", "1000-5000 л", "Более 5000 л"]

  const handleTest = async () => {
    setIsTesting(true)
    setError("")

    // Имитация теста для статического экспорта
    setTimeout(() => {
      alert("✅ Тест успешен! В production версии будет использоваться реальная отправка email")
      setIsTesting(false)
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Имитация отправки для статического экспорта
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Запрос на технические жидкости:", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        company: formData.company,
        product: formData.product,
        volume: formData.volume,
        timestamp: new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }),
      })

      setIsSubmitted(true)

      // Сброс через 8 секунд
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          phone: "",
          email: "",
          product: productName || "",
          volume: "",
          company: "",
        })
      }, 8000)
    } catch (error) {
      console.error("Ошибка отправки:", error)
      setError("Произошла ошибка при отправке запроса. Попробуйте позвонить нам напрямую.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const selectProduct = (product: string) => {
    setFormData({
      ...formData,
      product: product,
    })
  }

  const selectVolume = (volume: string) => {
    setFormData({
      ...formData,
      volume: volume,
    })
  }

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Запрос отправлен!</h3>
            <p className="text-gray-600 mb-4">
              Ваш запрос на <strong>{formData.product}</strong> успешно отправлен. Наш менеджер свяжется с вами в
              течение 30 минут.
            </p>

            <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Срочно нужно?</strong> Звоните прямо сейчас:
              </p>
              <div className="flex flex-col space-y-1">
                <a href="tel:+79605947171" className="text-indigo-900 font-bold hover:text-orange-600">
                  📞 Технические жидкости: +7-960-594-71-71
                </a>
                <a href="tel:+79066277171" className="text-indigo-900 font-bold hover:text-orange-600">
                  📞 СОЖ серии СТАНДАРТ: +7-906-627-71-71
                </a>
              </div>
              <p className="text-xs text-gray-600 mt-2">Пн-Пт: 9:00-17:00 (МСК)</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-indigo-900 mb-2 flex items-center">
            <Zap className="h-5 w-5 mr-2 text-orange-600" />
            Быстрый запрос технических жидкостей
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Тестовая кнопка */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-800 font-medium">Тест email отправки</p>
                <p className="text-xs text-yellow-600">Проверить работу Resend</p>
              </div>
              <Button
                type="button"
                onClick={handleTest}
                disabled={isTesting}
                size="sm"
                variant="outline"
                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 bg-transparent"
              >
                {isTesting ? (
                  <>
                    <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                    Тест...
                  </>
                ) : (
                  <>
                    <TestTube className="h-3 w-3 mr-1" />
                    Тест
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Основная информация */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="quick-name" className="text-sm font-medium">
                Ваше имя *
              </Label>
              <Input
                id="quick-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 h-9"
                placeholder="Имя"
              />
            </div>
            <div>
              <Label htmlFor="quick-phone" className="text-sm font-medium">
                Телефон *
              </Label>
              <Input
                id="quick-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 h-9"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="quick-email" className="text-sm font-medium">
                Email (для подтверждения)
              </Label>
              <Input
                id="quick-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                className="mt-1 h-9"
                placeholder="email@company.com"
              />
            </div>
            <div>
              <Label htmlFor="quick-company" className="text-sm font-medium">
                Компания
              </Label>
              <Input
                id="quick-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={isLoading}
                className="mt-1 h-9"
                placeholder="ООО Компания"
              />
            </div>
          </div>

          {/* Выбор продукта */}
          <div>
            <Label className="text-sm font-medium mb-2 flex items-center">
              <Package className="h-4 w-4 mr-1 text-orange-600" />
              Какая жидкость нужна? *
            </Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {technicalFluids.map((fluid) => (
                <Badge
                  key={fluid}
                  variant={formData.product === fluid ? "default" : "outline"}
                  className={`cursor-pointer text-xs py-1 px-2 transition-colors ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  } ${
                    formData.product === fluid ? "bg-indigo-900 text-white" : "hover:bg-indigo-100 border-indigo-300"
                  }`}
                  onClick={() => !isLoading && selectProduct(fluid)}
                >
                  {fluid}
                </Badge>
              ))}
            </div>
          </div>

          {/* Выбор объема */}
          <div>
            <Label className="text-sm font-medium mb-2">Необходимый объем *</Label>
            <div className="flex flex-wrap gap-2 mt-2">
              {volumes.map((volume) => (
                <Badge
                  key={volume}
                  variant={formData.volume === volume ? "default" : "outline"}
                  className={`cursor-pointer text-xs py-1 px-2 transition-colors ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  } ${
                    formData.volume === volume ? "bg-orange-500 text-white" : "hover:bg-orange-100 border-orange-300"
                  }`}
                  onClick={() => !isLoading && selectVolume(volume)}
                >
                  {volume}
                </Badge>
              ))}
            </div>
          </div>

          {/* Ошибка */}
          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 flex items-start">
              <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-red-700 text-sm font-medium">{error}</p>
                <p className="text-red-600 text-xs mt-1">Проверьте логи браузера (F12) для деталей</p>
              </div>
            </div>
          )}

          {/* Кнопки */}
          <div className="flex flex-col gap-3 pt-2">
            <Button
              type="submit"
              className="w-full bg-indigo-900 hover:bg-indigo-800 font-bold h-10"
              disabled={!formData.name || !formData.phone || !formData.product || !formData.volume || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Отправляем через Resend...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Отправить запрос
                </>
              )}
            </Button>

            <div className="text-center">
              <p className="text-xs text-gray-500 mb-2">Или позвоните прямо сейчас:</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="tel:+79605947171"
                  className="flex items-center text-indigo-900 hover:text-orange-600 font-semibold text-sm"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  +7-960-594-71-71
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-700 text-center">
              📧 Запрос будет отправлен через Resend на info@oil-standart.com
              <br />
              {formData.email && "📧 Подтверждение придет на ваш email"}
              <br />
              ⏱️ Ответим в течение 30 минут в рабочее время (Пн-Пт: 9:00-17:00 МСК)
              <br />🔍 Используйте кнопку "Тест" для проверки email отправки
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
