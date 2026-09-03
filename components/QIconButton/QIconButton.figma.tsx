import figma from '@figma/code-connect';
import { QIconButton } from './QIconButton';

/**
 * Code Connect: liga o componente QIconButton (código) ao componente do Figma.
 * Node: 23:1630  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QIconButton for selecionado.
 */
figma.connect(
  QIconButton,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=23-1630',
  {
    props: {
    style: figma.enum('Style', { Fill: 'fill', Outline: 'outline', Flat: 'flat' }),
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable', Loading: 'loading', Focus: 'focus' }),
    color: figma.enum('Color', { Primary: 'primary' }),
    round: figma.enum('Round', { Off: false, On: true }),
    elevated: figma.boolean('Elevated#2129:9'),
    },
    example: ({ style, size, state, color, round, elevated }) => (
      <QIconButton style={style} size={size} state={state} color={color} round={round} elevated={elevated} />
    ),
  }
);
