import figma from '@figma/code-connect';
import { QMenu } from './QMenu';

/**
 * Code Connect: liga o componente QMenu (código) ao componente do Figma.
 * Node: 2061:30229  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QMenu for selecionado.
 */
figma.connect(
  QMenu,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2061-30229',
  {
    props: {
    open: figma.string('open'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ open }) => (
      <QMenu open={open} />
    ),
  }
);
