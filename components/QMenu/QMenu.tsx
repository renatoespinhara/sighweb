import React from 'react';

/**
 * QMenu
 * Menu de contexto / dropdown.
 *
 * ATENÇÃO: o node 2061:30229 no Figma NÃO tem nenhuma Component Property
 * definida hoje (verificado via get_context_for_code_connect em 03/09/2026) —
 * é um frame simples, não um component set com variantes. A prop "open" que
 * existia aqui antes era fictícia e foi removida.
 *
 * Antes de conectar via Code Connect de verdade, alguém precisa:
 *   1. Adicionar Component Properties reais ao componente no Figma (ex.: Opened,
 *      Position, Dense), ou
 *   2. Definir manualmente aqui quais props este componente de código deve
 *      expor, e mapear cada uma para o elemento visual correspondente do menu.
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 */
export interface QMenuProps {
  children?: React.ReactNode;
}

export function QMenu({ children }: QMenuProps) {
  return (
    <div className="q-qmenu">
      {/* TODO: implementar QMenu */}
      {children}
    </div>
  );
}

export default QMenu;
