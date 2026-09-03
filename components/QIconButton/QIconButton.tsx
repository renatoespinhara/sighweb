import React from 'react';

/**
 * QIconButton
 * Botão apenas com ícone.
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QIconButton.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QIconButtonProps {
  icon?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
}

export function QIconButton({ icon, size = 'sm', color = 'primary' }: QIconButtonProps) {
  return (
    <div className="q-qiconbutton">
      {/* TODO: implementar QIconButton */}
    </div>
  );
}

export default QIconButton;
