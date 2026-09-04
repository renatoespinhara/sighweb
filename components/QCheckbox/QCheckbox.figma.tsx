import figma from '@figma/code-connect';
import { QCheckbox } from './QCheckbox';

/**
 * Code Connect: liga o componente QCheckbox (código) ao componente do Figma.
 * Node: 2122:6510  |  Arquivo: SIGH-WEB - DS
 *
 * ATENÇÃO (não mapeado, ver comentário no .tsx):
 *   - checked: Não é uma Component Property do QCheckbox — o node interno 'Checkbox Indicator' está fixo em Checked=Off aqui. Controle 'checked'/'indeterminate' via estado do código, não via prop direta deste componente.
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QCheckbox for selecionado.
 */
figma.connect(
  QCheckbox,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2122-6510',
  {
    props: {
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    flip: figma.enum('Flip', { Off: false, On: true }),
    dense: figma.enum('Dense', { On: true, Off: false }),
    label: figma.string('Label#2550:10'),
    description: figma.boolean('Description#2538:2'),
    descriptionText: figma.string('Description text#2534:0'),
    },
    example: ({ state, flip, dense, label, description, descriptionText }) => (
      <QCheckbox state={state} flip={flip} dense={dense} label={label} description={description} descriptionText={descriptionText} />
    ),
  }
);
