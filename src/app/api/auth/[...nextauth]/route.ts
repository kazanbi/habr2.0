import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'name' },
				password: { label: 'Password', type: 'password', placeholder: 'password' },
			},
			async authorize(credentials, req) {
				const res = await fetch('http://localhost:3000/api/login', {
					method: 'POST',
					body: JSON.stringify({
						username: credentials?.username,
						password: credentials?.password,
					}),
					headers: { 'Content-Type': 'application/json' },
				})
				const user = await res.json()

				if (res.ok && user) {
					return user
				}
				return null
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user }
		},

		async session({ session, token }) {
			session.user = token as any
			return session
		},
	},

	pages: {
		signIn: '/auth/signIn',
	},
})

export { handler as GET, handler as POST }
