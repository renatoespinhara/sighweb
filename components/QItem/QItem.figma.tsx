import figma from '@figma/code-connect';
import { QItem } from './QItem';

/**
 * Code Connect: liga o componente QItem (código) ao componente do Figma.
 * Node: 2059:11637  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QItem for selecionado.
 */
figma.connect(
  QItem,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2059-11637',
  {
    props: {
    label: figma.string('label'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ label }) => (
      <QItem label={label} />
    ),
  }
);
