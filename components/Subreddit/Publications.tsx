import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { FaHotjar } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { ImArrowUp } from 'react-icons/im'
import { RedditPost as IRedditPost } from '../../types/redditPost'
import RedditPostCard from './RedditPostCard'

interface PublicationsProps {
	posts: IRedditPost[]
}
const Publications = ({ posts }: PublicationsProps) => {
	return (
		<div>
			<Stack direction="row" borderWidth="1px" padding="8px" marginBottom="8px">
				<Button leftIcon={<Icon as={FaHotjar} />} variant="ghost">
					Populaire
				</Button>
				<Button variant="ghost" leftIcon={<Icon as={FiSun} />}>
					New
				</Button>
				<Button variant="ghost" leftIcon={<Icon as={ImArrowUp} />}>
					Au Top
				</Button>
			</Stack>
			<div>
				{posts.map((post) => {
					return <RedditPostCard key={post.id} post={post}/>
				})}
			</div>
		</div>
	)
}

export default Publications
