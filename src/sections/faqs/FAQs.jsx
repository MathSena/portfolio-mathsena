import faqs from './data'
import FAQ from './FAQ'
import './FAQs.css'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>FAQs about Matheus</h2>
      <p>
      Here are some curiosities about me, my lifestyle and my work.
      Check below to know me better
      </p>
      <div className="container faqs__container">
        {
          faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs