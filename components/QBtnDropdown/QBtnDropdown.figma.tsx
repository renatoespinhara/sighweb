import figma from '@figma/code-connect';
import { QBtnDropdown } from './QBtnDropdown';

/**
 * Code Connect: liga o componente QBtnDropdown (código) ao componente do Figma.
 * Node: 2002:6215  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBtnDropdown for selecionado.
 */
figma.connect(
  QBtnDropdown,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2002-6215',
  {
    props: {
    label: figma.string('label'), // TODO: confirme o nome da Component Property no Figma
    open: figma.string('open'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ label, open }) => (
      <QBtnDropdown label={label} open={open} />
    ),
  }
);
