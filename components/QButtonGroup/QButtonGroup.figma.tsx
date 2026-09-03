import figma from '@figma/code-connect';
import { QButtonGroup } from './QButtonGroup';

/**
 * Code Connect: liga o componente QButtonGroup (código) ao componente do Figma.
 * Node: 23:5286  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QButtonGroup for selecionado.
 */
figma.connect(
  QButtonGroup,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=23-5286',
  {
    props: {
    style: figma.enum('Style', { Fill: 'fill', Outline: 'outline', Flat: 'flat' }),
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl' }),
    color: figma.enum('Color', { Primary: 'primary' }),
    rounded: figma.enum('Rounded', { Off: false, On: true }),
    thirdButton: figma.boolean('3th button#2874:0'),
    fourthButton: figma.boolean('4th button#2874:2'),
    fifthButton: figma.boolean('5th button#2875:4'),
    },
    example: ({ style, size, color, rounded, thirdButton, fourthButton, fifthButton }) => (
      <QButtonGroup style={style} size={size} color={color} rounded={rounded} thirdButton={thirdButton} fourthButton={fourthButton} fifthButton={fifthButton} />
    ),
  }
);
