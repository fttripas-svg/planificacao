
import React, { useState } from 'react';
import { Page, UserData, Block } from './types';
import BlockLayout from './components/BlockLayout';

// Blocos 1 & 2
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Login';
import RecoverPassword from './pages/RecoverPassword';
import Dashboard from './pages/Dashboard';

// Bloco 3
import UnidadeCentralMenu from './pages/UnidadeCentralMenu';
import CRForm from './pages/CRForm';
import ArchiveForm from './pages/ArchiveForm'; 
import CTQMenu from './pages/CTQMenu';
import DiretorGeralForm from './pages/DiretorGeralForm'; 
import CASForm from './pages/CASForm';

// Bloco 4
import GabineteMenu from './pages/GabineteMenu';
import DPEPMenu from './pages/DPEPMenu';
import UGEAMenu from './pages/UGEAMenu';
import DCREMenu from './pages/DCREMenu';
import DCTQMenu from './pages/DCTQMenu';
import GestaoPlanosDPEP from './pages/GestaoPlanosDPEP';
import ConselheiroExecutivoForm from './pages/ConselheiroExecutivoForm';
import DiretorAdjuntoForm from './pages/DiretorAdjuntoForm';
import ChefeGabineteForm from './pages/ChefeGabineteForm';
import SecretariaExecutivaForm from './pages/SecretariaExecutivaForm';
import DJMenu from './pages/DJMenu';

// Bloco 5
import UnidadeOrganicaMenu from './pages/UnidadeOrganicaMenu';
import DivisaoEngenhariaMenu from './pages/DivisaoEngenhariaMenu';
import CIEMenu from './pages/CIEMenu';
import DiretorEngenhariaMenu from './pages/DiretorEngenhariaMenu';
import EngenhariaCursoMenu from './pages/EngenhariaCursoMenu';
import EquipamentoGestao from './pages/EquipamentoGestao';
import DiretorCursoMenu from './pages/DiretorCursoMenu';
import CIEDepartamentoMenu from './pages/CIEDepartamentoMenu';

// Bloco 6
import ServicosCentraisMenu from './pages/ServicosCentraisMenu';
import DICOSAFAMenu from './pages/DICOSAFAMenu';
import DICOSSERMenu from './pages/DICOSSERMenu';
import RHMenu from './pages/RHMenu';
import RHForm from './pages/RHForm';
import ReparticaoPessoal from './pages/ReparticaoPessoal';
import PatrimonioMenu from './pages/PatrimonioMenu';

// Bloco 7
import SistemaAdmin from './pages/SistemaAdmin';

// Funcionais
import PlanoForm from './pages/PlanoForm';
import PlanoIndividualForm from './pages/PlanoIndividualForm';
import MeuPlanoSetorial from './pages/MeuPlanoSetorial';
import StatisticsForm from './pages/StatisticsForm';
import AgendaForm from './pages/AgendaForm';
import TarefaForm from './pages/TarefaForm';
import ExpedienteMenu from './pages/ExpedienteMenu';
import RelatorioForm from './pages/RelatorioForm';
import AcademicForm from './pages/AcademicForm';
import AquisicaoMaterial from './pages/AquisicaoMaterial';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [pageContext, setPageContext] = useState<any>(null);
  const [user, setUser] = useState<UserData | null>(() => {
    const saved = localStorage.getItem('isps_user');
    return saved ? JSON.parse(saved) : null;
  });

  const navigateTo = (page: Page, context?: any) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
    setPageContext(context || null);
  };

  const handleAuth = (data: UserData) => {
    setUser(data);
    localStorage.setItem('isps_user', JSON.stringify(data));
    navigateTo(Page.DASHBOARD);
  };

  const handleLogout = () => {
    localStorage.removeItem('isps_user');
    setUser(null);
    navigateTo(Page.LANDING);
  };

  const getBlockForPage = (page: Page): Block => {
    switch (page) {
      case Page.LANDING:
      case Page.REGISTER:
      case Page.LOGIN:
      case Page.RECOVER_PASSWORD:
        return Block.ONE;
      case Page.DASHBOARD:
        return Block.TWO;
      case Page.UNIDADE_CENTRAL_MENU:
      case Page.CR:
      case Page.CAG:
      case Page.CTQ:
      case Page.CAS:
      case Page.DIRECAO_MAXIMA:
        return Block.THREE;
      case Page.GABINETE_DG_MENU:
      case Page.DPEP:
      case Page.UGEA:
      case Page.DCRE:
      case Page.DCTQ:
      case Page.DJ:
      case Page.GESTAO_PLANOS_DPEP:
      case Page.CONSELHEIRO_EXECUTIVO:
      case Page.DIRETOR_ADJUNTO:
      case Page.CHEFE_GABINETE:
      case Page.SECRETARIA_EXECUTIVA:
        return Block.FOUR;
      case Page.UNIDADE_ORGANICA_MENU:
      case Page.DIVISAO_ENGENHARIA:
      case Page.CIE:
      case Page.DIRETOR_ENGENHARIA:
      case Page.DIRETOR_CURSO:
      case Page.ENGENHARIA_CURSO:
      case Page.EQUIPAMENTO_GESTAO:
      case Page.CIE_DEPARTAMENTO:
        return Block.FIVE;
      case Page.SERVICOS_CENTRAIS_MENU:
      case Page.DICOSAFA:
      case Page.DICOSSER:
      case Page.RH_MENU:
      case Page.RH_FORM:
      case Page.REPARTICAO_PESSOAL:
      case Page.PATRIMONIO_MENU:
        return Block.SIX;
      case Page.SISTEMA:
        return Block.SEVEN;
      default:
        return Block.TWO;
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.LANDING: return <Landing onNavigate={navigateTo} onSetOwner={handleAuth} isLoggedIn={!!user} />;
      case Page.REGISTER: return <Register onRegister={handleAuth} onBack={() => navigateTo(Page.LANDING)} />;
      case Page.LOGIN: return <Login onLogin={handleAuth} onNavigate={navigateTo} onBack={() => navigateTo(Page.LANDING)} />;
      case Page.RECOVER_PASSWORD: return <RecoverPassword onBack={() => navigateTo(Page.LOGIN)} />;
      case Page.DASHBOARD: return <Dashboard user={user} onNavigate={navigateTo} onLogout={handleLogout} />;

      // BLOCO 3
      case Page.UNIDADE_CENTRAL_MENU: return <UnidadeCentralMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.DIRECAO_MAXIMA: return <DiretorGeralForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_CENTRAL_MENU)} title="Direção Central" />;
      case Page.CR: return <CRForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_CENTRAL_MENU)} />;
      case Page.CAG: return <ArchiveForm onBack={() => navigateTo(Page.UNIDADE_CENTRAL_MENU)} />; 
      case Page.CTQ: return <CTQMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_CENTRAL_MENU)} />;
      case Page.CAS: return <CASForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_CENTRAL_MENU)} />;

      // BLOCO 4
      case Page.GABINETE_DG_MENU: return <GabineteMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_CENTRAL_MENU)} />;
      case Page.DPEP: return <DPEPMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.UGEA: return <UGEAMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.DCRE: return <DCREMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.DCTQ: return <DCTQMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.DJ: return <DJMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.GESTAO_PLANOS_DPEP: return <GestaoPlanosDPEP user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DPEP)} />;
      case Page.CONSELHEIRO_EXECUTIVO: return <ConselheiroExecutivoForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.DIRETOR_ADJUNTO: return <DiretorAdjuntoForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.CHEFE_GABINETE: return <ChefeGabineteForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;
      case Page.SECRETARIA_EXECUTIVA: return <SecretariaExecutivaForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.GABINETE_DG_MENU)} />;

      // BLOCO 5
      case Page.UNIDADE_ORGANICA_MENU: return <UnidadeOrganicaMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.DIVISAO_ENGENHARIA: return <DivisaoEngenhariaMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_ORGANICA_MENU)} />;
      case Page.DIRETOR_ENGENHARIA: return <DiretorEngenhariaMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DIVISAO_ENGENHARIA)} />;
      case Page.ENGENHARIA_CURSO: return <EngenhariaCursoMenu user={user} context={pageContext} onNavigate={navigateTo} onBack={() => navigateTo(Page.DIVISAO_ENGENHARIA)} />;
      case Page.DIRETOR_CURSO: return <DiretorCursoMenu user={user} context={pageContext} onNavigate={navigateTo} onBack={() => navigateTo(Page.ENGENHARIA_CURSO)} />;
      case Page.EQUIPAMENTO_GESTAO: return <EquipamentoGestao user={user} context={pageContext} onBack={() => navigateTo(Page.ENGENHARIA_CURSO)} />;
      case Page.CIE: return <CIEMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.UNIDADE_ORGANICA_MENU)} />;
      case Page.CIE_DEPARTAMENTO: return <CIEDepartamentoMenu user={user} context={pageContext} onNavigate={navigateTo} onBack={() => navigateTo(Page.CIE)} />;

      // BLOCO 6
      case Page.SERVICOS_CENTRAIS_MENU: return <ServicosCentraisMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.DICOSAFA: return <DICOSAFAMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.SERVICOS_CENTRAIS_MENU)} />;
      case Page.DICOSSER: return <DICOSSERMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.SERVICOS_CENTRAIS_MENU)} />;
      case Page.RH_MENU: return <RHMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DICOSAFA)} />;
      case Page.REPARTICAO_PESSOAL: return <ReparticaoPessoal onBack={() => navigateTo(Page.RH_MENU)} onNavigate={navigateTo} />;
      case Page.PATRIMONIO_MENU: return <PatrimonioMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DICOSAFA)} />;
      case Page.RH_FORM: return <RHForm onBack={() => navigateTo(Page.RH_MENU)} onComplete={() => navigateTo(Page.DASHBOARD)} />;

      // BLOCO 7
      case Page.SISTEMA: return <SistemaAdmin onBack={() => navigateTo(Page.DASHBOARD)} />;

      // FUNCIONAIS
      case Page.PLANO: return <PlanoForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.PLANO_INDIVIDUAL: return <PlanoIndividualForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.MEU_PLANO_SETORIAL: return <MeuPlanoSetorial user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.STATISTICS: return <StatisticsForm user={user} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.AGENDA: return <AgendaForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.TAREFA: return <TarefaForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.EXPEDIENTE: return <ExpedienteMenu user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.RELATORIO: return <RelatorioForm user={user} onNavigate={navigateTo} onBack={() => navigateTo(Page.DASHBOARD)} />;
      case Page.ACADEMIC: return <AcademicForm onBack={() => navigateTo(Page.DASHBOARD)} onComplete={() => navigateTo(Page.DASHBOARD)} />;
      case Page.AQUISICAO_MATERIAL: return <AquisicaoMaterial user={user} onBack={() => navigateTo(Page.DASHBOARD)} onNavigate={navigateTo} />;

      default: return <Landing onNavigate={navigateTo} onSetOwner={handleAuth} isLoggedIn={!!user} />;
    }
  };

  return (
    <BlockLayout block={getBlockForPage(currentPage)}>
      {renderContent()}
    </BlockLayout>
  );
};

export default App;
