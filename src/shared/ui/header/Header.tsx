import Link from 'next/link'
import { FC } from 'react'
import { Route } from 'shared/const/route'
import style from './Header.module.scss'
import SignInButton from 'features/SignInButton/ui/SignInButton'

export const Header: FC = () => {
	return (
		<header className={style.list}>
			<div className={style.logo}>LOGO</div>

			<nav>
				{Route.map(({ path, title }) => {
					return (
						<>
							<Link key={path} href={path}>
								{title}
							</Link>
						</>
					)
				})}
			</nav>

			<SignInButton />
		</header>
	)
}
