import React from 'react';
import {
    Center,
    Divider,
    Icon,
    Box,
    Flex,
    HStack,
    Text,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { MdLocationOn } from 'react-icons/md';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { Link, } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box w={['400px', '1200px', '100%']} bg="#571F9C" h="54px" color="#ffffff">
            <Flex justify="space-between" mx={['110px', '250px', '250px']}>
                <Box>
                    <HStack my="14px">
                        <EmailIcon />
                        <Link>
                            <Text>info@example.com</Text>
                        </Link>

                    </HStack>
                </Box>
                <Box>
                    <HStack my="14px">
                        <Icon as={MdLocationOn} />
                        <Link href="#">
                            <Text>Branches</Text>
                        </Link>
                        <Center height="20px">
                            <Divider orientation="vertical" borderColor="whiteAlpha.900" />
                        </Center>
                        <Icon as={FaShoppingCart} />
                        <Link>
                            <Text>Stories</Text>
                        </Link>
                        <Center height="20px">
                            <Divider orientation="vertical" borderColor="whiteAlpha.900" />
                        </Center>
                        <Icon as={FaUserAlt} />
                        <Link>
                            <Text>Contact us</Text>
                        </Link>
                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
};

export default Header;
