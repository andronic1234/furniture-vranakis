import React from "react";

import { Footer, SEO } from "../components";

// ** TODO ** Add images and text here.

function About() {
  return (
    <div className="bgSecondary textPrimary w-screen h-[calc(100vh-65px)]">
      {/* SEO */}

      <SEO
        title="Έπιπλα Βρανάκης - Πληροφορίες"
        description="Δείτε πληροφορίες για την εταιρεία μας και την ποιότητα των επίπλων μας."
        type="website"
      />

      <div className="h-[50vh] flex flex-col items-center justify-center text-6xl">
        <p className="text-center">About the company</p>
      </div>
      <div className="h-[50vh] flex flex-col bgSecondary"></div>
      <Footer />
    </div>
  );
}

export default About;
