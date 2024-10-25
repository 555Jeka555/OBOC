import styles from './Resume.module.css'
import Image from 'next/image'

const Resume = () => {
	return (
		<div className={styles.main}>
			<section className={styles.header}>
				<Image
					src="https://postupkiforum.ru/800/600/https/pic.rutube.ru/video/67/dd/67dd49d1d4c5aaf22b22e844e710483e.jpg"
					alt=""
					width={150}
					height={150}
					className={styles.photo}
				/>
				<div className={styles.headerInfo}>
					<h1>{'Антышев Евгений'}</h1>
					<p>{'Мужчина, 20 лет, родился 14 декабря 2003'}</p>
					<p>
						{'+7(777) 7777777'}<span>{' — предпочитаемый способ связи'}</span>
					</p>
					<a href="mailto:2003antyshev@mail.ru">{'2003antyshev@mail.ru'}</a>
					<p>{'Проживает: Йошкар-Ола'}</p>
					<p>{'Гражданство: Россия'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Желаемая должность и зарплата'}</h2>
				<p>{'Бэкенд разработчик — 130 000₽'}</p>
				<p>{'Специализации:'}</p>
				<ul>
					<li>{'Программист, разработчик'}</li>
					<li>{'Занятость: частичная занятость'}</li>
					<li>{'График работы: гибкий график, удаленная работа'}</li>
					<li>{'Желательное время в пути до работы: не более часа'}</li>
				</ul>
			</section>

			<section className={styles.section}>
				<h2>{'Опыт работы — 1 год 2 месяц'}</h2>
				<p>{'Октябрь 2024 — настоящее время'}</p>
				<div>
					<h3>{'iSpring'}</h3>
					<p>{'Йошкар - Ола'}</p>
					<p>{'Информационные технологии, системная интеграция, интернет'}</p>
					<p>{'• Разработка программного обеспечения'}</p>
					<h4>{'Программист'}</h4>
					<p>{'Разработка архитектуры, написание backend части приложения. Применял MySQL, PHP ' +
						'Symfony, Doctrine'}</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2>{'Образование'}</h2>
				<p>{'Неоконченное высшее — 2026'}</p>
				<p>{'Поволжский государственный технологический университет, Йошкар-Ола'}</p>
				<p>{'Факультет информатики и вычислительной техники, Программная инженерия'}</p>
			</section>

			<section className={styles.section}>
				<h2>{'Навыки'}</h2>
				<ul>
					<li>{'MySQL'}</li>
					<li>{'PHP'}</li>
					<li>{'Git'}</li>
					<li>{'SQL'}</li>
					<li>{'Symfony'}</li>
					<li>{'Docker'}</li>
					<li>{'TeamCity'}</li>
					<li>{'Kibana'}</li>
				</ul>
			</section>
		</div>
	)
}

export {
	Resume,
}
