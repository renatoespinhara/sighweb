import figma from '@figma/code-connect';
import { QSelect } from './QSelect';

/**
 * Code Connect: liga o componente QSelect (código) ao componente do Figma.
 * Node: 2057:10263  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QSelect for selecionado.
 */
figma.connect(
  QSelect,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2057-10263',
  {
    props: {
    opened: figma.enum('Opened', { Off: false, On: true }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Filled: 'filled' }),
    },
    example: ({ opened, state }) => (
      <QSelect opened={opened} state={state} />
    ),
  }
);
