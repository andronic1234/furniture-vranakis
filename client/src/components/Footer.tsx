import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer className="bottom-0 h-48 bgPrimary w-screen text-accent border-t-2 border-txtprimary border-opacity-20 flex items-center justify-center flex-col">
      <p className="mb-2">Σύνδεσμοι Επικοινωνίας</p>
      <div className="group socialMedia ease-in-out delay-150">
        <a
          href="https://www.facebook.com/vranakis.epipla/"
          aria-label="Δείτε το Facebook μας."
          target="_blank"
        >
          <FacebookIcon className="group-[.socialMedia]:hover:text-secondAccent group-[.socialMedia]:transition-all m-1" />
        </a>
        <a
          href="https://instagram.com/epiplabranakis?igshid=YmMyMTA2M2Y="
          aria-label="Δείτε το Instagram μας."
          target="_blank"
        >
          <InstagramIcon className="group-[.socialMedia]:hover:text-secondAccent group-[.socialMedia]:transition-all m-1" />
        </a>
        <a
          href="mailto:furniturevranaki@yahoo.gr"
          aria-label="Στείλτε μας μήνυμα."
        >
          <EmailIcon className="group-[.socialMedia]:hover:text-secondAccent group-[.socialMedia]:transition-all m-1" />
        </a>
      </div>
      <p className="bottom-0 text-opacity-50 text-xs -mb-10 m-8">
        &copy; Ανδρέας Φωτόπουλος
      </p>
    </footer>
  );
}

export default Footer;
