import { Request, Response } from "express";
import { UsuarioService } from "../services/UsuarioService";
import { VeiculoService } from "../services/VeiculoService";
import { userInfo } from "os";

export const veiculos = async (req: Request, res: Response) => {
    const { id } = req.params;
    const veiculos = await VeiculoService.findAll( parseInt(id) );
    res.json(veiculos);
}

export const veiculoCreate = async (req: Request, res: Response) => {
    const { marcaId, modelo, ano, usuarioId} = req.body;
    if( marcaId && modelo && ano && usuarioId){
        const veiculo = await VeiculoService.create_veiculo({
            marcaId: parseInt(marcaId),
            modelo,
            ano: parseInt(ano),
            usuarioId: parseInt(usuarioId)
        });
        if(veiculo){
            res.json(veiculo);
        }
        else{
            res.json( { error: "Erro na hora de salvar o veículo "});
        }
    }
    else{
        res.json( { error: "Dados incompletos" });
    }
}