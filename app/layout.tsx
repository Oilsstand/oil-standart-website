import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Oil-Standart - Формовочные смазки и СОЖ серии СТАНДАРТ",
  description:
    "Производство формовочных смазок, СОЖ серии СТАНДАРТ и поставка технических жидкостей для промышленности. Качество и надежность для вашего производства.",
  keywords: "формовочные смазки, СОЖ, смазочно-охлаждающие жидкости, технические жидкости, Oil-Standart, производство",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  openGraph: {
    title: "Oil-Standart - Формовочные смазки и СОЖ серии СТАНДАРТ",
    description:
      "Производство формовочных смазок, СОЖ серии СТАНДАРТ и поставка технических жидкостей для промышленности",
    url: "https://oil-standart.com",
    siteName: "Oil-Standart",
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <meta name="yandex-verification" content="558f03556945edd5" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192.png" />

        {/* Yandex.Metrika counter */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103961305', 'ym');
              ym(103961305, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/103961305" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {/* /Yandex.Metrika counter */}
      </head>
      <body>
        {children}

        {/* Yandex.Metrika events tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Отслеживание отправки форм
              document.addEventListener('DOMContentLoaded', function() {
                // Отслеживание кликов по телефону
                var phoneLinks = document.querySelectorAll('a[href^="tel:"]');
                phoneLinks.forEach(function(link) {
                  link.addEventListener('click', function() {
                    if (typeof ym !== 'undefined') {
                      ym(103961305, 'reachGoal', 'phone_click');
                      console.log('Яндекс.Метрика: Клик по телефону');
                    }
                  });
                });
                
                // Отслеживание кликов по email
                var emailLinks = document.querySelectorAll('a[href^="mailto:"]');
                emailLinks.forEach(function(link) {
                  link.addEventListener('click', function() {
                    if (typeof ym !== 'undefined') {
                      ym(103961305, 'reachGoal', 'email_click');
                      console.log('Яндекс.Метрика: Клик по email');
                    }
                  });
                });
                
                // Отслеживание кликов по WhatsApp
                var whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
                whatsappLinks.forEach(function(link) {
                  link.addEventListener('click', function() {
                    if (typeof ym !== 'undefined') {
                      ym(103961305, 'reachGoal', 'whatsapp_click');
                      console.log('Яндекс.Метрика: Клик по WhatsApp');
                    }
                  });
                });
                
                // Отслеживание отправки форм (для модальных окон)
                var submitButtons = document.querySelectorAll('button[type="submit"]');
                submitButtons.forEach(function(button) {
                  button.addEventListener('click', function(e) {
                    var form = button.closest('form');
                    if (form) {
                      setTimeout(function() {
                        if (typeof ym !== 'undefined') {
                          ym(103961305, 'reachGoal', 'form_submit');
                          console.log('Яндекс.Метрика: Отправка формы');
                        }
                      }, 100);
                    }
                  });
                });
                
                // Отслеживание времени на сайте
                setTimeout(function() {
                  if (typeof ym !== 'undefined') {
                    ym(103961305, 'reachGoal', 'time_30s');
                    console.log('Яндекс.Метрика: 30 секунд на сайте');
                  }
                }, 30000);
                
                setTimeout(function() {
                  if (typeof ym !== 'undefined') {
                    ym(103961305, 'reachGoal', 'time_60s');
                    console.log('Яндекс.Метрика: 60 секунд на сайте');
                  }
                }, 60000);
                
                // Отслеживание скролла
                var scrollTracked = false;
                window.addEventListener('scroll', function() {
                  if (!scrollTracked && window.scrollY > document.body.scrollHeight * 0.5) {
                    if (typeof ym !== 'undefined') {
                      ym(103961305, 'reachGoal', 'scroll_50');
                      console.log('Яндекс.Метрика: Скролл 50%');
                    }
                    scrollTracked = true;
                  }
                });
                
                // Отслеживание просмотра разделов
                var sections = ['products', 'coolant-fluids', 'technical-fluids', 'about', 'contact'];
                sections.forEach(function(sectionId) {
                  var section = document.getElementById(sectionId);
                  if (section) {
                    var observer = new IntersectionObserver(function(entries) {
                      entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                          if (typeof ym !== 'undefined') {
                            ym(103961305, 'reachGoal', 'view_' + sectionId);
                            console.log('Яндекс.Метрика: Просмотр секции ' + sectionId);
                          }
                          observer.unobserve(entry.target);
                        }
                      });
                    }, { threshold: 0.5 });
                    observer.observe(section);
                  }
                });
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
