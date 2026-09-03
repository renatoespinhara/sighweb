import React from 'react';

/**
 * QButton
 * Botão principal do design system (variantes Fill/Outline/Flat, tamanhos, estados).
 *
 * Props alinhadas 1:1 com as Component Properties reais do componente no Figma
 * (arquivo SIGH-WEB - DS, node 23:2493):
 *   Style -> style | Size -> size | State -> state | Color -> color
 *   Rounded -> rounded | Elevated -> elevated | Label -> label
 *   Start icon -> startIcon | End icon -> endIcon
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 */
export interface QButtonProps {
  style?: 'fill' | 'outline' | 'flat';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  state?: 'default' | 'hover' | 'disabled' | 'loading' | 'focus';
  color?: 'primary';
  rounded?: boolean;
  elevated?: boolean;
  label?: string;
  startIcon?: boolean;
  endIcon?: boolean;
}

export function QButton({
  style = 'fill',
  size = 'sm',
  state = 'default',
  color = 'primary',
  rounded = false,
  elevated = false,
  label = 'Label',
  startIcon = false,
  endIcon = false,
}: QButtonProps) {
  return (
    <button
      className={`q-button q-button--${style} q-button--${size} q-button--${color}`}
      data-state={state}
      data-rounded={rounded}
      data-elevated={elevated}
      disabled={state === 'disabled'}
    >
      {/* TODO: implementar ícones (startIcon/endIcon) e estado de loading reais */}
      {startIcon && <span className="q-button__icon q-button__icon--start" />}
      <span className="q-button__label">{label}</span>
      {endIcon && <span className="q-button__icon q-button__icon--end" />}
    </button>
  );
}

export default QButton;
