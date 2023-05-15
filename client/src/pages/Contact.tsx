import { useState } from "react";

import { Alert, ContactForm, ContactInfo, Footer, SEO } from "../components";

import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

function Contact() {
  const [alerts, setAlerts] = useState({});
  return (
    <div className="bgSecondary textPrimary w-screen">
      {/* SEO */}

      <SEO
        title="Έπιπλα Βρανάκης - Επικοινωνία"
        description="Επικοινωνήστε μαζί μας και ζητήστε προσφορά για να φτιάξουμε την κουζίνα των ονείρων σας."
        type="website"
      />

      <div className="h-max flex flex-col  bgSecondary">
        <div className="flex justify-center sm:items-center sm:ml-0 ml-10 flex-col">
          <div className="grid sm:grid-cols-2 grid-cols-1 mb-8 relative">
            <div className="w-full col-span-1">
              <div className="h-[calc(30vh-35px)] flex flex-col items-start justify-center ">
                <h1 className="text-center font-bold lg:text-5xl sm:text-4xl text-3xl absolute">
                  Επικοινωνήστε μαζί μας
                </h1>
              </div>
              <div className="text-3xl mb-[77px]">
                <h1 className="absolute">Φόρμα επικοινωνίας</h1>
              </div>

              <ContactForm
                inputs={{
                  name: {
                    value: "Ονοματεπώνυμο",
                    required: true,
                  },
                  email: {
                    value: "E-mail",
                    required: true,
                  },
                  phone: {
                    value: "Τηλέφωνο",
                    required: true,
                  },
                  title: {
                    value: "Θέμα",
                    required: true,
                  },
                }}
                selects={{
                  item: {
                    options: [
                      "Κουζίνες",
                      "Ντουλάπες",
                      "Πόρτες",
                      "Έπιπλα Μπάνιου",
                      "Άλλο",
                    ],
                    placeholder: "Ενδιαφέρεστε για:",
                  },
                }}
                textarea
                setAlert={setAlerts}
              />
              <Alert alerts={alerts} clearAlert={setAlerts} />
            </div>
            <div className=" sm:mt-[70px] md:ml-10 sm:ml-5 ">
              <div className="sm:h-[calc(30vh-35px)] h-[calc(10vh-35px)] w-0"></div>
              <div>
                <h1 className="md:text-3xl sm:text-2xl text-3xl mb-10">
                  Στοιχεία επικοινωνίας
                </h1>
              </div>
              <ContactInfo
                text={{
                  telephone: {
                    title: "Τηλέφωνα",
                    items: [
                      { message: "2106544197", svgElement: <PhoneIcon /> },
                      {
                        message: "6932085044",
                        svgElement: <PhoneAndroidIcon />,
                      },
                    ],
                  },
                  email: {
                    title: "Email",
                    items: [
                      {
                        message: "furniturevranaki@yahoo.gr",
                        svgElement: <EmailIcon />,
                      },
                    ],
                  },
                }}
                links={{
                  socials: {
                    title: "Σύνδεσμοι Social",
                    items: [
                      {
                        message: "Facebook",
                        svgElement: (
                          <FacebookIcon className="text-primary svgSocialsTransition" />
                        ),
                        link: "https://www.facebook.com/vranakis.epipla/",
                      },
                      {
                        message: "Instagram",
                        svgElement: (
                          <InstagramIcon className="text-primary svgSocialsTransition" />
                        ),
                        link: "https://www.instagram.com/epipla.vranakis/",
                      },
                    ],
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
