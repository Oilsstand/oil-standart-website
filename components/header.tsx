"use client"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ConsultationModal } from "@/components/consultation-modal"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navigation = [
    { name: "Главная", href: "#home" },
    { name: "Формовочные смазки", href: "#products" },
    { name: "СОЖ СТАНДАРТ", href: "#coolant-fluids" },
    { name: "Технические жидкости", href: "#technical-fluids" },
    { name: "О компании", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ]

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Всегда показываем header в самом верху
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скрываем при прокрутке вниз (после 100px)
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Показываем при прокрутке вверх
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <header
      className={`bg-white shadow-lg border-b-2 border-orange-300 sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="/images/oil-standart-logo.jpg"
                alt="Oil-Standart Logo"
                className="h-14 w-14 rounded-full flex-shrink-0"
              />
              <h1 className="text-xl lg:text-2xl font-bold text-indigo-900 whitespace-nowrap">Oil-Standart</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1 mx-4">
            <div className="flex items-center justify-center space-x-1 xl:space-x-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-orange-600 hover:text-indigo-900 hover:bg-orange-100 px-2 py-2 rounded-md text-sm font-medium transition-all duration-300 border-2 border-transparent hover:border-orange-300 hover:shadow-lg whitespace-nowrap"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block flex-shrink-0">
            <ConsultationModal>
              <Button className="bg-indigo-900 hover:bg-indigo-800 shadow-lg border border-indigo-800 font-semibold text-sm px-4 py-2">
                Связаться
              </Button>
            </ConsultationModal>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <img
                      src="/images/oil-standart-logo.jpg"
                      alt="Oil-Standart Logo"
                      className="h-12 w-12 rounded-full"
                    />
                    <h2 className="text-xl font-bold text-indigo-900">Oil-Standart</h2>
                  </div>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-orange-600 hover:text-indigo-900 hover:bg-orange-100 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 border-2 border-transparent hover:border-orange-300 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <ConsultationModal>
                    <Button className="bg-indigo-900 hover:bg-indigo-800 shadow-lg border border-indigo-800 font-semibold mt-4 w-full">
                      Связаться с нами
                    </Button>
                  </ConsultationModal>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
