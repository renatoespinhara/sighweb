import figma from '@figma/code-connect';
import { QAvatar } from './QAvatar';

/**
 * Code Connect: liga o componente QAvatar (código) ao componente do Figma.
 * Node: 2147:6291  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QAvatar for selecionado.
 */
figma.connect(
  QAvatar,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2147-6291',
  {
    props: {
    label: figma.string('Label#2430:0'),
    size: figma.enum('Size', { 18: '18', 24: '24', 32: '32', 38: '38', 46: '46', Free: 'free' }),
    type: figma.enum('Type', { Image: 'image', Icon: 'icon', Text: 'text' }),
    rounded: figma.enum('Rounded', { Full: 'full', Default: 'default', None: 'none' }),
    },
    example: ({ label, size, type, rounded }) => (
      <QAvatar label={label} size={size} type={type} rounded={rounded} />
    ),
  }
);
