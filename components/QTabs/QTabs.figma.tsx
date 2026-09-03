import figma from '@figma/code-connect';
import { QTabs } from './QTabs';

/**
 * Code Connect: liga o componente QTabs (código) ao componente do Figma.
 * Node: 2001:2601  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QTabs for selecionado.
 */
figma.connect(
  QTabs,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-2601',
  {
    props: {
    selected: figma.enum('Selected', { Off: false, On: true }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover' }),
    orientation: figma.enum('Orientation item', { Horizontal: 'horizontal', Vertical: 'vertical' }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    label: figma.string('Label text#3325:3'),
    icon: figma.boolean('Icon#3325:4'),
    labelVisible: figma.boolean('Label#3325:5'),
    notification: figma.boolean('Notification#3337:0'),
    },
    example: ({ selected, state, orientation, dense, label, icon, labelVisible, notification }) => (
      <QTabs selected={selected} state={state} orientation={orientation} dense={dense} label={label} icon={icon} labelVisible={labelVisible} notification={notification} />
    ),
  }
);
