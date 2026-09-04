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
  arrowPosition?: 'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | 'top' | 'topRight' | 'rightTop' | 'right' | 'rightBottom' | 'leftTop' | 'left' | 'leftBottom';
  arrow?: boolean;
  label?: string;
}

export function QTooltip({ rtl = false, arrowPosition = 'bottomLeft', arrow = false, label = '' }: QTooltipProps) {
  return (
    <div className="q-qtooltip">
      {/* TODO: implementar QTooltip */}
    </div>
  );
}

export default QTooltip;
