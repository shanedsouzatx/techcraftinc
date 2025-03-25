// 'use client'

// import { usePathname } from 'next/navigation'
// import MyLayout from '@/components/MyLayout'
// import NavigationWrapper from './NavigationWrapper'
// import Footer from '@/components/Footer'

// export default function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname()
  
//   if (pathname === '/brief') {
//     return <>{children}</>
//   }

//   return (
//     <MyLayout>
//       <NavigationWrapper />
//       {children}
//       <Footer />
//     </MyLayout>
//   )
// } 