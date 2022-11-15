alert(`*=*=*=*=*=*=*=*=* CADASTRO DE IMÓVEIS  =*=*=*=*=*=*=*=*=`)
const imoveis = []
let menu = ''
do{
    menu = prompt(
        `*-*-*-*-*-*-   MENU   *-*-*-*-*-*-\n
        1 - SALVAR IMÓVEL.
        2 - MOSTRAR IMÓVEIS CADASTRADOS.
        3 - SAIR.\n
    +-+-+-+--+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
      NÚMERO DE IMÓVEIS CADASTRADOS: ${imoveis.length}\n
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-`
        )
switch (menu) {
    case "1":
        const imovel = {}
        imovel.nome = prompt(`Digite o nome do propietário.`)
        imovel.quantidadeQuartos = parseFloat(prompt(`Qual a quantidade de quartos? `))
        imovel.quantidadeBanheiors =parseFloat(prompt(`Quantidade de banheiros? `))
        imovel.garagem = prompt(`Tem garagem?  [sim/não] `)
        if(imovel.garagem === "sim"){
            imovel.quantGaragem = parseFloat(prompt(`Qual a quantidade de veículos na garagem ?`))
        } else{
            imovel.quantGaragem = (`Não tem espaço para veículos!`)
        }
        const confirma = confirm(
        `==============================================
        CONFIRMA AS INFORMAÇÕES DO IMÓVEL?\n\n
        Nome do Proprietário: ${imovel.nome}\n
        Quantidade de Quartos: ${imovel.quantidadeQuartos}\n
        Quantidade de Banheiros: ${imovel.quantidadeBanheiors}\n
        Garagem: ${imovel.garagem}\n
        Quantidade de Veículos na garagem: ${imovel.quantGaragem}`
        )
        if(confirma){
            imoveis.push(imovel)
            alert(`IMÓVEL CADASTRADO COM SUCESSO!`)
        } else{
            alert(`IMÓVEL NÃO CADASTRADO!`)
        }
        break
    case "2":
        if(imoveis.length == 0){
            alert(`Não há imóveis cadastrados!`)
            break
        } else{
            let lista =''
        for(let i = 0; i < imoveis.length ; i++){
            lista += (
                `
                ---------------------------------------
                IMÓVEL Nº ${[i+1]}.\n
                Nome do proprietário: ${imoveis[i].nome}\n
                Quantidade de Quartos: ${imoveis[i].quantidadeQuartos}\n
                Quantidade de Banheiros: ${imoveis[i].quantidadeBanheiors}\n
                Garagem: ${imoveis[i].garagem}\n
                Cabem quantos carros na garagem? ${imoveis[i].quantGaragem} `
            ) 
        }  alert(`Lista de Imóveis cadastrados:\n
        ${lista}`)  
        break
        }
    case "3":
        alert(`Programa sendo finalizado!`)
        break       
    default:
        alert(`Opção inválida!\n
        VOLTANDO AO MENU...`)
        break
}
} while(menu !== "3")

