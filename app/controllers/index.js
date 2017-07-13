module.exports.home = function(application, req, res){
    res.render(
        'index', 
        {
           livro : [{
               titulo : 'A Filha do Tempo',
               p1: "A Filha do Tempo conta a história de Deb, uma garota normal que começa a ter sonhos e flashbacks estranhos quando seu aniversário de quinze anos se aproxima. Sua irmã Pri, com quem sempre contou, também passa por situações estranhas, sentindo-se estranhamente distante da irmã que tem sido sua amiga e porto seguro nos últimos meses.",
               p2: "Seu melhor amigo Rod esconde um segredo misterioso, mas quando ela é atacada por sua diretora transformada em um monstro cobra, ele promete ajudar e torna-se o protetor de Deb. Pri sente-se cada vez mais sozinha, como se algo a puxasse para longe de sua irmã. Dividida entre o encanto de um deus antigo e a paixão por um amigo que há meses não encontra, ela precisa se apegar a algo que a ajude a enfrentar o maior perigo conhecido para aqueles que buscam poder. E ela precisa de poder para ajudar Deb e Rod a resgatar aqueles que eles amam.",
               p3: "Monstros inimagináveis despertam algo que estava adormecido em Deb, e uma busca por significado e entendimento, misturados à ameaças reais de seres que fizeram juramentos de sangue de capturar Deb viva para que fosse sacrificada, leva nossos heróis para as intrigas do Império Omega, união dos reinos de Olimpo, Asgard e Egito. "
           }, {
               titulo : 'O Filho do Vento',
               p1: "Em breve...",
               p2: "",
               p3: ""
           }, {
               titulo : 'Os Filhos do Abismo',
               p1: "Em breve...",
               p2: "",
               p3: ""
           }]
        }
    );
}