import axios from 'axios'

class AxiosService {
  private static $axios
  private static singleton() {
    if (!this.$axios) {
      this.$axios = this.getInstance()
    }
    return this.$axios
  }

  private static getInstance()  {
    const api = axios.create()

    api.defaults.headers.common = {
      'Content-Type': 'application/json'
    }

    return api
  }

    static async request(config: AxiosRequestConfig) {
        return await this.singleton().request(config)
    }

    static async get(url: string, config?: AxiosRequestConfig) {
        return await this.singleton().get(url, config)
    }

    static async post(url: string, data: any, config?: AxiosRequestConfig) {
        return await this.singleton().post(url, data, config)
    }

    static async put(url: string, data: any, config?: AxiosRequestConfig) {
        return await this.singleton().put(url, data, config)
    }

    static async delete(url: string, config?: AxiosRequestConfig) {
        return await this.singleton().delete(url, config)
    }

    static async head(url: string, config?: AxiosRequestConfig) {
        return await this.singleton().head(url, config)
    }

    static async options(url: string, config?: AxiosRequestConfig) {
        return await this.singleton().options(url, config)
    }

    static async patch(url: string, config?: AxiosRequestConfig) {
        return await this.singleton().patch(url, config)
    }

}

export default AxiosService