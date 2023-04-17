import { Button, Container, Icon, Logo, Flex } from "@bradlove/design-system";
import React from "react";

import style from "./index.module.css";

export const Navigation: React.ComponentType = ({}) => {
    return (
        <nav className={style.navigation}>
            <Container>
                <Flex justifyContent="space-between" alignItems="center">
                    <Logo />
                    <Flex gap={2}>
                        <Button icon>
                            <Icon.GitHub />
                        </Button>
                        <Button icon>
                            <Icon.GitHub />
                        </Button>
                    </Flex>
                </Flex>
            </Container>
        </nav>
    );
};
