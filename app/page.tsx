"use client"

import { motion, useTransform, useScroll } from "framer-motion"
import { useRef } from "react"


type TCards = {
  url: string
  title: string
  id: number
}

export default function HomePage() {
  return (
    <main>
      <div className="bg-zinc-600 h-44 flex items-center justify-center">Scroll Down</div>
      <HorizontalScroll />
      <div className="bg-zinc-600 h-44 flex items-center justify-center">Scroll Up</div>
    </main>
  )
}

const HorizontalScroll = () => {
  const targetRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-70%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <motion.div style={{ x }} className="sticky top-0 flex gap-5 h-screen items-center overflow-hidden">
        {cards.map((card) => (
          <Card card={card} />
        ))}
      </motion.div>
    </section>
  )
}


const Card = ({ card }: { card: TCards }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[500px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      >
      </div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
}



const cards: TCards[] = [
  {
    url: "/imgs/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/7.jpg",
    title: "Title 7",
    id: 7,
  },
];