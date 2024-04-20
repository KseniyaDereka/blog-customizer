import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select/Select'
import { ReactNode, useEffect, SyntheticEvent } from 'react';
import { RadioGroup } from 'components/radio-group';
import { defaultArticleState, fontSizeOptions, AppState, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
import { Separator } from '../separator';
import { clsx } from 'clsx';

import styles from './ArticleParamsForm.module.scss';
import { useLayoutEffect, useState } from 'react';

type ArticleParamsProps = {
	title: string,
	active: boolean,
	setIsOpen: (callback: (previous: boolean) => boolean) => void,
	// children: ReactNode;
	setAppState: any
	appState: AppState
}
//индикатор видимости, и функцию открыть/закрыть


export const ArticleParamsForm = ({ title, active, setIsOpen, setAppState, appState }: ArticleParamsProps) => {

	const className = clsx(styles.container, active && styles.container_open);
	const handleClick = (e: SyntheticEvent) => {
		e.preventDefault();
		setAppState(appState)
	};

	const [formState, setFormState] = useState(appState);
	useEffect(() => setFormState(appState), [appState]);
	return (
		<>
			<ArrowButton onClick={() => setIsOpen((previous: boolean) => !previous)} active={active} />
			<aside className={className} >
				<form className={styles.form} >
					<Text as='h1' size={31} weight={800} uppercase>
						{title}
					</Text>
					<Select title={'Шрифт'}
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={(fontFamilyOption) => setFormState({ ...formState, fontFamilyOption })} />
					<RadioGroup title={'Размер шрифта'}
						options={fontSizeOptions} name={'fontSize'}
						selected={formState.fontSizeOption}
						onChange={(fontSizeOption) => setFormState({ ...formState, fontSizeOption })} />
					<Select title={'Цвет шрифта'}
						options={fontColors}
						selected={formState.fontColor}
						onChange={(fontColor) => setFormState({ ...formState, fontColor })} />
					<Separator />
					<Select title={'Цвет фона'}
						options={backgroundColors}
						selected={formState.backgroundColor}
						onChange={(backgroundColor) => setFormState({ ...formState, backgroundColor })} />
					<Select title={'Ширина контента'}
						options={contentWidthArr}
						selected={formState.contentWidth}
						onChange={(contentWidth) => setFormState({ ...formState, contentWidth })} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' onClick={() => setAppState(formState)} />
					</div>
				</form>
			</aside>
		</>

	);
};
