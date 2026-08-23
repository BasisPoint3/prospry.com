export interface CaseStudy {
	slug: string;
	tag: string;
	industry: string;
	title: string;
	metric: string;
	summary: string;
	problem: string;
	whatWasBuilt: string[];
	results: string[];
	quote: string | null;
	attribution: string | null;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'fox-briar-farm',
		tag: 'AI Agent Build',
		industry: 'Hospitality',
		title: 'The Inn at Fox Briar Farm',
		metric: '10–15 emails a day, minutes down to seconds',
		summary:
			'For every inquiry, Donna had to dig through Google Drive, her reservation system, and more just to find the context to answer it — then write the reply herself. We built an email agent that triages every inquiry, pulls that context from her tools automatically, and has a draft ready — so she\'s never starting from a blank screen, just reviewing and sending.',
		problem:
			'Donna, owner of The Inn at Fox Briar Farm — a boutique inn and wedding venue in Pennsylvania — handles roughly 10–15 email inquiries a day, tethered to her phone with no way to tell urgent from routine. For every single one, she had to dig through Google Drive, the hotel\'s reservation system, and other tools just to find the context to answer it — then write the reply herself, from a blank screen, every time.',
		whatWasBuilt: [
			'Incoming emails are automatically classified into five categories — wedding inquiry, private event, inn stay, general question, or ignore — and routed accordingly.',
			'The system is connected to Fox Briar\'s actual business data: property details, policies, live reservations, Google Calendar, and contracts.',
			'An AI agent pulls the context it needs from those tools automatically and drafts a reply in Donna\'s voice, held as a draft in Gmail for her to review before sending — so she\'s never starting from a blank screen, just reviewing and sending.',
			'Critical items trigger a Telegram notification so nothing urgent sits unseen.',
		],
		results: [
			'10–15 emails a day, each going from 10–20 minutes of manual digging-and-drafting down to seconds of review.',
			'Handles all 5 categories of inbox requests automatically.',
		],
		quote:
			'"It\'s like having someone who already knows everything about the farm sitting with me when I open my email."',
		attribution: '— Donna, Owner',
	},
	{
		slug: 'freightwise',
		tag: 'AI Workflow',
		industry: 'SaaS',
		title: 'FreightWise',
		metric: '7-day prep → minutes',
		summary:
			'Before every trade show, the sales team spent up to a week manually researching attendees and cross-referencing them against CRM history — plus an outside vendor to help. We built an AI workflow that ingests the attendee list, cross-references Salesforce, and hands back prioritized talking points automatically.',
		problem:
			'Pre-trade-show prep required manually researching every attendee, cross-referencing them against Salesforce CRM accounts, and building outreach lists by hand. The process took up to a week, relied on an expensive external vendor, and produced lists with no institutional customer context baked in.',
		whatWasBuilt: [
			'Ingests the trade show attendee list.',
			'Cross-references each attendee against Salesforce CRM data.',
			'Generates prioritized sales intelligence per attendee — account history, relationship context, and suggested talking points.',
		],
		results: [
			'Eliminated the 7-day turnaround.',
			'Removed 100% of the external vendor cost.',
			'The process now runs in minutes, with more consistent and relevant output than the manual version.',
		],
		quote: null,
		attribution: null,
	},
];
