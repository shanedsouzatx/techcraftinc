// 'use client'

// import { usePathname } from 'next/navigation'
// import Navbar from '@/components/Navbar'

// export default function NavigationWrapper() {
//   const pathname = usePathname()
  
//   // More explicit logging
//   console.log('NavigationWrapper rendered')
//   console.log('Current pathname:', pathname)
  
//   // More strict path checking
//   if (pathname === '/brief') {
//     console.log('Brief page detected - hiding navbar')
//     return null
//   }

//   console.log('Not brief page - showing navbar')
//   return <Navbar />
// } 