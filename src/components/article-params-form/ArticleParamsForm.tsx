import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';

import styles from './ArticleParamsForm.module.scss';
import { useLayoutEffect, useState } from 'react';

type ArticleParamsProps = {
	title: string,
	active: boolean,
	setIsOpen: any
}
//индикатор видимости, и функцию открыть/закрыть


export const ArticleParamsForm = ({ title, active, setIsOpen }: ArticleParamsProps) => {

	const className = styles.container + (active ? ' ' + styles.container_open : '');

	return (
		<>
			<ArrowButton onClick={() => setIsOpen((previous: boolean) => !previous)} active={active} />
			<aside className={className} >
				<form className={styles.form} >
					<Text as='h1' size={31} weight={800} uppercase dynamicLite>
						{title}
					</Text>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>

	);
};
