import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type veiculoCreate = {
    marcaId: number,
    modelo: string
    ano: number,
    usuarioId: number
}

export const VeiculoService = {

    findAll: async (id: number) => {
        return await prisma.veiculo.findMany( { where: {id} } ); 
    },
    create_veiculo: async (data: veiculoCreate) => {
        return await prisma.veiculo.create( {data} );
    }
};