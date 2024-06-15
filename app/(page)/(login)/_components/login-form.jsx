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
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { FormError } from '@/components/ui/form-error'
import { FormSuccess } from '@/components/ui/form-success'
import { login } from "@schemas/login"
import { useSearchParams } from 'next/navigation'
export const LoginForm = () => {

    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
      ? "This email is already registered with another account. Please login with the correct way."
      : "";
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const onSubmit = (values) => {
      startTransition(() => {
        login(values)
         .then((data)=>{
            setError(data.error)
            setSuccess(data.success)
         })
      });

    }
    const form = useForm({
        resolver: zodResolver(LoginSchema), 
        defaultValues: {
          email: '',
          password: '',
        },
      });
  return (
    <CardWrapper
      headerLaber={'Welcomeback'}
      backButtonLabel={'Dont have an account?'}
      backButtonHref={'/register'}
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
          </div>
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
    
  )
}
