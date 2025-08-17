"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { sendProductInquiry } from "@/app/actions/send-email"

interface SimpleProductModalProps {
  children: React.ReactNode
  productName: string
}

export function SimpleProductModal({ children, productName }: SimpleProductModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const whatsappNumber = "79605947171"
  const whatsappMessage = `Здравствуйте! Интересует ${productName}. Можете предоставить подробную информацию?`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("message", formData.message)
      formDataToSend.append("product", productName)

      const result = await sendProductInquiry(formDataToSend)

      if (result.success) {
        setIsSubmitted(true)
        // Сброс через 5 секунд
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          })
        }, 5000)
      } else {
        setError(result.message)
      }
    } catch (error) {
      console.error("Ошибка отправки:", error)
      setError("Произошла ошибка при отправке сообщения. Попробуйте еще раз.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Сообщение отправлено!</h3>
            <p className="text-gray-600 mb-4">
              Ваш запрос о продукте <strong>{productName}</strong> отправлен на info@oil-standart.com. Наш специалист
              свяжется с вами в ближайшее время.
            </p>
            <div className="bg-orange-50 rounded-lg p-3 border-2 border-orange-200">
              <p className="text-sm text-gray-700">
                <strong>Ответим в течение 2-3 часов</strong> в рабочее время
                <br />
                Пн-Пт: 9:00-17:00 (МСК)
              </p>
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
          <DialogTitle className="text-xl font-bold text-indigo-900 flex items-center">
            <Mail className="h-5 w-5 mr-2 text-orange-600" />
            {productName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="bg-orange-50 rounded-lg p-3 border-2 border-orange-200">
            <p className="text-sm text-gray-700">
              Заполните форму ниже, и наш специалист предоставит подробную информацию о продукте{" "}
              <strong>{productName}</strong>, включая технические характеристики, инструкции по применению и
              коммерческое предложение.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="product-name" className="text-sm font-medium">
                  Ваше имя *
                </Label>
                <Input
                  id="product-name"
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
                <Label htmlFor="product-phone" className="text-sm font-medium">
                  Телефон *
                </Label>
                <Input
                  id="product-phone"
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

            <div>
              <Label htmlFor="product-email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="product-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="mt-1 h-9"
                placeholder="email@company.com"
              />
            </div>

            <div>
              <Label htmlFor="product-message" className="text-sm font-medium">
                Ваш вопрос (необязательно)
              </Label>
              <Textarea
                id="product-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isLoading}
                className="mt-1"
                rows={3}
                placeholder={`Интересует ${productName}. Нужны технические характеристики, инструкции по применению и цены...`}
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 flex items-start">
                <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-indigo-900 hover:bg-indigo-800 font-bold h-10"
              disabled={!formData.name || !formData.phone || !formData.email || isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Отправляем...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Отправить на info@oil-standart.com
                </>
              )}
            </Button>
          </form>

          <div className="border-t pt-4">
            <p className="text-center text-sm text-gray-600 mb-3">Или напишите в WhatsApp:</p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Написать в WhatsApp
            </a>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-700 text-center">
              📧 Сообщение будет отправлено на info@oil-standart.com
              <br />
              ⏱️ Ответим в течение 2-3 часов в рабочее время (Пн-Пт: 9:00-17:00 МСК)
              <br />📋 Предоставим техническую документацию и коммерческое предложение
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
