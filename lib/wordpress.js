// API для работы с WordPress
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || "https://admin.oil-standart.com/wp-json/wp/v2"

export async function getProducts() {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/products?_embed`)
    if (!res.ok) {
      throw new Error("Failed to fetch products")
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export async function getProduct(slug) {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/products?slug=${slug}&_embed`)
    if (!res.ok) {
      throw new Error("Failed to fetch product")
    }
    const products = await res.json()
    return products[0] || null
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function getPosts() {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed`)
    if (!res.ok) {
      throw new Error("Failed to fetch posts")
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export async function getPages() {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/pages?_embed`)
    if (!res.ok) {
      throw new Error("Failed to fetch pages")
    }
    return await res.json()
  } catch (error) {
    console.error("Error fetching pages:", error)
    return []
  }
}
