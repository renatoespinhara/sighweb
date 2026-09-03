import figma from '@figma/code-connect';
import { QInput } from './QInput';

/**
 * Code Connect: liga o componente QInput (código) ao componente do Figma.
 * Node: 2036:3187  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT, requerem figma.instance/figma.children):
 *   - clearableIcon (↳ Clearable icon#2416:0): INSTANCE_SWAP — ícone do botão de limpar
 *   - dropdown (↳ Dropdown#2572:83): INSTANCE_SWAP — dropdown anexado ao input
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QInput for selecionado.
 */
figma.connect(
  QInput,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2036-3187',
  {
    props: {
    style: figma.enum('Style', { Standard: 'standard', Filled: 'filled', Outline: 'outline' }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Focused: 'focused', Filled: 'filled', Error: 'error' }),
    disable: figma.enum('Disable', { Off: false, On: true }),
    dense: figma.enum('Dense', { Off: false, On: true }),
    labelPosition: figma.enum('Label', { Float: 'float', Staked: 'staked', None: 'none' }),
    startSection: figma.boolean('Start section#2372:6'),
    placeholder: figma.string('Ph text#2372:7'),
    endSection: figma.boolean('End section#2372:8'),
    label: figma.string('Label text #2372:9'),
    placeholderVisible: figma.boolean('Placeholder#2372:10'),
    value: figma.string('Value#2399:0'),
    hint: figma.boolean('Hint#2408:16'),
    required: figma.boolean('Required#2409:32'),
    control: figma.boolean('Control#2477:0'),
    clearable: figma.boolean('Clearable#2480:722'),
    },
    example: ({ style, state, disable, dense, labelPosition, startSection, placeholder, endSection, label, placeholderVisible, value, hint, required, control, clearable }) => (
      <QInput style={style} state={state} disable={disable} dense={dense} labelPosition={labelPosition} startSection={startSection} placeholder={placeholder} endSection={endSection} label={label} placeholderVisible={placeholderVisible} value={value} hint={hint} required={required} control={control} clearable={clearable} />
    ),
  }
);
