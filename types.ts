
export enum Block {
  ONE = 'BLOCO_1_ACESSO',
  TWO = 'BLOCO_2_DASHBOARD',
  THREE = 'BLOCO_3_UNIDADE_CENTRAL',
  FOUR = 'BLOCO_4_GABINETE_DG',
  FIVE = 'BLOCO_5_UNIDADES_ORGANICAS',
  SIX = 'BLOCO_6_SERVICOS_CENTRAIS',
  SEVEN = 'BLOCO_7_SISTEMA'
}

export enum Page {
  LANDING = 'LANDING',
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  RECOVER_PASSWORD = 'RECOVER_PASSWORD',
  DASHBOARD = 'DASHBOARD',
  UNIDADE_CENTRAL_MENU = 'UNIDADE_CENTRAL_MENU',
  CR = 'CR',
  CAG = 'CAG',
  CTQ = 'CTQ',
  CAS = 'CAS',
  DIRECAO_MAXIMA = 'DIRECAO_MAXIMA',
  GABINETE_DG_MENU = 'GABINETE_DG_MENU',
  DPEP = 'DPEP',
  UGEA = 'UGEA',
  DCRE = 'DCRE',
  DCTQ = 'DCTQ',
  DJ = 'DJ',
  GESTAO_PLANOS_DPEP = 'GESTAO_PLANOS_DPEP',
  CONSELHEIRO_EXECUTIVO = 'CONSELHEIRO_EXECUTIVO',
  DIRETOR_ADJUNTO = 'DIRETOR_ADJUNTO',
  CHEFE_GABINETE = 'CHEFE_GABINETE',
  SECRETARIA_EXECUTIVA = 'SECRETARIA_EXECUTIVA',
  UNIDADE_ORGANICA_MENU = 'UNIDADE_ORGANICA_MENU',
  DIVISAO_ENGENHARIA = 'DIVISAO_ENGENHARIA',
  CIE = 'CIE',
  DIRETOR_ENGENHARIA = 'DIRETOR_ENGENHARIA',
  DIRETOR_CURSO = 'DIRETOR_CURSO',
  ENGENHARIA_CURSO = 'ENGENHARIA_CURSO',
  EQUIPAMENTO_GESTAO = 'EQUIPAMENTO_GESTAO',
  CIE_DEPARTAMENTO = 'CIE_DEPARTAMENTO',
  SERVICOS_CENTRAIS_MENU = 'SERVICOS_CENTRAIS_MENU',
  DICOSAFA = 'DICOSAFA',
  DICOSSER = 'DICOSSER',
  RH_MENU = 'RH_MENU',
  RH_FORM = 'RH_FORM',
  REPARTICAO_PESSOAL = 'REPARTICAO_PESSOAL',
  PATRIMONIO_MENU = 'PATRIMONIO_MENU',
  SISTEMA = 'SISTEMA',
  PLANO = 'PLANO',
  PLANO_INDIVIDUAL = 'PLANO_INDIVIDUAL',
  MEU_PLANO_SETORIAL = 'MEU_PLANO_SETORIAL',
  STATISTICS = 'STATISTICS',
  ARCHIVE = 'ARCHIVE',
  AGENDA = 'AGENDA',
  TAREFA = 'TAREFA',
  EXPEDIENTE = 'EXPEDIENTE',
  RELATORIO = 'RELATORIO',
  ACADEMIC = 'ACADEMIC',
  AQUISICAO_MATERIAL = 'AQUISICAO_MATERIAL'
}

export interface UserData {
  fullName: string;
  email: string;
  province: string;
  district: string;
  role?: string;
  role_access?: 'user' | 'owner';
  organicUnit?: string;
  department?: string;
  sector?: string;
  password?: string;
  // added missing fields used in Register.tsx
  gender?: string;
  maritalStatus?: string;
  nationality?: string;
  category?: string;
  academicLevel?: string;
  workRegime?: string;
  dob?: string;
  documentId?: string;
  nuit?: string;
  address?: string;
  phone?: string;
  personalEmail?: string;
  institutionalEmail?: string;
  securityQ1?: string;
  answer1?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  targetUser: string;
  type: 'processo' | 'despacho' | 'alerta';
  read: boolean;
  link?: string;
}

export interface ExpedienteLog {
  id: string;
  actor: string;
  role: string;
  action: string;
  timestamp: string;
  details: string;
}

export interface AccessLog {
  id: string;
  userId: string;
  userName: string;
  timestamp: string;
  isAuthorized: boolean;
  // added missing fields used in SistemaAdmin and ExpedienteMenu
  action?: string;
  resource?: string;
}

export type Confidentiality = 'Público' | 'Restrito' | 'Confidencial';
export type Theme = 'Financeiro' | 'RH' | 'Jurídico' | 'Académico' | 'Estratégico' | 'Património';

export interface Expediente {
  id: string;
  codigoUnico: string;
  dataCriacao: string;
  autorInicial: string;
  assunto: string;
  tipoDoc: 'Ofício' | 'Contrato' | 'Requisição' | 'Despacho' | 'Relatório';
  
  // Tramitação (Routing)
  origem: string;
  destinoAtual: string;
  etapaAtual: string;
  status: 'Pendente' | 'Em Análise' | 'Aprovado' | 'Arquivado' | 'Devolvido';
  // added estado property to match ExpedienteMenu usage
  estado?: string;
  
  // Classificação
  tema: Theme;
  confidencialidade: Confidentiality;
  
  // Histórico e Auditoria
  historico: ExpedienteLog[];
  logsAcesso: AccessLog[];
  
  // Integração
  linkIntegracao?: {
    modulo: 'Pessoal' | 'Financeiro' | 'Planeamento';
    referenciaId: string;
  };

  // Dados de Aquisição (Se aplicável)
  itensAquisicao?: { item: string, qtd: number, especificacao: string }[];
}

// added DocumentRecord interface for ArchiveForm.tsx
export interface DocumentRecord {
  id: string;
  assunto: string;
  setor: string;
  referencia: string;
  data: string;
}
