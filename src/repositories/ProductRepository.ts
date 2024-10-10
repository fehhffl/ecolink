export type Product = {
    id: number;
    title: string;
    description: string;
    location: string;
    image: string;
    nomeDono: string;
    numeroDono: string;
    categoria: string;
};

export type Categoria = 'Memória RAM' | 'Processador' | 'Placa de Vídeo' | 'Placa Mãe' | 'Fonte' | 'Periférico';

export const categories: Categoria[] = [
    'Memória RAM',
    'Processador',
    'Placa de Vídeo',
    'Placa Mãe',
    'Fonte',
    'Periférico'
]
export async function getAllProducts(): Promise<Product[]> {
    const donations = await fetch('http://localhost:3333/donations')
    const data = await donations.json()
    return data
}

