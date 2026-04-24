# Master Architecture Map - ScenarioSim 🛡️✨

This is the high-level "Source of Truth" for the entire platform's architecture. 

## 🖼️ High-Fidelity Visual Map

![System Architecture Visual](./master_map_visual.png)

## 🗺️ Detailed Flow Chart

![Flow Chart Diagram](./flow_chart_visual.png)

> **ℹ️ Mermaid diagrams:** I've installed the **Markdown Preview Mermaid Support** VS Code extension for you. Press `Ctrl+Shift+V` to reload the preview and the diagrams below will now render with colors.

## 🟢 Live Mermaid Chart (Editable)

```mermaid
graph TD
    Candidate((Candidate))
    HR((HR Manager))
    Admin((System Admin))

    subgraph FE["Frontend Layer - EJS"]
        DojoView[Dojo Engine]
        Dashboards[Dashboards]
        Moderation[HR Moderation]
    end

    subgraph BE["Backend Orchestration"]
        AuthCtrl[Auth Controller]
        JobCtrl[Job Controller]
        AsmtCtrl[Assessment Controller]
    end

    subgraph SVC["Logic + AI Services"]
        AISvc[AI Judge & Parser]
        GenSvc[Gen Orchestrator]
        BankSvc[Question Bank]
    end

    subgraph DB["Data Persistence"]
        Users[(Users)]
        Jobs[(Jobs)]
        Asmts[(Assessments)]
        Sessions[(Chat Sessions)]
    end

    Candidate --> Dashboards
    Candidate --> DojoView
    HR --> Dashboards
    HR --> Moderation

    DojoView --> AsmtCtrl
    Dashboards --> AuthCtrl
    Dashboards --> JobCtrl
    Moderation --> JobCtrl

    JobCtrl --> GenSvc
    GenSvc --> AISvc
    GenSvc --> BankSvc
    AsmtCtrl --> AISvc

    AuthCtrl --> Users
    JobCtrl --> Jobs
    JobCtrl --> Asmts
    AsmtCtrl --> Asmts
    AsmtCtrl --> Sessions

    style Candidate fill:#f9c3f9,stroke:#a64ca6,stroke-width:2px
    style HR fill:#f9c3f9,stroke:#a64ca6,stroke-width:2px
    style Admin fill:#f9c3f9,stroke:#a64ca6,stroke-width:2px
    style AISvc fill:#99ccff,stroke:#006699,stroke-width:2px
    style GenSvc fill:#99ccff,stroke:#006699,stroke-width:2px
    style BankSvc fill:#99ccff,stroke:#006699,stroke-width:2px
    style Users fill:#99ff99,stroke:#009933,stroke-width:2px
    style Jobs fill:#99ff99,stroke:#009933,stroke-width:2px
    style Asmts fill:#99ff99,stroke:#009933,stroke-width:2px
    style Sessions fill:#99ff99,stroke:#009933,stroke-width:2px
```

> [!TIP]
> **Detailed Data Payload Specs**
> For a granular look at the JSON structures sent between these components, see the **[Data Payload Recipes](file:///home/alisha.shaik/Desktop/projects/jobs/JodsScreening/documentation/system_map/DATA_PAYLOAD_RECIPES.md)**.

## 🛡️ Service Responsibility Layer

### 1. The Gateway (Controllers)
- **Role**: Map HTTP requests to business logic.
- **Key Task**: Session validation and payload sanitization.

### 2. The Engine (Services)
- **Role**: Heavy lifting and external integrations.
- **`jdParserService`**: The portal to Groq/Llama.
- **`questionBankService`**: The curator of technical knowledge.

### 3. The Evidence (Data)
- **Role**: Immutable storage of the candidate's performance.
- **Relational Integrity**: `Application` acts as the pivot table connecting the `User`, `Job`, and `Assessment`.

---
🛡️ *Master Map version 1.0. Generated via Master Architect protocol.* 🛡️
