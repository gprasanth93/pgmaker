import { UnstyledButton, Group, Avatar, Text, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./UserButton.module.css";

export function UserButton() {
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://avatars.githubusercontent.com/u/29100678?v=4"
          radius="md"
        />
        <IconChevronRight
          style={{ width: rem(20), height: rem(20) }}
          stroke={1.5}
        />

        <div style={{ flex: 0.1 }}>
          <Text size="sm" fw={500}>
            Prasanth Ganesan
          </Text>

          <Text c="dimmed" size="xs">
            prasanthganesan@outlook.com
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
