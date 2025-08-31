"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { WordPressProduct } from "@/types/wordpress"
import { getProducts } from "@/lib/wordpress"

export function WordPressProducts() {
  const [products, setProducts] = useState<WordPressProduct[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Error loading products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
            </CardHeader>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="transition-all duration-300 hover:shadow-xl">
          {product._embedded?.["wp:featuredmedia"]?.[0] && (
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <img
                src={product._embedded["wp:featuredmedia"][0].source_url || "/placeholder.svg"}
                alt={product._embedded["wp:featuredmedia"][0].alt_text || product.title.rendered}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-lg">{product.title.rendered}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="text-sm text-gray-600 mb-4"
              dangerouslySetInnerHTML={{
                __html: product.content.rendered.substring(0, 150) + "...",
              }}
            />
            {product.acf?.features && (
              <div className="mb-4">
                <h4 className="font-semibold text-sm mb-2">Особенности:</h4>
                <ul className="text-xs space-y-1">
                  {product.acf.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-indigo-700 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Button className="w-full">Подробнее</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
