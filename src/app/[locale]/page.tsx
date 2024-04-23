import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ textAlign: 'center', marginTop: '20px' }}>

        <div className="mb-12">
          <AspectRatio ratio={28 / 9}>
            <Image fill={true} src="http://ummahwellbeing.co.uk/wp-content/uploads/2023/02/Ummah-original-logo.png" alt="Image" className="rounded-md object-cover" />
          </AspectRatio>
        </div>

        <Link href="/registration/family" style={{ marginRight: '10px' }} passHref className={buttonVariants({ variant: "outline" })}>Register as Family</Link>
        <Link href="/registration/single" passHref className={buttonVariants({ variant: "outline" })}>Register as Single</Link>
      </div>
    </main>
  );
}
