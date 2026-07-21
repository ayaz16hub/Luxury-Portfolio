"use client";

import Image from "next/image";

const icons = [
  
  {
    src: "/icons/wordpress.png",
    top: "8%",
    left: "18%",
  },
   {
    src: "/icons/C++.png",
    bottom: "8%",
    right: "18%",
  },

  {
    src: "/icons/flutter.png",
    top: "34%",
    left: "0%",
  },

  {
    src: "/icons/javascript.png",
    top: "28%",
    right: "2%",
  },

  {
    src: "/icons/python.png",
    bottom: "18%",
    left: "12%",
  },

  {
    src: "/icons/firebase.png",
    bottom: "8%",
    right: "18%",
  },

  {
    src: "/icons/git.png",
    top: "72%",
    right: "0%",
  },
  
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            bottom: icon.bottom,
          }}
          className="
            absolute
            z-30
            flex
            h-24
            w-25
            items-center
            justify-center
            rounded-2xl
            border
            border-red-500/20
            bg-[#0d0d0d]/80
            backdrop-blur-xl
            shadow-[0_10px_35px_rgba(0,0,0,.55)]
            transition-all
            duration-300
            hover:scale-110
            hover:-translate-y-3
            hover:border-red-500
            hover:shadow-[0_0_30px_rgba(239,68,68,.45)]
          "
        >
          <Image
            src={icon.src}
            alt=""
            width={75}
            height={75}
          />
        </div>
      ))}
    </>
  );
}