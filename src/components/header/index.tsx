import {
    Icon,
    Box,
    Flex,
    IconButton,
    Link,
    Stack,
    Text,
    useBreakpointValue,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody, VStack,
} from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { MENU_ITEMS } from './header-constans';
import { MenuItem } from './menu-item';
import { useSideBarDrawer } from '../../context/SidebarContext';

export const Header = () => {
    const { onOpen, isOpen, onClose } = useSideBarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box w="100%" py="6" bg="brand.dark" display="flex">
            {!isWideVersion && (
                <IconButton
                    ml="2"
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                />
            )}
            <Flex justify="space-between" px="4" maxW={1480} mx="auto" align="center" width={isWideVersion ? '100%' : 'auto'}>

                <Box display="flex">

                    <Link href="/" _hover={{ cursor: 'pointer' }}>
                        <Text fontWeight="bold" fontSize="32">InstitutionalCMS
                            <Text as="span" pl="2" color="brand.primary">.</Text>
                        </Text>
                    </Link>

                </Box>

                {!isWideVersion && (
                    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                        <DrawerOverlay>
                            <DrawerContent bg="gray.800" p="4">
                                <DrawerCloseButton mt="6" />
                                <DrawerHeader>Navegação</DrawerHeader>
                                <DrawerBody>
                                    <VStack align="flex-start" spacing="8">
                                        {MENU_ITEMS.map((item) => (
                                            <MenuItem
                                                link={item.link}
                                                name={item.name}
                                                key={item.name}
                                            />
                                        ))}
                                    </VStack>

                                </DrawerBody>
                            </DrawerContent>
                        </DrawerOverlay>
                    </Drawer>
                )}

                {isWideVersion && (
                    <Stack spacing="8" direction="row">
                        {MENU_ITEMS.map((item) => (
                            <MenuItem link={item.link} name={item.name} key={item.name} />
                        ))}
                    </Stack>
                )}

            </Flex>
        </Box>
    );
};
