# sighweb — components/ (Code Connect ready)

Estrutura de código dos componentes React do design system **SIGH-WEB**, já
preparada para conexão com o Figma via **Code Connect**.

## Estrutura

Uma pasta por componente:

```
components/
  QButton/
    QButton.tsx         <- implementação real do componente (stub gerado, você preenche)
    QButton.figma.tsx    <- arquivo de Code Connect (liga ao node do Figma)
    index.ts             <- barrel export
  QInput/
    ...
  ...
```

16 componentes já escaneados no arquivo Figma **SIGH-WEB - DS**
(`fileKey: EXtprJ9elOOW24MPmQSnBU`) foram gerados com o node correto já
preenchido no `.figma.tsx`:

QButton, QIconButton, QButtonGroup, QBtnDropdown, QInput, QSelect, QChip,
QBadge, QToolbar, QTabs, QBreadcrumbs, QPagination, QTooltip, QItem, QMenu,
QUploader.

> Existem outros nodes na página "🔣┆Componentes" do Figma (ex.: `QMenu`,
> `@Section`, `@Slot`, sub-componentes internos) que não viraram pasta própria
> aqui por serem partes internas/privadas de outros componentes. Podemos gerar
> mais conforme for necessário.

## Passo a passo para colocar isso no repo

1. Copie a pasta `components/` para dentro do seu repositório `sighweb`
   (ex.: `src/components/`).
2. Instale a dependência de Code Connect:
   ```bash
   npm install --save-dev @figma/code-connect
   ```
3. Ajuste `figma.config.json` (incluso neste pacote) se o caminho dos
   componentes no seu repo for diferente de `src/components`.
4. Implemente de verdade cada `<Nome>.tsx` (hoje são stubs) com o
   markup/estilo real do design system.
5. Em cada `<Nome>.figma.tsx`, confira:
   - se o **node-id** aponta para o componente certo (já vem preenchido, mas
     vale conferir se o Figma não sofreu alguma reorganização);
   - se os nomes passados em `figma.string('...')` / `figma.boolean('...')`
     batem com as **Component Properties** reais definidas no Figma (hoje
     estão como TODO — os componentes no arquivo ainda não têm properties
     nomeadas, então isso vai precisar ser alinhado com quem mantém o Figma).
6. Autentique o CLI do Code Connect (uma vez):
   ```bash
   npx figma connect --token <seu-token-de-acesso-pessoal-do-figma>
   ```
7. Publique as conexões:
   ```bash
   npx figma connect publish
   ```
   Isso lê todos os `*.figma.tsx` do repo e envia o mapeamento para o Figma.
   A partir daí, ao selecionar o componente no Figma, o painel "Code" mostra
   o snippet React real.

## E a conversa com o Claude?

Depois que os arquivos estiverem publicados no GitHub (`sighweb`), me avise o
caminho final de cada componente no repo (ex.:
`src/components/QButton/QButton.tsx`). Com isso eu uso as ferramentas do
Figma (`add_code_connect_map` / `send_code_connect_mappings`) para revisar ou
recriar os vínculos diretamente pela API, sem precisar que você rode o CLI
manualmente — ambos os caminhos (CLI local ou API via Claude) escrevem o
mesmo tipo de mapeamento no Figma.

Não existe hoje um conector de GitHub disponível nesta conversa, então o
commit/push para o `sighweb` precisa ser feito por você (terminal, Claude
Code, ou GitHub Desktop) — mas todo o conteúdo já vem pronto aqui.
