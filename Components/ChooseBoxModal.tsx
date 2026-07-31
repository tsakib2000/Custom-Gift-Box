"use client";

import {Button, Modal} from "@heroui/react";
import { BoxCardProps } from "./BoxCard";


export function BackdropVariants({customGift}: BoxCardProps) {
  const variants = ['blur'] as const;

  return (
    <div className="flex flex-wrap gap-4">
      {variants.map((variant) => (
        <Modal key={variant} >
          <Button className={'bg-[#e4deda] text-black p-2 rounded-xl'} variant="secondary">Choose Box</Button>
          <Modal.Backdrop variant={variant}>
            <Modal.Container >
              <Modal.Dialog className="max-w-[700px] h-screen bg-gray-700">
                <Modal.CloseTrigger className="bg-red-400"/>
                <Modal.Header>
                  <Modal.Icon className="bg-default text-foreground">
                  </Modal.Icon>
                  <Modal.Heading>
                    Backdrop: {variant.charAt(0).toUpperCase() + variant.slice(1)}
                  </Modal.Heading>
                </Modal.Header>
                <Modal.Body className={'bg-gray-700'}>
                  <p>
                    This modal uses the <code>{variant}</code> backdrop variant. Compare the
                    different visual effects: opaque provides full opacity, blur adds a backdrop
                    filter, and transparent removes the background.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="w-full" slot="close">
                    Continue
                  </Button>
                </Modal.Footer>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      ))}
    </div>
  );
}