import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface BusinessImageProps {
  imageUrl?: string;
  businessName: string;
  className?: string;
}

const BusinessImage: React.FC<BusinessImageProps> = ({
  imageUrl,
  businessName,
  className = "",
}) => {

  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden shadow-lg",
        className
      )}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={businessName || "Business"}
          width={100}
          height={100}
          className="object-cover w-full h-[600px] aspect-video "
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-text-main text-lg font-medium">
          No image available
        </div>
      )}

      
    </div>
  );
};

export default BusinessImage;
