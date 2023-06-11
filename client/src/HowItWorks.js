import image1 from "./images/accordion_1.jpeg";
import image2 from "./images/accordion_2.jpeg";
import image3 from "./images/accordion_3.jpg";

const HowItWorks = () => {
  return (
    <div className="container mt-2 bg-light mt-4 px-5 py-3 rounded w-100">
      <div className="container w-100" style={{ "max-width": "1000px" }}>
        <div className="jumbotron">
          <h1 className="display-6 text-center">How our technology works.</h1>
          <p className="lead text-center my-4">
            Our team of industry-leading software engineers have developed an
            undetectable web tool that programmatically accesses and scans the
            Hermes.com web store for product restocks.
          </p>
          <p className="mt-4 text-center my-4">
            Hermes Alerter integrates the latest enterprise-grade technologies
            to bypass and defeat bot-detection countermeasures.
          </p>
          <p className="lead"></p>
          <div className="accordion w-100 mx-auto my-3" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <strong>Fully Automated Web Tool</strong>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Seamless and uninterrupted operation.</strong> Our
                  undetectable web tool operates continuously, scanning the
                  Hermes web store 24/7 for restocks and new products. This
                  ensures that subscribers receive timely alerts and updates
                  without any disruptions.
                  <div className="mt-3">
                    Our tool takes care of the entire monitoring process,
                    eliminating the need for manual checks. Subscribers can rely
                    on its automated functionality to stay informed about new
                    product restocks effortlessly.
                  </div>
                  <div
                    className="container w-100 my-3"
                    style={{
                      "max-height": "300px",
                      overflow: "hidden",
                    }}
                  >
                    <img src={image3} className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <strong>Customizable Alerts</strong>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    Customizable alerts offer unparalleled convenience.
                  </strong>{" "}
                  Subscribers can personalize their notifications based on their
                  interests, ensuring they receive alerts for the products that
                  matter most to them. This tailored approach streamlines the
                  online shopping experience, saving valuable time and keeping
                  users informed about restocks and new arrivals relevant to
                  their tastes.
                </div>
                <div
                  className="container w-100 my-3"
                  style={{ "max-height": "300px", overflow: "hidden" }}
                >
                  <img src={image2} className="img-fluid w-100" />
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <strong>Advanced Anti-Bot Bypass</strong>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>
                    Utilizes advanced tech to overcome bot-detection measures.
                  </strong>{" "}
                  Designed to surpass and overcome bot detection scripts when
                  searching the Hermes web store for new product restocks.{" "}
                  <br />
                  <div className="mt-3">
                    By utilizing advanced techniques, our technology effectively
                    evades detection mechanisms, allowing our tool to search for
                    restocks seamlessly. This ensures that our tool can identify
                    and alert users about new product availability without being
                    flagged as a bot or triggering automated security measures.
                  </div>
                  <div className="mt-3">
                    This capability enhances the efficiency of our tool by
                    enabling uninterrupted functionality, ensuring users can
                    stay ahead and promptly seize opportunities for new product
                    restocks.
                  </div>
                  <div
                    className="container w-75 my-3"
                    style={{ "max-height": "200px", overflow: "hidden" }}
                  >
                    <img src={image1} className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
