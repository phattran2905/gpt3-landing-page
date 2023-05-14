import "./index.css"
import Google from '@assets/google.png';
import Slack from '@assets/Slack.png';
import Atlassian from '@assets/atlassian.png';
import Dropbox from '@assets/dropbox.png';
import Shopify from '@assets/shopify.png';
import Company from "../../components/Company";

type Props = {}
function Companies({}: Props) {
  return (
    <section className="section-padding companies">
      <div className="companies__container">
        <ul className="companies__list">
          <li className="companies__item">
            <Company src={Google} alt="Google" />
          </li>
          <li className="companies__item">
            <Company src={Slack} alt="Slack" />
            </li>
          <li className="companies__item">
            <Company src={Atlassian} alt="Atlassian" />
            </li>
          <li className="companies__item">
            <Company src={Dropbox} alt="Dropbox" />
            </li>
          <li className="companies__item">
            <Company src={Shopify} alt="Shopify" />
            </li>
        </ul>
      </div>
    </section>
  )
}
export default Companies