import figma from '@figma/code-connect';
import { QBtnDropdown } from './QBtnDropdown';

/**
 * Code Connect: liga o componente QBtnDropdown (código) ao componente do Figma.
 * Node: 2002:6215  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT, requerem figma.instance/figma.children):
 *   - slot (↳ Slot#2896:39): INSTANCE_SWAP — mapear com figma.instance() apontando pro componente correto do slot
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBtnDropdown for selecionado.
 */
figma.connect(
  QBtnDropdown,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2002-6215',
  {
    props: {
    split: figma.enum('Split', { Off: false, On: true }),
    style: figma.enum('Style', { Fill: 'fill', Outlined: 'outlined', Flat: 'flat' }),
    size: figma.enum('Size', { xs: 'xs', sm: 'sm', md: 'md' }),
    opened: figma.enum('Opened', { Off: false, On: true }),
    state: figma.enum('State', { Default: 'default', Hover: 'hover', Disable: 'disable' }),
    color: figma.enum('Color', { Primary: 'primary' }),
    rounded: figma.enum('Rounded', { Off: false, On: true }),
    elevated: figma.boolean('Elevated#2896:40'),
    label: figma.string('Label#2896:42'),
    icon: figma.boolean('Icon#2896:46'),
    },
    example: ({ split, style, size, opened, state, color, rounded, elevated, label, icon }) => (
      <QBtnDropdown split={split} style={style} size={size} opened={opened} state={state} color={color} rounded={rounded} elevated={elevated} label={label} icon={icon} />
    ),
  }
);
