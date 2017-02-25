const statusStrings = [
	'draft',
	'submitted',
	'approved'
];

const AppStatus = {};

for (let i = 0; i < statusStrings.length; i++)
{
	AppStatus[statusStrings[i]] = statusStrings[i];
}

export default AppStatus;
