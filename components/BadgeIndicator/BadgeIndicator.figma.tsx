import figma from '@figma/code-connect';
import { BadgeIndicator } from './BadgeIndicator';

/**
 * Code Connect: liga o componente BadgeIndicator (código) ao componente do Figma.
 * Node: 2335:7331  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design BadgeIndicator for selecionado.
 */
figma.connect(
  BadgeIndicator,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2335-7331',
  {
    props: {
    status: figma.enum('Status', { Red: 'red', Yellow: 'yellow', Green: 'green' }),
    },
    example: ({ status }) => (
      <BadgeIndicator status={status} />
    ),
  }
);
