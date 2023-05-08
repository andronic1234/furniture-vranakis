import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import SEO from "../components/SEO";

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
            <h1 className="text-4xl md:text-3xl ml-10 md:ml-0 lg:text-4xl font-bold textPrimary">
              Έπιπλα <span className="text-accent">BPANAKIS</span>
            </h1>
            <h2 className="lg:text-2xl sm:text-xl text-2xl font-bold ml-10 md:ml-0 textPrimary">
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
          <div className=" mt-20 flex items-center justify-center flex-col gap-10 mb-5">
            <h1 className="text-6xl textPrimary mb-10 text-center">
              Γιατί να επιλέξετε εμάς
            </h1>
            <h1 className="text-2xl w-4/6 textPrimary mb-7">
              Η πολυετή εμπειρία στην κατασκευή επιπλων κουζίνας, ντουλάπας και
              μπάνιου μας δίνει την δυνατότητα να φροντίζουμε ώστε τα πάντα να
              βρίσκονται σε τέτοια εντέλεια, ώστε κάθε λεπτό που αφιερώνετε εκεί
              να σας γεμίζει ικανοποίηση και έμπνευση για να προσφέρετε στον
              εαυτό σας. στιγμές αξιοθαύμαστες και δημιουργικές.
            </h1>
            <Link
              to="/services"
              className="w-52 h-10 rounded flex items-center justify-center text-primary bg-accent hover:bg-secondAccent hover:text-txtprimary transition-colors duration-300"
            >
              Δείτε τις δουλειές μας
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen bgSecondary"></div>
      <Footer />
    </div>
  );
}

export default Home;