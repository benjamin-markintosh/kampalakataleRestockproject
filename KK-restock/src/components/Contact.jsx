
import { TextInput, Textarea, SimpleGrid, Group, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import NavLinks from "../components/NavLinks";
import Button from "./Button";

function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <div>
      <NavLinks/>

      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          p="xl"
          sx={(theme) => ({ fontFamily: `Poppins, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          Get in touch
        </Title>

        <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps("name")}
            className="mx-20"
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps("email")}
            className="mx-20"
            size="sm"
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps("subject")}
          className="mx-20"
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
          className="mx-20"
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
    </div>
  );
}

export default Contact;
