"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MessageCircle, Clock, User } from "lucide-react"

interface ConsultationModalProps {
  children: React.ReactNode
}

export function ConsultationModal({ children }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика отправки формы
    console.log("Заявка на консультацию:", formData)
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-indigo-900 mb-4">Получить консультацию</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Контактные телефоны */}
          <div className="bg-orange-50 rounded-lg p-4 border-2 border-orange-200">
            <h3 className="font-bold text-indigo-900 mb-3 flex items-center">
              <Phone className="h-5 w-5 mr-2 text-orange-600" />
              Позвоните прямо сейчас:
            </h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Формовочные смазки:</span>
                <a
                  href="tel:+79605947171"
                  className="text-indigo-900 font-bold hover:text-orange-600 transition-colors"
                >
                  +7-960-594-71-71
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">СОЖ серии СТАНДАРТ:</span>
                <a
                  href="tel:+79066277171"
                  className="text-indigo-900 font-bold hover:text-orange-600 transition-colors"
                >
                  +7-906-627-71-71
                </a>
              </div>
            </div>
            <div className="mt-3 flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2" />
              Пн-Пт: 9:00-17:00, Сб-Вс: выходной
            </div>

            {/* Добавляем кнопку WhatsApp */}
            <div className="mt-4">
              <a
                href="https://wa.me/79605947171?text=Здравствуйте!%20Нужна%20консультация%20по%20СОЖ%20серии%20СТАНДАРТ.%20Можете%20помочь%20с%20выбором%20подходящего%20продукта?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Написать в WhatsApp
              </a>
            </div>
          </div>

          {/* Форма обратного звонка */}
          <div>
            <h3 className="font-bold text-indigo-900 mb-3 flex items-center">
              <MessageCircle className="h-5 w-5 mr-2 text-orange-600" />
              Или оставьте заявку:
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <Label htmlFor="message">Вопрос (необязательно)</Label>
                <Input
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1"
                  placeholder="Опишите ваш вопрос"
                />
              </div>
              <Button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-800 font-bold">
                <User className="h-4 w-4 mr-2" />
                Заказать обратный звонок
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
