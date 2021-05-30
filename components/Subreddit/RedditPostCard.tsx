import { ChatIcon, Icon } from '@chakra-ui/icons'
import { Box, Divider, Heading, Link, Stack } from '@chakra-ui/layout'
import dayjs from 'dayjs'
import React from 'react'
import { RedditPost as IRedditPost } from '../../types/redditPost'
import {
	FaShare,
	FaRegBookmark,
	FaRegArrowAltCircleUp,
	FaRegArrowAltCircleDown,
} from 'react-icons/fa'
import { Button } from '@chakra-ui/button'

const UserLink = ({ userName }) => {
	return <Link href={`https://reddit.com/user/{userName}`}>u/{userName}</Link>
}

interface RedditPostCardProps {
	post: IRedditPost
}
const RedditPostCard = ({ post }: RedditPostCardProps) => {
	const created_diff = dayjs(post.created).fromNow()
	return (
		<Box
			padding="8px"
			marginBottom="10px"
			borderRadius="lg"
			borderWidth="1px"
			overflow="hidden"
		>
			<Stack direction="row">
				<Stack direction="column" alignItems="center">
					<Icon as={FaRegArrowAltCircleUp} />
					<div>{post.score}</div>
					<Icon as={FaRegArrowAltCircleDown} />
				</Stack>
				<Divider orientation="vertical" />
				<Stack direction="column" spacing="8px">
					<span>
						Publié par <UserLink userName={post.author} /> {created_diff}
					</span>
					<Heading as="h3" size="md">
						{post.title}
					</Heading>
					<div>
						<Link href={post.url} target="_blank">
							{post.url}
						</Link>
					</div>
					<div>
						<Stack direction="row" alignItems="center">
							<Button variant="ghost" leftIcon={<ChatIcon />}>
								{post.num_comments} Commentaires
							</Button>
							<Button variant="ghost" leftIcon={<Icon as={FaShare} />}>
								Partager
							</Button>
							<Button variant="ghost" leftIcon={<Icon as={FaRegBookmark} />}>
								Sauvegarder
							</Button>
						</Stack>
					</div>
				</Stack>
			</Stack>
		</Box>
	)
}

export default RedditPostCard
