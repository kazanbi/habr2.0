import prisma from 'shared/lib/prisma'
import * as bcrypt from 'bcryptjs'

interface requestBody {
	name: string
	email: string
	password: string
}

export async function POST(req: Request) {
	const body: requestBody = await req.json()

	const user = await prisma.user.create({
		data: {
			name: body.name,
			email: body.email,
			password: await bcrypt.hash(body.password, 10),
		},
	})

	const { password, ...result } = user
	return new Response(JSON.stringify(result))
}
