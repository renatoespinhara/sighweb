import figma from '@figma/code-connect';
import { QPagination } from './QPagination';

/**
 * Code Connect: liga o componente QPagination (código) ao componente do Figma.
 * Node: 2001:1403  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QPagination for selecionado.
 */
figma.connect(
  QPagination,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-1403',
  {
    props: {
    page: figma.string('page'), // TODO: confirme o nome da Component Property no Figma
    totalPages: figma.string('totalPages'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ page, totalPages }) => (
      <QPagination page={page} totalPages={totalPages} />
    ),
  }
);
