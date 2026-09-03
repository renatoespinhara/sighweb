import figma from '@figma/code-connect';
import { QChip } from './QChip';

/**
 * Code Connect: liga o componente QChip (código) ao componente do Figma.
 * Node: 2061:17544  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QChip for selecionado.
 */
figma.connect(
  QChip,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2061-17544',
  {
    props: {
    label: figma.string('label'), // TODO: confirme o nome da Component Property no Figma
    removable: figma.string('removable'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ label, removable }) => (
      <QChip label={label} removable={removable} />
    ),
  }
);
