import React, { useEffect, useState } from "react";

import type { IKitchenCard } from "../interfaces/interfaces";

import { Footer, KitchenCard, SEO } from "../components";

// ** TODO ** Add sections for bathroom furniture, wardrobes and doors. Also add images and titles/labels.

function Services() {
  const [kitchens, setKitchens] = useState([]);

  const fetchKitchenData = () => {
    fetch("/kitchens")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setKitchens(data);
      });
  };

  useEffect(() => {
    fetchKitchenData();
  }, []);

  return (
    <div className="bgSecondary textPrimary w-screen">
      {/* SEO */}

      <SEO
        title="Έπιπλα Βρανάκης - Υπηρεσίες"
        description="Δείτε έπιπλα για την κουζίνα σας, για το μπάνιο σας και ότι άλλο χρειαστείτε στην καλύτερη τιμή και ποιότητα της αγοράς!"
        type="website"
      />
      <div className="h-auto">
        <section className="h-[50vh] bgSecondary flex flex-col  gap-10 items-center justify-center text-5xl textPrimary font-semibold text-center">
          <h1>Οι Υπηρεσίες μας</h1>
          <h3 className="text-xl w-2/4">
            Δείτε την συλλογή φωτογραφιών μας και επικοινωνήστε μαζί μας για να
            κάνουμε τις σκέψεις σας πραγματικότητα.
          </h3>
        </section>
        {/* Kitchens component */}
        <div className="flex justify-center items-center flex-col">
          <div className="flex  items-center justify-center h-32 w-screen text-4xl font-bold text-center bgPrimary text-accent">
            <h2>Κουζίνες</h2>
          </div>
          <div className="grid gap-8 mt-10 mb-16 grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-3 xl:gap-16">
            {kitchens.map((kitchen: IKitchenCard, i: number) => (
              <KitchenCard
                title={kitchen.title}
                description={kitchen.description}
                images={kitchen.images}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
