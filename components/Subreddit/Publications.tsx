import { Button } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import {
	ChevronDownIcon,
	HamburgerIcon,
	MoonIcon,
	QuestionOutlineIcon,
} from '@chakra-ui/icons'
import { Spacer, Stack } from '@chakra-ui/layout'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import React, { useState } from 'react'
import { FaHotjar } from 'react-icons/fa'
import { FiSun } from 'react-icons/fi'
import { ImArrowUp } from 'react-icons/im'
import { RedditPost as IRedditPost } from '../../types/redditPost'
import RedditPostCard from './RedditPostCard'
import { MdViewAgenda, MdViewDay, MdViewHeadline } from 'react-icons/md'

export type PostsDisplayMode = 'card' | 'classic' | 'compact'

interface PublicationsProps {
	posts: IRedditPost[]
}
const Publications = ({ posts }: PublicationsProps) => {
	const [postsDisplayMode, setPostsDisplayMode] =
		useState<PostsDisplayMode>('card')
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

				<Spacer />
				<Menu>
					{({ isOpen }) => (
						<>
							<MenuButton
								variant="ghost"
								isActive={isOpen}
								as={Button}
								rightIcon={<ChevronDownIcon />}
							>
								<HamburgerIcon />
							</MenuButton>
							<MenuList>
								<MenuItem
									icon={<Icon as={MdViewAgenda} />}
									onClick={() => setPostsDisplayMode('card')}
								>
									Cartes
								</MenuItem>
								<MenuItem
								
									icon={<Icon as={MdViewDay} />}
									onClick={() => setPostsDisplayMode('classic')}
								>
									Vue classique
								</MenuItem>
								<MenuItem
									icon={<Icon as={MdViewHeadline} />}
									onClick={() => setPostsDisplayMode('compact')}
								>
									Compact
								</MenuItem>
							</MenuList>
						</>
					)}
				</Menu>
			</Stack>
			<div>
				{posts.map((post) => {
					return (
						<RedditPostCard
							key={post.id}
							post={post}
							displayMode={postsDisplayMode}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Publications
