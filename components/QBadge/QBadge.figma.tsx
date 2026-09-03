import figma from '@figma/code-connect';
import { QBadge } from './QBadge';

/**
 * Code Connect: liga o componente QBadge (código) ao componente do Figma.
 * Node: 15:191  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBadge for selecionado.
 */
figma.connect(
  QBadge,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=15-191',
  {
    props: {
    style: figma.enum('Style', { Filled: 'filled', Outline: 'outline' }),
    transparent: figma.enum('Transparent', { Off: false, On: true }),
    rounded: figma.enum('Rounded', { Off: false, On: true }),
    color: figma.enum('Color', { Primary: 'primary' }),
    label: figma.string('Label text#2451:81'),
    labelVisible: figma.boolean('Label#2451:90'),
    icon: figma.boolean('Icon#2545:122'),
    },
    example: ({ style, transparent, rounded, color, label, labelVisible, icon }) => (
      <QBadge style={style} transparent={transparent} rounded={rounded} color={color} label={label} labelVisible={labelVisible} icon={icon} />
    ),
  }
);
