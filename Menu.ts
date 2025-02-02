import readlinesync from "readline-sync";
import { PCsGamers} from "./src/model/PCsGamers";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
  let opcao: number;
  const pecas: ProdutoController = new ProdutoController();

    while (true) {
    console.log("_____________________________________________________");
    console.log("                                                     ");
    console.log("                Pain Gaming - PCs Gamers             ");
    console.log("                                                     ");
    console.log("_____________________________________________________");
    console.log("                                                     ");
    console.log("            [1] - Listar Todos os Produtos           ");
    console.log("            [2] - Listar Produto Pelo Id             ");
    console.log("            [3] - Cadastrar Produto                  ");
    console.log("            [4] - Atualizar Produto                  ");
    console.log("            [5] - Deletar Produto                    ");
    console.log("            [6] - Sair                               ");
    console.log("                                                     ");
    console.log("_____________________________________________________");
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 6) {
      console.log("\nPain Gaming - Seu PC Gamer está aqui!");
      sobre();
      process.exit(0);
    }
    

    switch (opcao) {
      case 1:
        console.log("\n\nListar Todos os Produtos:\n\n");
        pecas.listarProdutos();
        keyPress();
        break;

      case 2:
        console.log("\n\nListar Produtos Pelo ID:\n\n");
        console.log("Digite o ID do Produto: ");
        let id = readlinesync.questionInt("");
        pecas.listarProdutoPeloId(id);
        keyPress();
        break;

      case 3:
        console.log("\n\nCadastar Produto\n\n");
        console.log("**********************************");
        console.log("1 - Computador");
        console.log("2 - Notebook");
        console.log("\n\n**********************************\n\n");

        const tipo = readlinesync.questionInt("Escolha o tipo de produto: ");

        switch (tipo) {
          case 1:
            let desktop = new PCsGamers(pecas.gerarNumero(), "Computador", pecas.gerarId(), "Positivo");
            pecas.cadastrarProduto(desktop);
            break;
          case 2:
            let notebook = new PCsGamers(pecas.gerarNumero(), "Notebook", pecas.gerarId(), "Acer Nitro");
            pecas.cadastrarProduto(notebook);
            break;
        }

        keyPress();
        break;
      case 4:
        console.log("\n\nAtualizar Produto\n\n");
        console.log("Digite o ID do Produto: ");
        id = readlinesync.questionInt("");

        let produto = pecas.buscarNoArray(id);

        if (produto !== null) {
          console.log("Digite o novo nome do Produto: ");
          produto.nome = readlinesync.question("");
          console.log("Digite o novo número de série do Produto: ");
          produto.numeroID = readlinesync.questionInt("");
          pecas.atualizarProduto(produto);
        } else {
          console.log("Produto não encontrado!");
        }

        keyPress();
        break;

      case 5:
        console.log("\n\nDeletarProduto\n\n");

        console.log("Digite o ID da Conta: ");
        id = readlinesync.questionInt("");

        pecas.deletarProduto(id);

        keyPress();
        break;

      case 6:
        console.log("\n\nSair\n\n");
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!\n");
        keyPress();
        break;
        
    }
  }
}



export function sobre(): void {
  console.log("\n____________________");
  console.log("Projeto Desenvolvido por: Jhonata Venicius S. Santos");
  console.log("Generation Brasil - jhonatasenac15@gmail.com");
  console.log("github.com/Jhonata-vss");
  console.log("______________________");
}

function keyPress(): void {
  console.log("\nPressione enter para continuar...");
  readlinesync.prompt();
}


main();