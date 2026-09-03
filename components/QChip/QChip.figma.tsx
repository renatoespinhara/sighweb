import figma from '@figma/code-connect';
import { QChip } from './QChip';

/**
 * Code Connect: liga o componente QChip (código) ao componente do Figma.
 * Node: 2061:17544  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT, requerem figma.instance/figma.children):
 *   - removeIcon (Remove icon#2720:584): INSTANCE_SWAP — ícone de remover
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QChip for selecionado.
 */
figma.connect(
  QChip,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2061-17544',
  {
    props: {
    rtl: figma.enum('RTL', { Off: false, On: true }),
    style: figma.enum('Style', { Fill: 'fill', Outline: 'outline' }),
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    rounded: figma.enum('Rounded', { Off: false, On: true }),
    label: figma.string('Label#2717:580'),
    removable: figma.boolean('Removable#2720:621'),
    },
    example: ({ rtl, style, size, state, dense, rounded, label, removable }) => (
      <QChip rtl={rtl} style={style} size={size} state={state} dense={dense} rounded={rounded} label={label} removable={removable} />
    ),
  }
);
