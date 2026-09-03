import React from 'react';

/**
 * QPagination
 * Paginação de listas/tabelas.
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 * Depois de implementar, o arquivo QPagination.figma.tsx (nesta mesma pasta) já está
 * pronto para conectar este componente ao node correspondente no Figma via Code Connect.
 */
export interface QPaginationProps {
  page?: number;
  totalPages?: number;
}

export function QPagination({ page = 1, totalPages = 1 }: QPaginationProps) {
  return (
    <div className="q-qpagination">
      {/* TODO: implementar QPagination */}
    </div>
  );
}

export default QPagination;
