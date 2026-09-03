import figma from '@figma/code-connect';
import { QBreadcrumbs } from './QBreadcrumbs';

/**
 * Code Connect: liga o componente QBreadcrumbs (código) ao componente do Figma.
 * Node: 2001:1529  |  Arquivo: SIGH-WEB - DS
 *
 * NAO mapeados ainda (INSTANCE_SWAP/SLOT, requerem figma.instance/figma.children):
 *   - separatorIcon (↳ Separator icon#2790:3): INSTANCE_SWAP — ícone separador
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QBreadcrumbs for selecionado.
 */
figma.connect(
  QBreadcrumbs,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-1529',
  {
    props: {
    linked: figma.enum('Linked', { Off: false, On: true }),
    gutter: figma.enum('Gutter', { None: 'none', 4: '4', 8: '8', 16: '16', 24: '24', 48: '48' }),
    label: figma.string('Label text#2790:4'),
    labelVisible: figma.boolean('Label#2790:5'),
    icon: figma.boolean('Icon#2790:6'),
    separatorVisible: figma.boolean('Separator#2809:0'),
    },
    example: ({ linked, gutter, label, labelVisible, icon, separatorVisible }) => (
      <QBreadcrumbs linked={linked} gutter={gutter} label={label} labelVisible={labelVisible} icon={icon} separatorVisible={separatorVisible} />
    ),
  }
);
