import React from "react";

function Footer() {
  return (
    <div className="mt-10 w-screen h-auto flex flex-col flex-wrap gap-y-5 bg-black p-4 text-white">
      {/* top section */}
      <div className=" w-full h-auto p-8 flex flex-row flex-wrap justify-between">
        <div className=" flex flex-col flex-wrap gap-y-3">
          <div className=" w-auto h-auto flex flex-wrap gap-x-3">
            <img
              className=" w-10 h-10 "
              src="https://banner2.cleanpng.com/20240405/fi/transparent-lion-logo-silhouette-of-powerful-lion-with-eyes-closed660fa186285b52.64506732.webp"
              alt=""
            />
            <p className="text-white text-[30px] ">WorldWire</p>
          </div>
          <p className="w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>

        <div className="w-auto h-auto flex flex-col flex-wrap gap-y-2">
          <p className="text-[20px]">Contact Us</p>
          <p>helloWorldwire.co</p>
          <p>C28W+38X, Muntinlupa, Metro Manila, Philippines</p>
          <p>+639467475351</p>
        </div>

        <div className="w-auto h-auto flex flex-col flex-wrap gap-y-3">
          <p className="text-xl">Follow Us</p>
          <p>Yes, we are social</p>
          <div className="w-auto h-auto text-[30px] flex flex-row flex-wrap gap-x-2">
            <i class="bx bxl-meta"></i>
            <i class="bx bxl-instagram"></i>
            <i class="bx bxl-twitter"></i>
          </div>
        </div>
      </div>

      {/* bottom section */}
          <div className="w-full h-[100px] flex flex-row flex-wrap justify-center">
              <p>2016 DreamyIncorporation. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
