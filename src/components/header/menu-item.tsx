import { Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface MenuItemProps {
    name: string,
    link: string
}

export const MenuItem = ({ name, link }: MenuItemProps) => {
    const { asPath } = useRouter();

    const isCurrentRoute = asPath === link;

    return (
        <Link
            href={link}
            fontWeight="bold"
            as="a"
            color={isCurrentRoute ? 'brand.primary' : 'brand.white'}
            _hover={{ color: 'brand.primary' }}
        >
            {name}
        </Link>
    );
};
