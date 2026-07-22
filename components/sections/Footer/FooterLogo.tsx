import Image from "next/image";


export default function FooterLogo() {
  return (
    <div>

      <div className="flex items-center gap-3">

        <div
  className="
  flex
  h-20
  w-20
 
  justify-center
"
>
  <Image
    src="/icons/logo.png"
    alt="Muhammad Ayaz Logo"
    width={60}
    height={60}
    className="h-full w-full "
  />
</div>
        
        
        

        <div>

          

          <p className="tex-green 400">
            Software Engineer
          </p>

        </div>

      </div>

      <p className="mt-6 text-gray-400 leading-8">
        Building modern applications with beautiful UI,
        scalable backend and AI powered solutions.
      </p>

    </div>
  );
}