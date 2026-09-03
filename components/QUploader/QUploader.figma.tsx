import figma from '@figma/code-connect';
import { QUploader } from './QUploader';

/**
 * Code Connect: liga o componente QUploader (código) ao componente do Figma.
 * Node: 2086:6118  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QUploader for selecionado.
 */
figma.connect(
  QUploader,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2086-6118',
  {
    props: {
    multiple: figma.string('multiple'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ multiple }) => (
      <QUploader multiple={multiple} />
    ),
  }
);
