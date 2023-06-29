import { Result } from 'app/api/login/route'
import { verifyJwt } from 'shared/lib/jwt'
import prisma from 'shared/lib/prisma'

export async function GET(request: Request, { params }: { params: { id: number } }) {
	const accessToken = request.headers.get('authorization')
	if (!accessToken || !verifyJwt(accessToken)) {
		return Result({ error: 'unauthorized', status: 401 })
	}
	const userPosts = await prisma.post.findMany({
		where: { authorId: +params.id },
		include: {
			author: {
				select: {
					email: true,
					name: true,
				},
			},
		},
	})
	return Result({ userPosts })
}
