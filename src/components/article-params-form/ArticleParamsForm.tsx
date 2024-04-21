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
import { useState, useRef } from 'react';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

type ArticleParamsProps = {
	title: string,
	setAppState: any
	appState: AppState
}

export const ArticleParamsForm = ({ title, setAppState, appState }: ArticleParamsProps) => {
	const rootRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const className = clsx(styles.container, isOpen && styles.container_open);


	const submitClick = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	const resetClick = () => {
		setAppState(formState);
	}

	useOutsideClickClose({ isOpen, rootRef, onChange: setIsOpen });

	const [formState, setFormState] = useState(appState);
	useEffect(() => setFormState(appState), [appState]);
	return (
		<div ref={rootRef}>
			<ArrowButton onClick={() => setIsOpen((previous: boolean) => !previous)} isOpen={isOpen} />
			<aside className={className} >
				<form className={styles.form} onSubmit={submitClick} onReset={resetClick} >
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
						<Button title='Сбросить' type='reset' onClick={() => setFormState(defaultArticleState)} />
						<Button title='Применить' type='submit' onClick={() => setAppState(formState)} />
					</div>
				</form>
			</aside>
		</div>
	);
};
