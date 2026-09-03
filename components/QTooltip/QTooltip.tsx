import React from 'react';

/**
 * QTooltip
 * Tooltip de apoio contextual.
 *
 * Props alinhadas 1:1 com as Component Properties reais do node 2183:7393
 * no arquivo SIGH-WEB - DS (levantadas via get_context_for_code_connect em 03/09/2026).
 * 
 *
 * STUB gerado automaticamente. Substitua pelo markup/estilo reais do design system.
 */
export interface QTooltipProps {
  rtl?: false;
  arrowPosition?: '↙Bottomleft' | '↓Bottom' | '↘Bottomright' | '↖Topleft' | '↑Top' | '↗Topright' | '↗Righttop' | '→Right' | '↘Rightbottom' | '↖Lefttop' | '←Left' | '↙Leftbottom';
  arrow?: boolean;
  label?: string;
}

export function QTooltip({ rtl = false, arrowPosition = '↙Bottomleft', arrow = false, label = '' }: QTooltipProps) {
  return (
    <div className="q-qtooltip">
      {/* TODO: implementar QTooltip */}
    </div>
  );
}

export default QTooltip;
