import figma from '@figma/code-connect';
import { QButtonGroup } from './QButtonGroup';

/**
 * Code Connect: liga o componente QButtonGroup (código) ao componente do Figma.
 * Node: 23:5286  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QButtonGroup for selecionado.
 */
figma.connect(
  QButtonGroup,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=23-5286',
  {
    props: {
    orientation: figma.string('orientation'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ orientation }) => (
      <QButtonGroup orientation={orientation} />
    ),
  }
);
