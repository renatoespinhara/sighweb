import figma from '@figma/code-connect';
import { QButton } from './QButton';

/**
 * Code Connect: liga o componente QButton (código) ao componente do Figma.
 * Node: 23:2493 (Component Set)  |  Arquivo: SIGH-WEB - DS
 *
 * Mapeamento 1:1 com as Component Properties reais (levantadas via
 * get_context_for_code_connect em 03/09/2026):
 *   - Style, Size, State, Color, Rounded  -> propriedades de variante
 *   - Elevated#2129:9, Start icon#2230:2, End icon#2230:363 -> boolean
 *   - Label#2138:0 -> texto
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar SOMENTE estas props (sem duplicar nome bruto + nome limpo).
 */
figma.connect(
  QButton,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=23-2493',
  {
    props: {
      style: figma.enum('Style', {
        Fill: 'fill',
        Outline: 'outline',
        Flat: 'flat',
      }),
      size: figma.enum('Size', {
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
      }),
      state: figma.enum('State', {
        Default: 'default',
        Hover: 'hover',
        Disable: 'disabled',
        Loading: 'loading',
        Focus: 'focus',
      }),
      color: figma.enum('Color', {
        Primary: 'primary',
      }),
      rounded: figma.enum('Rounded', {
        On: true,
        Off: false,
      }),
      elevated: figma.boolean('Elevated#2129:9'),
      label: figma.string('Label#2138:0'),
      startIcon: figma.boolean('Start icon#2230:2'),
      endIcon: figma.boolean('End icon#2230:363'),
    },
    example: ({ style, size, state, color, rounded, elevated, label, startIcon, endIcon }) => (
      <QButton
        style={style}
        size={size}
        state={state}
        color={color}
        rounded={rounded}
        elevated={elevated}
        label={label}
        startIcon={startIcon}
        endIcon={endIcon}
      />
    ),
  }
);
