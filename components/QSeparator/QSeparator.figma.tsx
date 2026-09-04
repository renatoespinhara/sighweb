import figma from '@figma/code-connect';
import { QSeparator } from './QSeparator';

/**
 * Code Connect: liga o componente QSeparator (código) ao componente do Figma.
 * Node: 2176:8450  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QSeparator for selecionado.
 */
figma.connect(
  QSeparator,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2176-8450',
  {
    props: {
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
    padding: figma.enum('Padding', { Off: false, On: true }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    },
    example: ({ orientation, padding, dense }) => (
      <QSeparator orientation={orientation} padding={padding} dense={dense} />
    ),
  }
);
