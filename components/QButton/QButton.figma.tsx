import figma from '@figma/code-connect';
import { QButton } from './QButton';

/**
 * Code Connect: liga o componente QButton (código) ao componente do Figma.
 * Node: 23:2493  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QButton for selecionado.
 */
figma.connect(
  QButton,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=23-2493',
  {
    props: {
    variant: figma.string('variant'), // TODO: confirme o nome da Component Property no Figma
    size: figma.string('size'), // TODO: confirme o nome da Component Property no Figma
    color: figma.string('color'), // TODO: confirme o nome da Component Property no Figma
    rounded: figma.string('rounded'), // TODO: confirme o nome da Component Property no Figma
    disabled: figma.string('disabled'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ variant, size, color, rounded, disabled }) => (
      <QButton variant={variant} size={size} color={color} rounded={rounded} disabled={disabled} />
    ),
  }
);
