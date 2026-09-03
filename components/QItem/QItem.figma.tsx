import figma from '@figma/code-connect';
import { QItem } from './QItem';

/**
 * Code Connect: liga o componente QItem (código) ao componente do Figma.
 * Node: 2059:11637  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT, requerem figma.instance/figma.children):
 *   - dropdown (Dropdown#2572:444): INSTANCE_SWAP — ícone/menu de dropdown no item
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QItem for selecionado.
 */
figma.connect(
  QItem,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2059-11637',
  {
    props: {
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    flip: figma.enum('Flip', { Off: false, On: true }),
    textLayout: figma.enum('Text layout', { Single line: 'singleline', Caption: 'caption', Overline: 'overline' }),
    label: figma.string('Label#2569:1'),
    caption: figma.string('Caption#2569:5'),
    overline: figma.string('Overline#2569:9'),
    startSection: figma.boolean('Start item section#2571:9'),
    endSection: figma.boolean('End item section#2571:46'),
    separatorVisible: figma.boolean('Separator#2602:0'),
    },
    example: ({ state, flip, textLayout, label, caption, overline, startSection, endSection, separatorVisible }) => (
      <QItem state={state} flip={flip} textLayout={textLayout} label={label} caption={caption} overline={overline} startSection={startSection} endSection={endSection} separatorVisible={separatorVisible} />
    ),
  }
);
