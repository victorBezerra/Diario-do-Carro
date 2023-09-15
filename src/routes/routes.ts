import { Router } from "express";

import * as usuarioController from './../controllers/usuarioController';
import * as veiculoController from './../controllers/veiculoController';

const router = Router();

router.get('/usuarios', usuarioController.usuarios);
router.get('/usuario/:id', usuarioController.usuario);
router.get('/veiculos', veiculoController.veiculos);

router.post('/usuario_create', usuarioController.usuarioCreate);

router.delete('/usuario_delete/:id', usuarioController.deleteUsuario);

router.post('/veiculo_create', veiculoController.veiculoCreate);


export default router;