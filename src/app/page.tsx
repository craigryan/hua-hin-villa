import { useLocale } from 'next-intl';
//import { getLocale } from 'next-intl/server';
import {redirect} from 'next/navigation';

// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {
  //const currentLocale = await getLocale();
  const currentLocale = useLocale();
  redirect(`/${currentLocale}`);
}