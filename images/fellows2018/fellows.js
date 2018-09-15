const fellows = [
  {
    id: 'acf',
    name: 'Ana Christina Faulhaber',
    text: 'Formada em direito e educação física, pós-graduada em política e Gestão de Segurança Pública, Direito Penal e Criminal, pós-graduanda em Gestão Prisional. Atua há 14 anos no setor público, 06 anos dirigindo uma unidade prisional considerada referência pelo CNJ e Ministra Presidente do STF, no tratamento da mulher privada de liberdade com seu filho e hoje coordena todas as unidades prisionais femininas e cidadania LGBT do Estado do Rio de Janeiro.',
  },
  {
    id: 'acl',
    name: 'Ana Claudia Lescaut',
    text: 'Formada em Administração de Empresas pela UFF, é Pós-graduada em Gestão Estratégia de RH pela UNESA; Gestão Executiva pela COPPEAD, Gestão da Saúde pela FDC/IEP-HSL e Políticas Públicas e Gestão Governamental pela UCM. Atua há 23 anos no setor público, atualmente coordena o Programa de formação de Líderes Cariocas e gestores para a Prefeitura do Rio de Janeiro.',
  },
  {
    id: 'amm',
    name: 'Ana Maria Martins',
    text: 'Nascida em BH, MG em 1962. Formada em Medicina, UPE, 1991. Residência Médica em Pediatria. Trabalhei na Secretaria Estadual de Saúde de Pernambuco de 1994 até 2016,em diversas funções e cargos, desde médica plantonista de Urgência Pediátrica, até Secretária Estadual de Saúde. Superintendência de Interiorização do IMIP, na gestão das unidades de saúde do interior de PE e BA, e Diretoria de Articulação da Fundação HEMOPE. Especialização em Auditoria Médica, Gestão Governamental, Mestrado Profissionalizante da SVS/MS ENSP/Fiocruz. Atualmente ocupo o cargo de Secretária Municipal de Caruaru/PE e curso o Master em Liderança e Gestão Pública- MLG/CLP.',
  },
  {
    id: 'bk',
    name: 'Barbara Kleinhappel',
    text: 'Sou graduada em Administração de Empresas pela PUC-SP e cursei o Mestrado em Relações Industriais e Gestão de Recursos Humanos da Universidade Estadual de New Jersey (Rutgers) – EUA. Possuo experiência na área de Recursos Humanos de médias e grandes empresas de diversas indústrias (construção civil, consultoria, produtos de consumo e farmacêutica), tendo atuado em posições de escopo regional (América Latina) e local.',
  },
  {
    id: 'ca',
    name: 'Carla Amrein',
    text: 'Economista formada na UFRJ e com mestrado na USP, Carla tem pós-graduação em gestão escolar, pela Fundação Pitágoras, e em Liderança e Gestão Pública (MLG), pelo Centro de Liderança Pública. De 2010 a 2012 trabalhou no Instituto Trevo e participou do desenvolvimento de um modelo inovador de escola vocacionada para o esporte no município do Rio de Janeiro e que hoje é referência nacional. De 2013 a meados de 2018 trabalhou na Secretaria Municipal de Educação do Rio de Janeiro (SME), passando por diferentes desafios: atuou na expansão do tempo integral, realizou análises visando a melhoria da qualidade do gasto, contribuiu para o fortalecimento da política de estágio probatório dos professores e, a partir de 2018, assumiu o Planejamento Estratégico de Recursos Humanos. Como lema de trabalho, Carla gosta muito de usar uma frase dita por um diretor de escola \"Sozinho vamos mais rápido, mas juntos vamos mais longe.\" E, somando e canalizando forças, ela segue firme nessa missão de melhorar a educação brasileira.',
  },
  {
    id: 'cr',
    name: 'Carolina Ricardo',
    text: 'Advogada e Socióloga. Mestre em Filosofia do Direito pela Faculdade de Direito da Universidade de São Paulo. Foi assessora de projetos no Instituto São Paulo Contra a Violência, consultora do Banco Mundial e do BID em temas de segurança pública e prevenção da violência. Fellow no programa Draper Hills Summer Fellows (2018) oferecido pelo Center on Development, Democracy and the Rule of Law da Universidade de Stanford, CA. Atualmente é Assessora Sênior do Instituto Sou da Paz.',
  },
  {
    id: 'cm',
    name: 'Claudia Moraes',
    text: 'Major da Polícia Militar do Estado do Rio Janeiro (PMERJ) com, 44 anos de idade e 18 anos de serviço prestados à segurança pública do estado do Rio de janeiro. Atualmente é a Subchefe de Comunicação Social da PMERJ. Possui título de mestre em Ciências Sociais pela Universidade do Estado do Rio de Janeiro - UERJ (2012), é graduada em Ciências Sociais pela UERJ (2010), Pós-Graduada em Gênero e Direito pela Escola de Magistratura do Rio de Janeiro - EMERJ (2017) e Pós-Graduada em Segurança Pública pela Universidade Cândido Mendes (2010). Dentre as principais funções exercidas estão: a Coordenação Estadual dos Conselhos Comunitários de Segurança Pública do Estado do Rio de Janeiro de 2012 a 2018; além da co-organização do relatório temático Dossiê Mulher de 2010 a 2018; também atua como instrutora das polícias militar e civil, contribuído na formação e qualificação dos profissionais de segurança pública nas disciplinas de análise criminal, sociologia, direitos humanos e polícia comunitária. A Major Claudia Moraes integra a Comissão Especial de Segurança da Mulher do Conselho Estadual de Direito da Mulher - CEDIM/RJ e é membro do Fórum Permanente de Violência Doméstica e de Gênero da Escola da Magistratura do Estado do Rio de Janeiro – EMERJ. — with Claudia Moraes.',
  },
  {
    id: 'fn',
    name: 'Fernanda Neves',
    text: 'Graduada em Administração Pública pela Fundação João Pinheiro; em Direito pela UFMG; pós-graduada no MBA em Gestão Estratégica de Pessoas pela FGV e mestre em Administração pela PUC /FDC. É servidora da carreira de EPPGG da SEPLAG/MG desde 2002. Atuou em vários cargos gerenciais na área de gestão de pessoas, destacando sua atuação como Subsecretária de Gestão de Pessoas do Estado, no período de 2011 a 2014, e desde janeiro de 2017 está cedida para a PBH e atua como Subsecretária de Gestão de Pessoas responsável pela gestão de pessoas no âmbito de todo o Poder Executivo Municipal visando ao desenvolvimento humano e organizacional por intermédio da coordenação, regulamentação, implementação e avaliação da política de recursos humanos. É professora de disciplinas na área de gestão pública na Fundação Dom Cabral.',
  },
  {
    id: 'in',
    name: 'Ianaira Neves',
    text: 'Psicóloga (UFBA-BR/Universidad de Granada-ESP) e pós-graduada em Administração de Empresas e Negócios pela Fundação Getúlio Vargas (FGV). É especialista em Educação Corporativa (FIA/USP) e atualmente cursa pós-Graduação em Design Instrucional (SENAC/Universidade de Lisboa). Em sua trajetória, possui consistente experiência profissional como Gestora de Pessoas e Consultoria Interna de RH em multinacionais nos setores do varejo, petroquímica, siderurgia, investidoras e centros de tecnologia. É palestrante e já atuou como professora universitária convidada, no que tange os diversos temas da Psicologia Organizacional e do Trabalho.',
  },
  {
    id: 'id',
    name: 'Ideli Domingues',
    text: 'Psicóloga, coach sistêmico, consteladora sistêmica, coordenadora da Unidade de Ação Gestão do Centro de Educação Transdisciplinar – CETRANS, ex-professora da FGV na área da psicologia, especialista em processos grupais, diretora e supervisora de grupos operativos no Instituto Pichon-Rivière de São Paulo, terapeuta em consultório particular, doutora em psicologia social.',
  },
  {
    id: 'mtm',
    name: 'Maria Tereza de Moraes',
    text: 'Intérprete de LIBRAS, professora e advogada, formada em Direito pela Fundação Eurípedes Soares da Rocha e pós graduada em Gestão Pública pelo Centro de Liderança Pública (CLP). Atuou como como Secretária Municipal de Educação de Ourinhos/SP de 2013 a 2016 e desde 2017 exerce esta função no município de Londrina PR, após ser aprovada em um processo de seleção.',
  },
  {
    id: 'mw',
    name: 'Mario Woortmann',
    text: 'Natural de Novo Hamburgo – RS, morador de Brasília - DF, é formado em Administração de Empresas pela Universidade de Brasília – UnB e Mestre em Gestão de Pessoas (People and Employment) pela Auckland University of Technology, com foco em Gestão de Desempenho no setor público. Atuou no ramo de consultoria em Gestão de Pessoas, iniciando com empresas privadas e depois atuando com órgãos públicos nas esferas Federal, Estadual e Municipal. Pesquisa e inovação também são áreas de grande interesse, tendo publicado em congressos como CONSAD e CLAD, além de atuar há dois anos como Vice-Presidente Técnico da ABRH-DF, onde promovo eventos para o avanço do debate em Gestão de Pessoas.',
  },
  {
    id: 'sm',
    name: 'Silvana Martins',
    text: 'Psicóloga, MBA em Gestão de Pessoas pela FGV e pós-graduanda no MBA Executivo pela Unifor, participado dos módulos em Wharton - University of Pennsylvania e cursos pela Columbia University (EUA). Há 12 anos atua na área de Gestão de Pessoas do setor público; desde 2016, na Secretaria do Planejamento e Gestão, coordena a Gestão Estratégica de Gente com abrangência nos órgãos do poder Executivo do Estado do Ceará.',
  },
  {
    id: 'sb',
    name: 'Simone Bicalho',
    text: 'Acredito que nós servidores públicos temos a missão de servir o cidadão, melhorar a sociedade. Atualmente Trabalha no TCU, coordenando capacitações em competências pessoais e liderança, pois tenho convicção que para sermos melhor profissionais, servidores, temos que ser melhores seres humanos.',
  },
  {
    id: 'tl',
    name: 'Tatiana Lima',
    text: 'Entrei na PMERJ com 24 anos (2008) e nesses 10 anos de experiência profissional ratifiquei valores os quais me foram ensinados por meus pais, como honestidade, bondade e perseverança. Gosto de lutar pelo bem e de transmitir prosperidade e fazer com que as pessoas se sintam mais felizes. Sou de família circense e aprendi a viver, mesmo nas dificuldades, transmitindo bom humor e buscando a felicidade. Tento levar um pouco disso para os lugares que frequento e principalmente, o local onde trabalho, talvez por isso me identifiquei tanto com minha profissão: policial militar. Tive a oportunidade de trabalhar 6 anos no projeto de pacificação do Estado do RJ e foi na UPP que aprendi e vivi experiências inigualáveis. Salvei vidas, ajudei ao próximo, briguei, prendi, atirei, sofri, sorri etc. Tive a oportunidade de comandar uma tropa num momento de crise nacional onde o único atributo que me cabia como gestora era usar a motivação para incentivar a minha tropa e, junto deles, trabalhei na linha de frente usando o exemplo como característica principal da minha liderança. Acho que o mais relevante, até o momento, da minha trajetória profissional, é ter trabalhado em locais bastantes difíceis e poder cumprir a missão de servir e proteger com toda honra, caráter e vontade. Sei que não posso mudar o mundo, mas me defino como entusiasta e quero continuar lutando por uma melhoria pelo menos na minha Corporação.',
  },
]

$WIN = $(window);
fellowsEl = window.document.getElementById('fellows')
allFellowsHtml = []
$WIN.on('load', function() {
  var arrays = [], size = 2;

  while (fellows.length > 0)
      arrays.push(fellows.splice(0, size));

  console.log(arrays);
  arrays.forEach(function (array) {
    let row = '<div class="row">'
    array.forEach(function (f) {
      let html = `<div class="col-six tab-full">
      <h3 class="font-white">${f.name}</h3>
      <h5 class="no-margin-top font-white">Fellow</h5>
      <p class="text-collapsed font-white" id="${f.id}-text">
      <img src="images/fellows2018/${f.id}.jpg" alt="${f.name}" class="testimonials__avatar pull-left" style="position: initial;">
      ${f.text}
      </p>
      <button id="${f.id}-btn" onclick=expandText('${f.id}') style="margin-left: 15rem;" class="btn btn--primary" href="#" target="_blank">Ver mais</button>
      </div>`
      console.log(html);
      row += html
    })
    allFellowsHtml.push(row + '</div>')
  })
  console.log(allFellowsHtml);
  // fellowsEl.innerHTML = allFellowsHtml.join('')
})
