import React from 'react';

/**
 * QBadge
 * Badge / contador.
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QBadge.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QBadgeProps {
  color?: 'primary' | 'secondary' | 'danger';
  label?: string;
}

export function QBadge({ color = 'primary', label }: QBadgeProps) {
  return (
    <div className="q-qbadge">
      {/* TODO: implementar QBadge */}
    </div>
  );
}

export default QBadge;
