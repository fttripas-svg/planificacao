
export const PROVINCIAS_DISTRITOS: Record<string, string[]> = {
  "Maputo Cidade": ["KaMpfumu", "Nhlamankulu", "KaMaxaquene", "KaMavota", "KaMubukwana", "KaTembe", "KaNyaka"],
  "Tete": ["Angónia", "Cahora Bassa", "Changara", "Chifunde", "Chiuta", "Dôa", "Macanga", "Mágoè", "Marávia", "Moatize", "Mutarara", "Tsangano", "Tete", "Zumbo", "Marara"]
};

// Estrutura solicitada para a Requisição
export const UNIDADES_REQUISICAO = [
  "Gabinete do Diretor Geral",
  "Divisão de Engenharia",
  "CIE",
  "DICOSAFA",
  "DICOSSER"
];

export const DEPARTAMENTOS_POR_UNIDADE: Record<string, string[]> = {
  "Gabinete do Diretor Geral": ["DPEP", "UGEA", "DCRE", "DCTQ", "Jurídico (DJ)", "Secretaria Executiva"],
  "Divisão de Engenharia": ["Engenharia Civil", "Engenharia Eletrotécnica", "Engenharia Mecânica", "Cadeiras Gerais", "Laboratórios"],
  "CIE": ["Departamento de Práticas", "Departamento de Prospeção", "PGNDE"],
  "DICOSAFA": ["Recursos Humanos", "Finanças", "Património", "Secretaria Geral", "Lar de Estudantes", "TIC"],
  "DICOSSER": ["Registo Académico", "Biblioteca", "Assuntos Estudantis", "Ação Social Escolar"]
};

export const UNIDADES_GERAIS = [
  { id: 'central', label: 'Serviços Centrais', subunits: ['DICOSAFA', 'DICOSSER', 'Gabinete do Diretor Geral'] },
  { id: 'organica', label: 'Unidades Orgânicas', subunits: ['Divisão de Engenharia', 'Centro de Incubação de Empresas'] }
];

export const SUBUNIDADES_DETALHADAS: Record<string, string[]> = {
  'DICOSAFA': ['Finanças', 'Recursos Humanos', 'Património', 'Secretaria Geral'],
  'DICOSSER': ['Registo Académico', 'Biblioteca', 'Assuntos Estudantis'],
  'Divisão de Engenharia': ['Engenharia Civil', 'Engenharia Eletrotécnica', 'Engenharia Mecânica', 'Cadeiras Gerais'],
  'Gabinete do Diretor Geral': ['DPEP', 'UGEA', 'DCRE', 'DCTQ']
};

export const RUBRICAS = [
  { id: '112', label: 'Despesas com Pessoal (112)' },
  { id: '121', label: 'Bens e Serviços (121/122)' }
];

export const NECESSIDADES: Record<string, { code: string, label: string }[]> = {
  '112': [{ code: '112101', label: 'Ajuda de custo' }],
  '121': [{ code: '121001', label: 'Combustíveis' }, { code: '121005', label: 'Material de Escritório' }]
};

export const SETORES = ["RH", "Académico", "Finanças", "Património", "TIC", "Secretaria"];

export const UI_CLASSES = {
  label: "block text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest",
  input: "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#0e4b61] outline-none text-sm bg-white transition-all",
  card: "bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all text-left",
  title: "text-2xl font-black text-[#0e4b61] uppercase italic tracking-tighter"
};
