/**
 * UserAuth Middleware
 */
export default function ({ store, redirect, localeRoute }) {
	if (process.client && !!store.state.user.session.user) redirect(localeRoute('/profile'));
}
