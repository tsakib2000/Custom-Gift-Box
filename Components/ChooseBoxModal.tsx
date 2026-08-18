"use client";
import { Button, Modal } from "@heroui/react";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";
import {  Lusitana, Bungee } from 'next/font/google';

// 1. Initialize your different fonts
const rubik_Spray_Paint = Bungee({ 
  subsets: ['latin'], 
  weight: ['400'] 
});

const lusitana = Lusitana({ 
  subsets: ['latin'], 
  weight: ['400', '700'] 
});

interface BoxCardProps {
  id?: string;
  created_at?: string;
  title: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  customizable_image?: string;
  href?: string;
}

interface BackdropVariantsProps {
  customGift: BoxCardProps;
}

export function BackdropVariants({ customGift }: BackdropVariantsProps) {
  const [customText,setCustomText]=useState('')
  const variants = ["blur"] as const;

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$ ${price.toLocaleString("id-ID")}`;
    }
    // If it's a small number like 110, format it as thousands
    return `$ ${price}.000`;
  };
console.log(customGift.customizable_image);
  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Modal key={variant}>
          <Button
            className="bg-[#e4deda] hover:bg-[#d5ceca] text-[#2c2420] py-2 px-4 rounded-xl text-sm font-medium transition-colors"
            variant="secondary"
          >
            Choose Box
          </Button>
          <Modal.Backdrop variant={variant}>
            <Modal.Container>
              <Modal.Dialog className="max-w-[850px] w-[95vw] md:w-full h-auto md:h-[580px] max-h-[95vh] md:max-h-[580px] bg-white rounded-[24px] md:rounded-[32px] flex flex-col md:flex-row overflow-hidden relative shadow-2xl outline-none border-none">
                {/* Left Side: Product Image */}
                <div className={`w-full md:w-[45%] h-[280px] md:h-full relative  flex items-center justify-center ${rubik_Spray_Paint.className}`}>
                  <h1 className="text-3xl font-bold text-white z-1">{customText}</h1>
                  <Image
                    src={customGift.customizable_image || customGift.imageSrc}
                    alt={customGift.imageAlt}
                    fill
                    className="object-contain absolute"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Right Side: Product customization */}
                <div className="w-full md:w-[55%] h-full flex flex-col p-6 md:p-8 relative overflow-y-auto md:overflow-hidden max-h-[50vh] md:max-h-none">
                  {/* Close button at top right */}
                  <Modal.CloseTrigger className="absolute top-4 right-4 z-50 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer outline-none">
                    <X className="w-4 h-4" />
                  </Modal.CloseTrigger>

                  <div className="flex flex-col gap-4 text-center h-full justify-between">
                    {/* Header Details */}
                    <div>
                      <span className="text-[10px] tracking-[0.2em] font-semibold text-[#8a7560] uppercase mb-0.5 block">
                        BOX & TALE
                      </span>
                      <h2 className="text-xl md:text-2xl font-serif text-[#b0987f] leading-tight mb-0.5">
                        {customGift.title}
                      </h2>
                      <p className="text-[11px] font-serif italic text-[#8a7560]/80 tracking-wide mb-1.5">
                        Available for Same Day Delivery
                      </p>
                      <div className="text-base font-bold text-[#2c2420] mt-0.5">
                        {formatPrice(customGift.price)}
                      </div>
                    </div>

                    {/* Description & Includes */}
                    <div className="space-y-0.5">
                      <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
                        A blank canvas for your wonderful stories. Fill it up and
                        personalize!
                      </p>
                      <p className="text-[10px] text-gray-400 leading-normal max-w-xs mx-auto">
                        Includes: Gift Packaging, Card, Hand Wrapping, &amp; Spunbond Bag
                      </p>
                    </div>

                    {/* Writing Customization */}
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-gray-500 tracking-wide">
                        Customize with Their Name or Writing
                      </label>
                      <div className="relative">
                        <textarea
                        value={customText}
                        onChange={(e)=> setCustomText(e.target.value)}
                          className="w-full h-16 md:h-18 p-3 text-xs bg-white border border-[#d1cfcc] rounded-2xl resize-none focus:outline-none focus:ring-1 focus:ring-[#8a7560] focus:border-[#8a7560] transition-colors placeholder:text-gray-400 text-gray-700"
                          placeholder="Customize It!"
                          maxLength={8}
                        />
                        <div className="text-right text-[10px] text-gray-400 mt-0.5 mr-1">
                          8
                        </div>
                      </div>
                    </div>

                    {/* Font Selector */}
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold text-gray-500 tracking-wide">
                        Choose The Font
                      </span>
                      <div className="flex flex-row flex-wrap justify-center gap-1.5 mt-0.5">
                        <button

                          type="button"
                          className="px-4 py-1.5 bg-[#7f7f7f] text-white text-[11px] font-sans font-bold rounded-full border border-transparent shadow-sm cursor-pointer animate-none"
                        >
                          Font A
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1.5 bg-white text-gray-500 text-[11px] font-sans font-normal rounded-full border border-[#d1cfcc] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          Font B
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1.5 bg-white text-gray-500 text-[11px] font-serif italic font-semibold rounded-full border border-[#d1cfcc] hover:bg-gray-50 transition-colors tracking-wide cursor-pointer"
                        >
                          Font C
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1.5 bg-white text-gray-500 text-[11px] font-serif rounded-full border border-[#d1cfcc] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          Font D
                        </button>
                        <button
                          type="button"
                          className="px-4 py-1.5 bg-white text-gray-500 text-[11px] font-mono font-bold rounded-full border border-[#d1cfcc] hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          Font E
                        </button>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="w-full">
                      <button
                        type="button"
                        className="w-full py-2 px-6 border border-[#b59e85] text-[#b59e85] hover:bg-[#b59e85]/5 active:bg-[#b59e85]/10 bg-white font-normal text-xs rounded-full transition-all tracking-wide cursor-pointer"
                      >
                        Add To Box
                      </button>
                    </div>
                  </div>
                </div>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      ))}
    </div>
  );
}
