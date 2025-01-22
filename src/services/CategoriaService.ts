import AxiosService from '@/services/base/axios';

interface Categoria {
    nome: string;
    ingredientes: string[];
    imagem: string;
}

class CategoriaService {
    static async getAll(): Promise<Categoria[]> {
      const { data } = await AxiosService.get('http://localhost:3000/categorias')
      return data
    }
}

export default CategoriaService;