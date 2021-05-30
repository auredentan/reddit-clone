import axios from 'axios'
import { createMachine, assign } from 'xstate'
import { SubredditAboutInfos } from '../types/subredditAboutInfos'

export interface SubRedditMachineContext {
	subreddit: string
	subredditData?: any
	aboutInfos?: SubredditAboutInfos
	posts?: any[]
	lastUpdated: any
}

export type SubRedditMachineEvent =
	| {
			type: 'REFRESH'
	  }
	| {
			type: 'RETRY'
	  }

function invokeFetchSubreddit(context: SubRedditMachineContext) {
	const { subreddit } = context

	return axios
		.get(`https://gateway.reddit.com/desktopapi/v1/subreddits/${subreddit}`)
		.then((json) => {
			return json.data
		})
}

const createSubredditMachine = (subreddit: string) => {
	return createMachine<SubRedditMachineContext, SubRedditMachineEvent>(
		{
			id: 'subreddit',
			initial: 'loading',
			context: {
				subreddit, // subreddit name passed in
				posts: null,
				lastUpdated: null,
				subredditData: null,
				aboutInfos: null,
			},
			states: {
				loading: {
					invoke: {
						id: 'fetch-subreddit',
						src: invokeFetchSubreddit,
						onDone: {
							target: 'loaded',
							actions: ['posts', 'lastUpdated'],
						},
						onError: 'failure',
					},
				},
				loaded: {
					on: {
						REFRESH: 'loading',
					},
				},
				failure: {
					on: {
						RETRY: 'loading',
					},
				},
			},
		},
		{
			actions: {
				posts: assign((_, event: any) => {
					const token = Object.keys(event.data.subreddits)[0]
					return {
						posts: Object.values(event.data.posts),
						aboutInfos: event.data.subredditAboutInfo[token],
						subredditData: event.data,
					}
				}),
				lastUpdated: assign(() => ({ lastUpdated: Date.now() })),
			},
			guards: {},
			services: {},
		}
	)
}

export { createSubredditMachine }
