const FILTERS = [
    { id: 'all',       label: 'All',       filter: null },
    { id: 'active',    label: 'Active',    filter: t => !t.done },
    { id: 'done',      label: 'Done',      filter: t => t.done },
    { id: 'important', label: 'Important', filter: t => t.important }
];

export default FILTERS;
