import figma from '@figma/code-connect';
import { QBanner } from './QBanner';

/**
 * Code Connect: liga o componente QBanner (código) ao componente do Figma.
 * Node: 2113:5986  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBanner for selecionado.
 */
figma.connect(
  QBanner,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2113-5986',
  {
    props: {
    buttons: figma.boolean('botoes#2114:0'),
    text: figma.string('Text#2776:3'),
    icon: figma.boolean('Icon#2776:4'),
    rounded: figma.enum('Rounded', { Off: false, On: true }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    alignment: figma.enum('Alignment', { Vertical: 'vertical', Horizontal: 'horizontal' }),
    },
    example: ({ buttons, text, icon, rounded, dense, alignment }) => (
      <QBanner buttons={buttons} text={text} icon={icon} rounded={rounded} dense={dense} alignment={alignment} />
    ),
  }
);
