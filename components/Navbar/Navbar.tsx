import { Flex, Stack } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import React from 'react'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import {
	ChevronDownIcon,
	HamburgerIcon,
	MoonIcon,
	QuestionOutlineIcon,
	SearchIcon,
} from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'
import {
	Menu,
	MenuButton,
	MenuGroup,
	MenuItem,
	MenuList,
} from '@chakra-ui/menu'
import { Switch } from '@chakra-ui/switch'
import { useColorMode } from '@chakra-ui/color-mode'

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	const logoUrlLight = '/static/logo/Reddit_Mark_OnWhite.svg'
	const logoNameUrlLight = '/static/logo/Reddit_Logotype_OnWhite.svg'
	const logoUrlDark = '/static/logo/Reddit_Mark_OnDark.svg'
	const logoNameUrlDark = '/static/logo/Reddit_Logotype_OnDark.svg'
	const logoUrl = colorMode === 'light' ? logoUrlLight : logoUrlDark
	const logoNameUrl = colorMode === 'light' ? logoNameUrlLight : logoNameUrlDark
	return (
		<Flex>
			<Box p="4">
				<a>
					<Flex>
						<img width="32px" height="32px" src={logoUrl} />
						<img width="64px" height="32px" src={logoNameUrl} />
					</Flex>
				</a>
			</Box>
			<Spacer />
			<Box p="4" style={{ maxWidth: '700px', flexGrow: 1 }}>
				<InputGroup>
					<InputLeftElement
						pointerEvents="none"
						children={<SearchIcon color="gray.300" />}
					/>
					<Input style={{ width: '100%' }} placeholder="Basic usage" />
				</InputGroup>
			</Box>
			<Spacer />
			<Box p="4">
				<Stack direction="row" spacing={4} align="center">
					<Button colorScheme="blue" variant="outline">
						Connect
					</Button>
					<Button colorScheme="blue" variant="solid">
						Sign In
					</Button>

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
									<MenuGroup title="Options">
										<MenuItem
											icon={<MoonIcon />}
											command={
												(
													<Switch
														size="md"
														isChecked={colorMode === 'dark'}
														onChange={toggleColorMode}
													/>
												) as any
											}
										>
											Mode nocturne
										</MenuItem>
									</MenuGroup>
									<MenuGroup title="Fonctionnalités">
										<MenuItem icon={<MoonIcon />}>Piece Reddit</MenuItem>
										<MenuItem icon={<MoonIcon />}>Reddit Premiun</MenuItem>
										<MenuItem icon={<QuestionOutlineIcon />}>
											Centre d'aide
										</MenuItem>
									</MenuGroup>
								</MenuList>
							</>
						)}
					</Menu>
				</Stack>
			</Box>
		</Flex>
	)
}

export default Navbar
