import News from 'app/news/page'
import Home from 'app/home/page'
import Posts from 'app/posts/page'
import { lazy } from 'react'
import { NAV } from 'shared/const/navigation'

export const Route = [
	{
		path: NAV.HOME,
		title: 'Статьи',
	},
	{
		path: NAV.NEWS,
		title: 'Новости',
	},
	{
		path: NAV.POSTS,
		title: 'Посты',
	},
]
