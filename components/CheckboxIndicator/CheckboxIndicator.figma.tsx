import figma from '@figma/code-connect';
import { CheckboxIndicator } from './CheckboxIndicator';

/**
 * Code Connect: liga o componente CheckboxIndicator (código) ao componente do Figma.
 * Node: 2122:6676  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design CheckboxIndicator for selecionado.
 */
figma.connect(
  CheckboxIndicator,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2122-6676',
  {
    props: {
    checked: figma.enum('Checked', { Off: false, On: true }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    indeterminate: figma.enum('Indeterminate', { Off: false, On: true }),
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    },
    example: ({ checked, state, indeterminate, size, dense }) => (
      <CheckboxIndicator checked={checked} state={state} indeterminate={indeterminate} size={size} dense={dense} />
    ),
  }
);
