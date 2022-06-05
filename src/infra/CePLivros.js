import DBMLivros from "../DAO/DBMLivros.js";

try {
    const table = await DBMLivros.createTable()
    console.log(table)
    
    await DBMLivros.popular(
        {
            id:1, 
            nome:"Verity", 
            autora:"Colleen Hoover",
            gênero: "Romance",
            valor: 39.90,
            descricao:"Finalista do prêmio Goodreads como melhor romance de 2019. Um casal apaixonado. Uma intrusa. Três mentes doentias. Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série. Não conto mais, você vai ter que ler, mas cuidado!! Verity não vai derreter seu coração e fritar sua alma!",
            url: "https://images-na.ssl-images-amazon.com/images/I/51ABRx3d7GL._SX335_BO1,204,203,200_.jpg"
        }
    )   
    
    await DBMLivros.popular(
        {
            id:2, 
            nome:"O reverso da medalha", 
            autora:"Sidney Sheldon",
            gênero: "Aventura",
            valor: 51.90,
            descricao:"O reverso da medalha é um implacável jogo pelo poder, e Kate só joga para ganhar. O mestre Sidney Sheldon constrói mais uma saga emocionante, marcada pelo mesmo estilo que cativou milhões de leitores em todo o mundo e fez dele o mais popular escritor norte-americano. Kate Black é símbolo do sucesso, uma linda mulher que transformou sua herança em império internacional - uma personalidade misteriosa, envolta por milhares de perguntas sem respostas. Detentora de uma posição de destaque entre os poderosos ela é uma sobrevivente, assim como foi seu incansável pai, que arriscou a própria vida para extrair uma fortuna em diamantes da inóspita África do Sul. Agora, ao comemorar 90 anos, Kate analisa a família que manipulou, dominou e amou: o belo e o grotesco, a serenidade e a loucura, a bondade e a maldade - todas as suas conquistas ao longo da vida. E na extravagante celebração, os fantasmas de Kate a rondam, fantasmas de amigos e inimigos. Lembranças de uma vida de chantagens e assassinatos. Fantasmas de um império fundamentado em pura ambição.",
            url: "https://images-na.ssl-images-amazon.com/images/I/415opPHQnfL._SX321_BO1,204,203,200_.jpg"
        }
    )  
    
    await DBMLivros.popular(
        {
            id:3, 
            nome:"Materia Escura", 
            autora:"Blake Crouch",
            gênero: "Ficção Científica",
            valor: 49.90,                
            descricao:"Essas são as últimas palavras que Jason Dessen ouve antes de acordar num laboratório, preso a uma maca. Raptado por um homem mascarado, Jason é levado para uma usina abandonada e deixado inconsciente. Quando acorda, um estranho sorri para ele, dizendo: Bem-vindo de volta, amigo. Neste novo mundo, Jason leva outra vida. Sua esposa não é sua esposa, seu filho nunca nasceu e, em vez de professor numa universidade mediana, ele é um gênio da física quântica que conseguiu um feito inimaginável. Algo impossível. Será que é este seu mundo, e o outro é apenas um sonho? E, se esta não for a vida que ele sempre levou, como voltar para sua família e tudo que ele conhece por realidade? Com ritmo veloz e muita ação, Matéria escura nos leva a um universo muito maior do que imaginamos, ao mesmo tempo em que comove ao colocar em primeiro plano o amor pela família. Marcante e intimista, seus múltiplos cenários compõem uma história que aborda questões profundamente humanas, como identidade, o peso das escolhas e até onde vamos para recuperar a vida com que sonhamos.",
            url: "https://images-na.ssl-images-amazon.com/images/I/51DB7c+bL0L._SX345_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id:4, 
            nome:"Onde está Daisy Mason?", 
            autora:"Cara Hunter",
            gênero: "Suspense",
            valor: 78.90,
            descricao:"Ontem à noite, Daisy Mason, uma garotinha de oito anos de idade, desapareceu de uma festa de família. Ninguém naquela discreta e silenciosa rua residencial viu nada — ao menos é o que estão dizendo. Mas como é possível uma criança desaparecer sem deixar rastros? O detetive Adam Fawley precisa manter a mente aberta e desconfiar de cada ação suspeita. No entanto, ele sabe que, em cada dez casos como este, nove revelam que o culpado é alguém que a vítima conhece. Isso significa que alguém está mentindo… e que, para Daisy, o tempo está se esgotando. Eleito Gold Bestseller pelo Nielsen Bestseller Awards 2019.Indicado a Crime Book of the Year pelo British Book Awards 2019.",
            url: "https://m.media-amazon.com/images/I/51Kvg6RZ0gL.jpg"
        }
    )  

    await DBMLivros.popular(
        {
            id:5, 
            nome:"14 Hábitos de Desenvolvedores Altamente Produtivos", 
            autora:"Zeno Rocha",
            gênero: "Computação",
            valor: 85.99,
            descricao:"Você pode aprender os framework mais populares, usar as melhores linguagens de programação e trabalhar nas maiores empresas de tecnologia, mas se você cultivar maus hábitos, vai ser difícil se tornar um desenvolvedor de ponta. Esse livro não oferece um caminho definitivo ou fórmula predefinida de sucesso. Esse livro é o resultado de uma busca. A busca para descobrir quais hábitos podem ser cultivados para se tornar um melhor engenheiro(a) de software.",
            url: "https://m.media-amazon.com/images/I/41Xkqy2rMDL.jpg"
        }
    )  

    await DBMLivros.popular(
        {
            id:6, 
            nome:"Como Iniciar Minha Carreira em Análise e Desenvolvimento de Sistemas", 
            autora:"Tiago Sousa",
            gênero: "Computação",
            valor: 85.99,
            descricao:"Em um mundo onde sobram vagas na área de Tecnologia e com profissionais em falta, muitos estão perdidos e acham que se tornar um Analista de Sistemas é muito complicado. Mas pode ser mais simples do que você imagina. O livro é um Guia para aqueles que estão querendo iniciar na área de Análise e Desenvolvimento de Sistemas mas não sabem por onde começar.Agora Você tem 2 escolhas, continuar na dúvida sobre como iniciar em Analise e Desenvolvimento de Sistemas e perder Dicas Fundamentais para ter um progresso acelerado, ou... .Com uma leitura simples e eficiente Aprender o caminho mais simples e rápido para se Tornar um Analista de Sistemas e iniciar sua Carreira de sucesso em Tecnologia da Informação. Se a sua escolha é a segunda opção, Clique Agora mesmo e Leia!",
            url: "https://m.media-amazon.com/images/I/41kBcruO62L.jpg"
        }
    )  

    await DBMLivros.popular(
        {
            id:7, 
            nome:"Fahrenheit 451", 
            autora:"Ray Bradbury",
            gênero: "Romance distópico",
            valor: 55.90,
            descricao:" Guy Montag é um bombeiro. Sua profissão é atear fogo nos livros. Em um mundo onde as pessoas vivem em função das telas e a literatura está ameaçada de extinção, os livros são objetos proibidos, e seus portadores são considerados criminosos. Montag nunca questionou seu trabalho; vive uma vida comum, cumpre o expediente e retorna ao final do dia para sua esposa e para a rotina do lar. Até que conhece Clarisse, uma jovem de comportamento suspeito, cheia de imaginação e boas histórias. Quando sua esposa entra em colapso mental e Clarisse desaparece, a vida de Montag não poderá mais ser a mesma.",
            url: "https://images-na.ssl-images-amazon.com/images/I/41PVVpQf-sL._SX322_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id:8, 
            nome:"Mindset: A nova psicologia do sucesso", 
            autora:"Carol S. Dweck",
            genero: "Autoajuda",
            valor: 37.60,
            descricao:"Carol S. Dweck, ph.D., professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama de “mindset”, é crucial para o sucesso. Dweck revela de forma brilhante como o sucesso pode ser alcançado pela maneira como lidamos com nossos objetivos. O mindset não é um mero traço de personalidade, é a explicação de por que somos otimistas ou pessimistas, bem-sucedidos ou não. Ele define nossa relação com o trabalho e com as pessoas e a maneira como educamos nossos filhos. É um fator decisivo para que todo o nosso potencial seja explorado.",
            url: "https://m.media-amazon.com/images/P/B01NASOQGG.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id:9, 
            nome:"Alice nos paises da maravilha (ediçao de bolso)", 
            autora:"Lewis Carroll",
            genero: "Ficção",
            valor: 18.99,
            descricao:"Obra-prima que não pode faltar na sua biblioteca - e com um preço que cabe no seu bolso. Passados 150 anos da publicação original, a clássica história de uma menina chamada Alice, que entra em uma toca atrás de um coelho falante e cai em um mundo de fantasia, continua popular. Essa charmosa edição de bolso, com capa dura e ilustrações originais de John Tenniel, reúne Aventuras de Alice no País das Maravilhas e sua continuação, Através do espelho e o que Alice encontrou por lá. A versão impressa apresenta ainda capa dura e acabamento de luxo.",
            url: "https://images-na.ssl-images-amazon.com/images/I/519ErwVWStL._SX350_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 10, 
            nome:"O mundo que não pensa: A humanidade diante do perigo real da extinção do homo sapiens", 
            autora:"Franklin Foer",
            genero: "Ficção",
            valor: 24.89,
            descricao:"O mundo que não pensa, um dos livros mais aclamados e polêmicos dos últimos anos, mostra o lado sombrio e preocupante da tecnologia do nosso cotidiano. O jornalista Frankin Foer afirma que estamos terceirizando nossas capacidades intelectuais para empresas como Apple, Google e Facebook, dando origem a um mundo onde a vida social e política passa a ser cada vez mais automatizada e menos diversa. Com um texto inteligente, perspicaz, claro e elegante, herdeiro da melhor tradição do jornalismo, Foer revela os tentáculos sorrateiros de nossos mais idealísticos sonhos tecnológicos. Para ele, nós, homo sapiens, chegamos a um momento da evolução em que começamos a deixar para trás a característica que mais nos diferenciou das outras espécies: o fato de sermos capazes de pensar, imaginar, refletir e conhecer. Até agora poucos entenderam a gravidade dessa ameaça, do perigo real e eminente da extinção da nossa espécie – o que faz de O mundo que não pensa uma leitura urgente e fundamental.",
            url: "https://m.media-amazon.com/images/P/B07JVD8S48.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 11, 
            nome:"A serpente de Essex", 
            autora:"Sarah Perry",
            genero: "Ficção",
            valor: 44.90,
            descricao:"Londres, 1893. É com alívio e tristeza que Cora Seaborne se torna viúva. Depois da morte do marido controlador, ela se muda da metrópole para o condado de Essex com o filho Francis, um menino obsessivo e curioso, e a babá do garoto, Martha, na esperança de que a mudança de ambiente e o ar puro possam servir de refúgio para a família. Ao se instalarem nesse novo lugar, porém, ela logo fica sabendo de boatos sobre a Serpente de Essex, uma criatura mítica que, no passado, segundo a lenda local, vagava pelos pântanos ceifando vidas, e que agora teria voltado para aterrorizar a paróquia costeira de Aldwinter. Cora, uma naturalista amadora sem paciência para superstições, se encanta pela história, convencida de que o monstro descrito pela população é, na verdade, uma espécie ainda não conhecida. Ao iniciar uma busca a partir dos rastros dessa lenda, ela é apresentada a William Ransome, o vigário de Aldwinter, um homem incrédulo e desconfiado que teme que essas invenções e fantasias distraiam as pessoas do verdadeiro caminho da fé. Enquanto William tenta acalmar seus fiéis, ele e Cora procuram descobrir a verdade por trás do mito e, embora completamente diferentes, estabelecem uma relação intensa e surpreendente na mesma medida. A Serpente de Essex é uma celebração do amor e das várias formas pelas quais ele pode se manifestar.",
            url: "https://img.skoob.com.br/TtRTjHNdDuqkmHAN9F1Y7f1UtUc=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/12138299/A_SERPENTE_DE_ESSEX_164916599612138299SK-V11649165996B.jpg"
        }
    ) 

    await DBMLivros.popular(
        {
            id: 12, 
            nome:"Dungeons & Dragons 5ªe livro do jogador", 
            autora:"Galápagos Jogos",
            genero: "Jogos",
            valor: 189.90,
            descricao:"o Livro do Jogador é a principal referência para todo participante de uma mesa de Dungeons & Dragons. o livro contém as regras para criação de personagens, antecedentes e perícias, além das regras para passar de nível, exploração, combate.e muito mais. Use esse guia para criar personagens das raças e classes mais icônicas do D&D.",
            url: "https://m.media-amazon.com/images/I/71kM9wdaeHL._AC_SY879_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 13, 
            nome:"As coisas que você só vê quando desacelera: Como manter a calma em um mundo frenético", 
            autora:"Haemin Sunim",
            genero: "Espiritual",
            valor: 37.33,
            descricao:"De tempos em tempos, surge um livro que, com sua maneira original de iluminar importantes temas espirituais, se torna um fenômeno tão grande em seu país de origem que acaba chamando a atenção e encantando leitores de todo o mundo. Escrito pelo mestre zen-budista sul-coreano Haemin Sunim, As coisas que você só vê quando desacelera é um desses raros e tão necessários livros para quem deseja tranquilizar os pensamentos e cultivar a calma e a autocompaixão. Ilustrado com extrema delicadeza, ele nos ajuda a entender nossos relacionamentos, nosso trabalho, nossas aspirações e nossa espiritualidade sob um novo prisma, revelando como a prática da atenção plena pode transformar nosso modo de ser e de lidar com tudo o que fazemos. Você vai descobrir que a forma como percebemos o mundo é um reflexo do que se passa em nossa mente. Quando nossa mente está alegre e compassiva, o mundo também está. Quando ela está repleta de pensamentos negativos, o mundo parece sombrio. E quando nossa mente descansa, o mundo faz o mesmo.",
            url: "https://m.media-amazon.com/images/P/B075NTMDR3.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 14, 
            nome:"Não fale com estranhos", 
            autora:"Harlan Coben",
            genero: "Suspense",
            valor: 44.90,
            descricao:"O estranho aparece do nada e, com poucas palavras, destrói o mundo de Adam Price. Sua identidade é desconhecida. Suas motivações são obscuras. Mas suas revelações são dolorosamente incontestáveis. Adam levava uma vida dos sonhos ao lado da esposa, Corinne, e dos dois filhos. Quando o estranho o aborda para contar um segredo estarrecedor sobre sua esposa, ele percebe a fragilidade do sonho que construiu: teria sido tudo uma grande mentira? Assombrado pela dúvida, Adam decide confrontar Corinne, e a imagem de perfeição que criou em torno dela começa a ruir. Ao investigar a história por conta própria, acaba se envolvendo num universo sombrio repleto de mentiras, chantagens e assassinatos.",
            url: "https://img.skoob.com.br/5ZBiZzonUcu5Yx4gEDZbY1nhko0=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/580699/NAO_FALE_COM_ESTRANHOS_1461607413580699SK1461607413B.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 15, 
            nome:"Arrume a sua cama: Pequenas coisas que podem mudar a sua vida... E talvez o mundo - 2ª Edição", 
            autora:"William H. McRaven",
            genero: "Autoajuda",
            valor: 21.40,
            descricao:"De tempos em tempos, surge um livro que, com sua maneira original de iluminar importantes temas espirituais, se torna um fenômeno tão grande em seu país de origem que acaba chamando a atenção e encantando leitores de todo o mundo. Escrito pelo mestre zen-budista sul-coreano Haemin Sunim, As coisas que você só vê quando desacelera é um desses raros e tão necessários livros para quem deseja tranquilizar os pensamentos e cultivar a calma e a autocompaixão. Ilustrado com extrema delicadeza, ele nos ajuda a entender nossos relacionamentos, nosso trabalho, nossas aspirações e nossa espiritualidade sob um novo prisma, revelando como a prática da atenção plena pode transformar nosso modo de ser e de lidar com tudo o que fazemos. Você vai descobrir que a forma como percebemos o mundo é um reflexo do que se passa em nossa mente. Quando nossa mente está alegre e compassiva, o mundo também está. Quando ela está repleta de pensamentos negativos, o mundo parece sombrio. E quando nossa mente descansa, o mundo faz o mesmo.",
            url: "https://m.media-amazon.com/images/P/B074JMGQY1.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 16, 
            nome:"Morte no internato", 
            autora:"Lucinda Hiley",
            genero: "Suspense",
            valor: 53.90,
            descricao:"A morte repentina de um estudante na Escola St. Stephen – um internato na região mais remota de Norfolk – é um acontecimento chocante que seu diretor faz questão de encarar apenas como um acidente infeliz. Porém, a polícia local não descarta a possibilidade de um crime, e o caso traz de volta à ativa a inspetora Jazmine Hunter. Jazz se afastou da carreira policial em Londres, mas, relutante, concorda em participar da investigação como um favor a seu antigo chefe. Ao analisar os detalhes da morte de Charlie Cavendish, ela descobre que o garoto fazia bullying com diversos alunos e que alguns tiveram o motivo e a oportunidade de trocar os comprimidos que ele tomava diariamente para controlar a epilepsia. Para complicar a investigação, outro estudante some e um respeitado acadêmico morre na St. Stephen. Os novos acontecimentos trazem pistas importantes para o caso, mas, quando um dos suspeitos desaparece, Jazz se vê ainda mais enredada em mistérios. Precisando enfrentar seus demônios pessoais, a inspetora percebe que aquela investigação é a mais desafiadora de sua carreira. O internato esconde segredos mais sombrios do que Jazz jamais poderia ter imaginado...",
            url: "https://img.skoob.com.br/DrXVXSuvuR83-hgATc6Q2tgPf54=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/12140697/MORTE_NO_INTERNATO_164941812812140697SK-V11649418129B.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 17, 
            nome:"Os segredos de Colin Bridgerton (Os Bridgertons – Livro 4): O livro de Colin", 
            autora:"Julia Quinn",
            genero: "Romance",
            valor: 39.50,
            descricao:"Há muitos anos Penélope Featherington frequenta a casa dos Bridgertons. E há muitos anos alimenta uma paixão secreta por Colin, irmão de sua melhor amiga e um dos solteiros mais encantadores e arredios de Londres. Quando ele retorna de uma de suas longas viagens ao exterior, Penélope descobre seu maior segredo por acaso e chega à conclusão de que tudo o que pensava sobre seu objeto de desejo talvez não seja verdade. Ele, por sua vez, também tem uma surpresa: Penélope se transformou, de uma jovem sem graça ignorada por toda a alta sociedade, numa mulher dona de um senso de humor afiado e de uma beleza incomum. Ao deparar com tamanha mudança, Colin, que sempre a enxergara apenas como uma divertida companhia ocasional, começa a querer passar cada vez mais tempo a seu lado. Quando os dois trocam o primeiro beijo, ele não entende como nunca pôde ver o que sempre esteve bem à sua frente. No entanto, quando fica sabendo que ela guarda um segredo ainda maior que o seu, precisa decidir se Penélope é sua maior ameaça ou a promessa de um final feliz. Em Os segredos de Colin Bridgerton, quarto livro da série Os Bridgertons, que já vendeu mais de 3,5 milhões de exemplares, Julia Quinn constrói uma linda história que prova que de uma longa amizade pode nascer o amor mais profundo.",
            url: "https://images-na.ssl-images-amazon.com/images/I/518A85QSccL._SX346_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 18, 
            nome:"O Homem de Giz", 
            autora:"C. J. Tudor",
            genero: "Suspense",
            valor: 39.90,
            descricao:"Em 1986, Eddie e os amigos passam a maior parte dos dias andando de bicicleta pela pacata vizinhança em busca de aventuras. Os desenhos a giz são seu código secreto: homenzinhos rabiscados no asfalto; mensagens que só eles entendem. Mas um desenho misterioso leva o grupo de crianças até um corpo desmembrado e espalhado em um bosque. Depois disso, nada mais é como antes. Em 2016, Eddie se esforça para superar o passado, até que um dia ele e os amigos de infância recebem um mesmo aviso: o desenho de um homem de giz enforcado. Quando um dos amigos aparece morto, Eddie tem certeza de que precisa descobrir o que de fato aconteceu trinta anos atrás. Alternando habilidosamente entre presente e passado, O Homem de Giz traz o melhor do suspense: personagens maravilhosamente construídos, mistérios de prender o fôlego e reviravoltas que vão impressionar até os leitores mais escaldados.",
            url: "https://m.media-amazon.com/images/P/B079Z96BFQ.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 19, 
            nome:"Caixa Harry Potter - Edição Premium + Pôster Exclusivo", 
            autora:"J.K. Rowling",
            genero: "Ficção",
            valor: 209.90,
            descricao:"A vida do menino Harry Potter não tem um pingo de magia. Ele vive com os tios e o primo, que não gostam nem um pouco dele. O quarto de Harry é, na verdade, um armário sob a escada, e ele nunca comemorou um aniversário sequer em onze anos. Até que, um dia, Harry recebe uma carta misteriosa, entregue por uma coruja: um convite para estudar num lugar incrível chamado Escola de Magia e Bruxaria Hogwarts. Lá ele vai encontrar não só amigos, esportes praticados em vassouras voadoras e magia para todo lado, como também seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o bruxo que assassinou seus pais. Mas, para isso, Harry precisará passar por uma série de desafios e enfrentar inúmeros perigos. Em sete livros que se tornaram o maior fenômeno editorial de todos os tempos, com mais de 450 milhões de exemplares vendidos e traduções em 78 idiomas, Harry Potter não é exposto apenas a batalhas e feitiços. Ele precisa superar traições, surpresas e, sobretudo, aprender a lidar com os próprios sentimentos. O amor, a amizade e claro, uma boa dose de magia e imaginação, são os elementos-chave para da maior saga bruxa de todos os tempos. 'Box Harry Potter – Série Completa': perfeito para todos que cresceram acompanhando a saga do jovem bruxo e para as novas gerações de fãs que anseiam por conhecê-la!",
            url: "https://images-na.ssl-images-amazon.com/images/I/61ogi9fo4IL.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 20, 
            nome:"O nevoeiro de Shadow Sands", 
            autora:"Robert Bryndza",
            genero: "Ficção",
            valor: 42.90,
            descricao:"Kate Marshall encontrou o cadáver de um jovem flutuando em uma represa de Shadow Sands e as autoridades locais classificaram o caso como um trágico acidente. Mas os detalhes não batem: por que a vítima estava lá, no meio da noite? Se era um nadador experiente, como se afogou? Kate tem certeza de que este caso é mais do que aparenta. Então, ela e seu assistente investigam mais a fundo e descobrem uma trilha sangrenta que aponta para um assassino em série pronto para atacar outra vez. Há anos pessoas desaparecem silenciosamente naquele local e, quando uma mulher é raptada, Kate e Tristan têm poucos dias para salvá-la desse destino fatal.",
            url: "https://img.skoob.com.br/qBpnE1CqP_Ndjr3DnRuwEaFkyRw=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/12108569/O_NEVOEIRO_DE_SHADOW_SANDS_164478214612108569SK-V11644782147B.jpg"
        }
    ) 

    await DBMLivros.popular(
        {
            id: 21, 
            nome:"O poder do hábito", 
            autora:"Charles Duhigg",
            genero: "Organizacional",
            valor: 35.10,
            descricao:"Charles Duhigg, repórter investigativo do New York Times, mostra que a chave para o sucesso é entender como os hábitos funcionam - e como podemos transformá-los. Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa. De repente, um deles detecta um padrão quase imperceptível - e, com uma sutil mudança na campanha publicitária, Febreze começa a vender um bilhão de dólares por anos. Um diretor executivo pouco conhecido assume uma das maiores empresas norte-americanas. Seu primeiro passo é atacar um único padrão entre os funcionários - a maneira como lidam com a segurança no ambiente de trabalho -, e logo a empresa começa a ter o melhor desempenho no índice Dow Jones. O que todas essas pessoas tem em comum? Conseguiram ter sucesso focando em padrões que moldam cada aspecto de nossas vidas. Tiveram êxito transformando hábitos. Com perspicácia e habilidade, Charles Duhigg apresenta um novo entendimento da natureza humana e seu potencial para a transformação.",
            url: "https://m.media-amazon.com/images/P/B00A3D10JE.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 22, 
            nome:"O terceiro gêmeo", 
            autora:"Ken Follet",
            genero: "Ficção",
            valor: 54.90,
            descricao:"Jeannie Ferrami é uma geneticista que pesquisa as semelhanças de comportamento entre gêmeos idênticos criados separadamente. Usando uma base de dados confidencial do FBI, ela faz uma descoberta impensável: dois jovens que parecem ser gêmeos idênticos, mas nasceram em dias diferentes, de mães diferentes, com perfis psicológicos totalmente distintos. Dennis Pinker é um psicopata e assassino condenado. Steve Logan é um estudante de Direito honesto, sensível e sociável. Por isso, quando a assistente de Jeannie sofre uma agressão sexual e a polícia identifica Steve como o culpado, todas as convicções da pesquisadora são abaladas. Ainda que os dois tenham o mesmo DNA, ela não consegue acreditar que o gêmeo bom seja um criminoso e decide provar isso, mesmo que precise questionar suas crenças e pôr em risco sua carreira. Conforme sua investigação avança, Jeannie se vê no meio de uma conspiração, envolvendo experiências genéticas perturbadoras e alguns dos homens mais poderosos dos Estados Unidos – pessoas que farão de tudo para proteger seus segredos.",
            url: "https://img.skoob.com.br/ezCN21-h25ALAOQLI24TT-kmDNQ=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/13525/O_TERCEIRO_GEMEO_162957285413525SK-V11629572858B.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 23, 
            nome:"Quando Ninguém Está Olhando", 
            autora:" Alyssa Cole",
            genero: "Policial",
            valor: 31.40,
            descricao:"Autora multipremiada, Alyssa Cole aborda racismo e tensões sociais em thriller com ares de Hitchcock. Sydney Green nasceu e foi criada no Brooklyn, em Nova York, mas cada vez que ela pisca os olhos seu amado bairro parece mudar. Condomínios se espalham como erva daninha, placas de vende-se surgem da noite para o dia e os vizinhos que ela conhece a vida toda estão sumindo. Para manter de pé tanto o passado quanto o presente da comunidade, Sydney decide canalizar sua frustração planejando um passeio guiado em que pretende contar a verdadeira história do local. Só que, para tornar o projeto realidade, vai precisar aturar seu novo vizinho, Theo, como assistente. A pesquisa dos dois, entretanto, logo se transforma. O que era apenas uma distração vira uma história de paranoia e medo. No fim das contas, talvez os vizinhos não tenham se mudado para outros bairros e a revitalização do lugar seja mais mortal do que eles imaginaram. Seriam apenas coincidências ou sinais de uma grande conspiração? Sydney pode confiar em Theo, ou ela também corre o risco de desaparecer? Quando ninguém está olhando nos conduz por um enredo hipnotizante e surpreendente, que aborda com perspicácia a violência racial e as assimetrias sociais, em uma sequência de eventos instigantes que aos poucos dão forma a um cenário de completo horror.",
            url: "https://m.media-amazon.com/images/P/B09J1LDLS6.01._SCLZZZZZZZ_SX500_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 24, 
            nome:"O pequeno príncipe - Bolso", 
            autora:"Antoine de Saint-Exupéry",
            genero: "Infantil",
            valor: 8.99,
            descricao:"Nesta edição de bolso da clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952. Acompanha uma carta muito especial do sobrinho de Antoine de Saint-Exupéry, a assinatura do autor na capa e um selo holográfico oficial do Pequeno Príncipe.",
            url: "https://images-na.ssl-images-amazon.com/images/I/41JfQIxCRrL._SX299_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 25, 
            nome:"A garota do lago", 
            autora:"Charlie Donlea",
            genero: "Ficção",
            valor: 10.99,
            descricao:"Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.",
            url: "https://images-na.ssl-images-amazon.com/images/I/516VOgxwg2L._SX339_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 26, 
            nome:"Hibiscco roxo", 
            autora:"Chimamanda Ngozi Adichie",
            genero: "Ficção",
            valor: 49.90,
            descricao:"A adolescente Kambili mostra como a religiosidade extremamente “branca” e católica de seu pai, Eugene, famoso industrial nigeriano, inferniza e destrói lentamente a vida de toda a família. O pavor de Eugene às tradições primitivas do povo nigeriano é tamanho que ele chega a rejeitar o pai, contador de histórias encantador, e a irmã, professora universitária esclarecida, temendo o inferno. Mas, apesar de sua clara violência e opressão, Eugene é benfeitor dos pobres e, estranhamente, apoia o jornal mais progressista do país. Durante uma temporada na casa de sua tia, Kambili acaba se apaixonando por um padre que é obrigado a deixar a Nigéria, por falta de segurança e de perspectiva de futuro. Enquanto narra as aventuras e desventuras de Kambili e de sua família, o romance que mistura autobiografia e ficção, também apresenta um retrato contundente e original da Nigéria atual, traçando de forma sensível e surpreendente, um panorama social, político e religioso, mostrando os remanescentes invasivos da colonização tanto no próprio país, como, certamente, também no resto do continente",
            url: "https://img.skoob.com.br/9tUjwzitoA6LfRPNEmQaNZBBpCU=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/170442/HIBISCO_ROXO_1509814695170442SK1509814695B.jpg"
        }) 

    await DBMLivros.popular( 
        {
            id: 27, 
            nome:"A escolha: 3", 
            autora:"Kiera Cass",
            genero: "Romance",
            valor: 28.99,
            descricao:"America era a candidata mais improvável da Seleção: se inscreveu por insistência da mãe e aceitou participar da competição só para se afastar de Aspen, um garoto que partira seu coração. Ao conhecer melhor o príncipe, porém, surgiu uma amizade que logo se transformou em algo mais... No entanto, toda vez que Maxon parecia estar certo de que escolheria America, algum obstáculo fazia os dois se afastarem. Um desses obstáculos era Aspen, que passou a ocupar o posto de guarda no palácio e estava decidido a reconquistar a namorada. Em encontros proibidos, ele a reconfortava em meio àquele mundo de luxos e rivalidades. Com essas idas e vindas, America perdeu um pouco de espaço no coração do príncipe, lugar que foi prontamente ocupado por outra concorrente. Para completar, o rei odiava America e a considerava a pior opção para o filho. Assim, tentava sabotar a relação dos dois, inventando mentiras e colocando a garota em prova a todo instante. Agora, para conseguir o que deseja, America precisa cortar os laços com Aspen, conquistar o povo de Illéa e conseguir novos aliados políticos. Mas tudo pode sair do controle quando ela começa a questionar o sistema de castas e a estratégia usada para lidar com os ataques rebeldes...",
            url: "https://images-na.ssl-images-amazon.com/images/I/51lnvNcEFbL._SX331_BO1,204,203,200_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 28, 
            nome:"Jornada Microsserviços", 
            autora:"Antonio Muniz ",
            genero: "Computação",
            valor: 88.90,
            descricao:"Livro Jornada Microsserviços: do zero ao avançado somando conceitos e práticas. Criado com a colaboração de experientes profissionais que transferiram o melhor de sua experiência para uma obra repleta de conhecimento técnico e de negócio, este livro explora o mundo cloud native, conceitos que envolvem essa arquitetura, prós e contras na aplicação e como isso tudo se encaixa no mundo dos microsserviços. Embarque conosco nesta jornada e torne-se um profissional diferenciado, com um conhecimento sólido e profundo da arquitetura de microsserviços. Era uma vez um professor universitário que sonhava lançar um livro quando finalizou o mestrado em 2006. O sonho começou a ser concretizado em 2017 com o livro - Jornada DevOps, mas alguns obstáculos travaram sua evolução após a escrita de três capítulos. Em setembro de 2018, durante sua palestra na PUC Minas, surgiu um click - Será que outras pessoas apaixonadas por DevOps ajudariam com a escrita colaborativa? - Dezenas de colaboradores aceitaram o convite e o livro foi lançado para 350 pessoas no dia 06 de junho de 2019 no Centro de Convenções SulAmérica, no Rio de Janeiro. A escalada dos times gerou novas amizades, aprendizados, doação de R$ 332.590,00 para instituições com o lançamento de 16 livros e sonhamos transformar mais vidas com a inteligência coletiva e o apoio de empresas amigas.",
            url: "https://m.media-amazon.com/images/I/41FEbcqKqoL._SY346_.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 29, 
            nome:"Seja um Programador Foda!", 
            autora:"Deibson Carvalho ",
            genero: "Computação",
            valor: 51.90,
            descricao:"Descubra como ter uma carreira de desenvolvedor de software de sucesso. Quais passos tem que seguir, o que deve aprender primeiro, quais habilidades deve adquirir. Obrigatoriamente, deve-se cursar uma graduação? Qual? Descubra o seu propósito e se você realmente nasceu para ser programador. Como é o mercado de trabalho? Quanto ganha um programador iniciante? Como é a rotina de um programador? Como iniciar o seu primeiro projeto? Qual a linguagem de programação adotar? Com diversas provocações, o autor expõe o que aprendeu com seus 20 anos de carreira, tendo utilizado quase 10 linguagens de programação, como Java, Python, C, C++, Kotlin, Go, Visual Basic, ASP, PHP, entre outras, bem como frameworks como Django, Flask, CakePHP, Laravel, React, React Native, Vue, Node e muito mais. Como conseguir seus primeiros contratos, ou emprego na área? Como trabalhar bem em equipe? Quais habilidades preciso desenvolver para trabalhar em equipe?",
            url: "https://m.media-amazon.com/images/I/41bySaobToL.jpg"
        }
    )

    await DBMLivros.popular(
        {
            id: 30, 
            nome:"Scrum - Um Guia de Bolso", 
            autora:"Gunther Verheyen",
            genero: "Metodologia Ágeis",
            valor: 55.90,
            descricao:"Este guia de bolso do Scrum é o livro para todos que desejam aprender e reaprender sobre o Scrum. O livro descreve o framework como foi desenhado e pretendido, com um forte foco no propósito das regras, e adiciona uma perspectiva histórica ao Scrum e ao movimento Ágil. À medida que o equilíbrio da sociedade muda de um trabalho industrial para um trabalho digital, a complexidade e a imprevisibilidade continuam aumentando. A necessidade de agilidade através do Scrum aumenta igualmente, dentro e fora do desenvolvimento de produtos e software. Scrum – Um Guia de Bolso é um livro extraordinariamente competente. Deveria ser o padrão de fato para todos que procuram por uma visão geral completa e clara do Scrum sem serem incomodados com irrelevâncias.",
            url: "https://m.media-amazon.com/images/I/41P+Rbh898L.jpg"
        }
    )
} catch (e) {
    console.log(e.message)
}