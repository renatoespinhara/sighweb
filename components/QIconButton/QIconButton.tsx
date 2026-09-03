import React from 'react';

/**
 * QIconButton
 * Botão apenas com ícone (variantes Fill/Outline/Flat, tamanhos, estados).
 *
 * Props alinhadas 1:1 com as Component Properties reais do node 23:1630
 * no arquivo SIGH-WEB - DS (levantadas via get_context_for_code_connect em 03/09/2026).
 * 
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 */
export interface QIconButtonProps {
  style?: 'fill' | 'outline' | 'flat';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  state?: 'default' | 'hover' | 'disable' | 'loading' | 'focus';
  color?: 'primary';
  round?: boolean;
  elevated?: boolean;
}

export function QIconButton({ style = 'fill', size = 'xs', state = 'default', color = 'primary', round = false, elevated = false }: QIconButtonProps) {
  return (
    <div className="q-qiconbutton">
      {/* TODO: implementar QIconButton */}
    </div>
  );
}

export default QIconButton;
