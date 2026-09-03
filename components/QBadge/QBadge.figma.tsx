import figma from '@figma/code-connect';
import { QBadge } from './QBadge';

/**
 * Code Connect: liga o componente QBadge (código) ao componente do Figma.
 * Node: 15:191  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBadge for selecionado.
 */
figma.connect(
  QBadge,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=15-191',
  {
    props: {
    color: figma.string('color'), // TODO: confirme o nome da Component Property no Figma
    label: figma.string('label'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ color, label }) => (
      <QBadge color={color} label={label} />
    ),
  }
);
