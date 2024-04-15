"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(3),
    emailAddress: z.string().email(),
    accountType: z.enum(["single", "family"]),
    spouseName: z.string(),
    children: z.array(z.object({ name: z.string() }))
})

export default function SingleRegistration() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: "",
            accountType: "single", // Set default account type
            spouseName: "", // Initialize spouse name
            children: [{ name: "" }] // Initialize children array with an empty object
        }
    });

    const handleSubmit = (values: z.infer<typeof formSchema>) => { }

    return (
        <main className="flex min-h-screen col items-center justify-between p-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md w-full flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="accountType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Register as</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a verified email to display" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="single">Single</SelectItem>
                                        <SelectItem value="family">Family</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Name"  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email Address" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    )
}
