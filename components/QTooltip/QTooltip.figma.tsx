import figma from '@figma/code-connect';
import { QTooltip } from './QTooltip';

/**
 * Code Connect: liga o componente QTooltip (código) ao componente do Figma.
 * Node: 2183:7393  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QTooltip for selecionado.
 */
figma.connect(
  QTooltip,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2183-7393',
  {
    props: {
    text: figma.string('text'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ text }) => (
      <QTooltip text={text} />
    ),
  }
);
