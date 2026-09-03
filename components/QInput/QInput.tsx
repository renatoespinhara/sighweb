import React from 'react';

/**
 * QInput
 * Campo de texto (input) do design system.
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QInput.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QInputProps {
  label?: string;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
}

export function QInput({ label, placeholder, error = false, disabled = false }: QInputProps) {
  return (
    <div className="q-qinput">
      {/* TODO: implementar QInput */}
    </div>
  );
}

export default QInput;
