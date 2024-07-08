import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  examName: z.string().min(1, {
    message: "Exam name is required.",
  }),
  percentage: z.number().min(0).max(100, {
    message: "Percentage must be between 0 and 100.",
  }).transform((val) => (val ? parseFloat(val) : val)), // Ensure percentage is a number
  year: z.number().min(1900).max(new Date().getFullYear(), {
    message: `Year must be between 1900 and ${new Date().getFullYear()}.`,
  }).transform((val) => (val ? parseInt(val) : val)), // Ensure year is a number
});

export function CareerPathForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      examName: "",
      percentage: "",
      year: "",
    },
  });

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="examName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Exam Name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your last qualifying exam name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name of your last qualifying exam.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="percentage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Percentage</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter your percentage" {...field} />
              </FormControl>
              <FormDescription>
                This is your percentage in the exam.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter the year you took the exam" {...field} />
              </FormControl>
              <FormDescription>
                This is the year you took the exam.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default CareerPathForm;
