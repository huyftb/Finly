'use-client'

import { Header } from '@/components/Header'
import { Card, CardFooter, CardHeader, CardContent } from '@/components/ui/card'
import { Social } from './social'
import { BackButton } from './back-button'

const cardlayout = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  padding: '0px',
  borderRadius: '0px',
  boxShadow: 'none',
  border: 'none',
  backgroundColor: 'transparent',
  overflow: 'hidden',
}

export const CardWrapper = ({
  children,
  headerLaber,
  backButtonLabel,
  backButtonHref,
  showSocial ,
}) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLaber} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
         <Social/>
        </CardFooter>
       )} 
       <CardFooter>
        <BackButton
            label={backButtonLabel}
            href={backButtonHref}
        />
        
        
        </CardFooter>
    </Card>
  )
}
