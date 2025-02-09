import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "~/_components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/_components/ui/form";
import { Input } from "~/_components/ui/input";
import { Textarea } from "~/_components/ui/textarea";

const formSchema = z.object({
  downloadSpeed: z.number().min(0),
  uploadSpeed: z.number().min(0),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  airportId: z.string(),
});

interface SubmissionFormProps {
  airportId: string;
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

const SubmissionForm: FC<SubmissionFormProps> = ({ airportId, onSubmit }) => {
  // Remove unused file state if not being used
  // const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      downloadSpeed: 0,
      uploadSpeed: 0,
      rating: 3,
      comment: "",
      airportId,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    // Here we would typically handle file upload first
    // For now, we'll just call onSubmit with the form values
    onSubmit(values);
    form.reset();
    // Remove unused file state if not being used
    // setFile(null);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="downloadSpeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Download Speed (Mbps)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseFloat(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uploadSpeed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload Speed (Mbps)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseFloat(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating (1-5)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  max={5}
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseInt(e.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment (optional)</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem>
          <FormLabel>Proof Image (optional)</FormLabel>
          <FormControl>
            <Input
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                // Handle file state if needed
                console.log(file);
              }}
            />
          </FormControl>
          <FormDescription>
            Upload an image as proof of your speed test
          </FormDescription>
        </FormItem>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default SubmissionForm;
