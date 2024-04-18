import arrow from 'src/images/arrow.svg';
import { useState, useEffect } from 'react';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */


type ArrowButtonProps = {
	onClick: () => void
	active: boolean
}


export const ArrowButton = (props: ArrowButtonProps) => {
	const classNameArrow = styles.arrow + (props.active ? ' ' + styles.arrow_open : '');
	const classNameButton = styles.container + (props.active ? ' ' + styles.container_open : '');
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={classNameButton}
			onClick={props.onClick}
		>
			<img src={arrow} alt='иконка стрелочки' className={classNameArrow} />
		</div>
	);
};
