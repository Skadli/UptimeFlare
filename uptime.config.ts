import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  // Title for your status page
  title: "meAI监控状态服务",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://www.mechat.top', label: 'meAI' },

    { link: 'mailto:skad_li@163.com', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    '🌐 meAI': ['home', 'ai', 'meAPI'],
    '🔐 Private': ['wz'],
    // 'AI':['Openai','Claude','Gemini','Grok'],
  },
  // [OPTIONAL] Set the path to your favicon, default to '/favicon.ico' if not specified
  favicon: '/favicon.ico',
  // [OPTIONAL] Maintenance related settings
  maintenances: {
    // [OPTIONAL] The color of upcoming maintenance alerts, default to 'gray'
    // Active alerts will always use the color specified in the MaintenanceConfig
    upcomingColor: 'gray',
  },
}

const workerConfig: WorkerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'home',
      // `name` is used at status page and callback message
      name: 'meAI主页',
      // `method` should be a valid HTTP Method
      method: 'get',
      // `target` is a valid URL
      target: 'https://mechat.top/index.html',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'meAI主页',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://www.mechat.top',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      // hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      // expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
      // [OPTIONAL] headers to be sent
      // headers: {
      //   'User-Agent': 'Uptimeflare',
      //   Authorization: 'Bearer YOUR_TOKEN_HERE',
      // },
      // [OPTIONAL] body to be sent
      body: 'Hello, meAI!',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
      responseKeyword: 'success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
      responseForbiddenKeyword: 'bad gateway',
      // [OPTIONAL] if specified, will call the check proxy to check the monitor, mainly for geo-specific checks
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Check-proxy-setup before setting this value
      // currently supports `worker://` and `http(s)://` proxies
      //checkProxy: 'https://xxx.example.com OR worker://weur',
      // [OPTIONAL] if true, the check will fallback to local if the specified proxy is down
      checkProxyFallback: true,
    },
    // Example TCP Monitor
    {
      id: 'ai',
      name: '车队',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'get',
      // `target` should be `host:port` for tcp monitors
      target: 'https://ai.mechat.top',
      tooltip: '车队服务',
      statusPageLink: 'https://ai.mechat.top',
      timeout: 5000,
    },
    {
      id: 'meAPI',
      name: 'meAPI',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'get',
      // `target` should be `host:port` for tcp monitors
      target: 'https://api.mechat.top/api/site/home',
      tooltip: 'api服务',
      statusPageLink: 'https://api.mechat.top',
      timeout: 5000,
    },
    {
      id: 'wz',
      name: 'wz服务',
      // `method` should be `TCP_PING` for tcp monitors
      method: 'get',
      // `target` should be `host:port` for tcp monitors
      target: 'https://wz.690990.xyz',
      tooltip: 'wz服务',
      statusPageLink: 'https://wz.690990.xyz',
      timeout: 5000,
    },
    // {
    //   id: 'Openai',
    //   name: 'openai服务',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'get',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://status.openai.com/proxy/status.openai.com',
    //   tooltip: 'openai服务',
    //   statusPageLink: 'https://ai.mechat.top',
    //   timeout: 5000,
    // },
    // {
    //   id: 'Claude',
    //   name: 'claude服务',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'get',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://status.claude.com/api/v2/status.json',
    //   tooltip: 'claude服务',
    //   statusPageLink: 'https://ai.mechat.top',
    //   timeout: 5000,
    // },
    // {
    //   id: 'Gemini',
    //   name: 'gemini服务',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'get',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://aistudio.google.com/prompts/new_chat',
    //   tooltip: 'gemini服务',
    //   statusPageLink: 'https://ai.mechat.top',
    //   timeout: 5000,
    // },
    // {
    //   id: 'Grok',
    //   name: 'grok服务',
    //   // `method` should be `TCP_PING` for tcp monitors
    //   method: 'get',
    //   // `target` should be `host:port` for tcp monitors
    //   target: 'https://status.x.ai/grok-com/INC7977039a.txt?_rsc=jrxw1',
    //   tooltip: 'grok服务',
    //   statusPageLink: 'https://ai.mechat.top',
    //   timeout: 5000,
    // },
  ],
  // [Optional] Notification settings
  // notification: {
  //   // [Optional] Notification webhook settings, if not specified, no notification will be sent
  //   // More info at Wiki: https://github.com/lyc8503/UptimeFlare/wiki/Setup-notification
  //   webhook: {
  //     // [Required] webhook URL (example: Telegram Bot API)
  //     url: 'https://api.telegram.org/bot123456:ABCDEF/sendMessage',
  //     // [Optional] HTTP method, default to 'GET' for payloadType=param, 'POST' otherwise
  //     method: 'POST',
  //     // [Optional] headers to be sent
  //     headers: {
  //       foo: 'bar',
  //     },
  //     // [Required] Specify how to encode the payload
  //     // Should be one of 'param', 'json' or 'x-www-form-urlencoded'
  //     // 'param': append url-encoded payload to URL search parameters
  //     // 'json': POST json payload as body, set content-type header to 'application/json'
  //     // 'x-www-form-urlencoded': POST url-encoded payload as body, set content-type header to 'x-www-form-urlencoded'
  //     payloadType: 'x-www-form-urlencoded',
  //     // [Required] payload to be sent
  //     // $MSG will be replaced with the human-readable notification message
  //     payload: {
  //       chat_id: 12345678,
  //       text: '$MSG',
  //     },
  //     // [Optional] timeout calling this webhook, in millisecond, default to 5000
  //     timeout: 10000,
  //   },
  //   // [Optional] timezone used in notification messages, default to "Etc/GMT"
  //   timeZone: 'Asia/Shanghai',
  //   // [Optional] grace period in minutes before sending a notification
  //   // notification will be sent only if the monitor is down for N continuous checks after the initial failure
  //   // if not specified, notification will be sent immediately
  //   gracePeriod: 5,
  //   // [Optional] disable notification for monitors with specified ids
  //   skipNotificationIds: ['foo_monitor', 'bar_monitor'],
  // },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any TypeScript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any TypeScript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
// const maintenances: MaintenanceConfig[] = []
const maintenances: MaintenanceConfig[] = [
  // {
  //   // [Optional] Monitor IDs to be affected by this maintenance
  //   monitors: ['foo_monitor', 'bar_monitor'],
  //   // [Optional] default to "Scheduled Maintenance" if not specified
  //   title: 'Test Maintenance',
  //   // Description of the maintenance, will be shown at status page
  //   body: 'This is a test maintenance, server software upgrade',
  //   // Start time of the maintenance, in UNIX timestamp or ISO 8601 format
  //   start: '2025-04-27T00:00:00+08:00',
  //   // [Optional] end time of the maintenance, in UNIX timestamp or ISO 8601 format
  //   // if not specified, the maintenance will be considered as on-going
  //   end: '2025-04-30T00:00:00+08:00',
  //   // [Optional] color of the maintenance alert at status page, default to "yellow"
  //   color: 'blue',
  // },
  // As this config file is a TypeScript file, you can even use IIFE to generate scheduled maintenances
  // The following example shows a scheduled maintenance from 2 AM to 4 AM on the 15th of every month (UTC+8)
  // This COULD BE DANGEROUS, as generating too many maintenance entries can lead to performance problems
  // Undeterministic outputs may also lead to bugs or unexpected behavior
  // If you don't know how to DEBUG, use this approach WITH CAUTION
  // ...(function () {
    // const schedules = []
    // const today = new Date()

    // for (let i = -1; i <= 1; i++) {
    //   // JavaScript's Date object will automatically handle year rollovers
    //   const date = new Date(today.getFullYear(), today.getMonth() + i, 15)
    //   const year = date.getFullYear()
    //   const month = String(date.getMonth() + 1).padStart(2, '0')

    //   schedules.push({
    //     title: `${year}/${parseInt(month)} - Test scheduled maintenance`,
    //     monitors: ['foo_monitor'],
    //     body: 'Monthly scheduled maintenance',
    //     start: `${year}-${month}-15T02:00:00.000+08:00`,
    //     end: `${year}-${month}-15T04:00:00.000+08:00`,
    //   })
    // }
    // return schedules
  // })(),
]

// Don't forget this, otherwise compilation fails.
export { maintenances, pageConfig, workerConfig }
