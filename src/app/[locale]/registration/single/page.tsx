"use client";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

const MAX_UPLOAD_SIZE = 1024 * 10 * 24 * 5;
const phoneValidation = /^(?:(?:\+|00)44|0)7(?:[45789]\d{2}|624)\d{6}$/;
const postcodeValidation =
  /^(GIR|[A-Z]\d[A-Z\d]??|[A-Z]{2}\d[A-Z\d]??)[ ]??(\d[A-Z]{2}|BFPO[ ]?\d{1,4}|(KY\d|MSR|VG|AI)[ ]?\d{1,4}|(AI-2640|KY\d|MSR|VG|AI)[ ]?\d{1,4}|[A-Z]{2}|GEICO[ ]?\d{1,4}|[A-Z]{2}[ ]?\d{1,4})$/i;

const formSchema = z.object({
  firstName: z.string().min(3, { message: "Minimum 3 characters" }),
  middleName: z.string().optional(),
  lastName: z.string().min(3, { message: "Minimum 3 characters" }),
  emailAddress: z.string().email(),
  accountType: z.enum(["single", "family"]),
  title: z.enum(["mr", "miss", "ms", "mrs", "dr"]),
  contactNumber: z
    .string()
    .regex(phoneValidation, { message: "Invalid UK phone number" }),
  nationality: z.string(),
  postcode: z
    .string()
    .regex(postcodeValidation, { message: "Please enter a valid UK Postcode" }),
  address: z.string(),
  emergencyName: z.string().min(3),
  emergencyNumber: z
    .string()
    .regex(phoneValidation, { message: "Invalid UK phone number" }),
  hospitalised: z.string(),
  benefits: z.string(),
  resident: z.string(),
  terms: z.boolean(),
  proofId:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(File)
          .refine((files) => files !== null, "File is required")
          .refine((files) => {
            return files?.size <= MAX_UPLOAD_SIZE;
          }, "Max image size is 5MB."),
  proofAddress:
    typeof window === "undefined"
      ? z.any()
      : z
          .instanceof(File)
          .refine((files) => files !== null, "File is required")
          .refine((files) => {
            return files?.size <= MAX_UPLOAD_SIZE;
          }, "Max image size is 5MB."),
});

export default function SingleRegistration() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      accountType: "single",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <main className="max-w-mx mx-auto p-24 sm:p-10 flex flex-col justify-center min-h-screen max-h:w-screen ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-md flex flex-col gap-4 "
        >
          <FormField
            control={form.control}
            name="accountType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Register as</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
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
          <div className="w-full flex flex-row gap-5">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Title" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="mr">Mr</SelectItem>
                      <SelectItem value="miss">Miss</SelectItem>
                      <SelectItem value="mrs">Mrs</SelectItem>
                      <SelectItem value="ms">Ms</SelectItem>
                      <SelectItem value="dr">Dr</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Middle Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input placeholder="Nationality" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postcode</FormLabel>
                <FormControl>
                  <Input placeholder="Postcode" {...field} />
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
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="07123456789" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emergencyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency contact's name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Emergency Contact Name"
                    type="emergencyName"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emergencyNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact Number </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Emergency Contact Number"
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hospitalised"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you in care?</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="hospitalisedYes" />
                      <Label htmlFor="hospitalisedYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="hospitalisedNp" />
                      <Label htmlFor="hospitalisedNo">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="benefits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Are you receiving benefits i.e. unviversal credit, child tax
                  credit
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="benefitsYes" />
                      <Label htmlFor="benefitsYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="benefitsNo" />
                      <Label htmlFor="benefitsNo">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resident"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you a resident of the UK</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="residentYes" />
                      <Label htmlFor="residentYes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="residentNo" />
                      <Label htmlFor="residentYes">No</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proofId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Proof of ID e.g. Picture of Passport, Driving License
                </FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="proofAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Proof of Address e.g Bank Statements, Council Tax Bill
                </FormLabel>
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-min flex-auto">
            Submit
          </Button>
          <FormDescription>
            By submitting this form you agree to the{" "}
            <Link href="/terms">
              <u>Terms and Conditions and Privacy Policy</u>
            </Link>{" "}
          </FormDescription>
          <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
        </form>
      </Form>
    </main>
  );
}
