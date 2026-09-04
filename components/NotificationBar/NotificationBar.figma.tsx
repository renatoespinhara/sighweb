import figma from '@figma/code-connect';
import { NotificationBar } from './NotificationBar';

/**
 * Code Connect: liga o componente NotificationBar (código) ao componente do Figma.
 * Node: 2215:7403  |  Arquivo: SIGH-WEB - DS
 *
 *
 * Depois de rodar `npx figma connect publish`, o painel "Code" do Figma
 * passa a mostrar este snippet quando o design NotificationBar for selecionado.
 */
figma.connect(
  NotificationBar,
  'https://www.figma.com/design/EXtprJ9elOOW24MPmQSnBU/SIGH-WEB---DS?node-id=2215-7403',
  {
    props: {
    badge: figma.boolean('badge#2215:7'),
    badgeText: figma.string('Texto badge#2215:8'),
    avatar: figma.boolean('Avatar#2215:9'),
    notificationText: figma.string('Texto notificação#2215:10'),
    secondaryButton: figma.boolean('Btn secundario#2215:11'),
    primaryButton: figma.boolean('Btn primario#2215:12'),
    icon: figma.boolean('Icone#2215:13'),
    simpleText: figma.string('Texto simples#2215:14'),
    notification: figma.enum('notificacao', { 'Padrão': 'standard', 'snackbar': 'snackbar', 'snackbar vertical': 'snackbarVertical' }),
    status: figma.enum('status', { success: 'success', info: 'info', default: 'default', warning: 'warning', danger: 'danger', clean: 'clean' }),
    },
    example: ({ badge, badgeText, avatar, notificationText, secondaryButton, primaryButton, icon, simpleText, notification, status }) => (
      <NotificationBar badge={badge} badgeText={badgeText} avatar={avatar} notificationText={notificationText} secondaryButton={secondaryButton} primaryButton={primaryButton} icon={icon} simpleText={simpleText} notification={notification} status={status} />
    ),
  }
);
