"use client"

import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

function SearchBar() {

    const router = useRouter();

    const formSchema = z.object({
        input: z.string().min(2).max(50),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        router.push(`/search/${values.input}`);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="input"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Search..." {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                >
                </FormField>
            </form>
        </Form>
    )
}

export default SearchBar