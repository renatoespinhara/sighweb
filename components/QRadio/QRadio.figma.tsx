import figma from '@figma/code-connect';
import { QRadio } from './QRadio';

/**
 * Code Connect: liga o componente QRadio (código) ao componente do Figma.
 * Node: 2122:5979  |  Arquivo: SIGH-WEB - DS
 *
 * ATENÇÃO (não mapeado, ver comentário no .tsx):
 *   - checked: Não é uma Component Property do QRadio — o node interno 'Radio Indicator' está fixo em Checked=Off aqui. Controle o estado 'checked' via lógica de grupo no código (RadioGroup), não via prop direta deste componente.
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QRadio for selecionado.
 */
figma.connect(
  QRadio,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2122-5979',
  {
    props: {
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    flip: figma.enum('Flip', { Off: false, On: true }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    label: figma.string('Label#2548:0'),
    description: figma.boolean('Description#2538:2'),
    descriptionText: figma.string('Description text#2534:0'),
    },
    example: ({ state, flip, dense, label, description, descriptionText }) => (
      <QRadio state={state} flip={flip} dense={dense} label={label} description={description} descriptionText={descriptionText} />
    ),
  }
);
