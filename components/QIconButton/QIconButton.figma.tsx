import figma from '@figma/code-connect';
import { QIconButton } from './QIconButton';

/**
 * Code Connect: liga o componente QIconButton (código) ao componente do Figma.
 * Node: 23:1630  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QIconButton for selecionado.
 */
figma.connect(
  QIconButton,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=23-1630',
  {
    props: {
    icon: figma.string('icon'), // TODO: confirme o nome da Component Property no Figma
    size: figma.string('size'), // TODO: confirme o nome da Component Property no Figma
    color: figma.string('color'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ icon, size, color }) => (
      <QIconButton icon={icon} size={size} color={color} />
    ),
  }
);
