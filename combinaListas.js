const listaDaniela = `Corcovado
Wave
Garota de Ipanema
Águas de março 
samba de verão 
O barquinho 
Chega de saudade
Samba de uma nota só 
Preciso me encontrar 
Só tinha de ser com você
Triste
O bêbado e o equilibrista 
Mas que nada 
O pato
Água de beber
Dança da solidão 
Pela luz dos olhos teus 
Ela é carioca 
Trem das 11
Sei lá, a vida tem sempre razão 
Dança da solidão 
Para ver as meninas
De mais ninguém 
Rosa
Gotas de luar
O bonde do dom 
Tiro ao Álvaro 
O mar serenou 
Flor de Lis
Serrado
Sampa
É com esse que eu vou
Você é linda 
Desde que o samba é samba
Roda viva 
Preciso dizer que te amo
Cara valente
Tá perdoado 
Madalena`;



const listaFred = `Falsa Baiana
Aos Pés da Santa Cruz
O Pato
Brigas nunca mais
Só tinha de ser com vc
Águas de março 
Preconceito
É preciso perdoar 
Adeus América
Alô Fevereiro
Copacabana
Influência do Jazz
Desde que o Samba é Samba
Lígia
Wave 
Chega de Saudade
Desafinado
Garota de Ipanema
Teresa da Praia
Anos Dourados
O Barquinho
Chovendo na Roseira
Teletema
Watch What Happens (Récit de Cassard)
Duas Contas
Onde Anda Você
Nanã
Lamento no Morro
É Luxo Só
Aquarela do Brasil
Morena Boca de Ouro
Na Baixa do Sapateiro
Pra Machucar Meu Coração
Corcovado
Maria Ninguém
Manhã de Carnaval
Doralice
Rosa Morena
Só Danço Samba
Lobo Bobo
Saudade Fez um Samba
Samba de uma nota só
Bolinha de Papel
Você e eu 
Coisa mais linda
Insensatez
Este seu olhar
Triste
Caminhos Cruzados
Isto aqui o que é
Pra que discutir com madame?
Louco
A rã
Nasci para bailar
Samba de verão
So Danço Samba
Edmundo
Palpite Infeliz
Lugar Comum
Bonita
Dindi
Luiza
A Felicidade
Água de Beber
Pela Luz dos Olhos Teus
Eu Quero Um Samba
Bim Bom`;

let arrFred;
let arrDaniela;


const listaParaArray = () => {
    arrDaniela = listaDaniela.split("\n");
    arrFred = listaFred.split("\n");
};
var arrFredMin;
var arrDanielaMin;

const arrsEmMinusculas = () => {
    arrFredMin = arrFred.forEach(() => )
}
listaParaArray();


const combinedArray = [...new Set([...arrFred, ...arrDaniela])];

const sortedArr = combinedArray.sort();

console.log(sortedArr);




