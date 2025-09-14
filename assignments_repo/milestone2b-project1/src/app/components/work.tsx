import Image from 'next/image'
import Link from 'next/link'

const Work = () => {
  // Array of image data
  const workImages = [
    { src: '/assets/work1.jpg', alt: 'Work 1' },
    { src: '/assets/work2.jpg', alt: 'Work 2' },
    { src: '/assets/work3.jpg', alt: 'Work 3' },
    { src: '/assets/work4.jpg', alt: 'Work 4' },
    { src: '/assets/work5.jpg', alt: 'Work 5' },
    { src: '/assets/work6.jpg', alt: 'Work 6' }
  ]

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
   
      <div className="work__container bd-grid">
        {workImages.map((image, index) => (
          <Link key={index} href="#">
            <div className="work__img">
              <Image 
                width={500} 
                height={500} 
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }} 
                src={image.src} 
                alt={image.alt} 
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Work
