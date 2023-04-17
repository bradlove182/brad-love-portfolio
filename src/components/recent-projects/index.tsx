import React from "react";
import {
    Text,
    Card,
    Container,
    Grid,
    Pill,
    Flex,
    Button,
} from "@bradlove/design-system";

import { SectionTitle } from "../section-title";
import { projects } from "../../projects";

import { ProjectCard } from "./card";
import style from "./index.module.css";

export const RecentProjects: React.ComponentType = () => (
    <Container>
        <Grid as="section" columns={1}>
            <Text as="h2">{"Recent Projects"}</Text>
            <Grid gap={5} columns={1}>
                {projects.map((project) => (
                    <Card key={project.title} elevation={3}>
                        <Card.Body>
                            <Grid gap={5}>
                                <Flex
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Text as="h3">{project.title}</Text>
                                    <Button>{"View"}</Button>
                                </Flex>
                                <Text>{project.description}</Text>
                                <Flex>
                                    {project.roles.map((role) => (
                                        <Pill key={role} variant="brand">
                                            {role}
                                        </Pill>
                                    ))}
                                </Flex>
                            </Grid>
                        </Card.Body>
                    </Card>
                ))}
            </Grid>
        </Grid>
    </Container>
);
