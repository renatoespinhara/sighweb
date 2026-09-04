import figma from '@figma/code-connect';
import { QTooltip } from './QTooltip';

/**
 * Code Connect: liga o componente QTooltip (código) ao componente do Figma.
 * Node: 2183:7393  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QTooltip for selecionado.
 */
figma.connect(
  QTooltip,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2183-7393',
  {
    props: {
    rtl: figma.enum('RTL', { Off: false }),
    arrowPosition: figma.enum('Arrow position', {
      '↙ Bottom left': 'bottomLeft',
      '↓ Bottom': 'bottom',
      '↘ Bottom right': 'bottomRight',
      '↖ Top left': 'topLeft',
      '↑ Top': 'top',
      '↗ Top right': 'topRight',
      '↗ Right top': 'rightTop',
      '→ Right': 'right',
      '↘ Right bottom': 'rightBottom',
      '↖ Left top': 'leftTop',
      '← Left': 'left',
      '↙ Left bottom': 'leftBottom',
    }),
    arrow: figma.boolean('Arrow#3363:7'),
    label: figma.string('Label#3363:20'),
    },
    example: ({ rtl, arrowPosition, arrow, label }) => (
      <QTooltip rtl={rtl} arrowPosition={arrowPosition} arrow={arrow} label={label} />
    ),
  }
);
