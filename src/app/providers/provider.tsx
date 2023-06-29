'use client'

import { FC } from 'react'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
	children: React.ReactNode
}

export const Providers: FC<ProviderProps> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>
}
