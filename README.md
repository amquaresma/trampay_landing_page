# 🚀 Trampay - Landing Page

Uma página de desembarque moderna e responsiva para o **Trampay**, aplicativo de gestão financeira desenvolvido especialmente para autônomos e microempreendedores do mercado brasileiro.

## ✨ Funcionalidades Principais

### 🎯 Seções da Landing Page
- **Header**: Navegação fixa e responsiva com smooth scroll.
- **Hero Section**: Carrossel interativo com telas do app (Dashboard, Agenda, Fluxo de Caixa, Clientes, Serviços, Precificação)
- **Introdução do App**: Visão geral da solução Trampay
- **Carrossel de Funcionalidades**: 12 funcionalidades principais com ícones e descrições
- **Pesquisa de Mercado**: 4 cards validando demanda do produto
- **Tabela de Preços**: Comparação entre planos Gratuito e Freemium
- **Avaliações**: Carrossel com depoimentos de usuários
- **Quem Somos**: Cards de Missão, Visão e Valores
- **Nossa História**: Contexto sobre o surgimento do Trampay
- **Diferenciais**: Badges destacando pontos fortes
- **Formulário de Contato**: Envio de mensagens com Nodemailer
- **FAQ**: Seção de perguntas frequentes com acordeão
- **Footer**: Links de navegação e contato

### 🎨 Design & Animações
- ✅ Animações CSS avançadas (fade-in, slide-in, float)
- ✅ Design responsivo para mobile, tablet e desktop
- ✅ Efeitos hover elegantes em botões e cards
- ✅ Gradientes sutis em backgrounds brancos
- ✅ Carrosseis interativos com navegação intuitiva

## 🛠️ Stack Tecnológico

### Frontend
- **React 18** com TypeScript
- **Vite** como build tool
- **Tailwind CSS** para styling
- **Shadcn/ui** componentes acessíveis
- **TanStack Query (React Query)** para state management
- **Wouter** para roteamento leve
- **Lucide React** e **React Icons** para ícones

### Backend
- **Node.js** com Express
- **TypeScript** para type safety
- **Nodemailer** para envio de emails (Gmail SMTP)
- **Zod** para validação de schemas
- **Drizzle ORM** (opcional com PostgreSQL)

## 🚀 Começando

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd trampay

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Copie .env.example para .env e preencha com seus valores
cp .env.example .env
```

### Variáveis de Ambiente

Para que o formulário de contato funcione em produção:

```env
# Gmail SMTP para envio de emails
EMAIL_USER=seu-email@gmail.com
EMAIL_PASS=sua-senha-de-app-do-gmail

# Banco de dados (opcional)
DATABASE_URL=sua-url-postgresql

# Node environment
NODE_ENV=development
```

**Nota sobre EMAIL_PASS**: Para usar Gmail com Nodemailer, gere uma "senha de app" em vez de usar sua senha regular:
1. Acesse [Google Account Security](https://myaccount.google.com/security)
2. Ative 2-Step Verification
3. Gere uma "App Password" para Mail
4. Use essa senha na variável `EMAIL_PASS`

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# O aplicativo rodará em http://localhost:5000
```

### Build para Produção

```bash
# Build de ambos frontend e backend
npm run build

# Inicie o servidor em produção
npm start
```

## 📁 Estrutura do Projeto

```
trampay/
├── client/                    # Frontend React
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx      # Página principal com todas as seções
│   │   ├── components/       # Componentes reutilizáveis
│   │   ├── lib/
│   │   │   └── queryClient.ts # Configuração do React Query
│   │   ├── hooks/
│   │   ├── index.css         # Estilos globais e design tokens
│   │   └── App.tsx           # Entrada da aplicação
│   └── index.html            # HTML principal
│
├── server/                    # Backend Express
│   ├── index-dev.ts          # Entrada desenvolvimento (com Vite)
│   ├── index-prod.ts         # Entrada produção
│   ├── routes.ts             # Rotas da API
│   ├── storage.ts            # Interface de storage
│   └── vite.ts               # Middleware do Vite
│
├── shared/                    # Código compartilhado
│   └── schema.ts             # Schemas Zod e tipos
│
├── tailwind.config.ts        # Configuração Tailwind
├── tsconfig.json             # Configuração TypeScript
├── vite.config.ts            # Configuração Vite
└── package.json              # Dependências do projeto
```

## 🎨 Cores da Marca

A paleta de cores segue a identidade visual do Trampay:

| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Escuro | #2C5F7C | Headers, CTAs |
| Ouro/Amarelo | #FDB913 | Destaque, hover states |
| Azul Claro | #E8F4F8 | Backgrounds de seções |
| Branco | #FFFFFF | Backgrounds principais |

## 📱 Imagens do App no Carrossel

O carrossel do hero section suporta 6 telas do app. Para adicionar suas imagens:

1. Coloque as imagens na pasta `attached_assets/`:
   - `app-screen-dashboard.png`
   - `app-screen-agenda.png`
   - `app-screen-fluxo-caixa.png`
   - `app-screen-clientes.png`
   - `app-screen-servicos.png`
   - `app-screen-precificacao.png`

2. Importe no topo de `client/src/pages/Home.tsx`:
```typescript
import dashboardImage from "@assets/app-screen-dashboard.png";
import agendaImage from "@assets/app-screen-agenda.png";
// ... e assim por diante
```

3. Substitua o placeholder no código:
```typescript
// De:
<div className="w-full h-32 sm:h-40 bg-gradient-to-br from-trampay-blue-light...">
  <p className="text-[10px] text-gray-400">Imagem: {screen.imagePlaceholder}</p>
</div>

// Para:
<img 
  src={dashboardImage} 
  alt={screen.alt} 
  className="w-full h-auto rounded-xl" 
/>
```

## 📧 Formulário de Contato

O formulário envia mensagens para **trampayapp@gmail.com**. Comportamento:

- **Desenvolvimento**: Mensagens são logadas no console
- **Produção**: Mensagens enviadas por email via Nodemailer (requer EMAIL_USER e EMAIL_PASS)

## 🔗 Links Importantes

- **Download do App**: [https://linktr.ee/AplicativoTrampay](https://linktr.ee/AplicativoTrampay)
- **Instagram**: [@trampayapp](https://www.instagram.com/trampayapp)
- **Email**: trampayapp@gmail.com

## 🎯 API Endpoints

### POST `/api/contact`

Enviar mensagem via formulário de contato.

**Request Body:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "message": "Gostaria de saber mais sobre o Trampay..."
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

**Response Error (400):**
```json
{
  "error": "Descrição do erro"
}
```

## 🌐 Deploy

### Deploy no Vercel (Recomendado)

O projeto está totalmente configurado para Vercel com `vercel.json`.

#### Passo a Passo:

1. **Crie uma conta no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Registre-se com GitHub, GitLab ou Bitbucket

2. **Faça push do seu projeto para um repositório Git**
   ```bash
   git init
   git add .
   git commit -m "Trampay landing page"
   git remote add origin https://github.com/seu-usuario/trampay.git
   git branch -M main
   git push -u origin main
   ```

3. **Conecte o repositório ao Vercel**
   - No Vercel dashboard, clique em "New Project"
   - Selecione seu repositório Git
   - Clique em "Import"

4. **Configure as variáveis de ambiente**
   - Na aba "Environment Variables", adicione:
     ```
     EMAIL_USER=seu-email@gmail.com
     EMAIL_PASS=sua-senha-de-app-do-gmail
     NODE_ENV=production
     ```
   - Clique em "Deploy"

5. **Pronto! 🎉**
   - Seu site estará em `https://seu-projeto.vercel.app`
   - Cada push para `main` gera um novo deploy automático

#### Configurar Domínio Customizado

No Vercel dashboard do seu projeto:
1. Vá para "Settings" → "Domains"
2. Adicione seu domínio personalizado
3. Configure o DNS conforme instruções fornecidas

### Deploy no Replit

O projeto também está configurado para rodar no Replit:

1. Clique em **"Publish"** no topo do seu Replit
2. Escolha o tipo de deployment desejado
3. Replit irá gerar uma URL `.replit.app`

Para domínio customizado, acesse as configurações do Replit e siga as instruções.

### Deploy em Outro Servidor

Para deployar em outro servidor (AWS, DigitalOcean, etc.):

1. Gere as variáveis de ambiente necessárias
2. Execute `npm run build`
3. Faça upload do diretório `dist/` e instale dependências no servidor
4. Execute `npm start`

## 🧪 Testes

O projeto inclui 20 testes automatizados abrangendo:
- Navegação e scroll
- Carrosseis
- Acordeão de FAQ
- Validação e envio de formulário

Para verificar status:
```bash
npm test
```

## 📝 Licença

Desenvolvido para o Trampay. Todos os direitos reservados.

## 👥 Contato

- **Email**: trampayapp@gmail.com
- **Instagram**: [@trampayapp](https://www.instagram.com/trampayapp)
- **Site**: [trampay.replit.dev](https://trampay.replit.dev)

---

**Desenvolvido com ❤️ para autonomos e microempreendedores brasileiros.**
