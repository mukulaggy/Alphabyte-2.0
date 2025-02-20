"use client";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const RuleBook = () => {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const isMobile = useMediaQuery({ maxWidth: "640px" });

  const coverImage =
    "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739973366/Aadi_s_Copy_of_RB_2025_daef8y.png";
  const pages = [
    "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739973366/Aadi_s_Copy_of_RB_2025_daef8y.png",
    "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739973366/Aadi_s_Copy_of_RB_2025_daef8y.png",
    "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739973366/Aadi_s_Copy_of_RB_2025_daef8y.png",
    "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739973366/Aadi_s_Copy_of_RB_2025_daef8y.png",
    "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739973366/Aadi_s_Copy_of_RB_2025_daef8y.png",
  ];

  useEffect(() => {
    setTotalPages(pages.length + 1);
  }, [pages]);

  const handleFlip = (e) => {
    setCurrentPage(e.data);
  };

  const flipPage = (direction) => {
    if (isFlipping) return;

    setIsFlipping(true);
    if (direction === "next") {
      if (isMobile) {
        setCurrentPage((prev) => Math.min(prev + 1, pages.length));
      } else {
        bookRef.current.pageFlip().flipNext();
      }
    } else {
      if (isMobile) {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
      } else {
        bookRef.current.pageFlip().flipPrev();
      }
    }

    setTimeout(() => setIsFlipping(false), 800);
  };

  const MobileNavigation = ({ direction, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute top-1/2 -translate-y-1/2
        ${direction === "prev" ? "left-2" : "right-2"}
        bg-white/10 backdrop-blur-sm
        p-2 rounded-full
        transition-all duration-300
        hover:bg-white/20 hover:scale-110
        active:scale-95
        disabled:opacity-30 disabled:cursor-not-allowed
        disabled:hover:scale-100 disabled:hover:bg-white/10
        focus:outline-none focus:ring-2 focus:ring-blue-500/50
        z-10
      `}
      aria-label={`${direction === "prev" ? "Previous" : "Next"} page`}
    >
      {direction === "prev" ? (
        <ChevronLeft className="w-4 h-4 text-white" />
      ) : (
        <ChevronRight className="w-4 h-4 text-white" />
      )}
    </button>
  );

  const DesktopNavigation = () => (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
      <button
        onClick={() => flipPage("prev")}
        disabled={currentPage === 0 || isFlipping}
        className="px-6 py-2 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors 
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10"
      >
        Previous
      </button>

      <div className="text-white/90 px-4 border-l border-r border-white/20">
        Page {currentPage + 1} of {totalPages}
      </div>

      <button
        onClick={() => flipPage("next")}
        disabled={currentPage >= pages.length || isFlipping}
        className="px-6 py-2 rounded-full bg-white/10 text-white/90 hover:bg-white/20 transition-colors 
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/10"
      >
        Next
      </button>
    </div>
  );

  const MobileView = () => (
    <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-white rounded-lg overflow-hidden">
      {currentPage === 0 ? (
        <div className="relative h-full bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent mb-2">
              Alphabyte Hackathon
            </h1>
            <h2 className="text-lg text-white/90 mb-4">Rulebook</h2>
            <div className="relative w-3/4 aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={coverImage}
                alt="Rulebook Cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      ) : (
        <img
          src={pages[currentPage - 1]}
          alt={`Page ${currentPage}`}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen w-full bg-black p-4  sm:p-8 my-20 sm:my-40">
      <div className="relative max-w-5xl mx-auto perspective-1000">
        {/* Mobile Navigation Arrows */}
        {isMobile && (
          <>
            {currentPage > 0 && (
              <MobileNavigation
                direction="prev"
                onClick={() => flipPage("prev")}
                disabled={isFlipping}
              />
            )}
            {currentPage < pages.length && (
              <MobileNavigation
                direction="next"
                onClick={() => flipPage("next")}
                disabled={isFlipping}
              />
            )}
          </>
        )}

        {/* Conditional Rendering based on screen size */}
        {isMobile ? (
          <MobileView />
        ) : (
          <>
            <HTMLFlipBook
              ref={bookRef}
              width={400}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={700}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="mx-auto shadow-2xl"
              flippingTime={800}
              usePortrait={true}
              startPage={0}
              drawShadow={true}
              useMouseEvents={true}
              swipeDistance={30}
              onFlip={handleFlip}
            >
              {/* Cover */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border-r border-gray-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-500 bg-clip-text text-transparent mb-4">
                    Alphabyte Hackathon
                  </h1>
                  <h2 className="text-2xl text-white/90 mb-8">Rulebook</h2>
                  <div className="relative w-3/4 aspect-[3/4] overflow-hidden rounded-lg">
                    <img
                      src={coverImage}
                      alt="Rulebook Cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Content Pages */}
              {pages.map((pageUrl, index) => (
                <div key={index} className="bg-white">
                  <img
                    src={pageUrl}
                    alt={`Page ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </HTMLFlipBook>

            {/* Desktop Navigation */}
            <DesktopNavigation />
          </>
        )}

        {/* Mobile Page Counter */}
        {isMobile && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs text-white/90">
            Page {currentPage + 1} of {totalPages}
          </div>
        )}
      </div>
      {/* Download Button - Moved below book content */}
      <div className="flex justify-center ">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          className="px-4 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-pink-600 to-blue-500 rounded-full 
               text-white font-medium tracking-wide shadow-lg flex items-center gap-2 text-xs sm:text-base
               hover:shadow-[0_0_15px_rgba(219,39,119,0.5)]"
        >
          <FaCloudDownloadAlt className="text-base sm:text-lg" /> Download
          Rulebook
        </motion.button>
      </div>
    </div>
  );
};

export default RuleBook;
