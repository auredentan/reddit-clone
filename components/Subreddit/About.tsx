import { Box, Divider, Stack } from '@chakra-ui/layout'
import React from 'react'
import { SubredditAboutInfos } from '../../types/subredditAboutInfos'

interface AboutProps {
	aboutInfos: SubredditAboutInfos
}
const About = ({ aboutInfos }: AboutProps) => {
	return (
		<Box borderRadius="lg" borderWidth="1px" overflow="hidden">
			<Box bg="#3d9494" padding="12px">
				A propos de la communauté
			</Box>
			<Box padding="8px" overflow="hidden">
				<div style={{ padding: '12px' }}>
					<div style={{ marginBottom: '8px' }}>
						<span>{aboutInfos.publicDescription}</span>
					</div>
					<Stack direction="row" spacing="24px">
						<div>
							<div>{aboutInfos.subscribers}</div>
							<p>Membres</p>
						</div>
						<div>
							<div>{aboutInfos.accountsActive}</div>
							<p>En Ligne</p>
						</div>
					</Stack>
					<Divider marginBottom="8px" marginTop="8px" />
					<div>
						<div>{aboutInfos.created}</div>
						<div>Themeatiques</div>
						<div>Tag</div>
					</div>
				</div>
			</Box>
		</Box>
	)
}

export default About
