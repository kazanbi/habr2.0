import * as bcrypt from 'bcryptjs'
import { signJwtAccessToken } from 'shared/lib/jwt'
import prisma from 'shared/lib/prisma'

interface requestBody {
	username: string
	password: string
}

export async function POST(req: Request) {
	const body: requestBody = await req.json()
	const user = await prisma.user.findFirst({
		where: {
			email: body.username,
		},
	})

	if (user) {
		const passwordCompare = await bcrypt.compare(body.password, user.password)
		if (passwordCompare) {
			const { password, ...userWithoutPass } = user
			const accessToken = signJwtAccessToken(userWithoutPass)
			const result = {
				...userWithoutPass,
				accessToken,
			}
			return Result(result)
		} else {
			return Result({ message: 'Не верный пароль' })
		}
	} else {
		return Result({ message: 'Не найден пользователь' })
	}
}

export const Result = (obj: object) => new Response(JSON.stringify(obj))
