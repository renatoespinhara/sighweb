import figma from '@figma/code-connect';
import { QDate } from './QDate';

/**
 * Code Connect: liga o componente QDate (código) ao componente do Figma.
 * Node: 2164:8046  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design QDate for selecionado.
 */
figma.connect(
  QDate,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2164-8046',
  {
    props: {
    headline: figma.string('Headline#3139:0'),
    headlineYear: figma.string('Headline year#3139:4'),
    header: figma.boolean('Header#3147:8'),
    type: figma.enum('Type', { Day: 'day', Month: 'month', Year: 'year' }),
    orientation: figma.enum('Orientation', { Horizontal: 'horizontal', Vertical: 'vertical' }),
    },
    example: ({ headline, headlineYear, header, type, orientation }) => (
      <QDate headline={headline} headlineYear={headlineYear} header={header} type={type} orientation={orientation} />
    ),
  }
);
