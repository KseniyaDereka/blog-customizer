import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select/Select'
import { ReactNode } from 'react';
import { RadioGroup } from 'components/radio-group';
import { defaultArticleState, fontSizeOptions, AppState, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr } from 'src/constants/articleProps';
import { Separator } from '../separator';

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

	const className = styles.container + (active ? ' ' + styles.container_open : '');


	return (
		<>
			<ArrowButton onClick={() => setIsOpen((previous: boolean) => !previous)} active={active} />
			<aside className={className} >
				<form className={styles.form} >
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						{title}
					</Text>
					<Select title={'Шрифт'} options={fontFamilyOptions} selected={appState.fontFamilyOption} onChange={(fontFamilyOption) => setAppState({ ...appState, fontFamilyOption })} />
					<RadioGroup title={'Размер шрифта'} options={fontSizeOptions} name={'fontSize'} selected={appState.fontSizeOption} onChange={(fontSizeOption) => setAppState({ ...appState, fontSizeOption })} />
					<Select title={'Цвет шрифта'} options={fontColors} selected={appState.fontColor} onChange={(fontColor) => setAppState({ ...appState, fontColor })} />
					<Separator />
					<Select title={'Цвет фона'} options={backgroundColors} selected={appState.backgroundColor} onChange={(backgroundColor) => setAppState({ ...appState, backgroundColor })} />
					<Select title={'Ширина контента'} options={contentWidthArr} selected={appState.contentWidth} onChange={(contentWidth) => setAppState({ ...appState, contentWidth })} />
					<div className={styles.bottomContainer}>
						{/* {children} */}
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>

	);
};
