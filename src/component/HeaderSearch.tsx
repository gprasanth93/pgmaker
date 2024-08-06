import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import classes from "./HeaderSearch.module.css";
import ToggleTheme from "./ToggleTheme";

const links = [
  { link: "/about", label: "Pg-team" },
  { link: "/pricing", label: "Databases" },
  { link: "/learn", label: "Hosts" },
  { link: "/community", label: "Pg-docs" },
];

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <img
            width={40}
            height={40}
            src="data:image/png;base64,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"
          ></img>
          <p className={classes.logo}>Pgmaker</p>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        </Group>
        <ToggleTheme></ToggleTheme>
      </div>
    </header>
  );
}
