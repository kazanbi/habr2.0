'use client'

import { Button, styled } from '@mui/material'
import { signIn, signOut, useSession } from 'next-auth/react'
import style from './SignInButton.module.scss'
import { verify } from 'crypto'

const CustomBtn = styled(Button)({
	color: 'white',
	border: '1px solid #f6f6f6',
})

const SignInButton = () => {
	const { data: session } = useSession()
	if (session && session.user) {
		return (
			<div className={style.block}>
				<div className={style.user}>{session.user.name?.substring(0, 1)}</div>
				<CustomBtn variant='outlined' onClick={() => signOut()}>
					Выйти
				</CustomBtn>
			</div>
		)
	}

	return (
		<nav className={style.nav}>
			<CustomBtn variant='outlined' onClick={() => signIn()}>
				Войти
			</CustomBtn>
			<CustomBtn variant='outlined'>Регистрация</CustomBtn>
		</nav>
	)
}

export default SignInButton
