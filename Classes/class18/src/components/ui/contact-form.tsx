"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { client } from '@/sanity/lib/client'

const formSchema = z.object({
    firstname: z.string().min(2).max(50),
    email: z.string().email(),
})



const ContactForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })


   async function onSubmit(values: z.infer<typeof formSchema>) {


      await client.create({
            _type: "contactForm",
            name:values.firstname  ,
            email: values.email
        })

        // ye code data insert 

        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage />
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="fname" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            {/* error */}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage />
                            <FormLabel>Email Name</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            <FormDescription>
                                {/* This is your public display name. */}
                            </FormDescription>
                            {/* error */}
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default ContactForm





// form schema step 1
// handle submit sb errors wghera handle karega phir jb sb clear to wo on submit call karega
// react hook form for validation

// gemini api free hai llm



// schema kya kr rha hai kesy kr rha hai
// hr input field ky liye puri field add krni paregi
// regex main task form validation
// slug seo y liye acha hai   aur uppercase slug nhi hota aur space ki jga dash
// checkout ky baad tracking wali cheez aayegi


// sanity cart shippo


// datasset hum bol skty hain for test

// next js ka faida kch bhi integrate kr dein

// permission
// aik copy paste may ye sab add krega env var

