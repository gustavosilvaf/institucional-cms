import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import {
    createContext, ReactNode, useContext, useEffect,
} from 'react';

interface SideBarContextProviderProps {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export const SideBarContextProvider = ({
    children,
}: SideBarContextProviderProps) => {
    const disclosure = useDisclosure();
    const router = useRouter();

    useEffect(() => {
        disclosure.onClose();
    }, [router.asPath]);

    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    );
};

export const useSideBarDrawer = () => useContext(SidebarDrawerContext);
