import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select/Select'
import { ReactNode } from 'react';
import { RadioGroup } from 'components/radio-group';
import { defaultArticleState, fontSizeOptions, AppState } from 'src/constants/articleProps';

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
					<RadioGroup title={'Шрифт'} options={fontSizeOptions} name={'fontSize'} selected={appState.fontSizeOption} onChange={(fontSizeOption) => setAppState({ ...appState, fontSizeOption })} />
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
