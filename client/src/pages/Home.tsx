import { Link } from "react-router-dom";
import Button from "../components/Button";

import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import InfoCircle from "../components/InfoCircle";
import SEO from "../components/SEO";


// ** TODO ** use the normal images for all components. Add descriptive text for each component that doesn't have any.

function Home() {
  return (
    <div className="w-screen h-screen">
      {/* SEO */}

      <SEO
        title="Έπιπλα Βρανάκης - Αρχική"
        description="Έπιπλα Κουζίνας, Μπάνιου και Ντουλάπες. Υψηλής ποιότητας και αισθητικής..."
        type="website"
      />
      {/* Header */}
      <div className="relative h-[calc(100vh-65px)]">
        <div className="absolute md:h-[calc(100vh-65px)] sm:h-[calc(50vh-65px)] h-[calc(60vh-65px)] md:w-5/12 w-screen bgSecondary flex md:justify-center items-center lg:flex-col z-20">
          <div className=" md:ml-2">
            <h1 className="text-4xl md:text-3xl ml-10 md:ml-0 lg:text-4xl mb-2 font-bold textPrimary">
              Έπιπλα <span className="text-accent">BPANAKIS</span>
            </h1>
            <h2 className="lg:text-2xl sm:text-xl text-2xl font-bold ml-10 md:ml-0 textPrimary animate-textSlide">
              Η σωστή επιλογή για
              <span className="overflow-hidden whitespace-nowrap text-accent font-bold">
                {" "}
                έπιπλα.
              </span>
            </h2>
          </div>
        </div>
        <div className="absolute right-0 bottom-0">
          <img
            src="./images/header/banner.jpg"
            className="md:h-[calc(100vh-65px)] sm:h-[50vh] h-[40vh] w-screen md:w-auto"
            alt="banner"
          />
        </div>
      </div>
      {/*Secondary part of page*/}
      <div className="h-auto bgPrimary">
        <div className="grid grid-cols-1">
          <section className=" mt-20 flex items-center justify-center flex-col gap-10 mb-5">
            <h1 className="text-6xl textPrimary mb-10 text-center">
              Γιατί να επιλέξετε εμάς
            </h1>
            <h3 className="text-2xl w-4/6 textPrimary mb-7 text-center">
              Η πολυετή εμπειρία στην κατασκευή επιπλων κουζίνας, ντουλάπας και
              μπάνιου μας δίνει την δυνατότητα να φροντίζουμε ώστε τα πάντα να
              βρίσκονται σε τέτοια εντέλεια, ώστε κάθε λεπτό που αφιερώνετε εκεί
              να σας γεμίζει ικανοποίηση και έμπνευση για να προσφέρετε στον
              εαυτό σας. στιγμές αξιοθαύμαστες και δημιουργικές.
            </h3>

            <Button
              content="Δείτε τις δουλειές μας"
              dimensions={{ width: 48, height: 10 }}
              isLink={true}
              linkTo="/services"
            />
          </section>
        </div>
      </div>
      <div className="h-auto bgSecondary">
        <HomeSection
          image="./images/header/banner.jpg"
          content={{
            title: "Κουζίνες",
            paragraph: "lorem ipsum dolor sit amet emitt",
          }}
          direction={false}
        />
        <HomeSection
          image="./images/header/banner.jpg"
          content={{
            title: "Ντουλάπες",
            paragraph: "lorem ipsum dolor sit amet emitt",
          }}
          direction={true}
        />
        <HomeSection
          image="./images/header/banner.jpg"
          content={{
            title: "Πόρτες",
            paragraph: "lorem ipsum dolor sit amet emitt",
          }}
          direction={false}
        />
      </div>
      <div className="h-auto bgSecondary grid grid-cols-3">
        <InfoCircle
          title="Κουζίνες"
          description="lorem ipsum dolor sit am emit"
          image="./images/header/banner.jpg"
        />
        <InfoCircle
          title="Κουζίνες"
          description="lorem ipsum dolor sit am emit"
          image="./images/header/banner.jpg"
        />
        <InfoCircle
          title="Κουζίνες"
          description="lorem ipsum dolor sit am emit"
          image="./images/header/banner.jpg"
        />
      </div>
      <div className="h-1/3 bgSecondary flex items-center justify-center flex-col gap-10">
        <h1 className="text-4xl">
          Ελάτε να φτιάξουμε την κουζίνα των ονείρων σας...
        </h1>
        <Button
          content="Ζητήστε Προσφορά"
          dimensions={{ width: 44, height: 10 }}
          isLink={true}
          linkTo="/services"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
