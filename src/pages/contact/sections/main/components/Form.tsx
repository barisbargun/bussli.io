import { Form as HookForm } from "@/components/ui";
import { ContactSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "./FormField";
import { contactText } from "@/config/pages";
import { cn } from "@/lib/utils";

const config = contactText.form;
const Form = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactSchema>) {
    form.reset();
  }

  return (
    <HookForm {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-wrap justify-center gap-10 [&>div]:w-full lg:[&>div]:w-[calc(50%-1.25rem)]"
      >
        {config.map((v, i) => (
          <FormField
            key={i}
            control={form.control}
            name={v.name}
            label={v.label}
            placeholder={v.placeholder}
            isTextArea={v.isTextArea}
            className={cn(v.isTextArea && "!w-full")}
          />
        ))}

        <button
          id="contactFormButton"
          className="indigoButton w-fit !px-20 !py-3"
          type="submit"
        >
          Send
        </button>
      </form>
    </HookForm>
  );
};

export default Form;
