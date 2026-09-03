import figma from '@figma/code-connect';
import { QInput } from './QInput';

/**
 * Code Connect: liga o componente QInput (código) ao componente do Figma.
 * Node: 2036:3187  |  Arquivo: SIGH-WEB - DS
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QInput for selecionado.
 */
figma.connect(
  QInput,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2036-3187',
  {
    props: {
    label: figma.string('label'), // TODO: confirme o nome da Component Property no Figma
    placeholder: figma.string('placeholder'), // TODO: confirme o nome da Component Property no Figma
    error: figma.string('error'), // TODO: confirme o nome da Component Property no Figma
    disabled: figma.string('disabled'), // TODO: confirme o nome da Component Property no Figma
    },
    example: ({ label, placeholder, error, disabled }) => (
      <QInput label={label} placeholder={placeholder} error={error} disabled={disabled} />
    ),
  }
);
