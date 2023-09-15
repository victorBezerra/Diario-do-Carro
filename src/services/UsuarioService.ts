import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type createUsuario = {
    nome: string,
    email: string
}

export const UsuarioService = {
    findAll: async()=>{
        return await prisma.usuario.findMany();
    },

    findOne: async (id: number) => {
        return await prisma.usuario.findUnique({
            where:{
                id
            }
        });
    },

    findOneEmail: async (email: string) => {
        return await prisma.usuario.findMany({
            where:{
                email:{
                    contains: email
                }
            }
        });
    },

    create_usuario: async (data: createUsuario) => {
        return await prisma.usuario.create({ data });
    },

    delete_usuario: async (id: number) => {
        return await prisma.usuario.delete({ where: {id} });
    }
}