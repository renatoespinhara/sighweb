import figma from '@figma/code-connect';
import { RadioIndicator } from './RadioIndicator';

/**
 * Code Connect: liga o componente RadioIndicator (código) ao componente do Figma.
 * Node: 2122:6145  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design RadioIndicator for selecionado.
 */
figma.connect(
  RadioIndicator,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2122-6145',
  {
    props: {
    checked: figma.enum('Checked', { Off: false, On: true }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    },
    example: ({ checked, state, size, dense }) => (
      <RadioIndicator checked={checked} state={state} size={size} dense={dense} />
    ),
  }
);
