import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Script from "next/script";

export default function delivery_person() {
  const handleGoBack = () => {
    router.back();
  };
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
<section 
       style={{
        position: "fixed",
        bottom: "49%",
        right: "27%", // Adjust this value to position the image horizontally
        transform: "translateY(50%)",
        transformOrigin: "center",
         }}>
        <div className=" text-center ">
          <h1 className="text-4xl md:text-4xl font-bold mb-4 text-lime-200">
            DELIVERY PERSON{" "}
          </h1>
          <h2 className="text-4xl md:text-2xl font-bold mb-4 text-green-200 mb-8">
            DESCRIPTION
          </h2>

          <div className="text-left">
            <h3 className="text-4xl md:text-xl font-bold mb-4 text-amber-300 ">
              Job Overview
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Delivery persons in India are responsible for transporting
                goods, typically food or packages, to customers' locations.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-green-300 ">
              Basic Salary
            </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Entry-level delivery persons earn around INR 10,000 to INR
                20,000 per month, including incentives or tips.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-400 ">
              Time Consumption
              </h3>

              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                Part-time or full-time positions, typically flexible hours with
                peak demand during meal times and evenings.
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-yellow-100 ">
              Basic Knowledge
              </h3>

            
              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.youtube.com/watch?v=-tAxc6wkcc8&pp=ygUrTWFzdGVyaW5nIExvY2FsIFJvdXRlcyBhcyBhIERlbGl2ZXJ5IERyaXZlcg%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Familiarity with local routes
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=zyEDFM_i3uU&pp=ygUkVXNpbmcgTmF2aWdhdGlvbiBBcHBzIGZvciBEZWxpdmVyaWVz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Use of navigation apps{" "}
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.youtube.com/watch?v=uaQkJjyNJj0&pp=ygUuQ3VzdG9tZXIgU2VydmljZSBTa2lsbHMgZm9yIERlbGl2ZXJ5IFBlcnNvbm5lbA%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Basic customer service skills{" "}
                </a>{" "}
                <br />
              </p>


            <h3 className="text-4xl md:text-xl font-bold mb-4 text-cyan-200">
              Best Places to Work
            </h3>


              <p className="text-white mb-8 text-m leading-relaxed  text-balance ...">
                *{" "}
                <a
                  href="https://www.naukri.com/food-delivery-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Food delivery platforms
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/e-commerce-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E-commerce companies
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/logistics-courier-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Courier and logistics services
                </a>{" "}
                <br />*{" "}
                <a
                  href="https://www.naukri.com/grocery-delivery-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grocery delivery services
                </a>{" "}
                <br />
              </p>

          </div>
        </div>
      </section>
    </Layout>
  );
}
