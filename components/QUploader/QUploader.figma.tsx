import figma from '@figma/code-connect';
import { QUploader } from './QUploader';

/**
 * Code Connect: liga o componente QUploader (código) ao componente do Figma.
 * Node: 2086:6118  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QUploader for selecionado.
 */
figma.connect(
  QUploader,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2086-6118',
  {
    props: {
    uploaded: figma.enum('Uploaded', { Off: false, On: true }),
    title: figma.string('Title text#3379:21'),
    titleVisible: figma.boolean('Title#3379:22'),
    progressVisible: figma.boolean('Percentage of progress#3379:23'),
    progressLabel: figma.string('Percentage of progress label#3379:24'),
    loadedValueLabel: figma.string('Loaded value label#3379:25'),
    loadedValueVisible: figma.boolean('Loaded value#3379:26'),
    },
    example: ({ uploaded, title, titleVisible, progressVisible, progressLabel, loadedValueLabel, loadedValueVisible }) => (
      <QUploader uploaded={uploaded} title={title} titleVisible={titleVisible} progressVisible={progressVisible} progressLabel={progressLabel} loadedValueLabel={loadedValueLabel} loadedValueVisible={loadedValueVisible} />
    ),
  }
);
