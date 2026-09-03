import figma from '@figma/code-connect';
import { QToolbar } from './QToolbar';

/**
 * Code Connect: liga o componente QToolbar (código) ao componente do Figma.
 * Node: 2001:1270  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT, requerem figma.instance/figma.children):
 *   - slot (↳ Slot#3360:0): INSTANCE_SWAP — usado quando Type=Swap
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QToolbar for selecionado.
 */
figma.connect(
  QToolbar,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-1270',
  {
    props: {
    type: figma.enum('Type', { Default: 'default', Grouped: 'grouped', Swap: 'swap' }),
    title: figma.string('Title#3357:0'),
    },
    example: ({ type, title }) => (
      <QToolbar type={type} title={title} />
    ),
  }
);
