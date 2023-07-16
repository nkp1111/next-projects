import Image from 'next/image'
import mainImg from "@/public/images/main-section.jpg"
import DarkButton from './DarkButton'

export default function FirstSection() {
  return (
    <section className='text-center d-flex flex-column'>
      <div>April 25, 2017</div>
      <h2 className='text-uppercase'>and this is a massive headline</h2>
      <p className='fst-italic'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptates, ullam culpa aut voluptatem numquam omnis voluptatum assumenda enim tempore aliquid ut dignissimos iusto eos vero perferendis quis laboriosam ex?
      </p>

      <Image
        src={mainImg}
        alt="main"
        className='w-100'
        width="500"
        height="500"
      />

      <DarkButton />

    </section>
  )
}
