# Project Overview: n8n Workflow Automation

This repository appears to host a web-based application for `n8n`, an open-source workflow automation platform. It provides a user interface for building, managing, and executing automated workflows, integrating various services and tools.

**Key Technologies/Frameworks:**
- **Frontend:** Likely Vue.js (inferred from `_plugin-vue_export-helper.js`), JavaScript, CSS.
- **Backend/Data:** SQLite (from `.n8n/database.sqlite`), potentially Firebase for logging/specific features (from `firebase-debug.log`).
- **Runtime:** Node.js (common for n8n and JavaScript ecosystem).

**Main Features:**
- **Workflow Management:** Execution monitoring (`ExecutionsView`), node creation (`NodeCreation`), and details viewing (`NodeDetailsView`).
- **Data Management:** Data tables (`DataTableView`, `AddDataTableModal`).
- **User & Project Management:** Credentials handling (`CredentialsView`), project roles (`ProjectRolesView`), project sharing (`ProjectSharing`), and user authentication (`AuthView`, `ForgotMyPasswordView`).
- **Communication & Collaboration:** Chat agents (`ChatAgentsView`, `ChatSidebar`).
- **Insights & Monitoring:** Performance insights and dashboards (`InsightsDashboard`, `InsightsSummary`).

**Architectural Patterns:**
- **Component-Based Architecture:** Evident from numerous `View` and `Modal` components (e.g., `ChatView`, `AddDataTableModal`).
- **State Management:** Suggested by `store` files (e.g., `mcp.store`, `dataTable.store`, `executions.store`), likely following a pattern like Vuex or Pinia.
- **Modular Structure:** Distinct directories and naming conventions for different functionalities.
