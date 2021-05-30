import React from 'react'
import { useMachine } from '@xstate/react'
import { redditMachine } from '../state/redditMachine'
import { SubReddit } from './Subreddit'
import { Select } from '@chakra-ui/react'

const subreddits = ['frontend', 'reactjs', 'vuejs', 'aww']

const Reddit = () => {
	const [current, send] = useMachine(redditMachine)
	const { subreddit } = current.context

	return (
		<main>
			<header>
				<Select
					onChange={(e) => {
						send('SELECT', { name: e.target.value })
					}}
				>
					{subreddits.map((subreddit) => {
						return <option key={subreddit}>{subreddit}</option>
					})}
				</Select>
			</header>
			{subreddit && <SubReddit service={subreddit} key={subreddit.id} />}
		</main>
	)
}

export default Reddit
