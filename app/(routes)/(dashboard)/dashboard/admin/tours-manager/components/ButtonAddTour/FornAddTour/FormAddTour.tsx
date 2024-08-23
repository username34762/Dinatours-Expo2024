"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { formSchema } from "../FornAddTour/FormAddTour.form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useState } from "react"
import { error } from "console"
import { UploadButton } from "@/utils/uploadthing"
import { FormAddTourProps } from "./FormAddTour.types"
import { toast } from "@/components/ui/use-toast"
import axios from 'axios'
import { useRouter } from "next/navigation"
  

export function FormAddTour(props: FormAddTourProps){
  const {setOpenDialog}=props  
  const router = useRouter();
  const [photoUploaded,setPhotoUploaded]= useState(false)  
  const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          placeName: "",
          tourDate: "",
          ubication: "",
          tourEndDate:"",
          photo: "",
          isPublish: false,

        },
      })
     
      // 2. Define a submit handler.
      const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        setOpenDialog(false)
        try{
          await axios.post(`/api/tour`,values)
          toast({
            title: "Tour Created"
          })
          router.refresh();
        }catch(error){
            toast({
            title: "Something went wrong",
            variant: "destructive"
            })
        }

      }
      const {isValid}=form.formState;
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            control={form.control}
            name="placeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Los chorros" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ubication"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ubication</FormLabel>
                <FormControl>
                  <Input placeholder="los chorros" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tour Date</FormLabel>
                <FormControl>
                  <Input placeholder="January 4 " {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tourEndDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tour End Date</FormLabel>
                <FormControl>
                  <Input placeholder="January 7" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Place Photo</FormLabel>
                <FormControl>
                  {
                    photoUploaded?
                    <p className="text-sm">image uploaded!</p>
                    :(
                      <UploadButton className=" rounded-lg bg-slate-600 text-slate-800 outline-dotted outline-4 " 
                  {...field} endpoint="photo" onClientUploadComplete={(res)=>{
                    form.setValue("photo",res?.[0].url)
                    setPhotoUploaded(true)
                  }} onUploadError={(error: Error)=>{
                    console.log(error)
                  }}/>
                    )
                  }
                  
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <Button type="submit" className="w-full mt-5" disabled={!isValid}>Create Tour</Button>
        </form>
      </Form>
    )
}