'use client'
import { CardWrapper } from './card-wrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form'
import { useState, useTransition } from 'react'
import { RegisterSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/ui/form-error'
import { FormSuccess } from '@/components/ui/form-success'
import { register } from '../../../../schemas/register' 

export const RegisterForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const onSubmit = (values) => {
      // console.log("This data",values);
      startTransition(() => {
        register(values)
         .then((data)=>{
            setError(data.error)
            setSuccess(data.success)
         })
      });

    }
    const form = useForm({
        resolver: zodResolver(RegisterSchema), 
        defaultValues: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      });
  return (
    <CardWrapper
      headerLaber={'Welcome to Finly'}
      backButtonLabel={'Already have an account?'}
      backButtonHref={'/login'}
      showSocial={true}
    >
      <Form {...form}>
        <form
           onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6" method='post'
        >
          <div className="space-y-4">
          <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" type="context"{...field} disabled={isPending} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Yourmail@example.com" type="email" {...field} disabled={isPending} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*****" type="password"{...field} disabled={isPending} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*****" type="password"{...field} disabled={isPending} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Create
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}