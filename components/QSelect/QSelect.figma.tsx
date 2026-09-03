import figma from '@figma/code-connect';
import { QSelect } from './QSelect';

/**
 * Code Connect: liga o componente QSelect (código) ao componente do Figma.
 * Node: 2057:10263  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QSelect for selecionado.
 */
figma.connect(
  QSelect,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2057-10263',
  {
    props: {
    label: figma.string('label'), // TODO: confirme o nome da Component Property no Figma
    multiple: figma.string('multiple'), // TODO: confirme o nome da Component Property no Figma
    disabled: figma.string('disabled'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ label, multiple, disabled }) => (
      <QSelect label={label} multiple={multiple} disabled={disabled} />
    ),
  }
);
