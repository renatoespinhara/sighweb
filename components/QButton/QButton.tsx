import React from 'react';

/**
 * QButton
 * Botão principal do design system (variantes Fill/Outline, tamanhos, cores, estados).
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QButton.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QButtonProps {
  variant?: 'fill' | 'outline' | 'text';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
  rounded?: boolean;
  disabled?: boolean;
}

export function QButton({ variant = 'fill', size = 'sm', color = 'primary', rounded = false, disabled = false }: QButtonProps) {
  return (
    <div className="q-qbutton">
      {/* TODO: implementar QButton */}
    </div>
  );
}

export default QButton;
