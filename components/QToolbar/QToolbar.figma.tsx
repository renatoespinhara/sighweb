import figma from '@figma/code-connect';
import { QToolbar } from './QToolbar';

/**
 * Code Connect: liga o componente QToolbar (código) ao componente do Figma.
 * Node: 2001:1270  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QToolbar for selecionado.
 */
figma.connect(
  QToolbar,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-1270',
  {
    props: {
    title: figma.string('title'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ title }) => (
      <QToolbar title={title} />
    ),
  }
);
