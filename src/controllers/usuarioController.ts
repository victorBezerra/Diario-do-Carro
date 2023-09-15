import { Request, Response } from "express";
import { UsuarioService } from "./../services/UsuarioService";
// import { VeiculoService } from "./../services/VeiculoService";

export const usuarios = async (req: Request, res: Response) => {
    const usuarios = await UsuarioService.findAll();
    res.json({usuarios});
}

export const usuario = async (req: Request, res: Response) => {
    const id = req.params.id;
    const usuario = await UsuarioService.findOne( parseInt(id) );
    if(usuario){
        res.json(usuario);
    }
    else{
        res.json({
            error: "Usuário não encontrado"
        })
    }
}

export const usuarioCreate = async (req: Request, res: Response) => {
    const {nome, email} = req.body;
    if(nome && email){
        if(email){
            const e = await UsuarioService.findOneEmail(email);
            if(e.length > 0){
                res.json(
                    {error:"Email já cadastrado!"}
                    );
            }
            else{
                const usuario = await UsuarioService.create_usuario({
                    nome, email
                })
                res.json( usuario );
            }
        }
    }
    else{res.json({
        error: "Dados não preenchidos"
    })}
    // if(nome && email){
        
    // }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await UsuarioService.findOne(parseInt(id));
    if(usuario){
        await UsuarioService.delete_usuario(usuario.id);
        res.json({status: true});
    }
    else{
        res.json({error: "Usuário não existe"});
    }
}