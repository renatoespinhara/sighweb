import figma from '@figma/code-connect';
import { ExpansionItem } from './ExpansionItem';

/**
 * Code Connect: liga o componente ExpansionItem (código) ao componente do Figma.
 * Node: 2246:7463  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design ExpansionItem for selecionado.
 */
figma.connect(
  ExpansionItem,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2246-7463',
  {
    props: {
    text: figma.string('Text#2618:0'),
    opened: figma.enum('Opened', { Off: false, On: true }),
    layout: figma.enum('Layout', { Default: 'default', Slot: 'slot' }),
    },
    example: ({ text, opened, layout }) => (
      <ExpansionItem text={text} opened={opened} layout={layout} />
    ),
  }
);
