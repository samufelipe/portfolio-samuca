import gladysLogo from '@/assets/gladys-logo.jpg';
import becharaLogo from '@/assets/bechara-logo.png';
import fasLogo from '@/assets/fas-logo.png';
import ciatripLogo from '@/assets/ciatrip-logo.jpg';
import ituranLogo from '@/assets/ituran-logo.jpg';
import valemLogo from '@/assets/valem-logo.png';
import al7Logo from '@/assets/al7-logo.png';
import porscheLogo from '@/assets/porsche-logo.png';
import mercedesLogo from '@/assets/mercedes-logo.png';
import agvLogo from '@/assets/agv-logo.png';

export type Sector =
  | 'Todos'
  | 'Automotivo'
  | 'Educação'
  | 'Saúde & Estética'
  | 'E-commerce'
  | 'Indústria'
  | 'Serviços'
  | 'Turismo';

export interface CaseItem {
  id: string;
  name: string;
  niche: string;
  sector: Sector;
  desc: string;
  result: string;
  services: string[];
  url: string;
  logo?: string;
  about: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export const allCases: CaseItem[] = [
  {
    id: 'moveis-bechara',
    name: 'Móveis Bechara',
    niche: 'Indústria Moveleira',
    sector: 'Indústria',
    desc: 'Líder na fabricação de móveis modernos com design funcional e distribuição nacional.',
    result: 'Escala Nacional',
    services: ['Google Ads', 'Meta Ads', 'Landing Page'],
    url: 'https://moveisbechara.com.br/',
    logo: becharaLogo,
    about: 'A Móveis Bechara é uma indústria moveleira consolidada no mercado brasileiro, reconhecida pela fabricação de móveis com design funcional e qualidade de produção. Com distribuição abrangendo múltiplas regiões do país, a empresa tinha presença física forte mas precisava ampliar sua atuação no canal digital.',
    challenge: 'O desafio era competir no ambiente digital contra grandes varejistas que já dominavam o Google com investimentos massivos. A empresa não tinha histórico de campanhas pagas estruturadas e precisava construir presença digital do zero, com foco em conversão real, não apenas em cliques.',
    approach: 'A estratégia foi construída em torno de campanhas de Google Shopping para os produtos com maior margem, combinadas com campanhas de Search segmentadas por intenção de compra. Cada campanha foi configurada respeitando as regiões de distribuição da empresa, evitando desperdício de verba em áreas sem atendimento.',
    outcome: 'O resultado foi a expansão real da presença digital para regiões que antes dependiam exclusivamente de representantes comerciais, gerando novos canais de contato com compradores fora do mercado local de origem.',
  },
  {
    id: 'fas-iluminacao',
    name: 'FAS Iluminação',
    niche: 'Design & Luxo',
    sector: 'Indústria',
    desc: 'Curadoria de iluminação técnica e decorativa internacional de alto padrão.',
    result: 'Posicionamento Premium',
    services: ['Meta Ads', 'Google Ads', 'Branding Digital'],
    url: 'https://fasiluminacao.com.br/',
    logo: fasLogo,
    about: 'A FAS Iluminação trabalha com curadoria de produtos de iluminação técnica e decorativa de procedência internacional, atendendo arquitetos, designers de interiores e clientes finais que buscam produtos de alto padrão. O ticket médio elevado e o público nichado são características centrais do negócio.',
    challenge: 'O problema com campanhas genéricas é claro em segmentos premium: atraem volume, mas não qualidade. A empresa recebia contatos de pessoas fora do perfil, o que desperdiçava tempo do time comercial e distorcia a percepção de marca. Era necessário filtrar melhor a audiência sem sacrificar volume de leads.',
    approach: 'O trabalho foi construir campanhas de Meta Ads com criativo voltado ao universo de arquitetura e design, atingindo arquitetos e decoradores dentro das plataformas. No Google, as campanhas foram estruturadas em torno de termos técnicos de iluminação, filtrando quem já tem conhecimento do produto. O posicionamento de marca foi reforçado em cada peça de comunicação.',
    outcome: 'A empresa passou a receber contatos mais qualificados, com perfil alinhado ao produto. O posicionamento premium foi consolidado no digital, diferenciando a FAS das revendas comuns e reforçando a autoridade no segmento de iluminação de alto padrão.',
  },
  {
    id: 'grupo-al7',
    name: 'Grupo AL7 Motos',
    niche: 'Setor Automotivo',
    sector: 'Automotivo',
    desc: 'Concessionária Dafra com venda de motos 0km, seminovas, peças, consórcio e seguros.',
    result: 'Autoridade Local',
    services: ['Google Ads', 'Meta Ads', 'Tráfego Local'],
    url: 'https://grupoal7.com.br/',
    logo: al7Logo,
    about: 'O Grupo AL7 é uma concessionária autorizada Dafra presente na região, trabalhando com venda de motos zero quilômetro, seminovas, peças originais, consórcio e seguros. O negócio depende de volume de leads locais qualificados, onde a intenção de compra precisa ser clara para justificar o atendimento comercial.',
    challenge: 'A concorrência local no setor automotivo é intensa, e muitas concessionárias disputam os mesmos compradores em potencial. O desafio foi criar campanhas que gerassem leads com intenção real de compra, filtrando curiosos e priorizando pessoas que já estavam na fase de decisão, sem explodir o custo por lead.',
    approach: 'Campanhas de Google Ads com foco em buscas de alta intenção (termos como "comprar moto [modelo] [cidade]") foram combinadas com Meta Ads segmentados por localização e interesse em motos. As campanhas foram separadas por linha de produto: 0km, seminovas e consórcio, cada uma com seu próprio fluxo de atendimento.',
    outcome: 'A concessionária passou a receber leads com perfil de comprador ativo, aumentando a taxa de conversão do time de vendas. A presença digital regional foi fortalecida, posicionando o Grupo AL7 como referência local antes mesmo do cliente visitar o showroom.',
  },
  {
    id: 'inovando-obra',
    name: 'Inovando na sua Obra',
    niche: 'Educação & Arquitetura',
    sector: 'Educação',
    desc: 'Mentoria para arquitetas e designers de interiores sobre gerenciamento lucrativo de obras.',
    result: 'Captação Qualificada',
    services: ['Meta Ads', 'Google Ads', 'Landing Page', 'Funil de Vendas'],
    url: 'https://www.inovandonasuaobra.com.br/',
    about: 'A Inovando na sua Obra é uma mentoria especializada voltada para arquitetas e designers de interiores que querem aprender a gerenciar obras com mais lucratividade e menos estresse operacional. É um produto de ticket alto, vendido para um nicho específico com dores bem definidas.',
    challenge: 'Mentorias de ticket alto exigem leads extremamente qualificados. O problema não era gerar contatos, era gerar os contatos certos: profissionais da área que gerenciam obras ativamente e reconhecem o problema de lucratividade que o produto resolve. Volume sem qualidade seria desperdício de verba.',
    approach: 'A estratégia priorizou Meta Ads com criativos educativos voltados exclusivamente para arquitetas e designers. Landing pages com copy focada nas dores específicas do público filtraram candidatos fora do perfil. O funil incluía etapas de nutrição antes do convite para conversa, garantindo que quem chegava ao time comercial já entendia o produto.',
    outcome: 'A qualidade dos leads aumentou de forma consistente, reduzindo o tempo médio do ciclo de vendas. A captação passou a gerar candidatos que já chegavam à conversa comercial com contexto e disposição para investir, acelerando o processo de matrícula.',
  },
  {
    id: 'lu-guerra',
    name: 'Lu Guerra',
    niche: 'Iluminação & Arquitetura',
    sector: 'Educação',
    desc: 'Arquiteta especialista em lighting design com projetos autorais e cursos para profissionais da iluminação.',
    result: 'Branding de Luxo',
    services: ['Meta Ads', 'Branding Digital', 'Landing Page'],
    url: 'https://www.luguerra.com/',
    about: 'Lu Guerra é arquiteta especializada em lighting design, com projetos reconhecidos pela sofisticação e atenção ao uso da luz na arquitetura. Além dos projetos, ela conduz cursos e formações voltadas para profissionais da área que querem aprofundar conhecimento em iluminação autoral.',
    challenge: 'Construir marca pessoal no digital para uma profissional de nicho é diferente de vender produto com demanda já existente. O desafio era criar presença digital que comunicasse autoridade técnica e sofisticação, atraindo tanto clientes de projetos quanto alunos para os cursos, sem confundir as duas audiências.',
    approach: 'O trabalho foi criar uma identidade digital consistente com o nível dos projetos da Lu, usando Meta Ads com criativos que mostravam o processo e o resultado dos trabalhos de iluminação. Para os cursos, campanhas específicas com segmentação para arquitetos e profissionais do setor. Landing pages separadas para cada produto, cada uma com copy alinhada à proposta de valor específica.',
    outcome: 'A Lu passou a ser reconhecida digitalmente como referência em lighting design, com seguidores qualificados e contatos de clientes alinhados ao nível do trabalho. Os cursos também ganharam demanda consistente, criando uma segunda fonte de receita previsível.',
  },
  {
    id: 'valem',
    name: 'VALEM Benefícios',
    niche: 'Gestão de Saúde',
    sector: 'Saúde & Estética',
    desc: 'Administradora líder em benefícios e planos de saúde corporativos.',
    result: 'Lead B2B',
    services: ['Google Ads', 'Lead Gen B2B', 'Landing Page'],
    url: 'https://www.valem.com.br/',
    logo: valemLogo,
    about: 'A VALEM é uma administradora de benefícios especializada em planos de saúde corporativos, atendendo empresas que precisam estruturar ou revisar o pacote de benefícios para seus colaboradores. O ciclo de venda é longo e o tomador de decisão geralmente é o RH ou a diretoria financeira da empresa cliente.',
    challenge: 'Gerar leads B2B qualificados para planos de saúde corporativos é desafiador porque o produto é comprado por decisão coletiva e o processo leva semanas. O digital precisava entregar contatos com fit real: empresas de porte adequado, com decisores dispostos a ouvir uma proposta.',
    approach: 'Google Ads foi o canal principal, com campanhas focadas em termos de busca de gestores de RH e financeiros pesquisando soluções de plano de saúde empresarial. Os formulários foram estruturados para qualificar já no preenchimento, coletando número de funcionários e porte da empresa. Isso reduziu o trabalho de triagem do time comercial.',
    outcome: 'O pipeline comercial passou a receber leads com fit real, empresas que tinham o perfil correto de tamanho e intenção de contratação. O time de vendas reportou melhoria na taxa de aproveitamento dos contatos gerados pelo digital.',
  },
  {
    id: 'hdi-brasil',
    name: 'HDI Brasil',
    niche: 'Padrões de TI',
    sector: 'Serviços',
    desc: 'Autoridade global em suporte técnico e melhores práticas de tecnologia.',
    result: 'Educação Corporativa',
    services: ['Google Ads', 'Meta Ads', 'Eventos & Certificações'],
    url: 'https://hdibrasil.com.br/',
    about: 'O HDI Brasil é o braço local de uma organização global focada em estabelecer padrões e melhores práticas para profissionais de suporte técnico e gestão de TI. A organização oferece certificações, eventos e treinamentos para profissionais e empresas do setor de tecnologia que buscam padronização de processos.',
    challenge: 'Alcançar profissionais de TI com perfil de gestão que têm interesse em certificação e desenvolvimento profissional, dentro de um mercado onde a atenção digital é disputada por dezenas de cursos e plataformas de ensino online. O desafio era comunicar autoridade de uma organização global de forma acessível e relevante para o público local.',
    approach: 'Campanhas de Google Ads segmentadas para buscas relacionadas a certificações e gestão de TI garantiram presença no momento da pesquisa ativa. Meta Ads foram utilizados para ampliar awareness entre profissionais de tecnologia, com criativos voltados para eventos e oportunidades de capacitação. O foco foi construir credibilidade de forma consistente.',
    outcome: 'O número de inscrições em eventos e certificações apresentou crescimento consistente ao longo das campanhas. O HDI Brasil consolidou sua presença digital no Brasil, tornando-se mais visível para profissionais de TI que buscam desenvolvimento de carreira alinhado a padrões internacionais.',
  },
  {
    id: 'instituto-embelleze',
    name: 'Instituto Embelleze',
    niche: 'Educação Profissional',
    sector: 'Educação',
    desc: 'Maior rede mundial de cursos profissionalizantes na área da beleza.',
    result: 'Conversão em Massa',
    services: ['Google Ads', 'Meta Ads', 'Funil de Vendas'],
    url: 'https://institutoembelleze.com/',
    about: 'O Instituto Embelleze é a maior rede mundial de cursos profissionalizantes na área da beleza, com unidades distribuídas em todo o Brasil. A escala da operação exige campanhas que funcionem simultaneamente em múltiplas regiões, cada uma com suas particularidades de demanda e concorrência local.',
    challenge: 'O desafio em redes com presença nacional é manter volume de matrículas em escala sem perder eficiência de custo. Campanhas genéricas geram volume, mas com CPL alto e aproveitamento baixo. Era necessário estrutura de campanha que entregasse resultados por unidade, respeitando as diferenças regionais.',
    approach: 'A estrutura de campanhas foi organizada por região, com Google Ads capturando demanda ativa de quem pesquisava cursos de beleza e Meta Ads gerando demanda para perfis com interesse declarado na área. O funil foi construído para qualificar leads antes do contato humano, reduzindo o tempo de atendimento por matrícula.',
    outcome: 'O volume de matrículas cresceu de forma consistente nas campanhas ativas, com custo por matrícula dentro dos parâmetros sustentáveis para o modelo de negócio da rede. A estrutura de campanhas por região também permitiu identificar mercados com maior potencial de expansão.',
  },
  {
    id: 'colina-dos-ipes',
    name: 'Colina dos Ipês',
    niche: 'Planos Funerários',
    sector: 'Serviços',
    desc: 'Planos funerários com atendimento humanizado e clube de benefícios com mais de 500 parceiros.',
    result: 'Acolhimento Digital',
    services: ['Meta Ads', 'Landing Page', 'Copywriting'],
    url: 'https://www.colinadosipes.com.br/',
    about: 'A Colina dos Ipês oferece planos funerários com foco em atendimento humanizado, além de um clube de benefícios com mais de 500 parceiros para os associados. É um produto que exige abordagem cuidadosa na comunicação, já que o tema é sensível e a decisão de compra envolve aspectos emocionais importantes.',
    challenge: 'Comunicar planos funerários no digital é uma tarefa que demanda equilíbrio preciso: o produto resolve uma necessidade real e importante, mas a abordagem direta ou transacional costuma gerar rejeição. O tom errado afasta potenciais clientes antes mesmo de entenderem o valor do serviço.',
    approach: 'O foco da comunicação foi no benefício central do produto: tranquilidade e proteção para a família. Meta Ads com linguagem acolhedora, sem eufemismos desnecessários nem abordagem apelativa, apresentaram o produto como uma decisão de previdência familiar. A landing page foi construída com o mesmo tom, priorizando clareza e conforto na leitura.',
    outcome: 'A campanha gerou leads com intenção genuína de contratar, com taxa de conversão acima da média do setor. O tom humanizado da comunicação foi apontado pelo time de vendas como diferencial na receptividade dos contatos, que chegavam ao atendimento já com predisposição positiva.',
  },
  {
    id: 'ituran',
    name: 'Ituran Seguros',
    niche: 'Segurança Veicular',
    sector: 'Automotivo',
    desc: 'Líder em rastreamento veicular, seguros e proteção automotiva com tecnologia de ponta.',
    result: 'Performance Global',
    services: ['Google Ads', 'Meta Ads', 'Lead Gen'],
    url: 'https://ituran.com.br/',
    logo: ituranLogo,
    about: 'A Ituran é referência global em rastreamento veicular e proteção automotiva, com operação em múltiplos países e tecnologia proprietária. No Brasil, compete em um mercado de seguros e proteção veicular extremamente competitivo, onde custo de aquisição e volume de leads são os principais indicadores de performance das campanhas.',
    challenge: 'O mercado de rastreamento e proteção veicular tem alta competição no leilão de anúncios, com vários players disputando os mesmos termos de busca. Manter CPL controlado sem sacrificar volume exige estrutura de campanha precisa e otimização contínua, especialmente em campanhas de escala nacional.',
    approach: 'A estrutura de Google Ads foi organizada por tipo de produto e perfil de veículo, separando campanhas de rastreamento, seguros e proteção veicular para evitar sobreposição de lances. Meta Ads foram utilizados para capturar interesse em segmentos específicos de proprietários de veículos. A otimização foi constante, com ajustes de lance e segmentação baseados em dados de conversão reais.',
    outcome: 'As campanhas mantiveram performance estável com CPL dentro da meta, mesmo em períodos de alta demanda competitiva. A estrutura granular de campanhas permitiu identificar os produtos com melhor custo-benefício e aumentar proporcionalmente o investimento nos canais mais eficientes.',
  },
  {
    id: 'sao-jose-confeccoes',
    name: 'São José Confecções',
    niche: 'Produtos Promocionais',
    sector: 'E-commerce',
    desc: 'Fábrica de bonés, viseiras, camisetas e ecobags personalizados para ações promocionais e eventos.',
    result: 'Venda Direta',
    services: ['Meta Ads', 'Lead Gen', 'Landing Page'],
    url: 'https://www.saojoseconfeccoes.com.br/',
    about: 'A São José Confecções é uma fábrica especializada na produção de itens promocionais personalizados, incluindo bonés, viseiras, camisetas e ecobags. O cliente final é tipicamente uma empresa ou agência buscando brindes para eventos, campanhas ou uniformes, tornando este um negócio essencialmente B2B com vendas por volume.',
    challenge: 'Fabricantes de produtos promocionais dependem muito de indicação e relacionamento comercial para fechar pedidos. O desafio era criar um canal digital que gerasse solicitações de orçamento de empresas com demanda real, sem atrair apenas consumidores finais que não têm o volume mínimo para compra.',
    approach: 'Meta Ads foram direcionados para gestores de marketing, eventos e compras de empresas, com criativos que apresentavam os produtos em contexto corporativo (eventos, feiras, brindes). A landing page de orçamento foi estruturada para qualificar pela quantidade mínima de peças, filtrando pedidos abaixo da capacidade mínima de produção.',
    outcome: 'O canal digital passou a gerar solicitações de orçamento de empresas com perfil real de compra, complementando os pedidos vindos de indicação. A fábrica ganhou visibilidade além do relacionamento comercial tradicional, alcançando compradores fora da rede de contatos existente.',
  },
  {
    id: 'ciatrip',
    name: 'Ciatrip',
    niche: 'Turismo Premium',
    sector: 'Turismo',
    desc: 'Agência especializada em roteiros personalizados e experiências internacionais.',
    result: 'Ticket Médio Alto',
    services: ['Google Ads', 'Meta Ads', 'Conteúdo'],
    url: 'https://ciatrip.com/',
    logo: ciatripLogo,
    about: 'A Ciatrip é uma agência de viagens especializada em roteiros personalizados e experiências internacionais, atendendo clientes que buscam algo além do pacote padrão. A proposta de valor está na curadoria e personalização de cada viagem, com acompanhamento especializado do início ao fim da jornada.',
    challenge: 'Concorrer com grandes plataformas de viagens (que dominam o Google com investimentos expressivos) é um desafio constante para agências menores. A solução não era disputar os mesmos termos genéricos, mas encontrar o público que valoriza personalização e está disposto a pagar por isso, que tem perfil de ticket mais alto.',
    approach: 'A estratégia foi segmentar por destino e por tipo de viajante. No Google, campanhas focadas em destinos específicos onde a personalização tem mais valor (lua de mel, viagem de aniversário, destinos exóticos). No Meta, criativos com foco na experiência e na curadoria, alcançando o público por estilo de vida, não apenas por interesse em viagens.',
    outcome: 'O ticket médio das reservas vindas do digital ficou acima da média geral da agência, confirmando que a segmentação estava atraindo o público certo. O número de contatos comerciais qualificados cresceu de forma consistente ao longo das campanhas.',
  },
  {
    id: 'paula-romao',
    name: 'Paula Romão',
    niche: 'Estética & Saúde',
    sector: 'Saúde & Estética',
    desc: 'Fisioterapeuta especializada em pós-operatório de cirurgia plástica, com atendimento domiciliar personalizado.',
    result: 'Agenda Lotada',
    services: ['Google Ads', 'Meta Ads', 'Landing Page'],
    url: 'https://www.paulacromao.com.br/',
    about: 'Paula Romão é fisioterapeuta com especialização em recuperação pós-operatória de cirurgia plástica, oferecendo atendimento domiciliar personalizado. É um serviço de alta especialidade, com demanda pontual mas recorrente, onde a captação certa no momento certo é determinante para o preenchimento da agenda.',
    challenge: 'O pós-operatório de cirurgia plástica é uma janela de tempo específica: a paciente precisa do serviço logo após a cirurgia. Alcançar o público nesse momento exige presença na busca ativa, antes da decisão já ter sido tomada por outro profissional. O desafio era aparecer para a paciente certa, na hora certa, antes da concorrência.',
    approach: 'Google Ads com campanhas para termos de alta intenção relacionados a fisioterapia pós-operatória e recuperação de cirurgia plástica na cidade de atuação. Meta Ads complementaram com campanhas de awareness para mulheres com perfil alinhado ao procedimento, gerando busca ativa futura. A landing page foi desenvolvida para transmitir credibilidade e facilitar o agendamento.',
    outcome: 'A agenda da Paula passou a ter consistência de preenchimento, reduzindo a dependência de indicações esporádicas. O digital se tornou um canal previsível de novos pacientes, com volume suficiente para manter a agenda ocupada durante o mês.',
  },
  {
    id: 'gladys-religiosos',
    name: 'Gladys Religiosos',
    niche: 'Varejo Especializado',
    sector: 'E-commerce',
    desc: 'Principal e-commerce de artigos sacros e religiosos do mercado brasileiro.',
    result: 'E-commerce Escalonável',
    services: ['Google Ads', 'Meta Ads', 'Google Shopping'],
    url: 'https://www.gladysreligiosos.com.br/',
    logo: gladysLogo,
    about: 'A Gladys Religiosos é referência no mercado brasileiro de artigos sacros e religiosos, com um catálogo extenso disponível em e-commerce. Atende tanto consumidores finais quanto estabelecimentos religiosos, igrejas e revendedores que buscam produtos de qualidade neste segmento especializado.',
    challenge: 'E-commerces com catálogos extensos e margens variáveis precisam de estrutura de campanha que priorize os produtos certos, não apenas o volume de tráfego. O desafio era escalar receita mantendo ROAS saudável, sem depender de promoções constantes que erosionam a margem.',
    approach: 'Google Shopping foi o canal principal, com estrutura de campanhas separada por categoria de produto e margens. Campanhas de Search capturaram demanda de clientes buscando itens específicos por nome ou função. Meta Ads foram usados para retargeting e para atingir públicos de compradores recorrentes, aproveitando o comportamento de compra frequente no nicho religioso.',
    outcome: 'A receita do e-commerce cresceu de forma consistente com ROAS sustentável, sem dependência de liquidações. O canal de anúncios se tornou a principal fonte de novos clientes, complementando a base fidelizada que compra organicamente.',
  },
  {
    id: 'porsche-center-bh',
    name: 'Porsche Center BH',
    niche: 'Luxo & Lifestyle',
    sector: 'Automotivo',
    desc: 'E-commerce oficial de vestuário e acessórios Porsche com estratégia de conversão para o público de alta renda.',
    result: 'ROI Premium',
    services: ['Google Ads', 'Meta Ads', 'E-commerce Premium'],
    url: 'https://loja.porschecenterbh.com.br/',
    logo: porscheLogo,
    about: 'A Porsche Center BH mantém um e-commerce oficial com vestuário e acessórios da marca Porsche, atendendo entusiastas e proprietários que buscam produtos licenciados de alta qualidade. O ticket médio elevado e o público de poder aquisitivo alto definem a estratégia de comunicação e mídia do canal.',
    challenge: 'Vender produtos premium online exige uma abordagem diferente do e-commerce convencional. O público de alta renda é mais seletivo com onde clica e o que consome, e a abordagem genérica de "compre agora com desconto" não funciona para este perfil. O desafio era converter sem desvalorizar a marca.',
    approach: 'Meta Ads com targeting refinado para públicos de alta renda e interesse em automóveis de luxo, com criativos que reforçavam a identidade da marca Porsche. No Google, campanhas de Search para quem já conhecia a marca e campanhas de Shopping para produtos específicos. Nenhuma comunicação usou gatilho de desconto, mantendo o posicionamento premium.',
    outcome: 'O ROAS das campanhas ficou acima da meta, com conversões vindas de um público genuinamente alinhado ao produto. A estratégia sem promoções preservou o posicionamento de marca enquanto gerava resultado financeiro consistente para o e-commerce.',
  },
  {
    id: 'mercedes-benz-collection',
    name: 'Mercedes-Benz Collection',
    niche: 'Moda & Luxo',
    sector: 'Automotivo',
    desc: 'Loja online da coleção de roupas e acessórios Mercedes-Benz com posicionamento de marca e performance em mídia paga.',
    result: 'Branding + Vendas',
    services: ['Meta Ads', 'Branding Digital', 'Google Shopping'],
    url: 'https://www.mercedes-benzcollection.com.br/',
    logo: mercedesLogo,
    about: 'A Mercedes-Benz Collection é a loja online oficial da coleção de vestuário e acessórios da marca Mercedes-Benz no Brasil. O desafio é único: vender roupas e acessórios de uma marca conhecida principalmente por automóveis, para um público que pode ou não ser proprietário de um veículo da marca.',
    challenge: 'Posicionar uma coleção de moda de marca automotiva exige equilibrar dois objetivos que às vezes conflitam: reforçar a identidade da marca (que não pode ser banalizada) e gerar conversões no e-commerce. Campanhas puramente de performance podem distorcer a percepção da marca; campanhas puramente de branding não pagam as contas.',
    approach: 'A estratégia separou claramente os objetivos: Meta Ads de branding para construir percepção de estilo e lifestyle associados à marca, e Google Shopping para capturar quem já estava buscando os produtos. O equilíbrio entre os dois canais foi ajustado ao longo do tempo conforme os dados de cada campanha.',
    outcome: 'O e-commerce apresentou crescimento consistente nas vendas com manutenção do posicionamento premium. O equilíbrio entre branding e performance gerou um canal digital que funciona tanto para construção de marca quanto para resultado de curto prazo.',
  },
  {
    id: 'agv-protege',
    name: 'Universo AGV Protege',
    niche: 'Proteção Veicular',
    sector: 'Automotivo',
    desc: 'Associação de proteção veicular com estratégias digitais para captação de leads e crescimento de base de associados.',
    result: 'Escala de Leads',
    services: ['Meta Ads', 'Landing Page', 'Lead Gen'],
    url: 'https://agvprotege.com.br/',
    logo: agvLogo,
    about: 'A Universo AGV Protege é uma associação de proteção veicular que oferece alternativas ao seguro tradicional com custo mais acessível. O modelo de associação depende de crescimento constante da base de membros para manter a viabilidade financeira do modelo, tornando a captação de novos associados uma necessidade permanente.',
    challenge: 'O mercado de proteção veicular convive com desconfiança do consumidor, que muitas vezes associa as associações a esquemas não confiáveis. A comunicação precisava transmitir credibilidade e clareza sobre o produto, além de gerar volume suficiente de leads para sustentar o crescimento da base de associados.',
    approach: 'Meta Ads com comunicação clara e transparente sobre o modelo de proteção veicular, diferenciando da concorrência sem ataques diretos. A landing page foi desenhada para explicar o produto em etapas antes de solicitar o contato, educando o visitante e reduzindo a resistência à conversão. O funil priorizou qualidade de lead sobre volume bruto.',
    outcome: 'A base de associados cresceu de forma consistente ao longo das campanhas, com taxa de conversão do lead em associado acima das metas iniciais. A abordagem educativa na comunicação reduziu a desconfiança e acelerou a tomada de decisão dos interessados.',
  },
];

export const sectors: Sector[] = [
  'Todos',
  'Automotivo',
  'Educação',
  'Saúde & Estética',
  'E-commerce',
  'Indústria',
  'Serviços',
  'Turismo',
];

export const sectorColors: Record<string, string> = {
  Automotivo: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Educação': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Saúde & Estética': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  'E-commerce': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Indústria': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Serviços': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Turismo': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

export const getFaviconUrl = (url: string) => {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return '';
  }
};
