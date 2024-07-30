import {
  FormControl,
  FormField as FormFieldComponent,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@/components/ui";

type Props = {
  className?: React.ComponentProps<"div">["className"];
  control: any;
  render?: any;
  name: string;

  label: String;
  isTextArea?: boolean;
  placeholder?: string;
};

const FormField = ({
  label,
  isTextArea,
  placeholder,
  className,
  ...props
}: Props) => {
  return (
    <FormFieldComponent
      {...props}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="font-bold">{label}</FormLabel>
          <FormControl className="max-lg:bg-white">
            {isTextArea ? (
              <Textarea
                rows={6}
                autoComplete="no"
                className="shad-textarea "
                {...field}
                placeholder={placeholder}
              />
            ) : (
              <Input
                autoComplete="no"
                className="shad-input max-lg:h-14"
                {...field}
                placeholder={placeholder}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormField;
