"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Download, FileText, CheckCircle } from "lucide-react"

interface CatalogModalProps {
  children: React.ReactNode
}

export function CatalogModal({ children }: CatalogModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки каталога
    console.log("Запрос каталога:", { email, name })
    setIsSubmitted(true)

    // Сброс через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
      setName("")
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Каталог отправлен!</h3>
            <p className="text-gray-600 mb-4">
              Электронный каталог серии СТАНДАРТ отправлен на ваш email. Проверьте почту в течение 5-10 минут.
            </p>
            <p className="text-sm text-gray-500">Не забудьте проверить папку "Спам"</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-indigo-900 mb-4">Скачать каталог серии СТАНДАРТ</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Информация о каталоге */}
          <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
            <h3 className="font-bold text-indigo-900 mb-3 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-orange-600" />
              Что вы получите:
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Полный каталог СОЖ серии СТАНДАРТ (PDF, 24 страницы)
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Технические характеристики всех продуктов
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Рекомендации по применению
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-indigo-700 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                Актуальные цены и условия поставки
              </li>
            </ul>
          </div>

          {/* Форма для получения каталога */}
          <div>
            <h3 className="font-bold text-indigo-900 mb-3 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-orange-600" />
              Введите ваши данные:
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="catalog-name">Ваше имя *</Label>
                <Input
                  id="catalog-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <Label htmlFor="catalog-email">Email адрес *</Label>
                <Input
                  id="catalog-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1"
                  placeholder="example@company.com"
                />
              </div>
              <Button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-800 font-bold">
                <Download className="h-4 w-4 mr-2" />
                Получить каталог на email
              </Button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Мы не передаем ваши данные третьим лицам и не рассылаем спам
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
