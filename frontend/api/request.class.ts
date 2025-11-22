const API_URL = import.meta.env.VITE_API_URL

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

  protected static async request(endpoint: string, options: RequestInit = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        ...this.getAuthHeaders(),
        ...(options.headers || {}),
      },
    })

    let data: any = null
    data = await res.json()

    if (!res.ok) {
      throw new Error(data?.message || 'API Error')
    }

    return data
  }
}
