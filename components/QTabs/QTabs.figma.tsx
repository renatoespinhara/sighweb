import figma from '@figma/code-connect';
import { QTabs } from './QTabs';

/**
 * Code Connect: liga o componente QTabs (código) ao componente do Figma.
 * Node: 2001:2601  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QTabs for selecionado.
 */
figma.connect(
  QTabs,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-2601',
  {
    props: {
    activeTab: figma.string('activeTab'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ activeTab }) => (
      <QTabs activeTab={activeTab} />
    ),
  }
);
