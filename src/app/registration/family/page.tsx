/**
 * v0 by Vercel.
 * @see https://v0.dev/t/2jgiLhsAu9N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Component() {
    return (
        <div key="1" className="px-4 py-6 space-y-6 md:px-10">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Funeral Service</h1>
                <p className="text-gray-500 dark:text-gray-400">Enter your information to register for the funeral service</p>
            </div>
            <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="registration-type">Registration Type</Label>
                    <Select required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Registration Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="single">Single</SelectItem>
                            <SelectItem value="family">Family</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="select-title">Select Title</Label>
                    <Select required>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Title" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="mr">Mr</SelectItem>
                            <SelectItem value="mrs">Mrs</SelectItem>
                            <SelectItem value="ms">Ms</SelectItem>
                            <SelectItem value="miss">Miss</SelectItem>
                            <SelectItem value="dr">Dr</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="Enter your first name" required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="middle-name">Middle Name</Label>
                        <Input id="middle-name" placeholder="Enter your middle name" required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <Label htmlFor="surname">Surname</Label>
                        <Input id="surname" placeholder="Enter your surname" required />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input id="phone" placeholder="Enter your phone number" required type="tel" />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="Enter your email" required type="email" />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="address">Road/Street: House/Flat No</Label>
                    <Input id="address" placeholder="Enter your address" required />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="postcode">Postcode</Label>
                    <Input id="postcode" placeholder="Enter your postcode" required />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="kin-name">Emergency Contact Name</Label>
                    <Input id="kin-name" placeholder="Enter next of kin name" required />
                </div>
                <div className="flex flex-col space-y-2">
                    <Label htmlFor="kin-phone">Emergency Contact Phone Number</Label>
                    <Input id="kin-phone" placeholder="Enter next of kin phone number" required />
                </div>
                <div className="flex justify-center">
                    <Button className="w-[50%] bg-gray-900 text-gray-50 py-3 rounded-lg" type="submit">
                        Submit
                    </Button>
                </div>
                <p className="text-red-500 text-center w-full text-sm md:text-base lg:text-md">
                    Please fill out all required fields before submitting.
                </p>
            </div>
        </div>
    )
}