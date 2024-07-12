// Exam.jsx
"use client"
import React, { useState } from 'react';
import CareerPathForm from '@/components/CarrierPathForm';
import CareerPathResults from '@/components/CarrierPathResult';
import { Input } from "@/components/ui/input"
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
import SideDrawer from './components/SideDrawer';
import FilterComponent from '../../components/FilterComponents';
import SearchBar from '../../components/SearchBar';
import Filter from './components/Filter';
import FilterButton from '../../components/FilterButtonComponents';
import FilterModal from '../../components/FilterModel';
import FilterExamCard from '../../components/FilterExamCard';


const exams = [
  { name: 'Exam 1', description: 'This is a description for exam 1.' },
  { name: 'Exam 2', description: 'This is a description for exam 2.' },
  { name: 'Exam 3', description: 'This is a description for exam 3.' },
  { name: 'Exam 4', description: 'This is a description for exam 4.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
    { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },
  { name: 'Exam 5', description: 'This is a description for exam 5.' },


];
const FormSchema = z.object({
  username: z.string().nonempty("Username is required"),
});
const Exam = () => {



const [onClicked,setOnClicked]=useState(false)
const [showModal, setShowModal] = useState(false);


const handleButtonClick = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};
  return (
  
    <>
   <SearchBar/>
  



    </>
  );
};

export default Exam;

/**
 * "use client"

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
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre classNameName="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code classNameName="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} classNameName="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

 */