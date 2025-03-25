import * as m from '../paraglide/messages';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	const items = [
		{
			quote: m.quote_message_1(),
			name: m.quote_author_1(),
			title: m.quote_families()
		},
		{
			quote: m.quote_message_2(),
			name: m.quote_author_2(),
			title: m.quote_families()
		},
		{
			quote: m.quote_message_3(),
			name: m.quote_author_3(),
			title: m.quote_families()
		},
		{
			quote: m.quote_message_4(),
			name: m.quote_author_4(),
			title: m.quote_families()
		}
	];

	return {
		content: items
	};
};
