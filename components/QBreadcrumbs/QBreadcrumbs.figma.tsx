import figma from '@figma/code-connect';
import { QBreadcrumbs } from './QBreadcrumbs';

/**
 * Code Connect: liga o componente QBreadcrumbs (código) ao componente do Figma.
 * Node: 2001:1529  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBreadcrumbs for selecionado.
 */
figma.connect(
  QBreadcrumbs,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-1529',
  {
    props: {

    },
    example: () => (
      <QBreadcrumbs  />
    ),
  }
);
