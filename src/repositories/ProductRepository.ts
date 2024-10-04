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

export type Categoria = "Memória RAM" | "Processador" | "Placa de Vídeo" | "Placa Mãe" | "Fonte" | "Periférico";

export const categories: Categoria[] = [
    "Memória RAM",
    "Processador",
    "Placa de Vídeo",
    "Placa Mãe",
    "Fonte",
    "Periférico"
];

export async function getAllProducts(): Promise<Product[]> {
    return await mockedProducts; // assim que tiver o back pode tirar o mockedProducts
}

const mockedProducts: {
    id: number;
    title: string;
    description: string;
    location: string;
    image: string;
    nomeDono: string;
    numeroDono: string;
    categoria: Categoria;
}[] = [
    {
        id: 1,
        title: "Memória RAM",
        description: "8GB DDR3 1600Mhz",
        location: "Sorocaba, SP",
        image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/rkgqanvu/file.png",
        nomeDono: "João Silva",
        numeroDono: "(15) 99999-1234",
        categoria: "Memória RAM"
    },
    {
        id: 2,
        title: "Memória RAM",
        description: "4GB DDR3 1333Mhz",
        location: "Sorocaba, SP",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_954399-MLU77806405179_072024-F.webp",
        nomeDono: "Maria Oliveira",
        numeroDono: "(15) 99888-4321",
        categoria: "Memória RAM"
    },
    {
        id: 3,
        title: "Memória RAM",
        description: "16GB DDR4 2400Mhz",
        location: "Sorocaba, SP",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_954399-MLU77806405179_072024-F.webp",
        nomeDono: "Carlos Souza",
        numeroDono: "(15) 99777-8765",
        categoria: "Memória RAM"
    },
    {
        id: 4,
        title: "Processador Ryzen",
        description: "AMD Ryzen 5 3600 3.6GHz",
        location: "Sorocaba, SP",
        image: "https://www.kabum.com.br/_next/image?url=https%3A%2F%2Fimages.kabum.com.br%2Fprodutos%2Ffotos%2F102438%2Fprocessador-amd-ryzen-5-3600-cache-32mb-3-6ghz-4-2ghz-max-turbo-am4-sem-video-100-100000031box_1629126186_g.jpg&w=1080&q=100",
        nomeDono: "Ana Santos",
        numeroDono: "(15) 99666-6543",
        categoria: "Processador"
    },
    {
        id: 5,
        title: "Processador Ryzen",
        description: "AMD Ryzen 7 3700X 4.4GHz",
        location: "Sorocaba, SP",
        image: "https://a-static.mlcdn.com.br/800x560/processador-amd-ryzen-7-3700x-3-6ghz-max-4-4ghz-ddr4-am4-32mb-cache/trpstore/12588831972/2a6094afa2668a7a8d79fee85b28b1f7.jpeg",
        nomeDono: "Pedro Alves",
        numeroDono: "(15) 99555-0987",
        categoria: "Processador"
    }
];
