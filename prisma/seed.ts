import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main =async () => {
    await prisma.veiculo.deleteMany({});
    await prisma.marca.deleteMany({});

    const usuario = await prisma.usuario.create({
        data:{
            email: "victorbezerr@hotmail.com",
            nome: "Victor Bezerra"
        }
    });
}

main();