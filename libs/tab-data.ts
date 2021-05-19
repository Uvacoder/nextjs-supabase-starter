type TabTypes = {
  name: string;
  description: string;
}[];

const tabData: TabTypes = [
  { name: 'Overview', description: 'Pin or edit recently added secrets from your dashboard.' },
  { name: 'Vault', description: 'Manage secrets and protect data with encryption.' },
  { name: 'Activity', description: 'View and monitor recent activity from your account.' },
  { name: 'Settings', description: 'Manage account settings to keep your account secure.' },
];

export default tabData;
