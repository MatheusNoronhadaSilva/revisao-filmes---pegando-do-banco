/**************************************
 * Objetivo: Arquivo responsável pelas validações e consistencias de dados de filme
 * Data: 01/02/2024
 * Autor: Matheus Noronha da Silva
 * Versão: 1.0
 */

//import do arquivo responsável pela interação com o BD (model)
const filmesDAO = require('../model/DAO/filme.js')

const setInserirNovoFilme = async function(){
    //função para inserir um novo filme
}

const setAtualizarFilme = async function(){
    //função para atualizar um filme
}

const setExcluirFilmes = async function(){
    //Função para excluir um filme
}

const getListarFilmes = async function(nome){

    //cria um objeto JSON
    let filmesJSON = {}; 
    
    //chama a função do DAO que retorna os filmes do DB
    let dadosFilmes = await filmesDAO.selectAllFilmes(nome)

    //validação para verificar se o DAO retornou dados
    if(dadosFilmes){
        //cria o JSON
        filmesJSON.filmes = dadosFilmes
        filmesJSON.quantidade = dadosFilmes.length
        filmesJSON.status_code = 200

        return filmesJSON
    } else {
        return false
    }
}

const getNomeFilme = async function(nome) {

    let nomeFilmeJSON = {}

    let dadosNomeFilme = await filmesDAO.selectByNameFilme(nome)

    if(dadosNomeFilme) {
        nomeFilmeJSON.filmes = dadosNomeFilme
        nomeFilmeJSON.quantidade = dadosNomeFilme.length
        nomeFilmeJSON.status_code = 200

        return nomeFilmeJSON
    } else {
        return false
    }
}

const getBuscarFilme = async function(){
    //função para buscar um filme
}

module.exports = {
    getNomeFilme,
    setInserirNovoFilme,
    setAtualizarFilme,
    setExcluirFilmes,
    getListarFilmes,
    getBuscarFilme
}