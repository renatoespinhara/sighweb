import React from 'react';

/**
 * QChip
 * Chip / tag.
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QChip.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QChipProps {
  label?: string;
  removable?: boolean;
}

export function QChip({ label, removable = false }: QChipProps) {
  return (
    <div className="q-qchip">
      {/* TODO: implementar QChip */}
    </div>
  );
}

export default QChip;
