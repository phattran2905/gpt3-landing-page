import './index.css'

type Props = {}
function CTA({}: Props) {
  return (
    <section className='section-margin section-padding cta'>
      <div className='cta__wrapper'>
        <div className='cta__content'>
          <p className='cta__prompt'>Request Early Access to Get Started</p>
          <p className='cta__message'>Register today & start exploring the endless possiblities.</p>
        </div>
        
        <div className='cta__button'>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  )
}
export default CTA