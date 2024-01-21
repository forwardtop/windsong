import React from "react";

const HeroVideo = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="mb-6">
        <hr className="border-t-2 border-gray-500 w-1/2 mx-auto" />
      </div>
      <h2 className="text-3xl tracking-tight text-gray-500 sm:text-4xl text-center">
        Bad Weather Guarantee
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        While South East Queensland enjoys great year-round weather, we do have
        the occasional rainy day. We will happily reschedule your sailing day to
        avoid rain and bad weather.
      </p>
      <div className="mt-6">
        <hr className="border-t-2 border-gray-500 w-1/2 mx-auto" />
      </div>

      {/* Video Section */}
      <div className="mt-12">
        <div
          className="relative overflow-hidden h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          <video
            className="absolute top-0 left-0 w-full h-full"
            src="/assets/videos/Flyover while sailing home.mp4"
            title="Flyover while sailing home"
            autoPlay // Add autoplay attribute
            muted // Mute the video
            controls={false} // Hide controls
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
