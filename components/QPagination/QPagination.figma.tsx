import figma from '@figma/code-connect';
import { QPagination } from './QPagination';

/**
 * Code Connect: liga o componente QPagination (código) ao componente do Figma.
 * Node: 2001:1403  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QPagination for selecionado.
 */
figma.connect(
  QPagination,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2001-1403',
  {
    props: {
    gutter: figma.enum('Gutter', { 2: '2', 8: '8', 16: '16', 20: '20' }),
    type: figma.enum('Type', { Button: 'button', Input: 'input' }),
    withBoundary: figma.enum('With boundary', { Off: false, On: true }),
    current: figma.string('Current#3215:0'),
    pages: figma.string('Pages#3217:0'),
    startEnd: figma.boolean('Start & End#3220:7'),
    },
    example: ({ gutter, type, withBoundary, current, pages, startEnd }) => (
      <QPagination gutter={gutter} type={type} withBoundary={withBoundary} current={current} pages={pages} startEnd={startEnd} />
    ),
  }
);
