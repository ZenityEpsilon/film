export const locale = (array, fields, lang) =>
	array.map((item) => ({ ...item, ...fields.reduce((acc, key) => ({ ...acc, [key]: item[key + '_' + lang] }), {}) }));
