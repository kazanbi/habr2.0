'use client'

import './styles/globals.css'
import { Footer } from 'shared/ui/footer/Footer'
import { Header } from 'shared/ui/header/Header'
import { Providers } from './providers/provider'
import { ContainerLayout } from 'shared/ui/container/Container'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={'h-full'}>
			<body className={'h-full'}>
				<Providers>
					<Header />
					<main className={'h-full flex flex-col justify-between'}>
						<ContainerLayout>{children}</ContainerLayout>
						<Footer />
					</main>
				</Providers>
			</body>
		</html>
	)
}
