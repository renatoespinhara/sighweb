import figma from '@figma/code-connect';
import { QDialog } from './QDialog';

/**
 * Code Connect: liga o componente QDialog (código) ao componente do Figma.
 * Node: 2113:5884  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT):
 *   - slot (↳ Slot#3277:4): INSTANCE_SWAP — conteúdo do corpo do diálogo
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QDialog for selecionado.
 */
figma.connect(
  QDialog,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2113-5884',
  {
    props: {
    footer: figma.boolean('footer#2194:0'),
    header: figma.boolean('Header#3277:3'),
    title: figma.string('Title#3277:5'),
    },
    example: ({ footer, header, title }) => (
      <QDialog footer={footer} header={header} title={title} />
    ),
  }
);
