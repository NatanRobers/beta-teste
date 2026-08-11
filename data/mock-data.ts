import { Aluno, Materia, EventoCalendario, Setor, SegmentoCoordenacao } from "@/types";

export const alunoMock: Aluno = {
  nome: "João Silva",
  serie: "5º Ano - Fundamental 1",
  fotoUrl:
    "https://api.dicebear.com/7.x/notionists/svg?seed=Joao-Silva&backgroundColor=E7F0FA",
  matricula: "2026034521",
};

export const materiasMock: Materia[] = [
  { id: "mat", nome: "Matemática", notaBimestre: 8.5, notaMaxima: 10, faltas: 1, faltasLimite: 6 },
  { id: "port", nome: "Português", notaBimestre: 9.0, notaMaxima: 10, faltas: 0, faltasLimite: 6 },
  { id: "cie", nome: "Ciências", notaBimestre: 7.2, notaMaxima: 10, faltas: 2, faltasLimite: 6 },
  { id: "his", nome: "História", notaBimestre: 8.8, notaMaxima: 10, faltas: 0, faltasLimite: 6 },
  { id: "geo", nome: "Geografia", notaBimestre: 7.9, notaMaxima: 10, faltas: 1, faltasLimite: 6 },
  { id: "ing", nome: "Inglês", notaBimestre: 9.4, notaMaxima: 10, faltas: 0, faltasLimite: 6 },
];

export const eventosMock: EventoCalendario[] = [
  { id: "e1", data: "28/08", titulo: "Entrega do trabalho de Ciências", tipo: "evento" },
  { id: "e2", data: "07/09", titulo: "Feriado Nacional - Independência", tipo: "feriado" },
  { id: "e3", data: "15/09", titulo: "Prova de Matemática", tipo: "prova" },
  { id: "e4", data: "18/09", titulo: "Prova de Português", tipo: "prova" },
  { id: "e5", data: "22/09", titulo: "Reunião de Pais e Mestres", tipo: "evento" },
  { id: "e6", data: "12/10", titulo: "Feriado - Dia das Crianças", tipo: "feriado" },
];

export const setoresInfo: Record<
  Setor,
  { label: string; descricao: string }
> = {
  secretaria: {
    label: "Secretaria",
    descricao: "Documentos, matrícula, declarações e atestados",
  },
  financeiro: {
    label: "Financeiro",
    descricao: "Boletos, mensalidades e negociações",
  },
  coordenacao: {
    label: "Coordenação",
    descricao: "Pedagógico, comportamento e desempenho escolar",
  },
};

export const segmentosInfo: Record<SegmentoCoordenacao, { label: string }> = {
  infantil: { label: "Educação Infantil / 1º Ano" },
  fundamental1: { label: "Fundamental 1" },
  fundamental2: { label: "Fundamental 2" },
};

// Mensagem de sistema gravada como primeira mensagem de cada novo chat.
export const mensagemBoasVindas = (setorLabel: string) =>
  `Olá! Você iniciou um atendimento com ${setorLabel}. Um de nossos atendentes já vai falar com você. Enquanto isso, pode descrever o que você precisa.`;

// Mensagem de sistema gravada quando o chat é escalonado para a Direção.
export const mensagemEscalonamento =
  "Seu atendimento foi encaminhado para a Direção. O histórico completo desta conversa foi enviado e a equipe da Direção entrará em contato em breve.";
