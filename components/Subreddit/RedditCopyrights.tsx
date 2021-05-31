import { Box, Link, SimpleGrid, Stack } from '@chakra-ui/layout'
import React from 'react'

const RedditCopyrights = () => {
	return (
		<Box borderWidth="1px" overflow="hidden" padding="8px">
			<SimpleGrid columns={2} spacing={10}>
				<Stack direction="column" spacing="4px">
					<div>
						<Link href="https://www.reddithelp.com">A Propos</Link>
					</div>
					<div>
						<Link href="https://www.reddit.com/mobile/download">
							App Reddit
						</Link>
					</div>
					<div>
						<Link href="https://www.reddit.com/coins">Pièces Reddit</Link>
					</div>
					<div>
						<Link href="https://www.reddit.com/premium">Reddit Premiun</Link>
					</div>
					<div>
						<Link href="https://redditgifts.com/">Reddit Gifts</Link>
					</div>
				</Stack>
				<Stack direction="column" spacing="4px">
					<div>
						<Link href="https://about.reddit.com">A Propos</Link>
					</div>
					<div>
						<Link href="https://about.reddit.com/careers/">Carrières</Link>
					</div>
					<div>
						<Link href="https://about.reddit.com/press/">Presse</Link>
					</div>
					<div>
						<Link href="https://www.redditinc.com/advertising">Publicités</Link>
					</div>
					<div>
						<Link href="http://www.redditblog.com/">Blog</Link>
					</div>
					<div>
						<Link href="https://www.redditinc.com/policies/user-agreement">
							Conditions
						</Link>
					</div>
					<div>
						<Link href="https://www.redditinc.com/policies/content-policy">
							Politique de Contenu
						</Link>
					</div>
					<div>
						<Link href="https://www.reddit.com/help/privacypolicy">
							Politique De Confidentialité
						</Link>
					</div>
					<div>
						<Link href="https://www.reddit.com/help/healthycommunities/">
							Politique de Modératiion
						</Link>
					</div>
				</Stack>
			</SimpleGrid>
            <span>Reddit Inc 2021. Tous droits réservés</span>
		</Box>
	)
}

export default RedditCopyrights
