import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "AI API Status Page",
  links: [
    { link: 'https://openai.com', label: 'OpenAI' },
    { link: 'https://gemini.google.com', label: 'Gemini' },
  ],
  favicon: '/favicon.ico',
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'openai_api',
      name: 'OpenAI API',
      method: 'GET',
      target: 'https://api.openai.com/v1/models',
      tooltip: 'Check if OpenAI API is reachable',
      expectedCodes: [200],
      timeout: 8000,
      headers: {
        Authorization: 'Bearer YOUR_OPENAI_API_KEY',
      },
    },
    {
      id: 'gemini_api',
      name: 'Gemini API',
      method: 'GET',
      target: 'https://generativelanguage.googleapis.com/v1beta/models',
      tooltip: 'Check if Google Gemini API is reachable',
      expectedCodes: [200],
      timeout: 8000,
      headers: {
        Authorization: 'Bearer YOUR_GEMINI_API_KEY',
      },
    },
  ],
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
