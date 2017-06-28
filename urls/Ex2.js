let DOMModel = {
	tag: 'div',
	content: [
		{
			tag: 'h1',
			text: 'title'
		},
		{
			tag: 'h2',
			text: 'description'
		},
		{
			tag: 'span',
			attributes: { style: 'color: green' },
			content: [{ text: 'Enter value' }]
		},
		{
			tag: 'input',
			attributes: { value: 'value' }
		},
		{
			tag: 'ul',
			attributes: { class: 'list' },
			content: [
				{
					tag: 'li',
					text: 'item 1'
				},
				{
					tag: 'li',
					text: 'item 2'
				},
				{
					tag: 'li',
					text: 'item 3'
				}
			]
		},
	]
}

module.exports = DOMModel;