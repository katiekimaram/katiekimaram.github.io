const projects = [
  {
    id: 'PROJ-01',
    status: 'shipped',
    title: 'Zendesk to Sheets Pipeline',
    description:
      'An Apps Script pipeline that syncs Zendesk ticket data into Google Sheets on a schedule, replacing a manual export process used for reporting.',
    tags: ['Apps Script', 'API integration', 'Automation'],
  },
  {
    id: 'PROJ-02',
    status: 'shipped',
    title: 'Zendesk Field Audit Tool',
    description:
      'A script that scans a live Zendesk instance for unused, duplicate, or misconfigured fields, giving admins a clean starting point for cleanup.',
    tags: ['Zendesk API', 'Data integrity'],
  },
  {
    id: 'PROJ-03',
    status: 'shipped',
    title: 'Zendesk to Jira Incident Classifier',
    description:
      'An Apps Script tool that reads incoming tickets, classifies them against a taxonomy, and creates linked Jira issues, cutting down manual triage.',
    tags: ['Classification', 'Jira API', 'Zendesk API'],
  },
  {
    id: 'PROJ-04',
    status: 'shipped',
    title: 'Incident Platform Migration Plan',
    description:
      'A vendor evaluation across eight incident management platforms, followed by an eight-phase migration plan with a RACI matrix and Notion workspace to move a team from OpsGenie to Incident.io.',
    tags: ['Vendor evaluation', 'Program planning'],
  },
  {
    id: 'PROJ-05',
    status: 'in-progress',
    title: 'Magic Garden Userscripts',
    description:
      'Tampermonkey scripts for a farming game, including Crop Lock, which intercepts WebSocket frames to block accidental crop destruction, and an in-progress in-game weather forecast widget.',
    tags: ['WebSocket', 'Reverse engineering', 'Tampermonkey'],
    link: 'https://github.com/katiekimaram',
  },
];

export default projects;
