import { useLocale, useTranslations } from 'next-intl';
// import { routing } from '@/i18n/routing';
// import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import LocaleSwitcherButton from './LocaleSwitcherButton';

export default function LocaleSwitcher() {
	const t = useTranslations('LocaleSwitcher');
	const locale = useLocale();

	// Get the opposite locale
	const oppositeLocale = locale === 'en' ? 'fr' : 'en';

	return (
		// <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
		// 	{routing.locales.map((cur) => (
		// 		<option key={cur} value={cur}>
		// 			{t('locale', { locale: cur })}
		// 		</option>
		// 	))}
		// </LocaleSwitcherSelect>
		<LocaleSwitcherButton
			currentLocale={locale}
			oppositeLocale={oppositeLocale}
			label={t('label')}
			localeLabel={t('locale', { locale: oppositeLocale })}
		/>
	);
}
