import { Stack } from '@chakra-ui/layout'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import React from 'react'
import { RedditPost as IRedditPost } from '../../types/redditPost'
import { SubredditAboutInfos } from '../../types/subredditAboutInfos'
import About from './About'
import Publications from './Publications'
import RedditCopyrights from './RedditCopyrights'

interface SubredditTabsProps {
	posts: IRedditPost[]
	aboutInfos: SubredditAboutInfos
}
const SubredditTabs = ({ posts, aboutInfos }: SubredditTabsProps) => {
	return (
		<Tabs defaultIndex={0}>
			<TabList>
				<Tab>Publications</Tab>
				<Tab>Rules</Tab>
				<Tab>Related Subreddits</Tab>
				<Tab>Discord</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<Stack direction="row" spacing="24px">
						<div>
							<Publications posts={posts} />
						</div>
						<Stack direction="column" spacing="24px">
							<About aboutInfos={aboutInfos} />
							<RedditCopyrights />
						</Stack>
					</Stack>
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}

export default SubredditTabs
