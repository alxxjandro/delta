const API_URL = import.meta.env.VITE_API_URL

type ResponseType = 'json' | 'blob' | 'text'

interface RequestOptions extends RequestInit {
  responseType?: ResponseType
}

export default class Request {
  private static getAuthHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    const token = localStorage.getItem('token')
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return headers
  }

  protected static async request(endpoint: string, options: RequestOptions = {}) {
    const { responseType = 'json', ...fetchOptions } = options

    const res = await fetch(`${API_URL}${endpoint}`, {
      ...fetchOptions,
      headers: {
        ...this.getAuthHeaders(),
        ...(fetchOptions.headers || {}),
      },
    })

    if (!res.ok) {
      let errorMessage = 'API Error'
      try {
        const err = await res.json()
        errorMessage = err?.message || errorMessage
      } catch {}
      throw new Error(errorMessage)
    }

    if (responseType === 'blob') {
      return res
    }

    if (responseType === 'text') {
      return await res.text()
    }

    return await res.json()
  }
}
