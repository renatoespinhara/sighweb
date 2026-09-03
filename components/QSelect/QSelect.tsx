import React from 'react';

/**
 * QSelect
 * Campo de seleção (dropdown/select).
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QSelect.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QSelectProps {
  label?: string;
  multiple?: boolean;
  disabled?: boolean;
}

export function QSelect({ label, multiple = false, disabled = false }: QSelectProps) {
  return (
    <div className="q-qselect">
      {/* TODO: implementar QSelect */}
    </div>
  );
}

export default QSelect;
