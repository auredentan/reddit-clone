import { useService } from '@xstate/react'
import {
	SubRedditMachineContext,
	SubRedditMachineEvent,
} from '../../state/subredditMachine'
import Tabs from './Tabs'

const Subreddit = ({ service }) => {
	// Only create the machine based on the subreddit name once
	const [current, send] =
		useService<SubRedditMachineContext, SubRedditMachineEvent>(service)

	if (current.matches('failure')) {
		return (
			<div>
				Failed to load posts.{' '}
				<button onClick={(_) => send('RETRY')}>Retry?</button>
			</div>
		)
	}

	const { subreddit, posts, lastUpdated, aboutInfos } = current.context

	return (
		<section
			data-machine={service.machine.id}
			data-state={current.toStrings().join(' ')}
		>
			{current.matches('loading') && <div>Loading posts...</div>}
			{posts && (
				<>
					<header>
						<h2>{subreddit}</h2>
						<small>
							Last updated: {lastUpdated}{' '}
							<button onClick={(_) => send('REFRESH')}>Refresh</button>
						</small>
					</header>
					<div>

						<Tabs posts={posts} aboutInfos={aboutInfos} />
					</div>
				</>
			)}
		</section>
	)
}

export { Subreddit }
