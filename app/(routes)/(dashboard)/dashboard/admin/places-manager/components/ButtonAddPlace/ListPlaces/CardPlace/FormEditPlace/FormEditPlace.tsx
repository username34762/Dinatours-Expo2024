"use client"
import { FormEditPlaceProps } from "./FormEditPlace.types";

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
import { formSchema } from "./FormEditPlace.form"
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

import { toast } from "@/components/ui/use-toast"
import axios from 'axios'
import { useRouter } from "next/navigation"

export function FormEditPlace(props: FormEditPlaceProps){
    const {placeData,setOpenDialog} = props;

  const router = useRouter();
  const [photoUploaded,setPhotoUploaded]= useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: placeData.name,
          ubication: placeData.ubication ,
          description: placeData.description,
          rating: placeData.rating,
          photo: placeData.photo,
          isPublish: placeData.isPublish ? placeData.isPublish : false,

        },
      })
      const onSubmit = async (values: z.infer<typeof formSchema>)=>{
        setOpenDialog(false)
        try{
          await axios.patch(`/api/place/${placeData.id}/form`,values)
          toast({
            title: "Place Edited"
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
            name="name"
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Imagine yourself in this place ❤️" {...field} />
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
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <Input placeholder="4.4" type="number" {...field} />
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
                  <Input placeholder="Ciudad Arce" {...field} />
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
          <Button type="submit" className="w-full mt-5" disabled={!isValid}>Edit place</Button>
        </form>
      </Form>
    )
}