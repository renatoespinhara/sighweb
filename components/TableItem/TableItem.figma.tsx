import figma from '@figma/code-connect';
import { TableItem } from './TableItem';

/**
 * Code Connect: liga o componente TableItem (código) ao componente do Figma.
 * Node: 2176:6884  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT):
 *   - slot (↳ Slot#2663:0): INSTANCE_SWAP — conteúdo trocável quando Type=Swap
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design TableItem for selecionado.
 */
figma.connect(
  TableItem,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2176-6884',
  {
    props: {
    labelText: figma.string('Label text#2625:0'),
    label: figma.boolean('Label#2700:0'),
    icon: figma.boolean('Icon#2713:0'),
    state: figma.enum('State', { Default: 'default', Hover: 'hover' }),
    type: figma.enum('Type', { Text: 'text', Swap: 'swap' }),
    textStyle: figma.enum('Text style', { Header: 'header', Cell: 'cell' }),
    separator: figma.enum('Separator', { Default: 'default', Vertical: 'vertical', Cell: 'cell', None: 'none' }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    alignment: figma.enum('Alignment', { '← Left': 'left', '- Center': 'center', '→ Right': 'right' }),
    },
    example: ({ labelText, label, icon, state, type, textStyle, separator, dense, alignment }) => (
      <TableItem labelText={labelText} label={label} icon={icon} state={state} type={type} textStyle={textStyle} separator={separator} dense={dense} alignment={alignment} />
    ),
  }
);
