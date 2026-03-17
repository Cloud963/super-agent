# Super Agent - AIOX + Claude Subagents Unified Framework

> Framework integrado que combina o poder de orquestracao agil do AIOX Core (SynkraAI) com os 100+ subagentes especializados do Awesome Claude Code Subagents (VoltAgent).
>
> ## Arquitetura
>
> ```
> super-agent/
> ├── README.md
> ├── package.json
> ├── setup.sh                    # Script de instalacao automatizada
> ├── config/
> │   ├── agents-registry.json    # Registro unificado de todos os agentes
> │   └── squads.json             # Configuracao de squads personalizados
> ├── aiox-core/                  # Git submodule -> Cloud963/aiox-core
> ├── claude-subagents/           # Git submodule -> Cloud963/awesome-claude-code-subagents
> ├── integration/
> │   ├── orchestrator.js         # Orquestrador que conecta AIOX + Subagents
> │   ├── agent-mapper.js         # Mapeamento entre agentes AIOX e subagentes
> │   └── squad-builder.js        # Construtor de squads customizados
> ├── squads/                     # Squads pre-configurados
> │   ├── fullstack/
> │   ├── data-ai/
> │   ├── devops-cloud/
> │   ├── mobile/
> │   └── fintech/
> └── dashboard/                  # Interface Web (Next.js)
>     ├── package.json
>     ├── next.config.js
>     ├── src/
>     │   ├── app/
>     │   │   ├── layout.tsx
>     │   │   ├── page.tsx
>     │   │   └── api/
>     │   │       ├── agents/route.ts
>     │   │       └── squads/route.ts
>     │   ├── components/
>     │   │   ├── AgentCard.tsx
>     │   │   ├── SquadBuilder.tsx
>     │   │   ├── AgentGrid.tsx
>     │   │   └── Sidebar.tsx
>     │   └── lib/
>     │       ├── agents.ts
>     │       └── types.ts
>     └── public/
> ```
>
> ## Repositorios Fonte
>
> | Repo | Descricao | Link |
> |------|-----------|------|
> | AIOX Core | Framework de orquestracao agil com 12 agentes | [Cloud963/aiox-core](https://github.com/Cloud963/aiox-core) |
> | Claude Subagents | 100+ subagentes especializados | [Cloud963/awesome-claude-code-subagents](https://github.com/Cloud963/awesome-claude-code-subagents) |
> | Super Agent | Este repositorio - integracao unificada | [Cloud963/super-agent](https://github.com/Cloud963/super-agent) |
>
> ## Inicio Rapido
>
> ```bash
> # 1. Clonar com submodulos
> git clone --recursive https://github.com/Cloud963/super-agent.git
> cd super-agent
>
> # 2. Instalar dependencias
> npm install
>
> # 3. Iniciar o dashboard
> cd dashboard && npm install && npm run dev
>
> # 4. Acessar em http://localhost:3000
> ```
>
> ## Agentes Disponiveis
>
> ### AIOX Core (12 Agentes de Orquestracao Agil)
>
> | Agente | Papel | Fase |
> |--------|-------|------|
> | aiox-master | Orquestracao mestre | Meta |
> | aiox-orchestrator | Coordenacao de workflows | Meta |
> | analyst | Analise de negocios e PRD | Planejamento |
> | pm | Gerente de produto | Planejamento |
> | architect | Arquiteto de sistema | Planejamento |
> | ux-expert | Design UX | Planejamento |
> | sm | Scrum Master | Desenvolvimento |
> | dev | Desenvolvedor | Desenvolvimento |
> | qa | Qualidade e testes | Desenvolvimento |
> | po | Product Owner | Desenvolvimento |
> | data-engineer | Banco de dados | Desenvolvimento |
> | devops | CI/CD e infra | Desenvolvimento |
>
> ### Claude Subagents (100+ Especialistas Tecnicos)
>
> | Categoria | Qtd | Exemplos |
> |-----------|-----|----------|
> | Core Development | 10 | api-designer, fullstack-developer, frontend-developer |
> | Language Specialists | 28 | typescript-pro, python-pro, rust-engineer, react-specialist |
> | Infrastructure | 16 | terraform-engineer, kubernetes-specialist, cloud-architect |
> | Quality & Security | 14 | penetration-tester, security-auditor, performance-engineer |
> | Data & AI | 12 | ml-engineer, data-scientist, llm-architect, mlops-engineer |
> | Developer Experience | 13 | dx-optimizer, refactoring-specialist, mcp-developer |
> | Specialized Domains | 12 | fintech-engineer, game-developer, blockchain-developer |
> | Business & Product | 11 | product-manager, scrum-master, technical-writer |
> | Meta & Orchestration | 12 | workflow-orchestrator, multi-agent-coordinator |
> | Research & Analysis | 7 | research-analyst, competitive-analyst, market-researcher |
>
> ## Squads Pre-Configurados
>
> ### Squad FullStack
> AIOX: analyst + architect + sm + dev + qa
> Claude: typescript-pro + react-specialist + nextjs-developer + backend-developer + qa-expert
>
> ### Squad Data & AI
> AIOX: analyst + architect + data-engineer + dev
> Claude: ml-engineer + data-scientist + mlops-engineer + postgres-pro + python-pro
>
> ### Squad DevOps Cloud
> AIOX: architect + devops + qa
> Claude: terraform-engineer + kubernetes-specialist + cloud-architect + sre-engineer + docker-expert
>
> ### Squad Mobile
> AIOX: ux-expert + architect + dev + qa
> Claude: flutter-expert + swift-expert + mobile-developer + react-specialist
>
> ### Squad FinTech
> AIOX: analyst + architect + dev + qa
> Claude: fintech-engineer + payment-integration + security-auditor + compliance-auditor
>
> ## Dashboard Web
>
> O dashboard oferece:
> - Visualizacao de todos os agentes (AIOX + Claude) em grid unificado
> - - Construtor visual de Squads customizados
>   - - Ativacao e monitoramento de agentes
>     - - Logs de execucao em tempo real
>       - - Metricas de produtividade
>        
>         - ## Como Funciona a Integracao
>        
>         - 1. **Planejamento (AIOX)**: analyst cria PRD, architect define arquitetura, pm prioriza
>           2. 2. **Historias (AIOX)**: sm transforma planos em historias hiperdetalhadas
>              3. 3. **Execucao (Claude Subagents)**: Especialistas tecnicos implementam com profundidade
>                 4. 4. **Qualidade (Ambos)**: qa do AIOX + security-auditor, performance-engineer do Claude
>                    5. 5. **Deploy (Ambos)**: devops do AIOX + terraform-engineer, kubernetes-specialist do Claude
>                      
>                       6. ## Licenca
>                      
>                       7. MIT License - Veja [LICENSE](LICENSE)
