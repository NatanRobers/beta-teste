export type Aluno = {
  nome: string;
  serie: string;
  fotoUrl: string;
  matricula: string;
};

export type Materia = {
  id: string;
  nome: string;
  notaBimestre: number;
  notaMaxima: number;
  faltas: number;
  faltasLimite: number;
};

export type EventoCalendario = {
  id: string;
  data: string; // dd/mm
  titulo: string;
  tipo: "prova" | "feriado" | "evento";
};

export type Setor = "secretaria" | "financeiro" | "coordenacao";

export type SegmentoCoordenacao =
  | "infantil"
  | "fundamental1"
  | "fundamental2";

export type Remetente = "pai" | "sistema" | "atendente" | "direcao";

/**
 * Documento em chats/{chatId}/messages/{messageId}.
 * `timestamp` fica null no instante entre o addDoc (otimista, via cache local
 * do SDK) e a confirmação do servidor preencher o serverTimestamp().
 */
export type Mensagem = {
  id: string;
  remetente: Remetente;
  texto: string;
  timestamp: number | null;
  autorId?: string;
};

/** Documento em chats/{chatId}. */
export type ChatDoc = {
  responsavelId: string;
  setor: Setor;
  segmento: SegmentoCoordenacao | null;
  escalonado: boolean;
  criadoEm: number | null;
};

export type AtendimentoEtapa = "selecao-setor" | "selecao-segmento" | "chat";
